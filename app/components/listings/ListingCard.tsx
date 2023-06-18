'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { format } from 'date-fns';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useCountries from "@/app/hooks/useCountries";
import {
  SafeListing,
  SafeReservation,
  SafeUser
} from "@/app/types";

import HeartButton from "../HeartButton";
import Button from "../Button";
import ClientOnly from "../ClientOnly";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { CiLocationOn, CiCircleMore } from "react-icons/ci";
import axios from "axios";

interface ListingCardProps {
  data: any;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null
};

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();
  const [Categories, setCategories] = useState<any>([]);
  const location = getByValue(data.locationValue);
  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }
      onAction?.(actionId)
    }, [disabled, onAction, actionId]);

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
  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price;
  }, [reservation, data.price]);

  const findCategoryById = (id:any) => {
    const foundItem = Categories.find((item:any) => item.id === id);
    return foundItem ? foundItem.name : null;
  };
  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);


    return `${format(start, 'PP')} - ${format(end, 'PP')}`;
  }, [reservation]);

  return (
    <div
      // 
      className="col-span-1 cursor-pointer rounded-xl bg-white group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
        >
          {/* <Image
              fill
              className="
                object-cover 
                h-full 
                w-full
                group-hover:scale-110 
                transition
              "
              src={data.imageSrc}
              alt="Listing"
            /> */}
          <Carousel showThumbs={false} >
            {data.gallery.map((item: any) => (
              <div key={item.id} onClick={() => router.push(`/listings/${item.listing_id
                }`)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <img src={item.image} alt={`Image ${item.id}`} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            ))}


          </Carousel>


          <div className="
              absolute
              top-4
              right-7
            ">
            <HeartButton
              listingId={data.id}
              currentUser={currentUser}
            />
          </div>
        </div>
        <div className="flex flex-row place-content-between px-4 pb-2 gap-2 w-full " >
          <div>
            <img className="relative mx-auto h-[50px] w-[50px]  mt-[-32px] z-100 rounded-full sm:mx-0 sm:shrink-0" src="/images/Algarve.jpg" alt="brand" />
            <div className="font-semibold text-lg">
            {data.country}, {data.location}
            </div>
            <div className="font-light text-neutral-500">
              {findCategoryById(data.category_id)}
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className="font-semibold">
                $ {data.rent}
              </div>
              {!reservation && (
                <div className="font-light">night</div>
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-row mt-3 gap-2 w-full">
              <div
                className="
            p-2 
            bg-pink-750 
            rounded-full 
            text-white
            hover:bg-orange-700 
            hover:text-white 
            "
                onClick={() => router.push(`/listings/${data.id}`)}
              >
                <CiCircleMore size={24} />
              </div>

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
                <AiOutlinePlayCircle size={24} />
              </div>
            </div>
          </div>
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>

    </div>
  );
}

export default ListingCard;