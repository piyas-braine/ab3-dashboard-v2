import Image, { StaticImageData } from "next/image";
import React from "react";
import InviteTickIcon from "../Svgs/InviteTickIcon";
import H5 from "../Typography/H5";

type SelectPatientProps = {
  email: string;
  name: string;
  image?: StaticImageData | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedPatient: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedPatient: React.Dispatch<React.SetStateAction<any>>;
};

const SelectPatient = ({
  email,
  name,
  image,
  selectedPatient,
  setSelectedPatient,
}: SelectPatientProps) => {
  return (
    <div
      onClick={() => {
        setSelectedPatient({
          email: email,
          name: name,
          image: image,
        });
      }}
      className="group w-full flex justify-between items-center pr-[13px] cursor-pointer"
    >
      <div className="flex justify-start items-center gap-4">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={36}
            height={36}
            className="w-9 h-9 rounded-full"
          />
        ) : (
          <div className="w-9 h-9 bg-bg-primary-blue rounded-full flex justify-center items-center">
            <H5 className="text-text-default-white">
              {name.split(" ")?.[0].charAt(0)}
              {name?.split(" ")?.[1]?.charAt(0)}
            </H5>
          </div>
        )}
        <div>
          <h4 className="text-text-body-light text-[14px] leading-[20px] font-medium">
            {name}
          </h4>

          <h6 className="mt-0.5 text-[#989898] text-[14px] leading-[20px] font-medium">
            {email}
          </h6>
        </div>
      </div>

      <div className={`group-hover:opacity-100 ${selectedPatient?.email === email ? "opacity-100" : "opacity-0"} w-[10.06px] h-2`}>
        <InviteTickIcon />
      </div>
    </div>
  );
};

export default SelectPatient;
