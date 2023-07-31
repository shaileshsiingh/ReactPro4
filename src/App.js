import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css"; // Add any custom styles in this file

const App = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div id="EcommerceContainer">
      <Header />

      <Products title="MUSIC" products={productsArr} />

      {/* <Products title="MERCH" products={merchProducts} /> */}

      {/* Add the cart section here */}

      <Footer />
    </div>
  );
};

export default App;
