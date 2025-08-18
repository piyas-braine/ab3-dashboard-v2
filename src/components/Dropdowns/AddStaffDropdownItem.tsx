import Image, { StaticImageData } from "next/image";
import React from "react";
import TickIcon from "@/components/Svgs/TickIcon";
import H5 from "@/components/Typography/H5";

const AddStaffDropdownItem = ({
  image,
  name,
  isSelected = false,
}: {
  image?: string | StaticImageData;
  name: string;
  isSelected?: boolean;
}) => {
  return (
    <div className="group w-full flex justify-between items-center gap-4">
      <div className="flex justify-start items-center gap-4">
        <div className="w-9 h-9">
          {image ? (
            <Image src={image} alt={name} className="w-full h-full" />
          ) : (
            <div className="w-9 h-9 rounded-full bg-bg-primary-blue flex justify-center items-center">
              <H5 className="text-text-default-white">
                {name?.split(" ")[0]?.charAt(0)}
                {name?.split(" ")[1]?.charAt(0)}
              </H5>
            </div>
          )}
        </div>
        <h4 className="text-text-body-light text-nowrap text-[14px] leading-[20px] font-medium">
          {name}
        </h4>
      </div>

      <div
        className={`w-[10.06px] h-2 opacity-0 group-hover:opacity-100 ${
          isSelected && "!opacity-100"
        }`}
      >
        <TickIcon />
      </div>
    </div>
  );
};

export default AddStaffDropdownItem;
