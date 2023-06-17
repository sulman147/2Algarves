'use client';

import Container from "@/app/components/Container";
import Image from "next/image";
import axios from "axios";
import React,{ useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Button from "@/app/components/Button";
import {  FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Heading from "@/app/components/Heading";
import Inputtwo from "@/app/components/inputs/Inputtwo";

interface Props {
  postId: any;
}

const PostClient: React.FC<Props> = ({ postId
}) => {
  const id = Number(postId.postid)
  const [postData, setPostData] = useState<any>([]);

    const Api = "http://server.cashbackforever.net:5500/api/";
    const getPostsData = async () => {
      console.error("this is data2222222");
      try {
        const response = await axios.get(`${Api}blogs/${id}`);
  
        // Process the response data
        const data = response.data;
        console.error("this is data",data);
        setPostData(data);
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };
  
    useEffect(() => {
      console.error("this is data3333333");
        getPostsData();
    }, []);
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
  function createMarkup() {
    return { __html: `${postData?.description}` };
  }
  let date = new Date(postData.created_at);
  const formattedDate = date.toLocaleString("en-US",{ year: "numeric", month: "short", day: "numeric" });
  
  return (

    <Container>
      <div className="  mt-5 gap-5 flex flex-row w-full">
        <div className="flex flex-col  w-[70%]">
          <Heading
            title={postData.title}
          />
         <div className="
          w-full
          mt-3
          h-[20vh]
          overflow-hidden 
          rounded-xl
          relative
          video-responsive
        "
      >
         <iframe
      width="1053"
      height="480"
      src={postData.video_link}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
        
      </div>
          <div className="mt-8" >
            <span className="font-normal bg-[#cb1670] text-white px-2 py-2 rounded-md text-sm">{formattedDate}</span>
          </div>
          <div
              className="mt-3 text-lg w-[99%] font-light"
              dangerouslySetInnerHTML={createMarkup()}
            />
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
