import React from "react";
import styles from "../../../styles/styles";
import discountimg from "../../../Assests/Images/jeans.png";

const TrendingDiscounts_2 = () => {
  return (
    <div
      className={`w-11/12 mx-auto h-[300px] flex justify-evenly max-400px:justify-between max-sm:justify-between items-center bg-[#047BBE] p-6 rounded-sm mb-12 shadow-xl mt-5`}
      id="categories"
    >
      <img
        src={discountimg}
        alt="Discount image"
        className="w-3/12 h-auto object-contain max-sm:w-5/12"
      />
      <p className="text-[30px] text-white max-800px:text-lg max-sm:text-[10px]">
        Black Jeans for Men <br />With  <span className="text-red-600">40%</span> Discount @ 1200 Rs
      </p>
    </div>
  );
};

export default TrendingDiscounts_2;
