import Card from "../Components/Card";

function Favorites({items, onAddToFavorite}) {
  return (
    <div className="content p-40">
      <div className="content-header d-flex  justify-between align-center mb-50">
        <h1>Мои закладки</h1>
      </div>

      <div className="sneakers d-flex flex-wrap justify-center">
        {items
          
          .map((item, index) => {
            return (
              <Card
                key={item.imgUrl}
                favorited={true}
                onClickFavorite={onAddToFavorite}
                {...item}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Favorites;
