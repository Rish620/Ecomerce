import React from "react";
import { useSearchParams } from "react-router-dom";
import shoesimg from "../../Assests/Images/shoes.png";
import Cosmeticspng from "../../Assests/Categories/Cosmetics.png";
import HomeDecor from "../../Assests/Categories/HomeDecor.png";
import MobileAccessories from "../../Assests/Categories/Mobile_Accessories.png";
import Music from "../../Assests/Categories/Music.png";
import Supplements from "../../Assests/Categories/Supplements.png";
import cloths from "../../Assests/Images/clothes.png";
import Books from "../../Assests/Categories/Books.png";
import Watches from "../../Assests/Categories/Watches.png";
import Furniture from "../../Assests/Categories/Furniture.png";

const discountsData = {
  Electronics: {
    text: "Mobile Accessories Headphones, Charging cable, Phone covers",
    discount: "Get at -40%",
    price: "$200",
    img: MobileAccessories,
  },
  Supplement:{
    text:"Whey Protein, Sometimes you need some extra to do Big",
    discount:"Starting @ 2000 Rs/ Kg",
    img:Supplements,
  },
  Music:{
    text:"Start your Musical Experience with Guitar",
    discount:"Starting @ 3000 Rs",
    img:Music,
  },
  "Home Decor":{
    text:"Paint your imagination on wall",
    discount:"",
    img:HomeDecor,  
  },
  Books:{
    text:"Love knows no bounds When hearts collide The truth will haunt you",
    discount:"Choose your experience and feel it with 300+ Books with 30% Off in each Book",
    img:Books
  },
  Watches:{
    text:"Increase your Collection of Classic Watches",
    discount:"See more products on VinayWatches",
    img:Watches
  },
  Furniture:{
    text:"From old to new modern Chairs",
    discount:"See more products on VinayWatches",
    img:Furniture
  },
  Cloths: {
    text: "Fashionable Clothes",
    discount: "-15%",
    price: "$50",
    img: cloths,
  },
  "Cosmetics and Body Care": {
    text: "Check out the new Sell on Cosmetics products With all Verties from Lipstick to Foundation ",
    discount: "Get at -20%",
    price: "$30",
    img: Cosmeticspng,
  },
  Shoes: {
    text: "Sports Shoes",
    discount: "-32%",
    price: "$60",
    img: shoesimg,
  },

};

const TrendingDiscounts = ({category}) => {
  const discount = discountsData[category] || discountsData['Shoes']; // Default to Shoes if category is not found

  return (
    <div
      className={`w-11/12 mx-auto h-[300px] max-450px:h-[150px] flex justify-evenly max-400px:justify-between max-sm:justify-between items-center bg-[#047BBE] p-6 rounded-sm mb-12 shadow-xl mt-5 max-800px:mb-2`}
      id="categories"
    >
      <img
        src={discount.img}
        alt="Discount image"
        className="w-[30%] h-auto object-contain max-sm:w-5/12"
      />
      <p className="text-[25px] w-[50%] text-white max-800px:text-lg max-sm:text-[10px]">
        {discount.text} <br />
        <span className="text-white">{discount.discount}</span>{" "}
         {/* {discount.price} */}
      </p>
    </div>
  );
};

export default TrendingDiscounts;
