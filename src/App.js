import React, { useContext } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css"; // Add any custom styles in this file
import CartProvider from "./components/CartProvider";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import AboutPage from "./pages/About";
import Home from "./pages/Home";
import Contact from './pages/Contact'
import ProductDetail from "./components/ProductDetail";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext)

  const productsArr = [
    {
      id:1,
       title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      Reviews : '4 out of 5 stars'
    },
    {
      id:2,
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      Reviews : '4 out of 5 stars'

    },
    {
      id:3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      Reviews : '4 out of 5 stars'

    },
    {
      id:4,
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      Reviews : '4 out of 5 stars'

    },
  ];

  return (
    <CartProvider>
      <div id="EcommerceContainer">
        <Router>

          <Header />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/products" element={authCtx.isLoggedIn ?<Products title="MUSIC" products={productsArr} />: <Navigate to="/" />} />

            <Route exact path="/aboutus" element={<AboutPage/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/products/:productId" element={<ProductDetail products={productsArr} />} />
          </Routes>
          <Footer />

        </Router>
      </div>
    </CartProvider>
  );
};

export default App;