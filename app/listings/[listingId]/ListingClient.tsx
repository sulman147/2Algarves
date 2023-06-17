'use client';

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { Range } from "react-date-range";
import { useRouter } from "next/navigation";
import { differenceInDays, eachDayOfInterval } from 'date-fns';

import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import Container from "@/app/components/Container";
import { categories } from "@/app/components/navbar/Categories";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import ListingReservation from "@/app/components/listings/ListingReservation";
import ContactInfo from "@/app/components/listings/ContactInfo";
import Ammenities from "@/app/components/listings/Ammenities";
import Gallery from "@/app/components/listings/Gallery";
import Reviews from "@/app/components/listings/Reviews";
import LocationCard from "@/app/components/listings/LocationCard";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
};

interface ListingClientProps {
  // reservations?: SafeReservation[];
  listing:any;
  // currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  // reservations = [],
  // currentUser
}) => {
  const [Categories, setCategories] = useState<any>([]);


  const Api = "http://server.cashbackforever.net:5500/api/";
  const getCategories = async () => {
    try {
      const response = await axios.get(`${Api}category`);

      // Process the response data
      const data = response.data;
      setCategories(data);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const findCategoryById = (id:any) => {
    const foundItem = Categories.find((item:any) => item.id === id);
    return foundItem ? foundItem.name : null;
  };
  let categoryname = findCategoryById(listing.listing.category_id)
  // const loginModal = useLoginModal();
  // const router = useRouter();

  // const disabledDates = useMemo(() => {
  //   let dates: Date[] = [];

  //   reservations.forEach((reservation: any) => {
  //     const range = eachDayOfInterval({
  //       start: new Date(reservation.startDate),
  //       end: new Date(reservation.endDate)
  //     });

  //     dates = [...dates, ...range];
  //   });

  //   return dates;
  // }, [reservations]);

  const category = useMemo(() => {
     return categories.find((items) => 
      items.label === categoryname);
  }, [categoryname]);

  // const [isLoading, setIsLoading] = useState(false);
  // const [totalPrice, setTotalPrice] = useState(listing.price);
  // const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  // const onCreateReservation = useCallback(() => {
  //     if (!currentUser) {
  //       return loginModal.onOpen();
  //     }
  //     setIsLoading(true);

  //     axios.post('/api/reservations', {
  //       totalPrice,
  //       startDate: dateRange.startDate,
  //       endDate: dateRange.endDate,
  //       listingId: listing?.id
  //     })
  //     .then(() => {
  //       toast.success('Listing reserved!');
  //       setDateRange(initialDateRange);
  //       router.push('/trips');
  //     })
  //     .catch(() => {
  //       toast.error('Something went wrong.');
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     })
  // },
  // [
  //   totalPrice, 
  //   dateRange, 
  //   listing?.id,
  //   router,
  //   currentUser,
  //   loginModal
  // ]);

  // useEffect(() => {
  //   if (dateRange.startDate && dateRange.endDate) {
  //     const dayCount = differenceInDays(
  //       dateRange.endDate, 
  //       dateRange.startDate
  //     );
      
  //     if (dayCount && listing.price) {
  //       setTotalPrice(dayCount * listing.price);
  //     } else {
  //       setTotalPrice(listing.price);
  //     }
  //   }
  // }, [dateRange, listing.price]);
  return ( 
    <Container>
      <div 
        className="
          max-w-screen-lg 
          mx-auto
        "
      > 
      
        <div className="flex flex-col ">
          <ListingHead
            title={listing.listing.title}
            videoSrc={listing.listing.video_link}
            locationValue={listing.listing.city}
            id={listing.listing.id}
            // currentUser={currentUser}
          />
          <div 
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
            "
          >
            <ListingInfo
              user={"Algarve"}
              category={category}
              description={listing.listing.description}
              adultCount={listing.listing.no_of_adults}
              petCount={listing.listing.no_of_pets}
              guestCount={listing.listing.no_of_guests}
              locationValue={listing.listing.city}
              features= {listing.listing.features}
            />
            <div 
              className="
                order-first 
                mb-10 
                rounded-xl
                md:order-last 
                md:col-span-3
              "
            >
              <LocationCard locationValue={listing.listing.city}/>
              <ContactInfo price = {listing.price}/>
              <Gallery Gallery = {listing.listing.gallery}/>
              
            </div>
          </div>
          <Reviews user={listing.user}/>
          
        </div>
      </div>
    </Container>
   );
}
 
export default ListingClient;
