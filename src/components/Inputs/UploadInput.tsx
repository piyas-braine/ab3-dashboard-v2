import React from "react";

import ab3Logo from "@/assets/svgs/ab3-upload-logo.svg";
import Image from "next/image";
import { FieldError } from "react-hook-form";
import TextButton from "../Buttons/TextButton";

type UploadInputProps = {
  name: string;
  labelText?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
  error?: FieldError;
  value?: string;
};

const UploadInput = ({
  name,
  labelText,
  placeholder,
  type = "text",
  className,
  register,
  error,
  value,
}: UploadInputProps) => {
  return (
    <div className="pl-[15px] pr-2.5 py-[22px] bg-bg-surface-primary shadow-[0px_1px_3px_0px_#00000033] rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex justify-start items-center gap-[14px]">
          <div className="w-12 h-12 rounded-full bg-bg-primary-blue flex justify-center items-center">
            <Image
              src={ab3Logo}
              alt="AB3 Logo"
              width={33.18}
              height={20.71}
              className="w-[33.18px] h-[20.71px]"
            />
          </div>

          <div>
            <label
              htmlFor={name}
              className="text-[14px] leading-[100%] font-medium text-text-body-light"
            >
              {labelText}
            </label>

            <p className="text-xs leading-[23px] font-normal text-text-body-light">
              Upload a square image
            </p>
          </div>
        </div>

        <TextButton text="Upload" />
      </div>
    </div>
  );
};

export default UploadInput;
