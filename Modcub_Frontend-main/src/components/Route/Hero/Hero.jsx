import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { Carousel } from "flowbite-react";

const Hero = () => {
  return (
    <div
      className={` min-h-[5vh] w-full sm:min-h-[5vh] bg-no-repeat flex justify-center`}
    >
      <div className="w-11/12 h-[250px] max-1000px:h-[180px] max-800px:h-[150px] max-450px:h-[100px]">
        <Carousel indicators={false}>
          <a href="" className="w-full" >
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/f241e768f8367561.jpg?q=20"
              alt="..."
              className="w-full h-fit"
            />
          </a>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/a859e5c525a11ef9.jpg?q=20"
            alt="..."
            className="w-full h-fit"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
