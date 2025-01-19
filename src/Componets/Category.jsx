import React, { useState, useEffect } from "react";
import "./All.css";

const Category = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const categories = await response.json();

        const furnitureCategory = categories.find(
          (cat) => cat.name.toLowerCase() === "furnitures"
        );

        if (furnitureCategory) {
          const productsResponse = await fetch(
            `https://api.escuelajs.co/api/v1/categories/${furnitureCategory.id}/products`
          );
          if (!productsResponse.ok) {
            throw new Error("Failed to fetch products for Furnitures category");
          }
          const products = await productsResponse.json();
          setCategoryProducts(products);
        } else {
          setCategoryProducts([]); // If no category is found
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, []);

  // Filter products based on search term
  const filteredProducts = categoryProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="app">
      <header>
        <h1>Furnitures</h1>
        <input
          type="text"
          placeholder="Search furnitures..."
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
            <div className="no-data">
              <p style={{ textAlign: "center" }}>No furnitures found. 😞</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Category;
