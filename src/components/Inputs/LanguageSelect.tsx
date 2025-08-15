"use client";

import React from "react";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import { motherLanguages } from "@/data/motherLanguages"; // <-- your custom dataset

interface LanguageSelectProps {
  name: string;
  labelText: string;
  value?: any;
  onChange?: (value: any) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  name,
  labelText,
  value,
  onChange,
}) => {
  // Create options from your dataset
  const options = motherLanguages.map((item) => ({
    value: item.language,
    label: item.language,
    countryCode: item.countryCode,
  }));

  const customOption = (props: any) => {
    const { innerRef, innerProps, data } = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        className="flex items-center gap-3 px-3 py-2"
      >
        <ReactCountryFlag
          countryCode={data.countryCode}
          svg
          style={{ width: "20px", height: "20px" }}
        />
        <span className="text-[15px] font-medium">{data.label}</span>
      </div>
    );
  };

  const customSingleValue = (props: any) => {
    const { data } = props;
    return (
      <div className="flex items-center gap-3">
        <ReactCountryFlag
          countryCode={data.countryCode}
          svg
          style={{ width: "20px", height: "20px" }}
        />
        <span className="text-[15px] font-medium">{data.label}</span>
      </div>
    );
  };

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="w-full text-text-body-muted text-[16px] leading-[23px] font-semibold"
      >
        {labelText}
      </label>

      <div className="mt-3 w-full relative">
        <Select
          inputId={name}
          options={options}
          value={options.find((opt) => opt.value === value)}
          onChange={(selected) => onChange && onChange(selected?.value)}
          components={{
            Option: customOption,
            SingleValue: customSingleValue,
          }}
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: "#F4F6F9",
              border: "none",
              boxShadow: "none",
              borderRadius: "6px",
              minHeight: "48px",
              paddingLeft: "4px",
            }),
            dropdownIndicator: (base) => ({
              ...base,
              color: "#2563EB",
            }),
            indicatorSeparator: () => ({ display: "none" }),
            menu: (base) => ({
              ...base,
              zIndex: 9999,
            }),
          }}
        />
      </div>
    </div>
  );
};

export default LanguageSelect;