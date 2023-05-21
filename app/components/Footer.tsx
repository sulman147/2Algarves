"use client";
import React from "react";
import Container from "@/app/components/Container";
import ClientOnly from "../components/ClientOnly";
import { CiCircleMore } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div
        className="
            bg-white
            p-5
            px-24
            mt-20
            flex
            justify-center
            flex-row
            w-full
          "
      >
        <div className="flex px-24 flex-col">
          <span className="pt-2 hover:text-pink-750">About us</span>
          <span className="pt-2 hover:text-pink-750">Contact us</span>
          <span className="pt-2 hover:text-pink-750">2Algarve Blogs</span>
          <span className="pt-2 hover:text-pink-750">Careers</span>
        </div>
        <div className=" flex px-24 flex-col">
          <span className="pt-2 hover:text-pink-750">Signup</span>
          <span className="pt-2 hover:text-pink-750">Trust & Safety</span>
          <span className="pt-2 hover:text-pink-750">Our Partners</span>
        </div>
        <div className=" flex px-24 flex-col">
          <span className="font-semibold">Follow Us</span>
          <div className="flex flex-row mt-3 gap-2 w-full">
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
              <FaFacebookF size={24} />
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
              <AiOutlineTwitter size={24} />
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
              <BsInstagram size={24} />
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
              <AiFillYoutube size={24} />
            </div>
          </div>

          <div className="flex mt-3 flex-row w-full">
            <input name="myInput" placeholder="Email" className="border-2 pl-2 rounded-lg" />
            <div
              onClick={() => console.log("input get")}
              className="
            hidden
            w-50
            md:block
            text-sm 
            text-white
            font-semibold 
            py-2 
            ml-3
            px-4
            bg-pink-750
            rounded-lg 
            hover:bg-orange-700 
            hover:text-white 
            transition
            cursor-pointer
          "
            >
              Subscribe
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="
            bg-white
            p-5
            px-24
            flex
            flex-row
            w-full
            justify-around
          "
      >
        Privacy Policy | Terms & Conditions | All Rights Reserved
      </div>
    </>
  );
}

export default Footer;
