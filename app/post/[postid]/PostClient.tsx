'use client';

import Container from "@/app/components/Container";
import Image from "next/image";
import Input from "@/app/components/inputs/Input";
import { FieldValues, useForm } from "react-hook-form";
import Button from "@/app/components/Button";
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

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
      <div className=" h-[50vh] gap-5 flex flex-row w-full">
        <div className="flex flex-col  w-[70%]">
        <h2 className=" text-xl font-bold" >The Unexpected Benefits that Couchsurfing Brings</h2>
        <Image
          src="/images/1.jpg"
            width={300} height={600}  alt={""} unoptimized={true}
            className="w-full h-[50vh] mb-5 rounded-lg object-cover mt-2"
          />
        </div>
        <div className="bg-white mt-8 h-full rounded-xl align-middle p-5 gap-5 flex flex-col w-[30%]">
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
        <div className="flex justify-center  gap-5">
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
           <FaFacebookF size={20}/> </div>
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
          <FaTwitter size={20} />  </div>
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
          <FaInstagram size={20} /> </div>
        </div>
        
        

        </div>

      </div>
      <div className="bg-white rounded-xl  mt-16 flex flex-col p-6 w-full">
      <div className="">
      <span className="font-normal bg-[#cb1670] text-white px-2 py-2 rounded-md text-sm">25 May, 2023</span>
        </div>
        <div className="mt-3 text-lg font-light">
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
        
    </Container>
   );
}
 
export default PostClient;
