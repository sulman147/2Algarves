import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CheckInOut = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  return (
    <div>
      <h2>Check-in and Checkout Dates</h2>
      <div>
        <label>Check-in Date:</label>
        <DatePicker
          selected={checkInDate}
          onChange={handleCheckInDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select check-in date"
        />
      </div>
      <div>
        <label>Checkout Date:</label>
        <DatePicker
          selected={checkOutDate}
          onChange={handleCheckOutDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select checkout date"
        />
      </div>
    </div>
  );
};

export default CheckInOut;
