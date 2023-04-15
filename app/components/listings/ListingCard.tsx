'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from 'date-fns';

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
import { AiOutlinePlayCircle} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

interface ListingCardProps {
  data: SafeListing;
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

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (disabled) {
      return;
    }

    onAction?.(actionId)
  }, [disabled, onAction, actionId]);

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
      onClick={() => router.push(`/listings/${data.id}`)} 
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
            <Image
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
            />
            
            <div className="
              absolute
              top-3
              right-3
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
              <div>
                <div className="flex flex-row mt-3 gap-2 w-full">
                <div 
            className="
            p-2 
            bg-button 
            rounded-full 
            text-white
            hover:bg-orange-700 
            hover:text-white 
            "
          >
            <CiLocationOn size={24} />
          </div>
          <div 
            className="
              p-2 
              bg-button 
              rounded-full 
              text-white
              hover:bg-orange-700 
              hover:text-white 
            "
          >
            <AiOutlinePlayCircle size={24} />
          </div>
                  {/* <div 
                    //  onClick={onRent}
                    className="
                      w-22
                      md:block
                      text-sm 
                      text-center
                    text-white
                      font-semibold 
                      py-3 
                      px-3 
                    bg-purple-500
                      rounded-md 
                    hover:bg-sky-500 
                    hover:text-black 
                      transition 
                      cursor-pointer
                      "
                  > Videos
                  </div>
                  <div 
                  // onClick={onRent}
                    className="
                      w-22
                      md:block
                      text-sm
                      text-center 
                    text-white
                      font-semibold 
                      py-3 
                      px-3 
                    bg-purple-500
                      rounded-md 
                    hover:bg-sky-500 
                    hover:text-black 
                      transition 
                      cursor-pointer
                      "
                    >
                    Maps
                  </div> */}
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