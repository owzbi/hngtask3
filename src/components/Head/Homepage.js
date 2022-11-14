import React from "react";

import Header from "./Header";
import Token from "./Token";
import Inspiration from "../Section/Inspiration";
import Meta from "../Section/Meta";


const Homepage = () => {
  return (
    <div className="py-12 m-auto bg-white max-w-[2150px] min-w-[270px]">
    <Header />
    <Token/>
    <Inspiration/>
    <Meta/>
   
    </div>
  );
};

export default Homepage;
