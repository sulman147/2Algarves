"use client";
import ListingCategory from "./ListingCategory";
import { RiDoorLockBoxLine } from "react-icons/ri";
import { AiOutlineWifi } from "react-icons/ai";
import { CiMonitor } from "react-icons/ci";
import { TbWashDry1 } from "react-icons/tb";

const Ammenities = ({}) => {
  return (
    <div className="col-span-4 flex flex-col gap-4 p-1.5 rounded-lg border-2 border-solid">
      <div
        className="
        flex 
        mt-3
        items-center 
        justify-around
        font-semibold
        text-lg
      "
      >
        What this Place Offer
      </div>
      <hr />
      <div className="flex flex-row">
        <div>
          <h3 className="flex items-center flex-row">
            &ensp; <RiDoorLockBoxLine /> &ensp; Lock on bathroom door
          </h3>
          <h3 className="flex items-center flex-row">
            &ensp; <AiOutlineWifi /> &ensp; Wifi
          </h3>
          <h3 className="flex items-center flex-row">
            &ensp; <CiMonitor /> &ensp; 40`` HDTV with Netflix, Disney +
          </h3>
          <h3 className="flex items-center flex-row">
            &ensp; <TbWashDry1 /> &ensp; Free dryer - In unit
          </h3>
        </div>
        <div className="ml-7">
          <h3 className="flex items-center flex-row">
            &ensp; <AiOutlineWifi /> &ensp; City skyline View
          </h3>
          <h3 className="flex items-center flex-row">
            &ensp; <AiOutlineWifi /> &ensp; Free Washer - In unit
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Ammenities;
