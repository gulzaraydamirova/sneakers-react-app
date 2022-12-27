import React from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);

  const [favorites, setFavorites] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://63aa07877d7edb3ae61ee73e.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://63aa07877d7edb3ae61ee73e.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onRemoveFromCart = (id) => {
    // console.log(id);
    axios.delete(`https://63aa07877d7edb3ae61ee73e.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  //POSTING
  const onAddToCart = (obj) => {
    axios
      .post("https://63aa07877d7edb3ae61ee73e.mockapi.io/cart", obj)
      .then((res) => setCartItems((prev) => [...prev, res.data]));
  };
  const onAddToFavorite = (obj) => {
    axios.post("https://63aa07877d7edb3ae61ee73e.mockapi.io/favorites", obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {/*sidebar */}

      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveFromCart}
        />
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
                  key={item.imgUrl}
                  title={item.title}
                  price={item.price}
                  imgUrl={item.imgUrl}
                  onClickFavorite={(obj) => onAddToFavorite(obj)}
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
