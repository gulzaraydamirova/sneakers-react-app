import React from "react";
// import axios from "axios";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://63aa07877d7edb3ae61ee73e.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        console.log(json);
      })
      .catch((error) => {
        console.log("An error occurred");
      });
  }, []);

  const onAddToCart = (obj) => {
    // fetch("https://63aa07877d7edb3ae61ee73e.mockapi.io/cart")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });
    setCartItems((prev) => [...prev, obj]);
  };
  // console.log(cartItems);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {/* sidebar */}
      {cartOpened && (
        <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="content-header d-flex  justify-between align-center mb-50">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex ">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="quick-design"
                src="/img/closee.svg"
                alt="remove-btn"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="sneakers d-flex">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  price={item.price}
                  imgUrl={item.imgUrl}
                  onClickFavorite={() => console.log("added to favs")}
                  onClickPlus={(obj) => onAddToCart(obj)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
