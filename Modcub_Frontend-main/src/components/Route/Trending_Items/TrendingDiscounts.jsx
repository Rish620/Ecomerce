import React from "react";
import styles from "../../../styles/styles";
import discountimg from "../../../Assests/Images/clothes.png";

const TrendingDiscounts = () => {
  return (
    <div
      className={`${styles.section} flex justify-evenly max-400px:justify-between max-sm:justify-between items-center bg-[#047BBE] p-6 rounded-sm mb-12 shadow-xl mt-5`}
      id="categories"
    >
      <img src={discountimg} alt="Discount image" className="w-5/12 max-sm:w-5/12" />
      <p className="text-[20px] max-800px:text-lg max-sm:text-[10px]">40% discount on Seasons T Shirts <br /> Shop Now , Only for this week</p>
    </div>
  );
};

export default TrendingDiscounts;
