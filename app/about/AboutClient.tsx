'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeReservation, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ReservationCard from "../components/listings/ReservationCard";
import Image from "next/image";


const AboutClient: React.FC = ({
}) => {
  const router = useRouter();


  return (
    <div className="p-5
      px-24
      flex
      justify-center
      items-center
      flex-col
      w-full" >
 
      <Image
      src="/images/aboutpicture.jpg"
        width={300} height={200}  alt={""}
        className="w-4/6 mb-5 "
      />
      
      <span className="text-2xl font-bold underline mb-5">About</span>
      <div className="text-left w-4/6">

        <h2 className="text-4xl font-bold mb-5 underline decoration-[#58a4ab]">We help people bring their creative ideas to life</h2>
        <p className="mb-5">Millions of people around the world visit 2algarve to buy and sell creative assets, use
          smart design templates, learn creative skills or even hire freelancers. With an industryleading marketplace paired with an unlimited subscription service, 2algarve helps
          creatives like you get projects done faster</p>
          <p>Whether it's graphic templates, website themes, photos, video or audio, there's every
          chance you’ll spot something from 2algarve today, from a café logo to a Hollywood title
          sequence!
          </p>
      </div>
      <div className="w-4/6 text-center mt-5 mb-5 p-10">
        <div className="border-2 border-[#58a4ab] p-10">Our Mission</div>
      </div>
      
      <div className="w-4/6">
        <h2 className="text-4xl font-bold mb-5">Meet The Founder</h2>
        <div className="flex gap-5">
          <div className="min-w-fit"><Image
      src="/images/personimage.jpg"
        width={300} height={200}  alt={""}
        
      /></div>
          <div>John Thompson is the visionary founder of XYZ Company, a transformative leader with a passion for innovation and exceptional business acumen. With a diverse background and strategic planning skills, he has propelled XYZ Company to the forefront of its field. John's relentless pursuit of excellence, ability to identify emerging trends, and foster a culture of creativity have driven the company's remarkable success. He inspires and empowers his team, invests in people, and promotes social responsibility. Under his guidance, XYZ Company continues to revolutionize industries, making John a trailblazing founder and industry luminary.</div>
        </div>
      </div>
    </div>
   );
}
 
export default AboutClient;
