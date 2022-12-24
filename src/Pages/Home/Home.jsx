import React from "react";
import Categories from "../../Components/Categories/Categories";
import FeaturedProdcucts from "../../Components/FeaturedProducts/FeaturedProdcucts";
import Slider from "../../Components/Slider/Slider";
import "./Home.scss";
import Contact from "../../Components/Contact/Contact";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProdcucts type="Our Top Watches" category={"mens-watches"} />
      <Categories />
      <FeaturedProdcucts type="Our Top Sunglasses" category={"sunglasses"} />
      <Contact />
    </div>
  );
};

export default Home;
