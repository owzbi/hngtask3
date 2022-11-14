import React, { useState } from "react";
import Logofull from "../../Images/Logofull.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function navControl() {
    setOpenMenu(!openMenu);
  }

  function linkControl() {
    setTimeout(() => navControl(), 500);
  }

  return (
    <nav className="flex items-center justify-between px-12 py-4 md:px-24 fixed top-0 left-0 w-[100%] bg-white z-[100000]">
      <div className="w-1/2 lg:w-[30%] ">
        <img src={Logofull} alt="Logo" className="block" />
      </div>

      <div
        onClick={navControl}
        className=" flex flex-col justify-center lg:hidden w-[30px] md:w-[40px] h-[40px] py-1 cursor-pointer"
      >
        <div
          className={`w-full h-1 bg-[#A02279] duration-500 ${
            openMenu
              ? "rotate-[45deg] translate-y-1 md:translate-y-2 w-[40px]"
              : ""
          }`}
        ></div>
        <div
          className={`w-full h-1 bg-[#A02279] mt-1 md:mt-2  ${
            openMenu ? "hidden" : ""
          }`}
        ></div>
        <div
          className={`w-full h-1 bg-[#A02279] mt-1 md:mt-2  duration-500 ${
            openMenu && "rotate-[-45deg]  -translate-y-1 w-[40px]"
          }`}
        ></div>
      </div>
      <ul
        className={`lg:w-[75%] lg:justify-between bg-white lg:flex ${
          openMenu
            ? "block fixed z-[9000] top-16 md:top-16 text left-0 w-screen h-screen lg:static lg:h-full  text-center"
            : "hidden"
        }`}
      >
        <li className="cursor-pointer text-sm md:text-xl my-8 lg:my-0">
          <Link to={"/home"} onClick={linkControl}>Home</Link>
        </li>

        <li className="cursor-pointer text-sm md:text-xl my-8 lg:my-0">
          <Link to={"/places"} onClick={linkControl}>
            Place to stay
          </Link>
        </li>

        <li className="cursor-pointer text-sm md:text-xl my-8 lg:my-0">NFTs</li>

        <li className="cursor-pointer text-sm md:text-xl my-8 lg:my-0">
          <Link> Community</Link>
        </li>

        <li className="cursor-pointer text-sm md:text-xl my-8 lg:my-0">
          <button className="rounded-xl bg-[#A02279] text-base text-white px-4 py-2">
            Connect to wallet
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
