import Card from "../Components/Card";

function Home() {
  return (
    <div className="content p-40">
      <div className="content-header d-flex  justify-between align-center mb-50">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex ">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="quick-design"
              src="/img/closee.svg"
              alt="remove-btn"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="sneakers d-flex">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => {
            return (
              <Card
                key={item.imgUrl}
                title={item.title}
                price={item.price}
                imgUrl={item.imgUrl}
                onClickFavorite={(obj) => onAddToFavorite(obj)}
                onClickPlus={(obj) => onAddToCart(obj)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
