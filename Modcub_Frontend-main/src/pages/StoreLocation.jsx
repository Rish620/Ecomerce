import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import SidebarLink from "../components/SidebarLink";

const StoreLocation = () => {
  // Placeholder data until backend integration
  const demoImages = [
    "https://media.istockphoto.com/id/1501103626/photo/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.webp?b=1&s=170667a&w=0&k=20&c=3HUg5TdHHWq4rmYJ7lA0Jn9koAesfCrO4lFiEaUFKuI=",
    "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
    "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
  ];

  return (
    <>
      <Header activeHeading={0} />
      {/* <div className=""> */}
      {/* <div className="relative">
                    <img
                        src={`${demoImages[0]}`}
                        alt="Demo Image 1"
                        className="w-full rounded-md mb-6 md:mb-0 h-[700px]"
                    />
                    <div className="absolute bottom-10 md:bottom-56 left-4 md:left-40 text-gray-100 text-5xl md:text-6xl font-Poppins font-bold">
                        Store Location
                        <div className="text-base md:text-xl font-medium">
                            Learn what we are all about
                        </div>
                    </div>
                </div> */}

      <div className="container bg-[#E7F2F9] mx-auto py-8 flex flex-col md:flex-row">
        <div className="w-11/12 mx-auto px-4 text-justify">
          <h1 className="text-3xl font-bold mb-4">Store Location</h1>
          <p className="text-lg mb-6">
            Welcome to Modcub your vibrant mutivendor e -commerce destination
            curated by the passionate team at viral production studio. We’re not
            just another marketpiace, we’re a dynamic hub where creactivity
            convenice, dedicated to championing the talents of independent
            sellers from around the globe.
          </p>

          <div className="flex justify-between max-450px:flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.379334729269!2d77.18193167514353!3d28.64835847565607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02998cd7f811%3A0x9c2d0e5136470489!2s11752%2F4%2C%20Block%205A%2C%20Sat%20Nagar%2C%20Karol%20Bagh%2C%20New%20Delhi%2C%20Delhi%2C%20110005!5e0!3m2!1sen!2sin!4v1721126709743!5m2!1sen!2sin"
              title="Google Maps Embedded Content"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="max-450px:w-full"
            />

            <div className="h-[350px] w-[400px] p-8 bg-gray-400 flex justify-center items-start flex-col max-450px:w-full">
              <h1 className="font-semibold text-white text-2xl">Location:</h1>
              <p className="text-left font-semibold text-white text-xl">11752/4, Sat Nagar, Karol Bagh, New Delhi-110005</p>
            </div>
          </div>
        </div>

        {/* Show sidebar only on medium and larger screens */}
        {/* <div className="w-full md:w-1/4 ml-0 md:ml-8">
            <SidebarLink />
          </div> */}
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default StoreLocation;
