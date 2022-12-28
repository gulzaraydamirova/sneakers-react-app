import React from "react";
import ContentLoader from "react-content-loader"
import styles from "./card.module.scss";
// console.log(styles);

function Card({
  id,
  title,
  imgUrl,
  price,
  onClickFavorite,
  onClickPlus,
  favorited = false,
  added = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added);

  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickAdd = () => {
    onClickPlus({ id, title, imgUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickHeart = () => {
    onClickFavorite({ id, title, imgUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {/* <div className={styles.favorite}>
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
      </div> */}
       <ContentLoader 
    speed={2}
    width={230}
    height={347}
    viewBox="0 0 230 347"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="230" height="195" /> 
    <rect x="0" y="221" rx="6" ry="6" width="230" height="24" /> 
    <rect x="0" y="259" rx="6" ry="6" width="160" height="24" /> 
    <rect x="0" y="313" rx="6" ry="6" width="102" height="30" /> 
    <rect x="178" y="295" rx="10" ry="10" width="50" height="50" />
  </ContentLoader>
    </div>
  );
}

export default Card;
