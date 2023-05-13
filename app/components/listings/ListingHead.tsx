'use client';

import Image from "next/image";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { Player } from 'video-react';
import Heading from "../Heading";
import HeartButton from "../HeartButton";
import Rating from '@mui/material/Rating';
import { RiShareForwardLine } from "react-icons/ri";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return ( 
    <><div className="flex flex-row justify-between align-middle">
      <div>
      <Heading
        title="️Nusa Penida by Private Boat - Snorkeling 4 spots"
      />
      <div className="flex flex-row">
        <Rating name="read-only" value={5} readOnly />
        <div>&ensp; 708 Reviews &ensp; |</div>
        <div>&ensp;{`${location?.label}, ${location?.region}`}</div>
      </div>
      </div>
      <div>
        <div className=" border-2 rounded-3xl flex flex-row justify-center items-center pl-2 pr-2"> Save &ensp;
          <HeartButton 
            listingId={id}
            currentUser={currentUser}
          />
        </div>
        <div className=" border-2 rounded-3xl flex flex-row mt-1 justify-center items-center pl-2 pr-2"> Share &ensp;
        <RiShareForwardLine
        size={24}
      />
        </div>
      </div>
      </div>
      <div className="
          w-full
          mt-3
          h-[20vh]
          overflow-hidden 
          rounded-xl
          relative
          video-responsive
        "
      >
         <iframe
      width="1053"
      height="480"
      src={`https://www.youtube.com/embed/d1DhBZVL5Pg`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
        
      </div>
      {/* <div className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={imageSrc}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton 
            listingId={id}
            currentUser={currentUser}
          />
        </div>
      </div> */}
    </>
   );
}
 
export default ListingHead;