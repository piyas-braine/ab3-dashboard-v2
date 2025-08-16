"use client";

import { TTextInput } from "@/types/TTextInput";
import React, { useState } from "react";
import SelectArrowIcon from "../Svgs/SelectArrowIcon";
import SelectCountryCode from "../Dropdowns/SelectCountryCodeDropdown";
import { TCountryCode } from "@/types/TCountryCode";

const PhoneNumberInput = ({
  name,
  placeholder,
  type = "text",
  className,
  labelText,
  isIcon,
  icon,
  register,
  //   error,
  value,
  defaultValue,
  onChange,
}: TTextInput) => {
  const [isSelectCountryCodeOpen, setIsSelectCountryCodeOpen] =
    useState<boolean>(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState<TCountryCode>(
    { name: "United Kingdom", dial_code: "+44", code: "GB", flag: "🇬🇧" }
  );

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="w-full text-text-body-muted text-[16px] leading-[23px] font-semibold"
      >
        {labelText}
      </label>

      <div className="mt-3 w-full relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-3 appearance-none focus:outline-none flex justify-start items-center gap-2">
          <div
            onClick={() => setIsSelectCountryCodeOpen(!isSelectCountryCodeOpen)}
            className="h-[28px] flex justify-start items-center gap-1.5 cursor-pointer"
          >
            <div className="text-[28px] leading-[28px]">
              {selectedCountryCode?.flag}
            </div>
            <div className="w-[12px] h-[12px]">
              <SelectArrowIcon />
            </div>
          </div>

          <div>
            <h4 className="text-text-natural-gray-2 text-[14px] leading-[18px] font-normal">
              {selectedCountryCode?.dial_code}
            </h4>
          </div>
        </div>

        <input
          name={name}
          type={type}
          placeholder={placeholder}
          {...register}
          {...(value !== undefined ? { value, onChange } : {})}
          className={`px-3 pl-[108px] py-4 flex-1 w-full bg-[#F4F6F9] placeholder-text-natural-gray-77 text-text-natural-gray-2 text-[15px] leading-[15px] font-medium rounded-md appearance-none ${className}`}
          defaultValue={defaultValue}
        />

        {isIcon && (
          <div className="absolute top-1/2 -translate-y-1/2 right-3 w-[14px] h-[14px]">
            {icon}
          </div>
        )}

        {isSelectCountryCodeOpen && (
          <div className="absolute top-14 left-2 z-[9999]">
            <SelectCountryCode
              setIsSelectCountryCodeOpen={setIsSelectCountryCodeOpen}
              setSelectedCountryCode={setSelectedCountryCode}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneNumberInput;
