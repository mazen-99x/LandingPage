import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./MobileNavBar.css";
const navLinks = [
  { name: "Benefits", href: "#benefits" },
  { name: "Specifications", href: "#specifications" },
  { name: "How-to", href: "#how-to" },
  { name: "Contact Us", href: "#contact-us" },
];
const MobileNavBar = () => {
  const [opend, setOpend] = useState(false);

  return (
    <div className="md:hidden block">
      {/* Hamburger Button */}
      <button onClick={() => setOpend(!opend)} className="menu-button">
        {opend ? <AiOutlineClose size={28} /> : <GiHamburgerMenu size={28} />}
      </button>

      {/* Sliding Menu */}
      <div className={`mobile-menu ${opend ? "open" : ""}`}>
        <ul className="menu-links">
          {navLinks.map(({ href, name }) => (
            <li
              key={name}
              onClick={() => {
                setOpend(false);
              }}
            >
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden block">
          <button className=" cursor-pointer hover:text-black duration-300 bg-(--Dgreen-color) text-white  font-semibold py-3 px-4 rounded-3xl hover:bg-(--Mgreen-color) transition flex gap-1 items-center">
            Learn More
            <MdOutlineArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
