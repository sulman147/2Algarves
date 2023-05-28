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
import { BiLocationPlus, BiPhone } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

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
    <div className="relative block">
    <Image
      src="/images/contact.png"
        width={300} height={200}  alt={""} unoptimized={true}
        className="w-full h-1/3 mb-5 -mt-10 "
      />
      <span className="absolute top-28 w-full block text-center text-4xl font-bold text-white">Contact Us</span>
    <div className="p-5
      px-24
      flex
      justify-center
      items-center
      flex-col
      w-full" >
 
      

      <h2 className="mb-5">Welcome to 2algarve. Find the best places in Algarve with the help of
Our best tourist</h2>

    <div className="flex gap-10 w-[75%] ">
      <div className="flex flex-col gap-5 w-full">
      <Input
          id="name"
          label="Name"
          required register={register} errors={errors}      />
      <Input
          id="email"
          label="Email"
          required register={register} errors={errors}        />
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
        <Checkbox {...label} /><span className="font-light">By submitting this form, you are agreeing with our private policy</span>
        </div>
      <div className="p-4">
        <Button 
          disabled={false}
          label="Send"
          onClick={()=>{}}
        />
      </div>
      </div>
      <div className="w-full mt-10">
      <div className="flex flex-row align-middle gap-3">
        <CiLocationOn size={60} color="#cb1670"/> <span className="text-[1.1rem]">Travessa Sá Carneiro, Edifício Isermar, LOJA H, 8200-362 Albufeira Albufeira</span>
        </div>
        <Link href="tel:+351 911 126 160" className="flex flex-row align-middle mt-10"><BiPhone color="#cb1670" size={40}/> <span className="text-[1.1rem]">+351 911 126 160</span></Link>
      
      </div>
      
    </div>

      <div className="mt-10 w-[75%]" >
        <h2 className="text-2xl font-bold">Directions</h2>
        <LocationMap locationValue="Albufeira"/>
      </div>
    </div>
    </div>
   );
}
 
export default ContactClient;
