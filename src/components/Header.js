import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top Navigation */}
      <div className="flex bg-amazon_blue p-1  items-center flex-grow py-2">
        <div className="mt-2 flex  flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* search */}
        <div className="hidden  sm:flex  rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
          <input className=" p-2 w-6 flex-grow rounded-l-md   flex-shrink focus:outline-none" />
          <SearchIcon className="h-12 p-4 " />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Raman Malviya</p>
            <p className=" font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Return</p>
            <p className=" font-extrabold md:text-sm">& Order</p>
          </div>
          <div className=" relative link flex items-center">
            <span className="absolute top-0 right-0 bg-yellow-400 h-4 text-center rounded-full text-black font-bold w-4 md:right-10">8</span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className=" bg-amazon_blue-light space-x-3 pl-6 p-2 flex items-center text-white text-sm">
        <MenuIcon className="h-6 mr-1" />
        <p className="link flex item-center">All</p>
        <p className="link">Prime Videos</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deal</p>
        <p className="hidden link lg:inline-flex">Electronic</p>
        <p className="hidden link lg:inline-flex">Food & Grocery</p>
        <p className="hidden link lg:inline-flex">Prime</p>
        <p className="hidden link lg:inline-flex">Buy Again</p>
        <p className="hidden link lg:inline-flex">Shooper toolkit</p>
        <p className="hidden link lg:inline-flex">Health & personal Care</p>

      </div>
    </header>
  );
}

export default Header;
