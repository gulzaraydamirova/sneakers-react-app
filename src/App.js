import React from "react";

function App() {
  return (
    <div className="wrapper clear">
      {/* sidebar */}
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <div className=" header-line">
            <h2>Корзина</h2>
            <svg
              width="31px"
              height="25px"
              viewBox="0 0 1024 1024"
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M195.2 195.2a64 64 0 0190.496 0L512 421.504 738.304 195.2a64 64 0 0190.496 90.496L602.496 512 828.8 738.304a64 64 0 01-90.496 90.496L512 602.496 285.696 828.8a64 64 0 01-90.496-90.496L421.504 512 195.2 285.696a64 64 0 010-90.496z"
              />
            </svg>
          </div>

          <div className="cartItems d-flex flex-column">
            {/* CartItem-1 STARTS*/}
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
                className="cartItemImg"
              ></div>

              <div
                style={{ width: "218px", marginRight: "15px" }}
                className="flex"
              >
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg
                  className="remove-btn"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#DBDBDB"
                  />
                  <path
                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </button>
            </div>
            {/* CartItem-1 ENDS */}

            {/* CartItem-2 STARTS */}
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/6.jpg)" }}
                className="cartItemImg"
              ></div>

              <div
                style={{ width: "218px", marginRight: "15px" }}
                className="flex"
              >
                <p>Мужские Кроссовки Jordan Air Jordan 11</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg
                  className="remove-btn"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#DBDBDB"
                  />
                  <path
                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </button>
            </div>
            {/* CartItem-2 ENDS */}

            {/* CartItem-3 STARTS*/}
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
                className="cartItemImg"
              ></div>

              <div
                style={{ width: "218px", marginRight: "15px" }}
                className="flex"
              >
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg
                  className="remove-btn"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#DBDBDB"
                  />
                  <path
                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </button>
            </div>
            {/* CartItem-3 ENDS */}

            {/* CartItem-4 STARTS */}
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/6.jpg)" }}
                className="cartItemImg"
              ></div>

              <div
                style={{ width: "218px", marginRight: "15px" }}
                className="flex"
              >
                <p>Мужские Кроссовки Jordan Air Jordan 11</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg
                  className="remove-btn"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#DBDBDB"
                  />
                  <path
                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </button>
            </div>
            {/* CartItem-4 ENDS */}

            {/* CartItem-5 STARTS*/}
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
                className="cartItemImg"
              ></div>

              <div
                style={{ width: "218px", marginRight: "15px" }}
                className="flex"
              >
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg
                  className="remove-btn"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#DBDBDB"
                  />
                  <path
                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </button>
            </div>
            {/* CartItem-5 ENDS */}

            {/* CartItem-6 STARTS */}
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/6.jpg)" }}
                className="cartItemImg"
              ></div>

              <div
                style={{ width: "218px", marginRight: "15px" }}
                className="flex"
              >
                <p>Мужские Кроссовки Jordan Air Jordan 11</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg
                  className="remove-btn"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#DBDBDB"
                  />
                  <path
                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </button>
            </div>
            {/* CartItem-6 ENDS */}

            {/* CartItem-7 STARTS*/}
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
                className="cartItemImg"
              ></div>

              <div
                style={{ width: "218px", marginRight: "15px" }}
                className="flex"
              >
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg
                  className="remove-btn"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#DBDBDB"
                  />
                  <path
                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </button>
            </div>
            {/* CartItem-7 ENDS */}

            {/* CartItem-8 STARTS */}
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/6.jpg)" }}
                className="cartItemImg"
              ></div>

              <div
                style={{ width: "218px", marginRight: "15px" }}
                className="flex"
              >
                <p>Мужские Кроссовки Jordan Air Jordan 11</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <svg
                  className="remove-btn"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#DBDBDB"
                  />
                  <path
                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </button>
            </div>
            {/* CartItem-8 ENDS */}
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого: </span>
                <div className="dashed-block"></div>
                <b>21 498 руб.</b>
              </li>

              <li>
                <span>Налог 5%: </span>
                <div className="dashed-block"></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ
              <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={50} height={50} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <div>
          <ul className="d-flex header">
            <li className="mr-50">
              <img width={25} height={25} src="/img/cart.svg" alt="Cart" />
              <span>1205 руб.</span>
            </li>
            <li>
              <img width={30} height={25} src="/img/user.svg" alt="User" />
            </li>
          </ul>
        </div>
      </header>

      <div className="content p-40">
        <div className="content-header d-flex  justify-between align-center mb-50">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex ">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers d-flex">
          <div className="card">
            <div className="favorite pos-a cu-p">
            <button className="button cu-p">
                <img width={20} height={20} src="/img/heart-unliked.svg" alt="Add" />
              </button>
            </div>
            <img
              width={230}
              height={193}
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
                <img width={15} height={15} src="/img/btn-plus.svg" alt="Add" />
              </button>
            </div>
          </div>

          <div className="card">
          <div className="favorite pos-a cu-p">
            <button className="button cu-p">
                <img width={20} height={20} src="/img/heart-unliked.svg" alt="Add" />
              </button>
            </div>
            <img
              width={230}
              height={193}
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
                <img width={15} height={15} src="/img/btn-plus.svg" alt="Add" />
              </button>
            </div>
          </div>

          <div className="card">
          <div className="favorite pos-a cu-p">
            <button className="button cu-p">
                <img width={20} height={20} src="/img/heart-unliked.svg" alt="Add" />
              </button>
            </div>
            <img
              width={230}
              height={193}
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
                <img width={15} height={15} src="/img/btn-plus.svg" alt="Add" />
              </button>
            </div>
          </div>

          <div className="card">
          <div className="favorite pos-a cu-p">
            <button className="button cu-p">
                <img width={20} height={20} src="/img/heart-unliked.svg" alt="Add" />
              </button>
            </div>
            <img
              width={230}
              height={193}
              src="/img/sneakers/3.jpg"
              alt="Sneakers-1"
            />
            <h5>Мужские Кроссовки Nike Kyrie 7</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button cu-p">
                <img width={15} height={15} src="/img/btn-plus.svg" alt="Add" />
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
