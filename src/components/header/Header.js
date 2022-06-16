import "./Header.css";
const Header = ({ categories, changeProducts }) => {
  console.log(categories);

//   function showAgainBtn(event) {
//     showAgain(event.target.value);
//   }

  function changeProductsHolder(event) {
    changeProducts(event.target.value);
  }

  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      {/* <button onClick={showAgainBtn} value="fetchAgain">
        fetch again
      </button> */}
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange={changeProductsHolder}>
            <option value="allProducts">All products</option>
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      
      <div>
        <button>cart</button>
      </div>
      
      
      </div>
    </nav>
  );
};

export default Header;
