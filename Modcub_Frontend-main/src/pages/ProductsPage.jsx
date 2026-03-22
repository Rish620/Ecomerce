import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import TrendingDiscounts from "../components/All-Products/TrendingDiscount";
import BestSeller from "../components/All-Products/Best-Seller";
import NewRelease from "../components/All-Products/NewRelease";
import TrendingElectronics from "../components/All-Products/TrendingElectronics";
import TrendingDiscounts_2 from "../components/All-Products/TrendingDiscounts_2";
import ClothesForMen from "../components/All-Products/ClothesForMen";
import ClothesForWoman from "../components/All-Products/ClothesForWoman";
import Cosmetics from "../components/All-Products/Cosmetics";
import Books from "../components/All-Products/Books";
import Categories from "../components/Layout/Categories";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const navbar = true;

  useEffect(() => {
    if (categoryData === null) {
      setData(allProducts);
    } else {
      const filteredData =
        allProducts &&
        allProducts.filter((product) => product.category === categoryData);
      setData(filteredData);
    }
    // window.scrollTo(0,0);
  }, [allProducts, categoryData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header navbar = {navbar} />
          <div className="bg-[#E7F2F9]">
            <Categories />
            <TrendingDiscounts category={categoryData} />
            <div className={`${styles.section} mt-8`}>
              {categoryData ? (
                // Render this block if a category is specified
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 max-450px:grid-cols-2 max-450px:gap-[10px]">
                  {data &&
                    data.map((product, index) => (
                      <ProductCard data={product} key={index} />
                    ))}
                </div>
              ) : (
                // Render these components if no category is specified
                <>
                  <BestSeller />
                  <NewRelease />
                  <TrendingElectronics />
                  <TrendingDiscounts_2 />
                  <ClothesForMen />
                  {/* <ClothesForWoman /> */}
                  <Cosmetics />
                  <Books />
                </>
              )}
              {data && data.length === 0 && (
                <h1 className="text-center w-full pb-[100px] text-[20px]">
                  No products Found!
                </h1>
              )}
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default ProductsPage;
