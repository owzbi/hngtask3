import React, { useState } from "react";
import Logofull from "../../Images/Logofull.png";
import { Link } from "react-router-dom";


const NavBar = ({connectWallet}) => {
  const [openMenu, setOpenMenu] = useState(false);

  function navControl() {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className="flex items-center justify-between px-12 py-2 xl:px-40 fixed top-0 left-0 w-[100%] z-[100000] bg-white">
      <div className="w-1/3 lg:w-[30%] ">
        <img src={Logofull} alt="Logo" className="block" />
      </div>

      <div
        onClick={navControl}
        className=" flex flex-col justify-center lg:hidden w-6 md:w-8 h-12  py-1 cursor-pointer"
      >
        <div
          className={`w-full h-1 bg-[#A02279] duration-500 ${
            openMenu
              ? "rotate-[45deg] translate-y-1 md:translate-y-2 w-6"
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
            openMenu && "rotate-[-45deg]  -translate-y-1 w-6"
          }`}
        ></div>
      </div>
      <ul
        className={`lg:w-full lg:justify-evenly m-auto bg-white lg:flex lg:items-center ${
          openMenu
            ? "block fixed z-[9000] top-16 md:top-16 text left-0 w-screen h-screen lg:static lg:h-full  text-center"
            : "hidden"
        }`}
      >
        <li className="cursor-pointer mx-8 text-xs md:text-sm my-8 lg:my-0">
          <Link to={"/home"} onClick={navControl}>Home</Link>
        </li>

        <li className="cursor-pointer mx-8 text-xs md:text-sm my-8 lg:my-0">
          <Link to={"/places"} onClick={navControl}>
            Place to stay
          </Link>
        </li>

        <li className="cursor-pointer mx-8 text-xs md:text-sm my-8 lg:my-0">NFTs</li>

        <li className="cursor-pointer mx-8 text-xs md:text-sm my-8 lg:my-0">
          <Link> Community</Link>
        </li>

        <li  className="cursor-pointer mx-8 text-xs md:text-sm my-8 lg:my-0">
        <button className="block lg:hidden m-auto rounded-xl bg-[#A02279] w-60 text-xs lg:text-sm text-white px-4 py-3" onClick={connectWallet}>
            Connect to wallet
          </button>
        </li>
      </ul>

      <button className="hidden lg:block rounded-xl bg-[#A02279] w-60 text-xs lg:text-sm text-white px-4 py-3" onClick={connectWallet}>
            Connect to wallet
          </button>
    </nav>
  );
};

export default NavBar;
