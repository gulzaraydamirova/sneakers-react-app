import React from "react";
import styles from "./card.module.scss";
// console.log(styles);

function Card({ title, imgUrl, price, onClickFavorite, onClickPlus }) {
  
  const [isAdded, setIsAdded] = React.useState(false);

  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickAdd = () => {
    onClickPlus({ title, imgUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickHeart = () => {
    onClickFavorite({ title, imgUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          width={50}
          height={50}
          className={styles.plus}
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="heart-unliked"
          onClick={onClickHeart}
        />
      </div>
      <img width={230} height={193} src={imgUrl} alt="Sneakers-1" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <img
          width={50}
          height={50}
          className={styles.plus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="add-btn"
          onClick={onClickAdd}
        />
      </div>
    </div>
  );
}

export default Card;
