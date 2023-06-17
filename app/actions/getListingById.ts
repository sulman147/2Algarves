import prisma from "@/app/libs/prismadb";
import axios from "axios";

interface IParams {
  listingId?: string;
}

export default async function getListingById(
  params: IParams
) {
  try {
    const { listingId } = params;
    
    const Api = "http://server.cashbackforever.net:5500/api/";
    const response = await axios.get(`${Api}listings/${listingId}`);
    
    const listing = response.data


    if (!listing) {
      return null;
    }

    return {
      listing,
     
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
