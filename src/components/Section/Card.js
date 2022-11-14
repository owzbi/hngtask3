import React from 'react';
import star from "../../Images/Star 2.png"

const Card = ({image}) => {
  return (
    <div className="flex flex-col p-4 justify-center items-center w-[15%]  min-w-[250px] lg:w-1/5 border-[#D7D7D7] lg:m-2 m-4 border rounded-xl">
    <img src={image} alt="home1" className="block w-full"/>
    <div className=" w-full">
      <div className="flex justify-between items-start my-4">
        <p className="text-sm">Desert King</p>
        <p className="text-sm font-bold">1MBT per night</p>
      </div>

      <div className="flex justify-between items-end">
        <p className="text-sm">2345km away</p>
        <p className="text-sm">available for 2weeks stay</p>
      </div>
    </div>

    <div className='text-left w-full'>
        <img src={star} alt="star" className='inline-block mr-2 cursor-pointer'/>
        <img src={star} alt="star" className='inline-block mr-2 cursor-pointer'/>
        <img src={star} alt="star" className='inline-block mr-2 cursor-pointer'/>
        <img src={star} alt="star" className='inline-block mr-2 cursor-pointer'/>
        <img src={star} alt="star" className='inline-block mr-2 cursor-pointer'/>
    </div>
  </div>
  )
}

export default Card
