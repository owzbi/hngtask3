import React from "react";
import image from "../../Images/section-image.png";

const Meta = () => {
  return (
    <section className="bg-[#A02279] flex items-center   justify-center flex-col lg:flex-row w-full mt-12 px-12 lg:px-32">
      <div className="w-full lg:w-1/2 text-white  text-center lg:text-left py-8 max-w-[800px]">
        <h1 className="text-3xl font-bold">Metabnb NFTs</h1>

        <p className="text-base mt-12 lg:pr-48">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>

        <button className="bg-white  py-3 mt-12  max-w-[150px]  px-8 rounded-xl text-[#A02279] text-sm ">
          Learn more
        </button>
      </div>

      <div className="w-full lg:w-1/2 py-20 flex lg:justify-end ">
        <img src={image} alt="nfts" />
      </div>
    </section>
  );
};

export default Meta;
