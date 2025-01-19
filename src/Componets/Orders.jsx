import React from "react";
import { useCart } from "./CartContext";
import "./order.css";

const Order = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleIncreaseQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    updateQuantity(productId, product.quantity + 1);
  };

  const handleDecreaseQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    if (product.quantity > 1) {
      updateQuantity(productId, product.quantity - 1);
    }
  };

  console.log("Cart in Order page:", cart);

  return (
    <div className="order-page">
      <h1>Order Page</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. 😞</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>

              <div className="quantity-controls">
                <button onClick={() => handleDecreaseQuantity(product.id)}>
                  -
                </button>
                <span>{product.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(product.id)}>
                  +
                </button>
              </div>

              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
