import { useEffect, useState } from "react";
import "./All.css";

const Cloths = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await response.json();

        const clothesProducts = data.filter(
          (product) => product.category.name.toLowerCase() === "clothes"
        );

        setProducts(clothesProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>Clothes Store</h1>
        <input
          type="text"
          placeholder="Search clothes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "20px", borderRadius: "20px" }}
        />
      </header>
      <main>
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.images[0]} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>No furnitures found. 😞</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cloths;
