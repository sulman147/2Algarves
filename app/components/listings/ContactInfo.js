"use client";

import { MdContactPhone } from "react-icons/md";

const ContactInfo = ({}) => {
  return (
    <div className="flex flex-col bg-white rounded-xl mt-3 h-96">
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
      Contact Info
    </div>
  );
};

export default ContactInfo;
