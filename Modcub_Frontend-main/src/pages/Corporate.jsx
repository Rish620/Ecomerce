import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import SidebarLink from "../components/SidebarLink";
import corporateimg from "../Assests/Images/corporate.png";
import ilovepdfMerged from '../Assests/ilovepdf_merged.pdf';


const Corporate = () => {
  // Placeholder data until backend integration
  const demoImages = [
    "https://media.istockphoto.com/id/1501103626/photo/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.webp?b=1&s=170667a&w=0&k=20&c=3HUg5TdHHWq4rmYJ7lA0Jn9koAesfCrO4lFiEaUFKuI=",
    "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
    "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
  ];

  return (
    <>
      <Header navbar={true} />
      <div className="bg-[#E7F2F9]">
        {/* <div className="relative">
          <img
            src={`${demoImages[0]}`}
            alt="Demo Image 1"
            className="w-full rounded-md mb-6 md:mb-0 h-[700px]"
          />
          <div className="absolute bottom-10 md:bottom-56 left-4 md:left-40 text-gray-100 text-5xl md:text-6xl font-Poppins font-bold">
            Corporate
            <div className="text-base md:text-xl font-medium">
              Learn what we are all about
            </div>
          </div>
        </div> */}

        <div className="container mx-auto py-8 flex flex-col md:flex-row">
          <div className="max-w-11/12 mx-auto px-4 flex justify-around items-center max-800px:flex-col">
            <img src={corporateimg} alt="" className="w-[60%] object-contain" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">Corporate Information</h1>
              <div className="my-3 flex flex-col ">
                <a
                  href="#"
                  className="hover:text-blue-500 my-2 text-lg font-semibold"
                  target="_blank"
                >
                  Corporate Social Responsibility Policy
                </a>
                <a
                  href="#"
                  className="hover:text-blue-500 my-2 text-lg font-semibold"
                  target="_blank"
                >
                  Annual Return
                </a>
                <a
                  href={ilovepdfMerged}
                  className="hover:text-blue-500 my-2 text-lg font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Director Information
                </a>
              </div>
            </div>
          </div>

          {/* Show sidebar only on medium and larger screens */}
          {/* <div className="w-full md:w-1/4 ml-0 md:ml-8">
            <SidebarLink />
          </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Corporate;
