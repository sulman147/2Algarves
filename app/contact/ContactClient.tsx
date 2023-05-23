'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import Input from "../components/inputs/Input";
import { FieldValues, useForm } from "react-hook-form";
import TextArea from "../components/inputs/Textarea";
import Button from "../components/Button";
import Map from "../components/Map";


const ContactClient: React.FC = ({
}) => {
  const router = useRouter();
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
    <div className="p-5
      px-24
      flex
      justify-center
      items-center
      flex-col
      w-full" >
 
      <Image
      src="/images/contact.jpg"
        width={300} height={200}  alt={""}
        className="w-4/6 mb-5 "
      />

      <h2 className="mb-5">Welcome to 2algarve. Find the best places in Algarve with the help of
Our best tourist</h2>

    <div className="flex gap-10 w-4/6 ">
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
        id="review"
        rows={5}
        label="Review"
        disabled={false}
        register={register}  
        errors={errors}
        required
      />
      <div className="p-4">
        <Button 
          disabled={false} 
          label="Send" 
          onClick={()=>{}}
        />
      </div>
      </div>
      <div className="w-full">
      <TextArea
        id="address"
        rows={5}
        label="Address"
        disabled={false}
        register={register}  
        errors={errors}
        required
      />
      <Input
          id="ph"
          label="Phone"
          required register={register} errors={errors}        />
      </div>
      
    </div>

      <div className="mt-10 w-4/6" >
        <h2 className="text-2xl font-bold">Reviews & Directions</h2>
        <Map center={[-39.67774,  -108.41111]} />
      </div>
    </div>
   );
}
 
export default ContactClient;
