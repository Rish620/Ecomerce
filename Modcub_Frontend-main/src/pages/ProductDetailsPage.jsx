import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    if (eventData !== null) {
      const eventData = allEvents?.find((i) => i._id === id);
      setData(eventData);
    } else {
      const productData = allProducts?.find((i) => i._id === id);
      setData(productData);
    }
  }, [id, allProducts, allEvents, eventData]);

  // If data is null, render a loading message or nothing.
  if (!data) {
    return (
      <div className="bg-[#E7F2F9]">
        <Header />
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-[#E7F2F9]">
        <ProductDetails data={data} />
        {!eventData && <SuggestedProduct data={data} />}
        <Footer />
      </div>
    </>
  );
};

export default ProductDetailsPage;
