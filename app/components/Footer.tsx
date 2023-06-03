"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

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
            justify-around
            flex-col
            w-full
          "
      >
        {/* <div className=" w-[15%] flex items-center justify-center ">
          <Image
            src="/images/logo.png"
            width={300} height={200} alt={""} unoptimized={true}
            style={{ height: '50%' }}
          />
        </div> */}
          <div className="w-full ">
            <hr className="bg-black"/>
            <div className="flex flex-row w-full py-1 justify-btween">
              <span className="w-1/3 text-lg font-semibold">Quick links</span>
              <span className="w-1/3 text-lg font-semibold">More Info</span>
              <span className="w-1/3 text-lg font-semibold">Follow Us</span></div><hr />
          </div>
          <div className="flex flex-row w-full pt-4 justify-between">
            <div className="flex w-1/3 gap-2 font-medium flex-col">
              <Link href={'/about'}><span className="pt-2 hover:text-pink-750">About us</span></Link>
              <Link href={'/contact'}> <span className="pt-2 hover:text-pink-750">Contact us</span></Link>
              <Link href={'/blog'}> <span className="pt-2 hover:text-pink-750">Blogs</span></Link>
              <span className="pt-2 hover:text-pink-750">Careers</span>
            </div>
            <div className=" flex w-1/3 gap-2 font-medium flex-col">
              <span className="pt-2 hover:text-pink-750">Signup</span>
              <span className="pt-2 hover:text-pink-750">Trust & Safety</span>
              <span className="pt-2 hover:text-pink-750">Our Partners</span>
            </div>
            <div className=" flex w-1/3 flex-col">
              <span>Sign up to get the latest news ande More ...</span>
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
