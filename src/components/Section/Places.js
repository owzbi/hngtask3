import React from "react";
import Card from "./Card";
import image from "../../Images/Frame 151.png";
import image2 from "../../Images/frame.png";
import image8 from "../../Images/Frame 152.png";
import image3 from "../../Images/Frame 151 (3).png";
import image4 from "../../Images/Frame 151 (4).png";
import image5 from "../../Images/Frame 151 (5).png";
import image6 from "../../Images/Frame 151 (6).png";
import image7 from "../../Images/Frame 151 (7).png";
import image9 from "../../Images/Frame 153.png";
import image10 from "../../Images/Frame 152 (6).png";
import image11 from "../../Images/Frame 152 (1).png";
import image12 from "../../Images/Frame 152 (2).png";
import image13 from "../../Images/Frame 152 (3).png";
import image14 from "../../Images/Frame 152 (4).png";
import image15 from "../../Images/Frame 152 (5).png";
import image16 from "../../Images/Frame 152 (7).png";

import Location from "../../Images/setting-5.svg";

const Places = () => {
  return (
    <section className="px-8 my-16">
      <div className="flex justify-center items-center   lg:justify-between flex-col lg:flex-row w-[95%] m-auto mt-32">
        <div className="w-full flex flex-wrap justify-evenly items-center">
          <p className="text-base text-[#434343] lg:text-xl mr-6 my-1">
            Restaurant
          </p>
          <p className="text-base text-[#434343] lg:text-xl mr-6 my-1">
            Cottage
          </p>
          <p className="text-base text-[#434343] lg:text-xl mr-6 my-1">
            Castle
          </p>
          <p className="text-base text-[#434343] lg:text-xl mr-6 my-1">
            fantast city
          </p>
          <p className="text-base text-[#434343] lg:text-xl mr-6 my-1">beach</p>
          <p className="text-base text-[#434343] lg:text-xl mr-6 my-1">Cabin</p>
          <p className="text-base text-[#434343] lg:text-xl mr-6 my-1">
            Off-grid
          </p>
          <p className="text-base text-[#434343] lg:text-xl mr-6 my-1">Farm</p>
        </div>

        <button className="text-[#434343] rounded-xl border border-[#B4B4B4] px-4 w-52 flex justify-between py-2 mt-8 lg:mt-0">
          Location <img src={Location} alt="Select Location" className="inline-block" />
        </button>
      </div>
      <div className=" flex flex-wrap justify-center items-center mt-16">
        <Card image={image4} />
        <Card image={image5} />
        <Card image={image6} />
        <Card image={image7} />
        <Card image={image} />
        <Card image={image2} />
        <Card image={image8} />
        <Card image={image3} />

        <Card image={image9} />
        <Card image={image11} />
        <Card image={image12} />
        <Card image={image13} />
        <Card image={image14} />
        <Card image={image15} />
        <Card image={image10} />
        <Card image={image16} />
      </div>
    </section>
  );
};

export default Places;
