'use client';

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import { useState } from "react";

const ReadMore = ({ children }: any) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
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

  const coordinates = getByValue(locationValue)?.latlng

  return ( 
    <div className="col-span-4 flex flex-col gap-8">
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
      <hr />
      {/* {category && (
        <ListingCategory
          icon={category.icon} 
          label={category?.label}
          description={category?.description} 
        />
      )}
      <hr /> */}
      <div
        className="
        flex 
        mt-3
        font-semibold
        text-2xl
      "
      >
        About this place
      </div>
      <div className="
      text-lg font-light text-neutral-500">
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
   );
}
 
export default ListingInfo;