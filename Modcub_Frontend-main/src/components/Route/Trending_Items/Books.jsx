import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Books = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  useEffect(() => {
    if (allProducts) {
      const electronicsProducts = allProducts.filter(
        (product) => product.category === "Books"
      );
      const sortedElectronics = electronicsProducts.sort(
        (a, b) => b.sold_out - a.sold_out
      );
      const topThreeElectronics = sortedElectronics.slice(0, 5);
      setData(topThreeElectronics);
    } else {
      setData([]);
    }
  }, [allProducts]);
  return (
    <div
      className={`${styles.section} bg-white p-6 rounded-lg mb-12 shadow-xl mt-5`}
    >
      <h1 className="text-black underline text-xl max-800px:text-lg">Books</h1>
      <div className="flex w-full justify-between mb-5 max-1000px:overflow-x-scroll">
        {data && data.length !== 0 && (
          <>
            {data &&
              data.map((i, index) => <ProductCard data={i} key={index} />)}
          </>
        )}
      </div>
    </div>
  );
};

export default Books;
