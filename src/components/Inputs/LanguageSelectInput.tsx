"use client";

import { TTextInput } from "@/types/TTextInput";
import React, { useState } from "react";
import SelectCountryLanguageDropdown from "@/components/Dropdowns/SelectCountryLanguageDropdown";
import { TCountryLanguage } from "@/types/TCountryLanguage";

const LanguageSelectInput = ({
  name,
  className,
  labelText,
  isIcon,
  icon,
  register,
  //   error,
  defaultValue,
}: TTextInput) => {
  const [isSelectCountryLanguageOpen, setIsSelectCountryLanguageOpen] =
    useState<boolean>(false);
  const [selectedCountryLanguage, setSelectedCountryLanguage] =
    useState<TCountryLanguage>({
      language: "English",
      code: "en-GB",
      country: "United Kingdom",
      countryCode: "GB",
      flag: "🇬🇧",
    });

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="w-full text-text-body-muted text-[16px] leading-[23px] font-semibold"
      >
        {labelText}
      </label>

      <div className="mt-3 w-full relative">
        <select
          onClick={() =>
            setIsSelectCountryLanguageOpen(!isSelectCountryLanguageOpen)
          }
          name={name}
          {...register}
          className={`px-3 pl-[108px] py-4 flex-1 w-full bg-[#F4F6F9] placeholder-text-natural-gray-77 text-text-natural-gray-2 text-[15px] leading-[15px] font-medium rounded-md appearance-none cursor-pointer ${className}`}
          defaultValue={defaultValue}
        ></select>

        {isIcon && (
          <div className="absolute top-1/2 -translate-y-1/2 right-3 w-[14px] h-[14px]">
            {icon}
          </div>
        )}

        <div className="absolute top-1/2 -translate-y-1/2 left-3 appearance-none focus:outline-none flex justify-start items-center gap-2">
          <div className="h-[28px] flex justify-start items-center gap-1.5 cursor-pointer">
            <div className="text-[28px] leading-[28px]">
              {selectedCountryLanguage?.flag}
            </div>
          </div>

          <div>
            <h4 className="text-text-natural-gray-2 text-[14px] leading-[18px] font-normal">
              {selectedCountryLanguage?.language}
            </h4>
          </div>
        </div>

        {isSelectCountryLanguageOpen && (
          <div className="absolute top-14 left-2 z-[9999]">
            <SelectCountryLanguageDropdown
              setIsSelectCountryLanguageOpen={setIsSelectCountryLanguageOpen}
              setSelectedCountryLanguage={setSelectedCountryLanguage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelectInput;
