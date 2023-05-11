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
  user: SafeUser,
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
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
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
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
            {roomCount} rooms
          </div>
          <div>
            {bathroomCount} bathrooms
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
      text-base font-normal text-black p-3">
        <ReadMore>
        This is without doubt THE BEST LOCATION you could ever ask for when visiting Sydney.
        2 minute walk to everything that is wonderful and local in the inner-city village of Surry Hills, and a short walk further to Sydney CBD, Hyde Park or Centennial Park. Across the road from the iconic Sydney Cricket Ground and other sporting venues, 15 minutes to Sydney beautiful eastern suburbs beaches including the world famous Bondi Beach.
        Start your day with a coffee at the amazing Bourke Street Bakery right around the corner.
        Our house is a very stylish, architecturally designed & recently renovated terrace house. A perfect combination of the old & the new, and incredibly relaxed environment.
        Your room is a large room with its own private balcony looking out over the neighbourhood & comfortable queen size bed. Plenty of hanging and drawer space for your clothes so no need to live out of a suitcase.
        This is also the home of Gascoigne & King - all guests will receive one of our beautifully handmade luxury scented travel candles (retail $25) for free when they check in!!
        There is nothing like a home away from home so feel free to settle in. Our home is yours during your stay and nothing is too much trouble. 24/7 access, broadband, cable TV, kitchen, espresso machine, washer/dryer, BBQ & courtyard are all yours to use at anytime. Community bikes are available to ride around town too - great way to get out & about.
        
        </ReadMore>
      </div>
      </div>
      <Map center={coordinates} />
      <Ammenities/>
      
    </div>
   );
}
 
export default ListingInfo;