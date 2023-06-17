'use client';

import ClientOnly from "@/app/components/ClientOnly";
import Footer from "../components/Footer";
import React from 'react'
import BlogClient from "./blogClient";

const BlogPage = () => {

  return (
    <ClientOnly>
    <BlogClient/>
    <Footer/>
  </ClientOnly>
        

  );
}
 
export default BlogPage;



