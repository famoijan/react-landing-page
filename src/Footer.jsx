import React from "react";
import group214 from "./assets/Images/icons/Group 214.png";
import ellipse54 from "./assets/Images/icons/Ellipse 54.png";
import ellipse55 from "./assets/Images/icons/Ellipse 55.png";
import ellipse56 from "./assets/Images/icons/Ellipse 56.png";
import ellipse33 from "./assets/Images/icons/Ellipse 33.png";
import group215 from "./assets/Images/icons/Group 215.png";
import group233 from "./assets/Images/icons/Group 233.png";
import frame58 from "./assets/Images/icons/Frame 58.png";
import group232 from "./assets/Images/icons/Group 232.png";

const Footer = () => {
  return (
    <footer className=" bg-[#161C28] mt-32">
      <div className="md:max-w-7xl mx-auto">
        <div className="mx-auto flex flex-row justify-between gap-10">
          <div className>
            <div className="mx-auto md:max-w-xl mt-20 ml-20">
              <img src={group214} alt className />
            </div>
            <div className="flex gap-10 mt-5 ml-20">
              <img src={ellipse54} alt className=" w-12 h-12" />
              <img src={ellipse55} alt className=" w-12 h-12" />
              <img src={ellipse56} alt className=" w-12 h-12" />
              <img src={ellipse33} alt className=" w-12 h-12" />
              <img src={group215} alt className=" w-12 h-12" />
            </div>
            <div className=" mt-20  ml-20">
              <img src={group233} alt className="mx-auto max-w-sm" />
            </div>
            <div className="flex justify-center mx-auto  mt-16 mb-5">
              <p className="text-white text-sm font-semibold text-[18px]">
                © 2022 Biccas Inc. Copyright and rights reserved
              </p>
            </div>
          </div>
          <div className="mx-auto ">
            <div className>
              <img src={frame58} alt className="mx-auto max-w-xl mt-20 mr-20" />
            </div>
            <div className="mt-20">
              {" "}
              <img src={group232} alt className="mx-auto max-w-xl" />{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
