'use client';

import { IconType } from "react-icons";
import { BiCategoryAlt } from "react-icons/bi";

interface CategoryViewProps {
  icon: IconType,
  label: string,
  description: string
}

const CategoryView: React.FC<CategoryViewProps> = ({ 
  icon: Icon,
  label,
  description
 }) => {
  return ( 
    <div className="flex flex-col bg-white rounded-xl mt-4">
      <div className="flex flex-row items-center my-2 ml-6 gap-4 ">
      <BiCategoryAlt size={20}/>
      <div  className="
        flex
        font-semibold
        text-xl
        items-center
      ">Categories</div>
        
      </div>
      <hr />
      <div className="flex my-3 flex-row items-center gap-4">
        <div className=" bg-pink-750
            rounded-full 
            hover:bg-orange-700 
             p-3 ml-3">
        <Icon size={30} className="text-neutral-200" />
        </div>
        <div className="flex flex-col">
            <div 
              className="text-lg font-semibold"
            >
              {label}
            </div>
            <div 
              className="text-neutral-500 font-light"
            >
              {description}
            </div>
        </div>
      </div>
    </div>
   );
}
 
export default CategoryView;