import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex flex-row items-center ">
      {/* left */}
      <div className=" w-5/12">
        <h1 className="text-[50px] font-semibold text-[#54BD95]">Biccas</h1>
      </div>
      {/* right */}
      <div className="w-7/12 flex flex-row justify-between gap-107u">
        {/* right-left */}
        <div className="flex flex-row items-center gap-10">
          <a href className="text-base">
            Home
          </a>
          <a href className="text-[#A6A6A6] text-base">
            Product
          </a>
          <a href className="text-[#A6A6A6] text-base">
            FAQ
          </a>
          <a href className="text-[#A6A6A6] text-base">
            Blog
          </a>
          <a href className="text-[#A6A6A6] text-base">
            About Us
          </a>
        </div>
        {/* right-right */}
        <div className="flex flex-row *items-center gap-10">
          <a href className="text-[#A6A6A6] text-base">
            Login
          </a>
          <a href className="text-white bg-[#54BD95] py=[10px] px-[10px]">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
