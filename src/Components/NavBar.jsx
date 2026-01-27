import { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavBar from "./MobileNavBar";
const navLinks = [
  { name: "Benefits", href: "#benefits" },
  { name: "Specifications", href: "#specifications" },
  { name: "How-to", href: "#how-to" },
  { name: "Contact Us", href: "#contact-us" },
];
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="logo">
          <h1 className=" text-4xl ">
            <a className="text-black" href="#">
              Area
            </a>
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8  ">
          {navLinks.map(({ href, name }) => (
            <li
              className="transition duration-300 hover:text-(--Mgreen-color) text-[18px]"
              key={name}
            >
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <button className=" cursor-pointer hover:text-black duration-300 bg-(--Dgreen-color) text-white  font-semibold py-2 px-4 rounded hover:bg-(--Mgreen-color) transition flex gap-1 items-center">
            Learn More
            <MdOutlineArrowOutward />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <MobileNavBar />
      </div>
    </nav>
  );
};

export default NavBar;
