import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import './App.css'; // Add any custom styles in this file

const App = () => {
  const musicProducts = [
    { title: 'Album 1', imageSrc: './img/Album 1.png', price: '12.99' },
    { title: 'Album 2', imageSrc: './img/Album 2.png', price: '14.99' },
    { title: 'Album 3', imageSrc: './img/Album 3.png', price: '9.99' },
    { title: 'Album 4', imageSrc: './img/Album 4.png', price: '19.99' },
  ];

  const merchProducts = [
    { title: 'T-Shirt', imageSrc: './img/Shirt.png', price: '19.99' },
    { title: 'Coffee Cup', imageSrc: './img/Cofee.png', price: '6.99' },
  ];

  return (
    <div id="EcommerceContainer">
      <Header/>

      <Products title="MUSIC" products={musicProducts}/>

      <Products title="MERCH" products={merchProducts}/>

      {/* Add the cart section here */}

      <Footer/>
    </div>
  );
};

export default App;
