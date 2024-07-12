import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header'; // Add this import
import WhatGPT3 from './containers/whatGPT3/WhatGPT3'; // Add this import
import Features from './components/feature/Feature'; // Add this import
import Possibility from './containers/possibility/Possibility'; // Add this import
import CTA from './components/cta/CTA'; // Add this import
import Blog from './containers/blog/Blog'; // Add this import
import Footer from './containers/footer/Footer'; // Add this import

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;