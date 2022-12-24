import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <div>
          <ul className="d-flex ">
            <li className="mr-30">
              <img width={18} height={17} src="/img/cart.svg" alt="Cart"/>
              <span>1205 руб.</span>
            </li>
            <li className="mr-30">
              <img width={20} height={20} src="/img/user.svg" alt="User" />
            </li>
          </ul>
        </div>
      </header>

      <div className="content p-40">
        <div className="d-flex  justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex ">
            <img src="/img/search.svg" alt="Search"/>
            <input  placeholder="Поиск..."/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
