import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/styles";
import { categoriesData } from "../../../static/data";

const NewArrivals = () => {
  const navigate = useNavigate();
  const halfLength = Math.ceil(categoriesData.length / 2);

  // Function to handle category click and navigate to the desired route
  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${categoryName}`);
  };

  return (
    <>
      <div className="w-11/12 mx-auto bg-white p-6 rounded-t-lg shadow-xl mt-5 max-800px:py-3">
        <h1 className="text-black underline text-xl max-800px:text-lg">
          Our Categories
        </h1>
        <div className="hideScrollbar h-full w-full overflow-x-scroll flex justify-start items-center">
          {categoriesData.length > 0 ? (
            <>
              {categoriesData.slice(0, halfLength).map((category) => (
                <div
                  key={category.id}
                  className="w-[300px] mx-5 flex justify-center items-center content-between flex-col cursor-pointer" // Added cursor-pointer for indicating clickable
                  onClick={() => handleCategoryClick(category.title)} // Click event added
                >
                  <img
                    src={category.image_Url}
                    alt={category.title}
                    className="min-w-[200px] h-[200px] object-contain max-800px:min-w-[150px]"
                  />
                  <p className="mt">{category.title}</p>
                </div>
              ))}
            </>
          ) : (
            <p className="text-center text-gray-500">No products available</p>
          )}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-b-lg mb-12 shadow-xl max-800px:py-0`}
      >
        <div className="hideScrollbar h-full w-full overflow-x-scroll flex justify-start items-center">
          {categoriesData.length > 0 ? (
            <>
              {categoriesData.slice(halfLength).map((category) => (
                <div
                  key={category.id}
                  className="w-[300px] mx-5 flex justify-center items-center content-between flex-col cursor-pointer" // Added cursor-pointer for indicating clickable
                  onClick={() => handleCategoryClick(category.title)} // Click event added
                >
                  <img
                    src={category.image_Url}
                    alt={category.title}
                    className="min-w-[200px] h-[200px] object-contain max-800px:min-w-[150px]"
                  />
                  <p className="mt">{category.title}</p>
                </div>
              ))}
            </>
          ) : (
            <p className="text-center text-gray-500">No products available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
