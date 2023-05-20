'use client';

import {useState } from "react";
import { toast } from "react-hot-toast";
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from "react-hook-form";
import { useRouter } from "next/navigation";

import useReviewModal from "@/app/hooks/useReviewModel";

import Modal from "./Modal";
import Input from "../inputs/Input";
import { Rating } from "@mui/material";
import TextArea from "../inputs/Textarea";
const ReviewModel = () => {
  const router = useRouter();
  const reviewModel = useReviewModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      review: ''
    },
  });
  
  const onSubmit: SubmitHandler<FieldValues> = 
  (data) => {
    setIsLoading(true);
    console.log("data",data)
    toast.success('Review Submited Successfully');
        router.refresh();
        reviewModel.onClose();
       setIsLoading(false);
  }


  const bodyContent = (
    <div className="flex flex-col gap-2">
      <span>How likely you would recommend this host to a friend or colleague? </span>
      <div className="flex w-full  flex-row justify-between">
        <div className="w-1/2 p-2">
          <div className="flex w-full  flex-row justify-between">
            <span className="w-1/2">Cleanliness</span>{" "}
            <span className="w-1/2">
            <Rating  name="size-medium" defaultValue={3} />
            </span>
          </div>
          <div className="flex w-full  flex-row justify-between">
            <span className="w-1/2">Communication</span>{" "}
            <span className="w-1/2">
            <Rating  name="size-medium" defaultValue={4} />
            </span>
          </div>
          <div className="flex w-full  flex-row justify-between">
            <span className="w-1/2">Check-in</span>{" "}
            <span className="w-1/2">
            <Rating  name="size-medium" defaultValue={2} />
            </span>
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="flex w-full  flex-row justify-between">
            <span className="w-1/2">Accuracy</span>{" "}
            <span className="w-1/2">
            <Rating  name="size-medium" defaultValue={3} />
            </span>
          </div>
          <div className="flex w-full  flex-row justify-between">
            <span className="w-1/2">Location</span>{" "}
            <span className="w-1/2">
            <Rating  name="size-medium" defaultValue={5} />
            </span>
          </div>
          <div className="flex w-full  flex-row justify-between">
            <span className="w-1/2">Value</span>{" "}
            <span className="w-1/2">
            <Rating  name="size-medium" defaultValue={4} />
            </span>
          </div>
        </div>
      </div>
      <span className="font-semibold"> Total Score: 5.00</span>
      <span className="font-semibold">Share your experience with this host to the 2algarve community</span>
      <TextArea
        id="review"
        rows={5}
        label="Review"
        disabled={isLoading}
        register={register}  
        errors={errors}
        required
      />
    </div>
  )
  return (
    <Modal
      disabled={isLoading}
      isOpen={reviewModel.isOpen}
      title="Review"
      actionLabel="submit"
      onClose={reviewModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}

export default ReviewModel;
