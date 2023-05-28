
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";

import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

import Footer from "@/app/components/Footer";
import PostClient from "./PostClient";

interface IParams {
  postId: number;
}

const PostPage = async ({ params }: { params: IParams }) => {

  return (
    <ClientOnly>
      <PostClient postId={params.postId} />
      
      <Footer/>
    </ClientOnly>
  );

   
}
 
export default PostPage;
