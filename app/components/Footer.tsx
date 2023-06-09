"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <> <div className="flex flex-row px-10 mt-20 bg-white">
    <div className=" flex w-1/3 flex-col ml-40 p-5 ">
    <Image
      src="/images/logo.png"
      width={200} height={100} alt={""} unoptimized={true}
    />
    <p className="mt-2">Travessa Sá Carneiro, Edifício Isermar, LOJA H, 8200-362 Albufeira Albufeira</p>
    <p className="mt-2 text-pink-750">+351 911 126 160</p>
    <p className="mt-2 text-pink-750">info@2algarve.com</p>
  </div>
      <div
        className="
            bg-white
            p-5
            px-8
            mr-56
            flex
            justify-around
            flex-col
            w-full
          "
      >
          <div className="w-full ">
            <div className="flex flex-row w-full py-1 justify-btween">
              <span className="w-1/3 text-lg font-semibold"><span className="border-b-2 border-pink-750">Quick links</span></span>
              <span className="w-1/3 text-lg font-semibold"><span className="border-b-2 border-pink-750">More Info </span></span>
              <span className="w-1/3 text-lg font-semibold"><span className="border-b-2 border-pink-750">Follow Us </span></span></div>
          </div>
          <div className="flex flex-row w-full pt-4 justify-between">
            <div className="flex w-1/3 gap-2 font-medium flex-col">
              <Link href={'/about'}><span className="pt-2 hover:text-pink-750">About us</span></Link>
              <Link href={'/contact'}> <span className="pt-2 hover:text-pink-750">Contact us</span></Link>
              <Link href={'/blog'}> <span className="pt-2 hover:text-pink-750">Blogs</span></Link>
              <Link href={'/careers'}> <span className="pt-2 hover:text-pink-750">Careers</span></Link>
            </div>
            <div className=" flex w-1/3 gap-2 font-medium flex-col">
              <span className="pt-2 hover:text-pink-750">Signup</span>
              <span className="pt-2 hover:text-pink-750">Trust & Safety</span>
            </div>
            <div className=" flex w-1/3 flex-col">
              <span>Signup & Get Special Offers</span>
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
                  <FaFacebookF size={18} />
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
                  <AiOutlineTwitter size={18} />
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
                  <BsInstagram size={18} />
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
                  <AiFillYoutube size={18} />
                </div>
              </div>

              <div className="flex mt-3 flex-row w-full">
                <input name="myInput" placeholder="Email" className="border-2  pl-2 rounded-lg" />
                <div
                  onClick={() => console.log("input get")}
                  className="
            hidden
            w-50
            text-center
            md:block
            text-sm 
            text-white
            font-semibold 
            py-2 
            ml-2
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
            justify-center
          "
      ><Link href={'/privacypolicy'}><span className="pt-2 hover:text-pink-750">Privacy Policy</span></Link>&ensp; 
        | <Link href={'/termsconditions'}><span className="pt-2 hover:text-pink-750">Terms & Conditions</span></Link>&ensp; | All Rights Reserved
      </div>
      
    </>
  );
}

export default Footer;
