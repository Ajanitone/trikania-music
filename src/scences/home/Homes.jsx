import React, { useState, useEffect } from "react";

import MainCarousels from "./MainCarousels";
import ShoppingList1 from "./ShoppingList1";
import Subscribe from "./Subscribe";
import ScrollTop from "../../components/ScrollTop";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`home ${isDarkMode ? "dark-mode" : ""}`}>
     {/*  <MainCarousel isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <ShoppingList1 isDarkMode={isDarkMode} /> */}


<MainCarousels isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <Subscribe isDarkMode={isDarkMode} />
      <ScrollTop isDarkMode={isDarkMode}/>
   s
    </div>
  );
};

export default Home;
