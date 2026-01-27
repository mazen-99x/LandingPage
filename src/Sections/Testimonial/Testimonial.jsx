import React from "react";

const Testimonial = () => {
  return (
    <div id="how-to" className="container pt-30 ">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12">
        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="./assets/Image 3.png"
            alt="Testimonial"
            className="h-auto"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex ">
          <div className="flex flex-col   md:text-left">
            <p className="text-[28px] leading-[105%] tracking-[-0.04em]  max-w-3xl">
              “I was skeptical, but Area has completely transformed the way I
              manage my business. The data visualizations are so clear and
              intuitive, and the platform is so easy to use. I can't imagine
              running my company without it.”
            </p>

            <p className="mt-4 text-[16px] font-medium">John Smith</p>
            <p className="text-[12px] text-gray-500 tracking-[-0.03em]">
              Head of Data
            </p>
          </div>
        </div>
      </div>
      <div className="mt-15 mb-10 pt-15 pb-10 border-t   border-t-(--divider-color) ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-[50px] md:text-[54px] lg:text-6xl">
            Map Your Success
          </h3>
          <button className="mt-10 cursor-pointer inline-flex items-center rounded-full bg-(--Lgreen-color) px-6 py-3 text-sm font-semibold text-black hover:bg-(--Mgreen-color) hover:text-white transition">
            Discover More
          </button>
        </div>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="border-t border-t-(--divider-color) p-6 flex flex-col   ">
            <span className="font-bold text-(--gray-color) text-[80px] mb-2">
              01
            </span>
            <h4 className="text-xl font-semibold mb-2">Get Started</h4>
            <p className="text-gray-600">
              With our intuitive setup, you’re up and running in minutes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="border-t border-t-(--divider-color) p-6 flex flex-col   ">
            <span className="font-bold text-(--gray-color) text-[80px] mb-2">
              02
            </span>
            <h4 className="text-xl font-semibold mb-2">
              Customize and Configure
            </h4>
            <p className="text-gray-600">
              Adapt Area to your specific requirements and preferences.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border-t border-t-(--divider-color) p-6 flex flex-col   ">
            <span className="font-bold text-(--gray-color) text-[80px] mb-2">
              03
            </span>
            <h4 className="text-xl font-semibold mb-2">Grow Your Business</h4>
            <p className="text-gray-600">
              Make informed decisions to exceed your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
/* 01 */
