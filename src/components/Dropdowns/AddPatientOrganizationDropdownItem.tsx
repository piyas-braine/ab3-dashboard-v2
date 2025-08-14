import Image, { StaticImageData } from "next/image";
import React from "react";

const AddPatientOrganizationDropdownItem = ({
  image,
  name,
}: {
  image: string | StaticImageData;
  name: string;
}) => {
  return (
    <div className="w-full flex justify-start items-center gap-4">
      <div className="w-9 h-9">
        <Image src={image} alt={name} className="w-full h-full" />
      </div>
      <h4 className="text-text-body-light text-nowrap text-[14px] leading-[20px] font-medium">
        {name}
      </h4>
    </div>
  );
};

export default AddPatientOrganizationDropdownItem;
