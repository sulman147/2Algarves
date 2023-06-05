'use client';

import qs from 'query-string';
import dynamic from 'next/dynamic'
import { useCallback, useMemo, useState } from "react";
import { Range } from 'react-date-range';
import { formatISO } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';

import useSearchModal from "@/app/hooks/useSearchModal";

import Modal from "./Modal";
import Calendar from "../inputs/Calendar";
import Counter from "../inputs/Counter";
import CountrySelect, { 
  CountrySelectValue
} from "../inputs/CountrySelect";
import Heading from '../Heading';

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const SearchModal = () => {
  const router = useRouter();
  const searchModal = useSearchModal();
  const params = useSearchParams();

  const [step, setStep] = useState(STEPS.LOCATION);

  const [location, setLocation] = useState<CountrySelectValue>();
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [startDates, setStartDates] = useState<any>("DD/MM/YYYY");
  const [endDates, setEndDates] = useState<any>("DD/MM/YYYY");
  const [bathroomCount, setBathroomCount] = useState(1);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });

  const Map = useMemo(() => dynamic(() => import('../Map'), { 
    ssr: false 
  }), [location]);

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const getDateINOUT = (date : any) =>{
    let d = new Date(date);
    let year = d.getFullYear()
    let day = d.getDate()
    let month = d.getMonth() + 1
    return `${day}/${month}/${year}`
  }

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.INFO) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery,
    }, { skipNull: true });

    setStep(STEPS.LOCATION);
    searchModal.onClose();
    router.push(url);
  }, 
  [
    step, 
    searchModal, 
    location, 
    router, 
    guestCount, 
    roomCount,
    dateRange,
    onNext,
    bathroomCount,
    params
  ]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return 'Search'
    }

    return 'Next'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) {
      return undefined
    }

    return 'Back'
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Where do you wanna go?"
        subtitle="Find the perfect location!"
      />
      <CountrySelect 
        value={location} 
        onChange={(value) =>{ 
          console.log(value)
          setLocation(value as CountrySelectValue)}} 
      />
      <hr />
      <Map center={location?.latlng} />
    </div>
  )

  if (step === STEPS.DATE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-center gap-8">
        <span className="border-2 rounded-md border-black p-2">Check in : {`${startDates}`}</span> <span className="border-2 rounded-md border-black p-2">Check out : {`${endDates}`}</span></div>
        <Heading
          title="When do you plan to go?"
          subtitle="Make sure everyone is free!"
        />
        <Calendar
          onChange={(value) => {
            setStartDates(getDateINOUT(value.selection.startDate));
            setEndDates(getDateINOUT(value.selection.endDate));
            setDateRange(value.selection)}}
          value={dateRange}
        />
      </div>
    )
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add Guest"
          subtitle="Find your perfect place!"
        />
        <Counter 
          onChange={(value) => setGuestCount(value)}
          value={guestCount}
          title="Adult (16+)" 
          subtitle="How many adult are coming?"
        />
        <hr />
        <Counter 
          onChange={(value) => setRoomCount(value)}
          value={roomCount}
          title="Children (0-15)" 
          subtitle="How many Children do you have?"
        /><hr />
        <Counter 
          onChange={(value) => {
            setBathroomCount(value)
          }}
          value={bathroomCount}
          title="Pets"
          subtitle="How many pets with you?"
        />
      </div>
    )
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      title="Filters"
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      onClose={searchModal.onClose}
      body={bodyContent}
    />
  );
}

export default SearchModal;
