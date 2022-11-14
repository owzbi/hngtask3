import React from "react";
import {Link} from "react-router-dom"
import Logo from "../../Images/footerLogo.svg"
import facebook from "../../Images/facebook.png"
import instagram from "../../Images/instagram.png"
import twitter from "../../Images/twitter.png"


const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row lg:items-start bg-[#1D1D1E] justify-between items-center py-8 md:px-32 pt-16 text-[#F1F3F9] h-full min-h-[350px] -mt-12">
      <ul className="flex flex-col justify-between h-full lg:min-h-[300px]">
        <li ><img src={Logo} alt="Logo" className="block w-2/3 m-auto lg:m-0"/></li>
        <li className="hidden lg:block">
          <div className="flex justify-center lg:justify-start">
            <a href="https://facebook.com/metabnb"><img src={facebook} alt="facebook logo" className="block "/></a>
            <a href="https://instagram.com/metabnb"><img src={instagram} alt="instagram logo"className="block  ml-4" /></a>
           <a href="https://twitter.com/metabnb"> <img src={twitter} alt="twitter Logo" className="block  ml-4"/></a>
          </div>
        </li>
        <li className="hidden lg:block">
          <p className="text-center lg:text-left">
            &copy; 2022 Metabnb
          </p>
        </li>
      </ul>

      <ul className="h-full text-center lg:text-left">
        <li ><h4  className="text-xl  lg:mb-12 lg:mt-0 mt-12 mb-6">Community</h4></li>
        <li className="mt-4 text-base"><Link>NFT</Link></li>
        <li className="mt-4 text-base"><Link>Tokens</Link></li>
        <li className="mt-4 text-base"><Link>Landlords</Link></li>
        <li className="mt-4 text-base"><Link>Discords</Link></li>
      </ul>

      <ul className="h-full text-center lg:text-left">
        <li ><h4  className="text-xl  lg:mb-12 lg:mt-0 mt-12 mb-6">Places</h4></li>
        <li className="mt-4 text-base" ><Link>Castle</Link></li>
        <li className="mt-4 text-base" ><Link>Farms</Link></li>
        <li className="mt-4 text-base" ><Link>Beach</Link></li>
        <li className="mt-4 text-base" ><Link>Learn more</Link></li>
      </ul>

      <ul className="h-full text-center lg:text-left">
        <li ><h4  className="text-xl  lg:mb-12 lg:mt-0 mt-12 mb-6">About us</h4></li>
        <li className="mt-4 text-base" ><Link>Roadmaps</Link></li>
        <li className="mt-4 text-base" ><Link>Creators</Link></li>
        <li className="mt-4 text-base" ><Link>Career</Link></li>
        <li className="mt-4 text-base" ><Link>Contact us</Link></li>
      </ul>

      <ul className="lg:hidden mt-8">
      <li>
          <div className="flex justify-center lg:justify-start">
            <a href="https://facebook.com/metabnb"><img src={facebook} alt="facebook logo" className="block "/></a>
            <a href="https://instagram.com/metabnb"><img src={instagram} alt="instagram logo"className="block  ml-4" /></a>
           <a href="https://twitter.com/metabnb"> <img src={twitter} alt="twitter Logo" className="block  ml-4"/></a>
          </div>
        </li>
        <li className="lg:hidden mt-8">
          <p className="text-center lg:text-left">
            &copy; 2022 Metabnb
          </p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
