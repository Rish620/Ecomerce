import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { server } from "../../server";
import styles from "../../styles/styles";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "./Ratings";
import axios from "axios";

const ProductDetails = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleButtonClick = (size) => {
    console.log(size);
    const isSelected = selectedSizes.includes(size);
    if (!isSelected) {
      // If the clicked size is not already selected, replace the selected size with the new one
      setSelectedSizes([size]);
    } else {
      // If the clicked size is already selected, deselect it (clear the selection)
      setSelectedSizes([]);
    }
  };

  useEffect(() => {
    dispatch(getAllProductsShop(data && data?.shop._id));
    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data, wishlist]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count, size: selectedSizes[0] };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const avg = totalRatings / totalReviewsLength || 0;

  const averageRating = avg.toFixed(2);

  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = data._id + user._id;
      const userId = user._id;
      const sellerId = data.shop._id;
      await axios
        .post(`${server}/conversation/create-new-conversation`, {
          groupTitle,
          userId,
          sellerId,
        })
        .then((res) => {
          navigate(`/inbox?${res.data.conversation._id}`);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } else {
      toast.error("Please login to create a conversation");
    }
  };

  const isInCart = cart && cart.find((item) => item._id === data._id);

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const descriptionToShow = showFullDescription
    ? data.description
    : data.description.length > 400
    ? `${data.description.slice(0, 400)}`
    : data.description;

  return (
    <div className="bg-[#E7F2F9]">
      {data ? (
        <div className={`${styles.section} `}>
          <div className="w-full py-5">
            <div className="block w-full justify-between 800px:flex">
              <div className="800px:w-[50%] flex flex-col justify-center items-center">
                <div className="w-full flex flex-row-reverse justify-evenly items-start">
                  <img
                    src={`${data && data.images[select]?.url}`}
                    alt=""
                    className="w-[60%] object-contain rounded-md"
                  />
                  <div className="w-[20%] flex">
                    {data &&
                      data.images.map((i, index) => (
                        <div
                          className={`${
                            select === 0 ? "border" : "null"
                          } cursor-pointer rounded-lg`}
                        >
                          <img
                            src={`${i?.url}`}
                            alt=""
                            className="max-h-[150px] overflow-hidden rounded-lg"
                            onClick={() => setSelect(index)}
                          />
                        </div>
                      ))}
                    <div
                      className={`${
                        select === 1 ? "border" : "null"
                      } cursor-pointer`}
                    ></div>
                  </div>
                </div>
                <div className="flex w-full justify-around">
                  <div
                    className={`${
                      styles.button
                    } !mt-6 !rounded !h-11 flex items-center text-white bg-[#EF053E] ${
                      isInCart ? "cursor-not-allowed bg-gray-500" : ""
                    }`}
                    onClick={() => addToCartHandler(data._id)}
                    disabled={isInCart}
                  >
                    {isInCart ? "In Cart" : "Add to Cart"}
                  </div>
                  <Link
                  to={"/checkout"}
                    className={`${styles.button} !mt-6 !rounded !h-11 flex items-center text-white`}
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] p-5 bg-white overflow-y-scroll h-[500px]">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                {/* <p>{data.description}</p> */}
                <div className="flex mb-2">
                  <Ratings rating={data?.ratings} />
                </div>
                <hr></hr>
                <div className="flex justify-between items-center w-full h-max my-2">
                  <div className="flex items-center">
                    <h4 className={`${styles.productDiscountPrice}`}>
                      {data.discountPrice}Rs
                    </h4>
                    <h3 className={`${styles.price}`}>
                      {data.originalPrice ? data.originalPrice + "Rs" : null}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <Link to={`/shop/preview/${data?.shop._id}`}>
                      <img
                        src={`${data?.shop?.avatar?.url}`}
                        alt=""
                        className="w-[50px] h-[50px] rounded-full mr-2"
                      />
                    </Link>
                    <div className="pr-8">
                      <Link to={`/shop/preview/${data?.shop._id}`}>
                        <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                          {`Visit the ${data.shop.name}`}
                        </h3>
                      </Link>
                      {/* <h5 className="pb-3 text-[15px]">
                        ({averageRating}/5) Ratings
                      </h5> */}
                    </div>
                    {/* <div
                    className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                    onClick={handleMessageSubmit}
                  >
                    {/* <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span> *
                  </div> */}
                  </div>
                </div>
                <hr></hr>

                {/* <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-[#005DC9] to-[#005DC9] text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-[#005DC9] to-[#005DC9] text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => addToWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div> */}

                <div>
                  {data.size && data.size.length > 0 && (
                    <div className=" my-2 ">
                      <h4>Available Sizes:</h4>

                      {data.size.map((size, index) => (
                        <button
                          key={index}
                          value={size}
                          onClick={() => handleButtonClick(size)}
                          className={`p-3 border m-2 rounded-lg hover:border-teal-400 ${
                            selectedSizes.includes(size)
                              ? "border-teal-400"
                              : "border-gray-300"
                          }  focus:border-teal-400 focus:ring-1 focus:ring-teal-400`}
                        >
                          {" "}
                          {size}{" "}
                        </button>
                      ))}
                    </div>
                  )}
                  <hr></hr>
                </div>
                <div className="my-2">
                  <h5 className={"text-[#000] text-[18px] leading-5"}>
                    Product Details
                  </h5>
                  <p className="py-2 text-[16px] leading-8 whitespace-pre-line">
                    {descriptionToShow}
                  </p>
                  {data.description.length > 400 && (
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={toggleDescription}
                    >
                      {showFullDescription ? "See Less" : "See All"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* {!eventData && <>{data && <SuggestedProduct data={data} />}</>} */}
          {/* <div className="bg-white p-4 my-2">
            <h5 className={"text-[#000] text-[18px] leading-5"}>Rating</h5>
            <div className="w-full min-h-[10vh] flex flex-col items-center py-3 overflow-y-scroll">
              {data &&
                data.reviews.length > 0 &&
                data.reviews.map((item, index) => (
                  <div className="w-full flex my-2">
                    <img
                      src={`${item.user.avatar?.url}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full"
                    />
                    <div className="pl-2 ">
                      <div className="w-full flex items-center">
                        <h1 className="font-[500] mr-3">{item.user.name}</h1>
                        <Ratings rating={data?.ratings} />
                      </div>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                ))}

              <div className="w-full flex justify-center">
                {data && data.reviews.length === 0 && (
                  <h5>No Reviews have for this product!</h5>
                )}
              </div>
            </div> 
          </div>*/}
          {/* <ProductDetailsInfo
            data={data}
            products={products}
            totalReviewsLength={totalReviewsLength}
            averageRating={averageRating}
          />
          <br />
          <br /> */}
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({
  data,
  products,
  totalReviewsLength,
  averageRating,
}) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-white px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-3 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-0 whitespace-pre-line">
            {data.description}
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
          {data &&
            data.reviews.map((item, index) => (
              <div className="w-full flex my-2">
                <img
                  src={`${item.user.avatar?.url}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="pl-2 ">
                  <div className="w-full flex items-center">
                    <h1 className="font-[500] mr-3">{item.user.name}</h1>
                    <Ratings rating={data?.ratings} />
                  </div>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))}

          <div className="w-full flex justify-center">
            {data && data.reviews.length === 0 && (
              <h5>No Reviews have for this product!</h5>
            )}
          </div>
        </div>
      ) : null}

      {active === 3 && (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <Link to={`/shop/preview/${data.shop._id}`}>
              <div className="flex items-center">
                <img
                  src={`${data?.shop?.avatar?.url}`}
                  className="w-[50px] h-[50px] rounded-full"
                  alt=""
                />
                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                  <h5 className="pb-2 text-[15px]">
                    ({averageRating}/5) Ratings
                  </h5>
                </div>
              </div>
            </Link>
            <p className="pt-2">{data.shop.description}</p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined on:{" "}
                <span className="font-[500]">
                  {data.shop?.createdAt?.slice(0, 10)}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products:{" "}
                <span className="font-[500]">
                  {products && products.length}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews:{" "}
                <span className="font-[500]">{totalReviewsLength}</span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
