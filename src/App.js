import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css"; // Add any custom styles in this file
import CartProvider from "./components/CartProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import AboutPage from "./pages/About";

const App = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <CartProvider>
      <div id="EcommerceContainer">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Products title="MUSIC" products={productsArr} />} />
            <Route path="/aboutus" element={<AboutPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
};

export default App;
