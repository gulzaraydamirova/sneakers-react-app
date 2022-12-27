import React from "react";
import "../index.scss";

function Header(props) {
  return (
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
          <li onClick={props.onClickCart} className="mr-50 cu-p">
            <img width={25} height={25} src="/img/cart.svg" alt="Cart" />
            <span>1205 руб.</span>
          </li>

          <li>
            <img width={30} height={22} src="img/heart.svg" alt="Favorites" />
          </li>

          <li>
            <img width={30} height={25} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
