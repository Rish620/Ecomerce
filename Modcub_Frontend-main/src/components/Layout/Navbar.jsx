import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import DropDown from "./DropDown";
import { categoriesData, productData } from "../../static/data";

const Navbar = ({ active }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className={`block 800px:${styles.noramlFlex} `}>
      {/* {navItems &&
                navItems.map((i, index) => (
                    <div className="flex">
                        <Link
                            to={i.url}
                            className={`${
                                active === index + 1
                                    ? "text-orange-500"
                                    : "text-black 800px:text-[#000000]"
                            } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
                        >
                            {i.title}
                        </Link>
                    </div>
                ))} */}
      <div className="flex">
        <Link
          to="/"
          className={`${
            active === 1 ? "text-orange-400" : "text-white max-800px:text-black"
          } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
        >
          HOME
        </Link>
      </div>
      <div className="flex">
        {/* <Link
          to="/"
          className={`${
            active === 2 ? "text-orange-500" : "text-black 800px:text-[#000000]"
          } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
        >
          CATEGORIES
        </Link> */}
        <div onClick={() => setDropDown(!dropDown)}>
          <div className="relative">
            <button
              className={`${
                active === 2
                  ? "text-orange-400"
                  : "text-white max-800px:text-black"
              } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
            >
              CATEGORIES
            </button>
            <IoIosArrowDown
              size={20}
              className="absolute left-[115px] top-1 cursor-pointer text-white"
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown ? (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex">
        <Link
          to="/about"
          className={`${
            active === 3 ? "text-orange-400" : "text-white max-800px:text-black"
          } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
        >
          ABOUT US
        </Link>
      </div>
      <div className="flex">
        <Link
          to="/contactus"
          className={`${
            active === 4 ? "text-orange-400" : "text-white max-800px:text-black"
          } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
