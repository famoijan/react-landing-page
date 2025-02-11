import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Teams from "./Teams";
import Information from "./Information";
import Footer from "./Footer";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
        <Teams />
        <Information />
      </header>
      <Footer />
    </div>
  );
};

export default Header;
