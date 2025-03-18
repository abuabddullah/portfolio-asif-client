import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo/logo.svg";

gsap.registerPlugin(useGSAP);

// <-- scope is for selector text (optional)

const Nav = () => {
  const container = useRef();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setIsOpen(!isOpen);
  };

  useGSAP(
    () => {
      // use selectors...
      gsap.to(".box", {
        y: 100,
        stagger: 0.1,
        duration: 1,
        ease: "bounce.out",
        repeatDelay: 2,
      });
    },
    { scope: container }
  ); // <-- scope for selector text (optional)
  return (
    <div
      ref={container}
      className="sticky navbar inset-0 bg-black bg-opacity-50 backdrop-blur-md text-white top-0 z-[99999]"
    >
      <div className="navbar px-20 justify-evenly lg:max-w-[1800px] w-full mx-auto hidden lg:flex bg-transparent ">
        <div className="flex-1">
          <a href="#home">
            <img className="w-40 h-10" src={logo} alt="" />
          </a>
        </div>

        <div className="flex-none">
          <ul className=" -translate-y-24 menu menu-horizontal text-[#f7c80d] px-1">
            {[
              { href: "#About", text: "About Me" },
              { href: "#Skills", text: "Skills" },
              { href: "#experience", text: "Experience" },
              { href: "#Projects", text: "Projects" },
              { href: "#complements", text: "Complements" },
              { href: "#Education", text: "Education" },
              { href: "#Contact", text: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <HashLink className="box" smooth to={item.href}>
                  {item.text}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex lg:bg-transparent md:hidden">
        <div className="relative">
          <div
            tabIndex={0}
            role="button"
            className="btn text-2xl btn-ghost"
            onClick={toggleDropdown}
          >
            {isOpen ? <RxCross2 /> : <RiMenu2Line />}
          </div>

          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm space-y-10 absolute -ml-2 duration-125 z-[1] p-2 shadow bg-base-100 rounded-box py-4 h-screen w-screen text-center items-center pt-10"
              onClick={closeDropdown}
            >
              <li>
                <a href="#About">About Me</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#Education">Education</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          )}
        </div>
        <a href="#home">
          <img className="h-12 w-40" src={logo} alt="Logo" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
