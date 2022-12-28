import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";

function App() {
  //STATES
  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);

  const [favorites, setFavorites] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");

  const [cartOpened, setCartOpened] = React.useState(false);

  //using UseEffect
  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://63aa07877d7edb3ae61ee73e.mockapi.io/cart"
      );

      const itemsResponse = await axios.get(
        "https://63aa07877d7edb3ae61ee73e.mockapi.io/items"
      );

      const favoritesResponse = await axios.get(
        "https://63aa07877d7edb3ae61ee73e.mockapi.io/favorites"
      );

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onRemoveFromCart = (id) => {
    axios.delete(`https://63aa07877d7edb3ae61ee73e.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  //POSTING
  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://63aa07877d7edb3ae61ee73e.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post("https://63aa07877d7edb3ae61ee73e.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };
  //Adding to and deleting from favorites
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://63aa07877d7edb3ae61ee73e.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://63aa07877d7edb3ae61ee73e.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
    }
  };

  //input
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

      <Route path="/" exact>
        <Home
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
}

export default App;
