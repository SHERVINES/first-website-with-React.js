import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Logos from "./components/Logos";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Cards />
      <Search />
      <Logos />
    </div>
  );
};

export default App;
