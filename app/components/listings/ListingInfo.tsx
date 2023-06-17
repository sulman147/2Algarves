'use client';

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import Ammenities from "./Ammenities";

const ReadMore = ({ children }: any) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 350) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? <span className="font-bold text-pink-750 ">&ensp;...read more</span> : <span className="font-bold text-pink-750 ">&ensp;show less</span>}
      </span>
    </p>
  );
};

const Map = dynamic(() => import('../Map'), { 
  ssr: false 
});

interface ListingInfoProps {
  user: string,
  description: string;
  guestCount: number;
  adultCount: number;
  petCount: number;
  category: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined
  locationValue: string;
  features:any;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  adultCount,
  petCount,
  category,
  locationValue,
  features
}) => {
  const { getByValue } = useCountries();
  
  const location = getByValue(locationValue);
  const coordinates = getByValue(locationValue)?.latlng
  return ( 
    <div className="col-span-4 flex flex-col mt-3">
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Hosted by Algarve</div>
          {/* <Avatar src={"user?.image"} /> */}
        </div>
        <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>
            {guestCount} guests
          </div>
          <div>
            {adultCount} adults
          </div>
          <div>
            {petCount} pets
          </div>
        </div>
      </div>
     
      
      {category && (
        <ListingCategory
          icon={category.icon} 
          label={category?.label}
          description={category?.description} 
        />
      )}
      <hr className="mt-3"/>
      <div className="flex flex-col bg-white rounded-xl">
      <div className="flex flex-row items-center my-2 ml-6 gap-4 ">
      <AiOutlineMenu size={20}/>
      <div  className="
        flex
        font-semibold
        text-xl
        items-center
      ">About this place</div>
        
      </div>
      
      <div className="
      text-base font-normal text-black p-4">
        <ReadMore>
        {description}
        </ReadMore>
      </div>
      </div>
      <Map center={coordinates} />
      <Ammenities listingfeatures={features}/>
      
    </div>
   );
}
 
export default ListingInfo;