import React from "react";
import { IoMenu } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-dvh ">
      <div className="flex justify-between w-full">


        {/* left section */}
        <div className="min-w-[10vh] h-dvh md:flex flex-col justify-center hidden ">
        <div className=" h-[90vh] border-r-2 border-black flex flex-col gap-7 items-center py-5 text-2xl">
          <i> <IoMenu /></i>
          <i> <FiSearch /></i>
        </div>
        </div>

        {/* for mobile */}
          
        <div className=" md:hidden absolute top-20  flex flex-col gap-7 items-center mx-4.5 pb-2 text-2xl">
          <i> <IoMenu /></i>
          <i> <FiSearch /></i>
        </div>


        {/* right upper section */}
        <div className="flex justify-between px-14 py-5 w-full h-fit ">
          <a className="text-4xl font-bold uppercase cursor-pointer">filmi</a>
          <button className="px-4 py-2  rounded-sm cursor-pointer font-bold bg-[brown] text-[white]">
            BUY NOW
          </button>
        </div>


      </div>
    </nav>
  );
};

export default Nav;
