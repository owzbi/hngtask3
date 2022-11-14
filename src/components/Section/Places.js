import React from "react";
import {Link} from "react-router-dom"
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
  const places = ["Restaurant", "Cottage", "Castle", 'fantast city', "beach", "Cabin", "Off-grid"]
  return (
    <section className="px-12  my-16 ">
      <div className="flex justify-center items-center   lg:justify-between flex-col lg:flex-row w-[90%] m-auto mt-32 px-8">
      <div className="flex w-full flex-wrap lg:justify-between justify-center items-center">
        {
          places.map((place, i)=>{
            return <Link className="text-xs text-[#434343] lg:text-sm mx-4 my-2" key={i}>
            {place}
          </Link>
          })
        }  
        </div>


        <div className="px-2 w-[180px]">
        <button className="text-[#434343] text-xs rounded-lg border border-[#B4B4B4] px-4 w-full flex justify-between items-center py-1 mt-8 lg:mt-0">
          Location <img src={Location} alt="Select Location" className="inline-block" />
        </button>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center items-center mt-16 gap-4">
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
