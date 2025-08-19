import React, { useRef } from "react";
import Image from "next/image";
import ab3Logo from "@/assets/svgs/ab3-upload-logo.svg";
import TextButton from "@/components/Buttons/TextButton";
import { TTextInput } from "@/types/TTextInput";

const UploadInput = ({
  name,
  labelText,
  className,
  register,
  error,
  accept = "image/*",
  onChange,
}: TTextInput) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Call the register's onChange first (for React Hook Form)
    if (register?.onChange) {
      register.onChange(e);
    }
    // Then call the custom onChange if provided
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div
      className={`pl-[15px] pr-2.5 py-[22px] bg-bg-surface-primary shadow-[0px_1px_3px_0px_#00000033] rounded-2xl ${
        className || ""
      }`}
    >
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

        <div onClick={handleUploadClick} className="relative z-10 cursor-pointer">
          <TextButton text="Upload" />

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            name={name}
            accept={accept}
            className="absolute top-0 left-0 opacity-0 z-0 w-full h-full cursor-pointer"
            {...register}
            onChange={handleFileChange}
          />
        </div>
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-2 pl-[15px]">{error.message}</p>
      )}
    </div>
  );
};

export default UploadInput;