import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import SidebarLink from "../components/SidebarLink";

const BrandCollaborate = () => {
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
        <div className="relative">
          <img
            src={`${demoImages[0]}`}
            alt="Demo Image 1"
            className="w-full rounded-md mb-6 md:mb-0 h-[700px]"
          />
          <div className="absolute bottom-10 md:bottom-56 left-4 md:left-40 text-gray-100 text-5xl md:text-6xl font-Poppins font-bold">
            Brand Collaborate
            <div className="text-base md:text-xl font-medium">
              Learn what we are all about
            </div>
          </div>
        </div>

        <div className="container mx-auto py-8 flex flex-col md:flex-row">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-semibold mb-4">
              🌟 Collaborate with ModCub: Elevate Your Brand with Us! 🌟
            </h1>
            <h4 className="text-3xl  mb-4">Why Collaborate with ModCub?</h4>
            <p className="text-lg mb-6">
              *Access to a Diverse Audience*: With thousands of shoppers
              visiting ModCub every day, collaborating with us gives your brand
              unparalleled exposure to a diverse and engaged audience from
              around the world.
            </p>
            <p className="text-lg mb-6">
              *Increased Visibility*: Stand out in a crowded marketplace by
              leveraging our platform to showcase your products and tell your
              brand story. Our dedicated marketing team will work with you to
              amplify your message and increase brand visibility.
            </p>
            <p className="text-lg mb-6">
              *Opportunities for Growth*: Whether you're looking to expand into
              new markets, launch a new product line, or simply raise brand
              awareness, collaborating with ModCub opens up a world of
              opportunities for growth and expansion.
            </p>
            <p className="text-lg mb-6">
              *Seamless Integration*: Our user-friendly platform and seamless
              integration process make it easy for brands of all sizes to
              collaborate with us. From setting up your brand profile to
              uploading your products, we'll guide you every step of the way.
            </p>
            <p className="text-lg mb-6">
              *Dedicated Support*: Enjoy personalized support and guidance from
              our experienced team throughout the collaboration process. We're
              here to help you succeed and ensure that your experience with
              Modcub is nothing short of exceptional.
            </p>
            <h3 className="mb-4 mt-4 font-semibold">
              How to Collaborate with Modcub:
            </h3>
            <p className="text-lg mb-6">
              *Reach Out*: Interested in collaborating with us? Get in touch
              with our partnership team at contact@
              viralproduction.studios@gmail.com to discuss potential
              collaboration opportunities.
            </p>
            <p className="text-lg mb-6">
              2. *Tell Us About Your Brand*: Share your brand story, product
              offerings, and vision for collaboration with us. We're excited to
              learn more about what makes your brand unique and how we can work
              together to achieve our mutual goals.
            </p>{" "}
            <p className="text-lg mb-6">
              *Explore Collaboration Options*: Whether you're interested in
              featuring your products on our platform, co-hosting events, or
              exploring other creative collaboration opportunities, we're open
              to exploring ideas that align with our brand values and mission.
            </p>{" "}
            <p className="text-lg mb-6">
              *Collaborate and Grow*: Once we've agreed on the terms of
              collaboration, it's time to bring our vision to life! Collaborate
              with us to create compelling content, promotions, and experiences
              that resonate with our audience and drive mutual success.
            </p>{" "}
          </div>

          {/* Show sidebar only on medium and larger screens */}
          <div className="w-full md:w-1/4 ml-0 md:ml-8">
            <SidebarLink />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BrandCollaborate;
