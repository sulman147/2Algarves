"use client";
import ListingCategory from "./ListingCategory";
import { useEffect, useState } from "react";
import { RiDoorLockBoxLine } from "react-icons/ri";
import {
  AiOutlineWifi,
  AiOutlineTags,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { CiMonitor } from "react-icons/ci";
import { TbWashDry1, TbWashDry2 } from "react-icons/tb";
import { GiModernCity } from "react-icons/gi";
import axios from "axios";

const Ammenities = ({ listingfeatures }) => {
  const [Features, setFeatures] = useState([]);

  const Api = "http://server.cashbackforever.net:5500/api/";
  const getCategories = async () => {
    try {
      const response = await axios.get(`${Api}features`);
      // Process the response data
      const data = response.data;
      setFeatures(data);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const findFeaturesById = (id) => {
    const foundItem = Features.find((item) => item.id == id);
    return foundItem ? foundItem.name : null;
  };

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

        <div className="grid grid-cols-2 py-2 px-2">
          {listingfeatures.map((item) => {
            return (
              <div key={item} className="flex items-center text-lg flex-row">
                <div className="text-pink-750 hover:text-orange-700 p-2">
                  <AiOutlineCheckCircle size={22} className="text-pink-750" />
                </div>
                <div className="text-base font-normal text-black">
                  {findFeaturesById(item)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ammenities;
