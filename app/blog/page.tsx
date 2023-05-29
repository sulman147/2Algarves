import ClientOnly from "@/app/components/ClientOnly";
import Footer from "../components/Footer";
import Link from "next/link";
import PostPage from "../post/[postid]/page";
import Image from "next/image";
import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
import Banner from "../components/Banner";

const BlogPage = async () => {
  const postsData = [
    {id: 1, imageSrc: "/images/1.jpg", title: "Top 10 Scenic Drives Around the World", date: "25 May, 2023"},
    {id: 2, imageSrc: "/images/2.jpg", title: "A8 Weird and Wonderful Museums Around the World", date: "28 Apr, 2023"},
    {id: 3, imageSrc: "/images/3.jpg", title: "10 Under-the-Radar Museums in New York City", date: "23 Mar, 2023"},
    {id: 4, imageSrc: "/images/4.jpg", title: "10 Under-the-Radar Museums in London", date: "20 Feb, 2023"},
    {id: 5, imageSrc: "/images/5.jpg", title: "9 Under-the-Radar Museums in Amsterdam", date: "01 Jan, 2023"},
  ]

  return (
    <ClientOnly>
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
        {postsData.map((data) => { return (<BlogPost key={data.id} {...data}></BlogPost>)})}
      </div>
      
    </Container>
    <Footer/>
  </ClientOnly>
        

  );
}
 
export default BlogPage;
