import { useFilter } from "../../hooks/useFilter";
import "./ProductList.css";

const ProductList = ({ items }) => {
  const { filter, setFilter, filteredData } = useFilter(items);

  return (
    <div className="product-list">
      <div className="category-buttons">
        {["All", "Electronics", "Lifestyle"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`category-btn ${filter === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredData.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h3 className="product-title">{item.name}</h3>
            <p className="product-price">
              ₹{Number(item.price).toLocaleString("en-IN")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
