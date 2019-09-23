import React from 'react';
import './App.css';
import Footer from "./components/Footer"
import FooterTop from "./components/FooterTop"
import SearchBar from "./components/SearchBar"
import NavBarTop from "./components/NavBarTop"
import NaviBar from "./components/NaviBar"
import NewsLetter from "./components/NewsLetter"
import Partners from "./components/Partners"
import Routes from './pages/Routes'


function App() {
  return (
    <>
      <NavBarTop />
      <div className="clearfix" />
      <NaviBar />
      <div className="clearfix" />
      <SearchBar />
      <Routes />
      <Partners />
      <NewsLetter />
      <FooterTop />
      <Footer />
    </>
  );
}

export default App;
