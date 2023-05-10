"use client";
import ListingCategory from "./ListingCategory";
import { RiDoorLockBoxLine } from "react-icons/ri";
import { AiOutlineWifi } from "react-icons/ai";
import { CiMonitor } from "react-icons/ci";
import { TbWashDry1, TbWashDry2 } from "react-icons/tb";
import { GiModernCity } from "react-icons/gi";

const Ammenities = ({}) => {
  return (
    <div className="col-span-4 flex flex-col gap-4 p-1.5 ">
      <hr />
      <div
        className="
        flex 
        mt-3
        font-semibold
        text-2xl
      "
      >
        What this Place Offer
      </div>
      <div className="flex flex-row">
        <div>
          <div className="flex items-center text-lg flex-row pt-2 pb-2">
            <RiDoorLockBoxLine size={25} />
            &ensp;<div className="text-lg ">Lock on bathroom door</div>
          </div>
          <div className="flex items-center text-lg flex-row pt-2 pb-2">
            <AiOutlineWifi size={25} />
            &ensp;<div className="text-lg ">Wifi</div>
          </div>
          <div className="flex items-center text-lg flex-row pt-2 pb-2">
            <CiMonitor size={25} />
            &ensp;
            <div className="text-lg ">40`` HDTV with Netflix, Disney+</div>
          </div>
        </div>

        <div className="ml-7">
          <div className="flex items-center text-lg flex-row pt-2 pb-2">
            <TbWashDry1 size={25} />
            &ensp;<div className="text-lg ">Free dryer - In unit</div>
          </div>
          <div className="flex items-center text-lg flex-row pt-2 pb-2">
            <GiModernCity size={25} />
            &ensp;<div className="text-lg">City skyline View</div>
          </div>
          <div className="flex items-center text-lg flex-row pt-2 pb-2">
            <TbWashDry2 size={25} />
            &ensp;<div className="text-lg ">Free Washer - In unit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ammenities;
