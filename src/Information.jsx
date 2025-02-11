import React from "react";
import star from "./assets/Images/icons/star.png";
import star2 from "./assets/Images/icons/star2.png";
import activity from "./assets/Images/icons/activity 1.png";
import collaboration from "./assets/Images/icons/collaboration 1.png";
import pie_chart from "./assets/Images/icons/pie-chart.png";
import command from "./assets/Images/icons/command.png";
import collaboration2 from "./assets/Images/icons/collaboration 2.png";
import collaboration3 from "./assets/Images/icons/collaboration 3.png";
import Subtract from "./assets/Images/icons/Subtract.png";
import frame57 from "./assets/Images/icons/Frame 57.png";
import group201 from "./assets/Images/icons/Group 201.png";

import group209 from "./assets/Images/icons/Group 109.png";
import group113 from "./assets/Images/icons/Group 113.png";
import benefit from "./assets/Images/icons/benefit.png";
import group194 from "./assets/Images/icons/Group 194.png";
import eckuose33 from "./assets/Images/icons/Ellipse 33.png";
import circle1 from "./assets/Images/icons/circle 1.png";

const Information = () => {
  return (
    <div>
      <div className="mt-32 mx-auto max-w-7xl flex flex-row">
        {/* left */}
        <div className>
          <div className="w-1/2">
            <h1 className="tetx-[#191A15] text-[30px] font-bold my-5">
              How we support our pratner all over the world
            </h1>
            <p className="text-[#A6A6A6] text-[16px]">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>
          </div>
          <div className="flex flex-row gap-11">
            <div className="my-8">
              <img src={star} alt />
              <h4 className>4.9 / 5 rating</h4>
              <p className>databricks</p>
            </div>
            <div className="my-8">
              <img src={star2} alt />
              <h4>4.8 / 5 rating</h4>
              <p className>Chainalysis</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className>
          <div className="flex flex-row gap-5 my-5">
            <img src={activity} alt className />
            <h5 className="font-bold text-[18px] text-[#191A15]">Publishing</h5>
          </div>
          <p className>
            Plan, collaborate, and publishing your contetn that drivees
            meaningful engagement and growth for your barnd
          </p>
          <div className="flex flex-row gap-5 my-5">
            <img src={pie_chart} alt className />
            <h5 className="font-bold text-[18px] text-[#191A15]">Analytics</h5>
          </div>
          <p className>Analyze your performance and create goegeous report</p>
          <div className="flex flex-row gap-5 my-5">
            <img src={command} alt className />
            <h5 className="font-bold text-[18px] text-[#191A15]">Engagement</h5>
          </div>
          <p className>Quiuckly navigate you anda engage with your adience</p>
        </div>
      </div>
      <div className="mt-32 mx-auto max-w-7xl">
        {/* Top left*/}
        <div className="flex flex-row justify-between">
          <div className="w-1/5">
            <p className="text-[#191A15] font-semibold text-[38px] leading-12 w-60">
              Our Features you cab get
            </p>
          </div>
          <div className="w-1/3 flex">
            <p className="text-[#A6A6A6] text-[18px]">
              We offer a variety of interesting features that you can help
              increase yor productivity at work and manage your projrct esaly
            </p>
          </div>
          <div className>
            <button className="bg-[#54BD95] py-0 px-10 rounded-full text-white text-sm h-14">
              Get Started
            </button>
          </div>
        </div>
        {/* Top right*/}
        <div className="mt-10 mx-auto grid grid-cols-3 justify-between gap-10">
          <div className=" gap-10">
            <img src={collaboration} alt className />
            <h1 className="text-[#191A15] text-[24px] font-semibold">
              Collboration Teams{" "}
            </h1>
            <p className="text-[#A6A6A6] text-[18px] mt-2">
              Here you can handle projects together with team virtually
            </p>
          </div>
          {/* middle */}
          <div className>
            <img src={collaboration2} alt className />
            <h1 className="text-[#191A15] font-semibold text-[24px]">
              {" "}
              Cloud Storage
            </h1>
            <p className="text-[#A6A6A6] text-[18px] font-semibold mt-2">
              No nedd to worry about storage because we provide storage up to 2
              TB
            </p>
          </div>
          <div className>
            <img src={collaboration3} alt className />
            <h1 className="text-[#191A15] font-semibold text-[24px]">
              {" "}
              Daily Analytics
            </h1>
            <p className="text-[#A6A6A6] text-[18px] font-semibold mt-2">
              We always provide useful informatin to make it easier for you
              every day
            </p>
          </div>
        </div>
      </div>
      {/* The benefit */}
      <div className="mt-32 mx-auto max-w-7xl">
        <div className="flex flex-row justify-between">
          <div className="w-1/3">
            <div className="w-2/3">
              <h1 className="text-[#191A15] text-[30px] font-bold w-120">
                What Benifit Will You Get
              </h1>
            </div>
            <div className="mt-5">
              <div className="flex  gap-5 p-2 ">
                {" "}
                <img src={Subtract} alt className />
                <p className>Free Consulting With Experet Saving Money</p>
              </div>
              <div className="flex  gap-5 p-2">
                {" "}
                <img src={Subtract} alt className />
                <p className>Online Bankingy</p>
              </div>
              <div className="flex  gap-5 p-2">
                {" "}
                <img src={Subtract} alt className />
                <p className>Investment Report Every Month</p>
              </div>
              <div className="flex  gap-5 p-2">
                {" "}
                <img src={Subtract} alt className />
                <p className>Saving Money For The Future</p>
              </div>
              <div className="flex  gap-5 p-2">
                {" "}
                <img src={Subtract} alt className />
                <p className>Online Transection</p>
              </div>
            </div>
          </div>
          <div className="relative w-1/3">
            <div className=" flex flex-row justify-between gap-5 shadow-md shadow-gray-300 bg-white p-4 absolute -left-24 top-10 ">
              <img src={eckuose33} alt className="w-10 h-10 " />
              <div className>
                <h1 className="text-[#191A15] text-[12px] font-semibold">
                  Amanda Young
                </h1>
                <p className="text-[#A6A6A6] text-[12px]">
                  Expert Saving Money
                </p>
              </div>
              <img src={group209} alt className="w-10 h-10" />
            </div>
            <img src={group113} alt className=" absolute -left-16 top-48" />
            <div className>
              <img src={benefit} alt className="w-80 h-90" />
            </div>
            <div className=" flex flex-row justify-between gap-5 shadow-md shadow-gray-300 bg-white p-4 absolute -left-24 -bottom-5">
              <div className="flex gap-5">
                <img src={circle1} alt className />
                <p className="text-[#191A15] text-[12px]">
                  Money Transfer Succesfull
                </p>
              </div>
            </div>
            <div className=" gap-5 shadow-md shadow-gray-300 bg-white p-4 absolute right-16 top-24 w-20">
              <p className="text-[8px] text-[#A9A7B6]">Total Income</p>
              <p className="text-[#191A15] text-[12px] font-semibold">
                $245.00
              </p>
            </div>
          </div>
        </div>
        {/*Choose plan  */}
        <div className="mt-32 mx-auto max-w-7xl">
          <div className=" w-1/3 mx-auto">
            <h1 className="text-[44px] text-[#191A15] font-bold">
              {" "}
              Choose Plan That’s Right For You
            </h1>
            <p className="text-[#A6A6A6] text-[14px] mt-5">
              Choose plan that works best for you, feel free to contact us
            </p>
            <div className="flex  gap-10 mt-10">
              <h1 className="text-[18px] font-semibold">Bil Monthly</h1>
              <div className>
                <button className="bg-[#54BD95] py-[10px] px-10 rounded text-white text-sm">
                  Bil Yearly
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-32">
          <div className="mt-32">
            <div className>
              <h1 className="text-[30px] font-semibold text-center mr-20">
                Free
              </h1>
              <p className="text-[#A6A6A6] text-[12px] w-2/3 text-center">
                Have a go and test your superpowers
              </p>
              <img src={group194} alt className="mx-auto ml-10" />
            </div>
            <div className="mt-10">
              <div className=" flex gap-5 py-1">
                <img src={Subtract} alt />
                <p className="font-semibold">2 Users</p>
              </div>
              <div className="flex gap-5 py-1">
                <img src={Subtract} alt />
                <p className="font-semibold">2 Files</p>
              </div>
              <div className="flex gap-5 py-1">
                <img src={Subtract} alt />
                <p className="font-semibold">Public Share &amp; Comments</p>
              </div>
              <div className="flex gap-5 py-1">
                <img src={Subtract} alt />
                <p className="font-semibold">Chat Support</p>
              </div>
              <div className="flex gap-5 py-1">
                <img src={Subtract} alt />
                <p className="font-semibold">New income apps</p>
              </div>
            </div>
            <div className="mt-10">
              <button className=" shadow-md shadow-gray-300 bg-white rounded  py-[10px] px-10  text-[#54BD95] text-sm">
                Signup for free
              </button>
            </div>
          </div>
          <div className>
            <img src={frame57} alt className="cl" />
          </div>
          <div className>
            <img src={group201} alt className />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
