import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import useCountries from "@/app/hooks/useCountries";
import { CiLocationOn } from "react-icons/ci";

export default function LocationCard({ locationValue }) {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  return (
    <div className="flex flex-col bg-white rounded-xl mt-3">
      <div className="flex flex-row items-center my-2 ml-6 gap-4 ">
        <BiCategoryAlt size={20} />
        <div
          className="
    flex
    font-semibold
    text-xl
    items-center
  "
        >
          Region
        </div>
      </div>
      <hr />
      <div className="flex items-center text-lg flex-row p-3 ">
        <div
          className=" bg-pink-750
                    rounded-full 
                hover:bg-orange-700 
                p-2"
        >
          <CiLocationOn size={25} className="text-neutral-200" />
        </div>
        &ensp;<div>&ensp;{`${location?.label}, ${location?.region}`}</div>
      </div>
    </div>
  );
}
