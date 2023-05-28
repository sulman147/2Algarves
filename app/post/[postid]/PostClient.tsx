'use client';

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { Range } from "react-date-range";
import { useRouter } from "next/navigation";
import { differenceInDays, eachDayOfInterval } from 'date-fns';

import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import Container from "@/app/components/Container";
import { categories } from "@/app/components/navbar/Categories";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import ListingReservation from "@/app/components/listings/ListingReservation";
import ContactInfo from "@/app/components/listings/ContactInfo";
import Ammenities from "@/app/components/listings/Ammenities";
import Gallery from "@/app/components/listings/Gallery";
import Reviews from "@/app/components/listings/Reviews";
import LocationCard from "@/app/components/listings/LocationCard";
import Image from "next/image";
import Input from "@/app/components/inputs/Input";
import { FieldValues, useForm } from "react-hook-form";
import Button from "@/app/components/Button";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface Props {
  postId: number;
}

const PostClient: React.FC<Props> = ({ postId
}) => {
  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      review: ''
    },
  });

  return ( 
    <Container>
      <div 
        className="
          max-w-screen-lg 
          mx-auto
        "
      > 
      <div className="mb-[45px]"><h2 className="text-2xl font-bold">Another Article</h2></div>
      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-4">
        <Image
          src="/images/aboutpic.png"
            width={300} height={600}  alt={""} unoptimized={true}
            className="w-full mb-5 -mt-10 "
          />
          <span className="bg-slate-400 mb-10 text-white p-3 rounded-md">23 Feb, 2023</span>
          <div className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta accusamus est nostrum & 
            odit voluptate tempora&#44; officia at corrupti sit nihil molestiae ratione doloremque 
            similique quia&#44; ipsa culpa vitae sunt.
            orem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta accusamus est nostrum & 
            odit voluptate tempora&#44; officia at corrupti sit nihil molestiae ratione doloremque 
            similique quia&#44; ipsa culpa vitae sunt.
            orem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta accusamus est nostrum & 
            odit voluptate tempora&#44; officia at corrupti sit nihil molestiae ratione doloremque 
            similique quia&#44; ipsa culpa vitae sunt.<br />
            orem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta accusamus est nostrum & 
            odit voluptate tempora&#44; officia at corrupti sit nihil molestiae ratione doloremque 
            similique quia&#44; ipsa culpa vitae sunt.
            orem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta accusamus est nostrum & 
            odit voluptate tempora&#44; officia at corrupti sit nihil molestiae ratione doloremque 
            similique quia&#44; ipsa culpa vitae sunt.
            orem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta accusamus est nostrum & 
            odit voluptate tempora&#44; officia at corrupti sit nihil molestiae ratione doloremque 
            similique quia&#44; ipsa culpa vitae sunt.
          </div>
          </div>
        <div className="col-auto flex flex-col gap-5">
        <Input
          id="name"
          label="Name"
          required register={register} errors={errors}      />
        <Input
          id="email"
          label="Email"
          required register={register} errors={errors}      />
          <Button 
          disabled={false}
          label="Subscribe"
          onClick={()=>{}}
        />
        <hr />
        <h3>Social Links</h3>
        <div className="flex gap-5"><FaFacebook size={40}/> <FaTwitter size={40} /> <FaInstagram size={40} /></div>
        </div>

      </div>
      </div>
        
    </Container>
   );
}
 
export default PostClient;
