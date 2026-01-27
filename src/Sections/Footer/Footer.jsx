import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white px-10 py-16  border-t border-(--divider-color)">
      <div className="container mx-auto flex flex-col gap-32">
        {/* Top Section: Navigation */}
        <nav className="flex max-[360px]:flex-col max-[360px]:items-center max-sm:justify-center gap-4 md:gap-12">
          <a
            href="#benefits"
            className="text-black  text-lg hover:text-(--Mgreen-color) transition duration-300 "
          >
            Benefits
          </a>
          <a
            href="#specifications"
            className="text-black  text-lg hover:text-(--Mgreen-color) transition duration-300 "
          >
            Specifications
          </a>
          <a
            href="#how-to"
            className="text-black  text-lg hover:text-(--Mgreen-color) transition duration-300 "
          >
            How-to
          </a>
        </nav>

        <div className="flex items-end max-[360px]:flex-col max-[360px]:gap-3  justify-between">
          <div className="flex gap-8 text-[11px]    tracking-widest uppercase">
            <span>© Area. 2025</span>
          </div>

          <div className="text-[11px]   tracking-widest uppercase">
            All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
