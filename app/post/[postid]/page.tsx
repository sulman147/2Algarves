import ClientOnly from "@/app/components/ClientOnly";

import Footer from "@/app/components/Footer";
import PostClient from "./PostClient";

interface IParams {
  postId: any;
}

const PostPage = async ({ params }: { params: IParams }) => {
  return (
    <ClientOnly>
      <PostClient postId={params} />
      
      <Footer/>
    </ClientOnly>
  );

   
}
 
export default PostPage;
