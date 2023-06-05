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
    <div className="flex flex-row gap-3">
    <div
      onClick={searchModal.onOpen}
      className="
        border-[2px] 
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
          <span className="text-xs text-slate-500 ">{locationLabel}</span>
        </div>
        <div 
          className="
          text-sm 
          flex
          flex-col
          px-6
          border-x-[2px] 
          "
        >
          <span className="font-semibold">In-Out</span>
          <span className="text-xs text-slate-500 ">{durationLabel}</span>
          
        </div>
        <div 
          className="
            text-sm 
            pl-6 
            pr-2 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div className="text-sm 
            flex
            flex-col
            px-3">
          <span className="font-semibold">Guests</span>
          <span className="text-xs text-slate-500 ">{guestLabel}</span>
            
            </div>
          
        </div>
        
      </div>
      
    </div>
    <div 
    onClick={searchModal.onOpen}
    className="mt-2 button w-10 h-10 bg-pink-750 rounded-full cursor-pointer select-none
    active:translate-y-1   hover:bg-orange-700
    transition-all duration-150 [box-shadow:0_1px_0_0_#f87171,0_3px_0_0_#f87171]
    border-[1px] border-pink-750"
  >
    <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg"><BiSearch size={18} /></span>
  </div>
  </div>
  );
}
 
export default Search;