import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import TrendingCloths from "../components/Route/Trending_Items/TrendingCloths";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
// import Events from "../components/Events/Events";
// import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import TrendingElectronics from "../components/Route/Trending_Items/TrendingElectronics";
import TrendingDiscounts from "../components/Route/Trending_Items/TrendingDiscounts";
import NewArrivals from "../components/Route/NewArrivals/NewArrivals";
import TrendingShoes from "../components/Route/Trending_Items/TrendingShoes";
import TrendingCosmetics from "../components/Route/Trending_Items/TrendingCosmetics";
import TrendingDiscounts_2 from "../components/Route/Trending_Items/TrendingDiscounts_2";
import Books from "../components/Route/Trending_Items/Books";

const HomePage = () => {
  return (
    <>
      <Header activeHeading={1} />
      <div className="bg-[#E7F2F9]">
        <Hero />
        <NewArrivals />
        <TrendingElectronics />
        <TrendingCloths />
        <TrendingDiscounts />
        <TrendingCosmetics />
        <TrendingShoes />
        <TrendingDiscounts_2 />
        <FeaturedProduct />
        <Books />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
