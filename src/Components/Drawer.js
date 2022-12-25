import React from 'react';
import "../index.scss"


function Drawer(props) {
  return(

    <div className="overlay">
      <div className="drawer">
            <div className=" header-line">
              <h2>Корзина</h2>
              <svg
              onClick={props.onCloseCart}
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
  )
  
}

export default Drawer;
