'use client';

import Container from "@/app/components/Container";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import Button from "@/app/components/Button";
import {  FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Heading from "@/app/components/Heading";
import Inputtwo from "@/app/components/inputs/Inputtwo";

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
      <div className="  mt-5 gap-5 flex flex-row w-full">
        <div className="flex flex-col  w-[70%]">
          <Heading
            title="️The Unexpected Benefits that Couchsurfing Brings"
          />
          <div className=" h-[60vh]">
            <Image
              src="/images/1.jpg"
              width={300} height={600} alt={""} unoptimized={true}
              className="w-full h-full mb-5 rounded-lg object-cover mt-3"
            />
          </div>
          <div className="mt-8" >
            <span className="font-normal bg-[#cb1670] text-white px-2 py-2 rounded-md text-sm">25 May, 2023</span>
          </div>
          <div className="mt-3 text-lg w-[99%] font-light">
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
        <div className="bg-white mt-10 h-full rounded-xl align-middle p-5 gap-5 flex flex-col w-[30%]">
          <Inputtwo
            id="name"
            label="Name"
            required register={register} errors={errors} />
          <Inputtwo
            id="email"
            label="Email"
            required register={register} errors={errors} />
          <Button
            disabled={false}
            label="Subscribe"
            onClick={() => { }}
          />
          <hr />
          <h1 className="font-bold text-lg">Connect :</h1>
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
              <FaFacebookF size={24} /> </div>
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
              <FaTwitter size={24} />  </div>
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
              <FaInstagram size={24} /> </div>
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
              <FaYoutube size={24} /> </div>

          </div>
        </div>
      </div>


    </Container>
  );
}

export default PostClient;
