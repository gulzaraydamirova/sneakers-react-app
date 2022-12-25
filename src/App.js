import React from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";

const arr = [
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": "12 999",
    "imgUrl": "/img/sneakers/1.jpg"
  },
  {
    "title": "Мужские Кроссовки Nike Air Max 270",
    "price": "12 599",
    "imgUrl": "/img/sneakers/5.jpg"
  },
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": "8 499",
    "imgUrl": "/img/sneakers/2.jpg"
  },
  {
    "title": "Мужские Кроссовки Jordan Air Jordan 11",
    "price": "10 799",
    "imgUrl": "/img/sneakers/6.jpg"
  },
  {
    "title": "Мужские Кроссовки Nike Kyrie 7",
    "price": "11 299",
    "imgUrl": "/img/sneakers/7.jpg"
  },
  {
    "title": "Мужские Кроссовки Nike LeBron XVIII",
    "price": "16 499",
    "imgUrl": "/img/sneakers/8.jpg"
  }
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      {/* sidebar */}
      {cartOpened && <Drawer  onCloseCart={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="content-header d-flex  justify-between align-center mb-50">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex ">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers d-flex">
          {arr.map((obj) => {
            return (
              <Card
                title={obj.title}
                price={obj.price}
                imgUrl={obj.imgUrl}
                onClickFavorite={() => console.log("added to favs")}
                onClickPlus={() => console.log("pressed button")}
              />
            );
          })}
          {}
        </div>
      </div>
    </div>
  );
}

export default App;
