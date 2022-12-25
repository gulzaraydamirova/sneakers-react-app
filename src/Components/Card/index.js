import React from "react";
import styles from "./card.module.scss";
console.log(styles);

function Card(props) {
  // console.log(props);
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickAdd = () => {
    setIsAdded(!isAdded);
  };



  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          width={50}
          height={50}
          className={styles.plus}
          src="/img/heart-unliked.svg"
          alt="heart-unliked"
          onClick={props.onClickFavorite}
        />
      </div>
      <img width={230} height={193} src={props.imgUrl} alt="Sneakers-1" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
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
