import React from "react";
import Card from "./Card"
import image from "../../Images/Frame 151.png";
import image2 from "../../Images/frame.png";
import image8 from "../../Images/Frame 152.png"
import image3 from "../../Images/Frame 151 (3).png";
import image4 from "../../Images/Frame 151 (4).png";
import image5 from "../../Images/Frame 151 (5).png";
import image6 from "../../Images/Frame 151 (6).png";
import image7 from "../../Images/Frame 151 (7).png";





const Inspiration = () => {
  return (
    <section className="px-8">
      <h1 className="text-center p-8 text-2xl md:text-4xl font-bold">Inspiration for your next adventure</h1>

      <div className=" flex flex-wrap justify-center items-center">
        <Card image={image}/>
        <Card image={image2}/>
        <Card image={image8}/>
        <Card image={image3}/>
        <Card image={image4}/>
        <Card image={image5}/>
        <Card image={image6}/>
        <Card image={image7}/>
        
      </div>
    </section>
  );
};

export default Inspiration;
