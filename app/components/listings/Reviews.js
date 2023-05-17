import React from "react";
import Avatar from "../Avatar";
import { MdContactPhone } from "react-icons/md";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Rating } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#bc1670" : "#308fe8",
  },
}));

function Reviews({ user }) {
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
          Reviews
        </div>
      </div>
      <hr />

      <div className="flex w-full mt-4  flex-row justify-between">
        <div className="w-1/2 p-5">
          <span className="text-lg"> Total Reviews </span>
          <h1 className="text-3xl">10.0K</h1>
          <span> Growth in reviews on this year </span>
        </div>
        <div className=" border-l-2 p-5 w-1/2">
          <span>Average Rating </span>
          <br />
          <span className="items-center text-3xl">
            4.0 <Rating className="mt-2" name="size-medium" defaultValue={2} />{" "}
          </span>
          <br />
          <span> Average rating on this year </span>
        </div>
      </div>
      <div className="flex w-full  flex-row justify-between">
        <div className="w-1/2 p-5">
          <div className="flex w-full  flex-row justify-between">
            <span className="w-1/2">Cleanliness</span>{" "}
            <span className="w-1/2">
              <BorderLinearProgress variant="determinate" value={80} /> 4.8
            </span>
          </div>
          <div className="flex w-full  flex-row justify-between">
            <span className="w-1/2">Communication</span>{" "}
            <span className="w-1/2">
              <BorderLinearProgress variant="determinate" value={80} /> 4.8
            </span>
          </div>
          <div className="flex w-full  flex-row justify-between">
            <span className="w-1/2">Check-in</span>{" "}
            <span className="w-1/2">
              <BorderLinearProgress variant="determinate" value={80} /> 4.8
            </span>
          </div>
        </div>
        <div className="w-1/2 p-5">
          <div className="flex w-full  flex-row justify-between">
            <span className="w-1/2">Accuracy</span>{" "}
            <span className="w-1/2">
              <BorderLinearProgress variant="determinate" value={80} /> 4.8
            </span>
          </div>
          <div className="flex w-full  flex-row justify-between">
            <span className="w-1/2">Location</span>{" "}
            <span className="w-1/2">
              <BorderLinearProgress variant="determinate" value={80} /> 4.8
            </span>
          </div>
          <div className="flex w-full  flex-row justify-between">
            <span className="w-1/2">Value</span>{" "}
            <span className="w-1/2">
              <BorderLinearProgress variant="determinate" value={80} /> 4.8
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-5">
        <div className="flex w-full flex-row justify-between">
          <div className="flex w-1/2 flex-row align-middle">
            <div className=" align-middle">
              <Avatar src={user?.image} />
            </div>
            <div className="flex flex-col align-middle pl-4">
              <span>Ellen</span>
              <span>May 2023</span>
            </div>
          </div>
          <div className="w-1/2">
            <Rating className="mt-2" name="size-medium" defaultValue={2} />
          </div>
        </div>
        <div>
          The most beautifully designed space - we loved everything about it!
          Every need had been thought of - from the coffee station in the room
          to the built in charger. It was amazingly
        </div>
      </div>
    </div>
  );
}

export default Reviews;
