'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { differenceInDays } from 'date-fns';

import useSearchModal from '@/app/hooks/useSearchModal';
import useCountries from '@/app/hooks/useCountries';

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const  locationValue = params?.get('locationValue'); 
  const  startDate = params?.get('startDate');
  const  endDate = params?.get('endDate');
  const  guestCount = params?.get('guestCount');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return 'Search Destination';
  }, [locationValue, getByValue]);

  const getDateINOUT = (date : any) =>{
    let d = new Date(date);
    let year = d.getFullYear()
    let day = d.getDate()
    let month = d.getMonth() + 1
    return `${day}/${month}/${year}`
  }

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = getDateINOUT(startDate);
      const end = getDateINOUT(endDate);
      console.log("duration",startDate,endDate)
      let diff = `${start} to ${end} `

      // if (diff === 0) {
      //   diff = 1;
      // }

      return `${diff}`;
    }

    return 'Select Dates'
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return 'Adults, Children';
  }, [guestCount]);

  return ( 
    <div
      onClick={searchModal.onOpen}
      className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2 
        rounded-xl 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      "
    >
      <div 
        className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
        <div 
          className="
            text-sm 
            flex
            flex-col
            px-6
          "
        ><span className="font-semibold">Which Place?</span>
          <span>{locationLabel}</span>
        </div>
        <div 
          className="
          text-sm 
          flex
          flex-col
          px-6
          border-x-[1px] 
          "
        >
          <span className="font-semibold">In-Out</span>
          <span>{durationLabel}</span>
          
        </div>
        <div 
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div className="text-sm 
            flex
            flex-col
            px-6">
          <span className="font-semibold">Guests</span>
          <span>{guestLabel}</span>
            
            </div>
          <div 
            className="
            p-2 
            bg-pink-750 
            rounded-full 
            text-white
            hover:bg-orange-700 
            hover:text-white 
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Search;