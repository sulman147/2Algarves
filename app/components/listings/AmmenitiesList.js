"use client";

import { IconType } from "react-icons";

const AmmenitiesList = ({ icon, description }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-col">
          <div className="text-neutral-500 font-light">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default AmmenitiesList;
