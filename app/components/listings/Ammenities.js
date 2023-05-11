"use client";
import ListingCategory from "./ListingCategory";
import { RiDoorLockBoxLine } from "react-icons/ri";
import { AiOutlineWifi, AiOutlineTags } from "react-icons/ai";
import { CiMonitor } from "react-icons/ci";
import { TbWashDry1, TbWashDry2 } from "react-icons/tb";
import { GiModernCity } from "react-icons/gi";

const Ammenities = ({}) => {
  return (
    <div className="col-span-4 flex flex-col mt-3 ">
      <div className="flex flex-col bg-white rounded-xl">
        <div className="flex flex-row items-center my-2 ml-6 gap-4 ">
          <AiOutlineTags size={20} />
          <div
            className="
        flex
        font-semibold
        text-xl
        items-center
      "
          >
            What this Place Offer
          </div>
        </div>
        <hr />

        <div className="flex flex-row p-4">
          <div className="w-1/2">
            <div className="flex items-center text-lg flex-row pb-2">
              <div
                className=" bg-pink-750
                    rounded-full 
                hover:bg-orange-700 
                p-2"
              >
                <RiDoorLockBoxLine size={18} className="text-neutral-200" />
              </div>
              &ensp;
              <div className="text-base font-normal text-black">
                Lock on bathroom door
              </div>
            </div>
            <div className="flex items-center text-lg flex-row pb-2">
              <div
                className=" bg-pink-750
                    rounded-full 
                hover:bg-orange-700 
                p-2"
              >
                <AiOutlineWifi size={18} className="text-neutral-200" />
              </div>
              &ensp;<div className="text-base font-normal text-black">Wifi</div>
            </div>
            <div className="flex items-center text-lg flex-row pb-2">
              <div
                className=" bg-pink-750
                    rounded-full 
                hover:bg-orange-700 
                p-2"
              >
                <CiMonitor size={18} className="text-neutral-200" />
              </div>
              &ensp;
              <div className="text-base font-normal text-black">
                40`` HDTV with Netflix, Disney+
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex items-center text-lg flex-row pb-2">
              <div
                className=" bg-pink-750
                    rounded-full 
                hover:bg-orange-700 
                p-2"
              >
                <TbWashDry1 size={18} className="text-neutral-200" />
              </div>
              &ensp;
              <div className="text-base font-normal text-black">
                Free dryer - In unit
              </div>
            </div>
            <div className="flex items-center text-lg flex-row pb-2">
              <div
                className=" bg-pink-750
                    rounded-full 
                hover:bg-orange-700 
                p-2"
              >
                <GiModernCity size={18} className="text-neutral-200" />
              </div>
              &ensp;
              <div className="text-base font-normal text-black">
                City skyline View
              </div>
            </div>
            <div className="flex items-center text-lg flex-row  pb-2">
              <div
                className=" bg-pink-750
                    rounded-full 
                hover:bg-orange-700 
                p-2"
              >
                <TbWashDry2 size={18} className="text-neutral-200" />
              </div>
              &ensp;
              <div className="text-base font-normal text-black">
                Free Washer - In unit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ammenities;
