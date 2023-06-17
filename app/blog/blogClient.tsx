'use client';
import axios from "axios";
import React,{ useEffect, useState } from "react";
import Container from "@/app/components/Container";
import Banner from "../components/Banner";
import BlogPost from "../components/BlogPost";


const BlogClient = ({
  // reservations = [],
  // currentUser
}) => {
    const [postsData, setPostsData] = useState([]);

    const Api = "http://server.cashbackforever.net:5500/api/";
    const getPostsData = async () => {
      try {
        const response = await axios.get(`${Api}blogs`);
  
        // Process the response data
        const data = response.data;
        console.error("this is data",data);
        setPostsData(data);
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };
  
    useEffect(() => {
      console.error("this is data3333333");
        getPostsData();
    }, []);
  return ( 
    <Container>
      <Banner title={"Blog"} imageURL={'/images/blog.jpg'}/>
      <div 
        className="
          pt-16
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-4
          2xl:grid-cols-4
          gap-8
        "
      >
        {postsData.map((data:any) => { return (<BlogPost key={data.id} {...data}></BlogPost>)})}
      </div>
      
    </Container>
   );
}
 
export default BlogClient;

