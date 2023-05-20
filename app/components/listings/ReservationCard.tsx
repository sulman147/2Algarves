'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
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
import useReviewModal from "@/app/hooks/useReviewModel";
import useLoginModal from "@/app/hooks/useLoginModal";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null
};

const ReservationCard: React.FC<ListingCardProps> = ({
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

  const loginModal = useLoginModal();
  const reviewModel = useReviewModal();
  const location = getByValue(data.locationValue);

  const onReview = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    reviewModel.onOpen();
    console.log("Adding Listing")
  }, [loginModal, reviewModel, currentUser]);

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

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
      className="col-span-1 cursor-pointer group"
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
            <div onClick={() => router.push(`/listings/${data.id}`)}>
              <img src="/images/1.jpg" />
            </div>
            <div onClick={() => router.push(`/listings/${data.id}`)}>
              <img src="/images/2.jpg" />

            </div>
            <div onClick={() => router.push(`/listings/${data.id}`)}>
              <img src="/images/5.jpg" />

            </div>
            <div onClick={() => router.push(`/listings/${data.id}`)}>
              <img src="/images/3.jpg" />

            </div>
            <div onClick={() => router.push(`/listings/${data.id}`)}>
              <img src="/images/4.jpg" />

            </div>
            <div onClick={() => router.push(`/listings/${data.id}`)}>
              <img src="/images/6.jpg" />

            </div>
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
        <div className="flex flex-row place-content-between gap-2 w-full " >
          <div>
            <img className="relative mx-auto h-20 w-20 lg:ml-3 md:ml-6 sm:ml-4 -mt-16 z-100 rounded-full sm:mx-0 sm:shrink-0" src="/images/Algarve.jpg" alt="brand" />
            <div className="font-semibold text-lg">
              {location?.region}, {location?.label}
            </div>
            <div className="font-light text-neutral-500">
              {reservationDate || data.category}
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className="font-semibold">
                $ {price}
              </div>
              {!reservation && (
                <div className="font-light">night</div>
              )}
            </div>
          </div>
          
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={"Review"}
            onClick={onReview}
          />
        )}
      </div>

    </div>
  );
}

export default ReservationCard;
