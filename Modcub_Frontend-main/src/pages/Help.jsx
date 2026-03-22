import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import SidebarLink from "../components/SidebarLink";

const Help = () => {
  // Placeholder data until backend integration
  const demoImages = [
    "https://media.istockphoto.com/id/1501103626/photo/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.webp?b=1&s=170667a&w=0&k=20&c=3HUg5TdHHWq4rmYJ7lA0Jn9koAesfCrO4lFiEaUFKuI=",
    "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
    "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
  ];

  return (
    <>
      <Header activeHeading={0} navbar={true} />
      <div className="bg-[#E7F2F9]">
        {/* <div className="relative">
                    <img
                        src={`${demoImages[0]}`}
                        alt="Demo Image 1"
                        className="w-full rounded-md mb-6 md:mb-0 max-800px:h-[300px]"
                    />
                    <div className="absolute bottom-10 md:bottom-56 left-4 md:left-40 text-gray-100 text-5xl md:text-6xl font-Poppins font-bold">
                        Help
                        <div className="text-base md:text-xl font-medium">
                            Learn what we are all about
                        </div>
                    </div>
                </div> */}

        <div className="container mx-auto py-8 flex flex-col md:flex-row">
          <div className="max-w-4xl mx-auto px-4 text-justify">
            <h1 className="text-3xl font-bold mb-4">
              🛠️ Welcome to the ModCub Help Center! 🛒
            </h1>
            <p className="text-lg mb-6">
              At ModCub, we're committed to providing exceptional customer
              service and support to ensure that your shopping experience is
              smooth, enjoyable, and hassle-free. Whether you have questions
              about placing an order, navigating our platform, or resolving an
              issue with your purchase, our Help Center is here to assist you
              every step of the way.
            </p>
            <p className="text-lg mb-6">
              <b>Placing an Order:</b> Need assistance with placing an order?
              Our step-by-step guide will walk you through the ordering process,
              from browsing products to completing your purchase.
            </p>
            <p className="text-lg mb-6">
              <b>Managing Your Account:</b> Learn how to manage your ModCub account,
              update your personal information, track your orders, and view your
              order history.
            </p>
            <p className="text-lg mb-6">
              <b>Shipping and Delivery:</b> Have questions about shipping options,
              delivery times, or tracking your package? Our shipping and
              delivery FAQs provide all the information you need to know.
            </p>
            <p className="text-lg mb-6">
            <b>Returns and Exchanges:</b> Need to return or exchange an item? Our
              return policy and instructions will guide you through the process
              to ensure a smooth and hassle-free experience.
            </p>
            <p className="text-lg mb-6">
              <b>Payment and Billing:</b> Get answers to common questions about
              payment methods, billing inquiries, and security measures to
              protect your financial information.
            </p>
            <p className="text-lg mb-6">
            <b>Product Information:</b> Looking for more information about a
              specific product? Our product FAQs cover everything from product
              specifications to care instructions.
            </p>{" "}
            <p className="text-lg mb-6">
              <b>Troubleshooting:</b> Encountering technical issues or errors while
              using our website? Our troubleshooting tips and solutions can help
              you resolve common issues and get back to shopping in no time.
            </p>{" "}
            <h3 className="mt-2 mb-2"><b>Contact Us</b></h3>
            <p>
              Can't find the answer you're looking for? Our dedicated customer
              support team is here to help! You can reach us via: - *Email*:
              viralproduction.studios@gmail.com - *Live Chat*: Chat with a
              support representative in real-time during our business hours. -
              *Phone*: Call our customer support hotline at 9560154974 for
              immediate assistance. *Feedback and Suggestions* We value your
              feedback and suggestions for improving our website and services.
              If you have any ideas or suggestions for how we can better serve
              you, please don't hesitate to reach out to us. Your input helps us
              enhance the ModCub experience for all our customers. Thank you for
              choosing ModCub. We're here to help you shop with confidence and
              make your online shopping experience enjoyable and stress-free. If
              there's anything else we can do to assist you, please let us know.
              Happy Shopping!
            </p>
          </div>

          {/* Show sidebar only on medium and larger screens */}
          <div className="w-full md:w-1/4 ml-0 md:ml-8 max-1000px:hidden">
            <SidebarLink />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Help;
