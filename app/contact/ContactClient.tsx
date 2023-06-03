'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import Input from "../components/inputs/Input";
import { FieldValues, useForm } from "react-hook-form";
import TextArea from "../components/inputs/Textarea";
import Button from "../components/Button";
import Map from "../components/Map";
import { Checkbox } from "@mui/material";
import Link from "next/link";
import LocationMap from "../components/listings/LocationMap";
import { BiEnvelope, BiLocationPlus, BiPhone } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Inputtwo from "../components/inputs/Inputtwo";

const ContactClient: React.FC = ({
}) => {
  const router = useRouter();
  const label = { inputProps: { 'aria-label': 'By submitting this form, you are agreeing with our private policy' } };
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
    <div className="-mt-6">
      <div className={`flex flex-col  relative h-[55vh] justify-end  bg-cover gap-4	pl-8 pr-8`} style={{ backgroundImage: `url('/images/contactus.jpg')` }}>
        <div className="absolute align-middle flex-col  flex justify-center   inset-0 bg-gradient-to-b from-[#fff0] to-black bg-opacity-50">
          <h1 className=" items-center flex justify-center text-white font-bold md:text-2xl lg:text-4xl">Contact Us</h1>
        </div>
      </div>
      <div className="p-5
      px-24
      flex
      justify-center
      items-center
      flex-col
      w-full" >



        <h2 className="text-2xl font-bold mb-5">Welcome to 2algarve. Find the best places in Algarve with the help of
          Our best tourist</h2>
        <hr/>
        <div className="flex gap-10 mt-5 w-[75%] ">
          <div className="flex flex-col gap-5 w-full">
            <Inputtwo
              id="name"
              label="Name"
              required register={register} errors={errors} />
            <Inputtwo
              id="email"
              label="Email"
              required register={register} errors={errors} />
            <TextArea
              id="message"
              rows={5}
              label="Message"
              disabled={false}
              register={register}
              errors={errors}
              required
            />
            <div className="flex ">
              <Checkbox {...label} /><span className="font-light">By submitting this form, you are agreeing with our <span className="text-[#cb1670] cursor-pointer">private policy</span></span>
            </div>
            <div className="p-4">
              <Button
                disabled={false}
                label="Send"
                onClick={() => { }}
              />
            </div>
          </div>
          <div className="w-full ">
            <div className="flex flex-row align-middle gap-3">
            <div
              className="
            p-2 
            h-10
            bg-pink-750 
            rounded-full 
            text-white
            hover:bg-orange-700 
            hover:text-white 
            "
            >
              <CiLocationOn size={24} /> </div> <span className=" pl-5 text-[1.1rem]">Travessa Sá Carneiro, Edifício Isermar, LOJA H, 8200-362 Albufeira Albufeira</span>
            </div>
            <div className="flex flex-row align-middle gap-3">
            <div
              className="
            p-2 
            h-10
            bg-pink-750 
            rounded-full 
            text-white
            hover:bg-orange-700 
            hover:text-white 
            "
            >
              <BiPhone size={24} /> </div> <span className=" mt-2 pl-5 text-[1.1rem]">+351 911 126 160</span>
            </div>
          
              <div className="flex flex-row align-middle mt-5 gap-3">
            <div
              className="
            p-2 
            h-10
            bg-pink-750 
            rounded-full 
            text-white
            hover:bg-orange-700 
            hover:text-white 
            "
            >
              <BiEnvelope size={24} /> </div> <span className=" pl-5 mt-2 text-[1.1rem]">info@2algarve.com</span>
            </div>
            </div>

          </div>
          <div className="mt-10 w-[75%]" >
            <div className="flex flex-row justify-between">
          <h2 className="text-2xl mt-2 font-bold">Directions</h2>
          <div className=" w-[180px]">
              <Button
                disabled={false}
                label="Get Direction"
                onClick={() => { }}
              />
            </div>
          </div>
          <LocationMap locationValue="Albufeira" />
        </div>

        </div>

       
    </div>
  );
}

export default ContactClient;
