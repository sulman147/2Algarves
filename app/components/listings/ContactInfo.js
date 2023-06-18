"use client";

import { MdContactPhone } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
const ContactInfo = ({ price }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };
  return (
    <div className="flex flex-col bg-white rounded-xl mt-3">
      <div className="flex flex-row items-center my-2 ml-6 gap-4 ">
        <MdContactPhone size={20} />
        <div
          className="
        flex
        font-semibold
        text-xl
        items-center
      "
        >
          Contact Info
        </div>
      </div>
      <hr />
      <div className="p-4">
        <div className="flex flex-row justify-between">
          <div>
            <span className="text-3xl">$ {price}</span> /Night{" "}
          </div>
          <div
            className="
            text-sm 
            text-green-600
            font-bold
            mt-2
            cursor-pointer
          "
          >
            Contact Host
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <AiFillStar size={19} className="fill-yellow-500" />
          4.5 <span className="text-pink-750 ">(38 Reviews)</span>&ensp; - Very
          Good!
        </div>
        <br />
        <div className="flex flex-row">
          <BsCheck2Circle size={19} className="fill-green-400" />
          &ensp;Your dates are available
        </div>
        <div className="border-2 mt-2 rounded-md flex flex-col">
          {/* <CheckInOut /> */}
          <div className="border-b-2 w-full flex flex-row">
            <div className="border-r-2 w-1/2 p-2 flex flex-col">
              <span>Check In</span>
              <DatePicker
                selected={checkInDate}
                onChange={handleCheckInDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select check-in date"
              />
              {/* <span className="text-pink-750">Aug 1</span> */}
            </div>
            <div className="flex w-1/2 p-2 flex-col">
              <span>Check Out</span>
              <DatePicker
                selected={checkInDate}
                onChange={handleCheckInDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select check-out date"
              />
            </div>
          </div>
          <div className="flex p-2 flex-col">
            <span>Guests</span>
            <span className="text-pink-750">2 guests</span>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-3">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">$ 100.5</span>
        </div>
        <div
          className="
            w-50
            mt-3
            md:block
            text-sm 
            text-white
            font-semibold 
            py-2 
            px-4
            text-center
            flex
            bg-pink-750
            rounded-lg 
            hover:bg-orange-700 
            hover:text-white 
            transition
            cursor-pointer
          "
        >
          Book now
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
