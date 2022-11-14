
import React from "react";
import header_img from "../../Images/header-image.png";

const Header = () => {
  return (
    <header className="mt-12 min-h-[650px] flex flex-col lg:flex-row  justify-center items-center gap-16 py-12 md:px-24 px-8">
      <div className="lg:w-1/2 w-full lg:text-left text-center">
        <h1 className=" text-5xl font-bold leading-[1.3em] text-black lg:pr-12 ">
          Rent a <span className="text-[#A02279]">Place</span> away from{" "}
          <span className="text-[#A02279]">Home</span> in the{" "}
          <span className="text-[#A02279]">Metaverse</span>
        </h1>

        <p className="text-xl text-black mt-8">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone Search for location Search
        </p>

        <div className="mt-16 flex justify-center lg:justify-start max-w-[600px] ">
          <input
            type="text"
            placeholder="Search for location"
            className="focus:outline-[#A02279] placeholder-[#B8B8B8] placeholder-sm inline-block md:w-1/2 w-2/3 p-2 px-8 rounded-l-xl border border-[#B8B8B8] text-center md:text-left"
          />
          <button className="bg-[#A02279] p-2 w-1/3 md:w-1/3  px-8 rounded-r-xl text-white text-sm ">
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-8 sm:flex-row p-2  h-full w-full lg:w-1/2">
        <img src={header_img} alt="4 homes" />
      </div>
    </header>
  );
};

export default Header;
