import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
  });
  return (
    <div className="pt-30 container">
      <div className="flex w-full justify-center pb-10">
        {isMobile ? (
          <img
            src="./assets/mb-Image 2.png"
            alt="benefits img"
            className="object-contain"
          />
        ) : (
          <img
            src="./assets/Image 2.png"
            alt="benefits img"
            className="w-full h-auto object-contain rounded-2xl"
          />
        )}
      </div>
      <div
        id="contact-us"
        className="lg:px-75 lg:py-30 md:px-25 md:py-30 flex flex-col items-center gap-10 text-center"
      >
        <h4 className="tracking-[-0.03em] text-6xl">Connect with us</h4>

        <p className="text-[15px] tracking-[-0.005em] text-(--gray-color) max-w-2xl">
          Schedule a quick call to learn how Area can turn your regional data
          into a powerful advantage.
        </p>

        <button className="md:w-full mb-5 w-[80%] cursor-pointer  bg-(--Dgreen-color) hover:bg-(--Mgreen-color) text-white font-semibold py-3 rounded-4xl transition duration-300 flex justify-center items-center gap-2 hover:text-black">
          Learn More
          <MdOutlineArrowOutward className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
