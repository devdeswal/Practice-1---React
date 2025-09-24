
import React from "react";

// Reusable ProductCard Component
const ProductCard = ({ name, price, inStock }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "10px",
      width: "200px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      backgroundColor: inStock ? "#e0ffe0" : "#ffe0e0"
    }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

// Parent Component
const App = () => {
  const products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Smartphone", price: 800, inStock: false },
    { name: "Headphones", price: 150, inStock: true },
    { name: "Keyboard", price: 75, inStock: false },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          inStock={product.inStock}
        />
      ))}
    </div>
  );
};

export default App;
