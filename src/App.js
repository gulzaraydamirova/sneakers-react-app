import React from "react";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <div>
          <ul className="d-flex ">
            <li className="mr-30">
              <img width={18} height={17} src="/img/cart.svg" alt="Cart" />
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
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers d-flex justify-center">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers-1"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button cu-p">
                <img width={11} height={11} src="/img/btn-plus.svg" alt="Add" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="Sneakers-1"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button cu-p">
                <img width={11} height={11} src="/img/btn-plus.svg" alt="Add" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/5.jpg"
              alt="Sneakers-1"
            />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button cu-p">
                <img width={11} height={11} src="/img/btn-plus.svg" alt="Add" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/7.jpg"
              alt="Sneakers-1"
            />
            <h5>Мужские Кроссовки Nike Kyrie 7</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button cu-p">
                <img width={11} height={11} src="/img/btn-plus.svg" alt="Add" />
              </button>
            </div>
          </div>

          {/* <div className="card"  style={{marginRight:"0px"}}>
          <img width={133} height={112} src="/img/sneakers/8.jpg" alt="Sneakers-1"/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button cu-p">
              <img width={11} height={11} src="/img/btn-plus.svg" alt="Add"/>
            </button>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
