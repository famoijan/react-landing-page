import React from "react";
import unplash from "./assets/Images/icons/unplash.png";
import notion from "./assets/Images/icons/notion.png";
import intercom from "./assets/Images/icons/intercom.png";
import descript from "./assets/Images/icons/descript.png";
import grammerly from "./assets/Images/icons/grammerly.png";

const Teams = () => {
  return (
    <div className="max-w-7xl mx-auto my-32">
      <h1 className="text-center text-[#191A15] font-bold text-[40px] mb-14">
        More than 25,000 teams use Collabs
      </h1>
      <div className="flex flex-row items-center justify-between">
        {/* Image 1 */}
        <div className="flex flex-row gas-2 items-center ">
          <img src={unplash} alt className="px-2" />
          <p className="text-[#A6A6A6] text-3xl font-semibold">Unsplash</p>
        </div>
        {/* Image 2 */}
        <div className="flex flex-row gas-2 items-center ">
          <img src={notion} alt className="px-2" />
          <p className="text-[#A6A6A6] text-3xl font-semibold">Notion</p>
        </div>
        {/* Image 3 */}
        <div className="flex flex-row gas-2 items-center ">
          <img src={intercom} alt className="px-2" />
          <p className="text-[#A6A6A6] text-3xl font-semibold">INTERCOM</p>
        </div>
        {/* Image 4 */}
        <div className="flex flex-row gas-2 items-center ">
          <img src={descript} alt className="px-2" />
          <p className="text-[#A6A6A6] text-3xl font-semibold">descript</p>
        </div>
        {/* Image 5 */}
        <div className="flex flex-row gas-2 items-center ">
          <img src={grammerly} alt className="px-2" />
          <p className="text-[#A6A6A6] text-3xl font-semibold">grammerly</p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
