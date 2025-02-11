import React from "react";
import Vector32 from "./assets/Images/icons/Vector 32.png";
import hero from "./assets/Images/hero.png";
import hero2 from "./assets/Images/hero2.png";
import database from "./assets/Images/icons/database1.png";
import check from "./assets/Images/icons/check.png";
import message from "./assets/Images/icons/message.png";

const Banner = () => {
  return (
    <div className=" mt-32 mx-auto max-w-7xl flex flex-row">
      {/* Left */}
      <div className="w-1/2">
        <h1 className="text-[#191A15] text-[80px] font-bold leading-[90px]">
          {" "}
          We’re here to Increase your Productivity
        </h1>
        <img src={Vector32} className="mt-7" />
        <p className="text-black text-base mt-12 max-w-[460px] font-medium">
          Let's make your work more organize and easily using the Taskio
          Dashboard with many of the latest featuresin managing work every day.
        </p>
      </div>
      {/* Right */}
      <div className=" w-1/2 relative">
        <img src={hero} alt className="mx-auto" />
        <div className="absolute bottom-10 right-0">
          <img src={hero2} alt className />
        </div>
        <div
          className="absolute top-10 -left-8 shadow-md
 shadow-gray-300 bg-white rounded-2xl py-4 px-5 flex flex-row"
        >
          <div className>
            <h4 className="text-[#A9A7B6] text-xl">Enter amount</h4>
            <input
              type="text"
              className="text-base font-medium mt-2 
placeholder:text-black border-b border-b-[#A9A786]"
              placeholder="$450.00"
            />
          </div>
          <div className>
            <button className="bg-[#52BD94] py-[5px] px-4 rounded-full text-white text-sm">
              Send
            </button>
          </div>
        </div>
        <img src={database} alt className="absolute right-[84px] top-5" />
        <img src={check} alt className="absolute left-10 top-40" />
        <img src={message} alt className="absolute -bottom-10 right-36" />
      </div>
    </div>
  );
};

export default Banner;
