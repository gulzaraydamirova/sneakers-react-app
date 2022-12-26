import React from "react";
import "../index.scss";

function Drawer({ onCloseCart, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className=" header-line">
          <h2>Корзина</h2>
          <svg
            onClick={onCloseCart}
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

        <div className="items d-flex flex-column">
          {items.map((obj) => {
            return (
              <div className="cartItem d-flex align-center">
                <div
                  style={{ backgroundImage: `url(${obj.imgUrl})` }}
                  className="cartItemImg"
                ></div>

                <div
                  style={{ width: "218px", marginRight: "15px" }}
                  className="flex"
                >
                  <p>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img
                  className="btn-remove"
                  src="/img/btn-remove.svg"
                  alt="remove-btn"
                />
              </div>
            );
          })}
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
  );
}

export default Drawer;
