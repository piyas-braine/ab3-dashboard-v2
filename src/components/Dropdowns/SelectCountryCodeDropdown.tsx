import { countryCodes } from "@/data/countryCodesData";
import TextInputV2 from "../Inputs/TextInputV2";
import CrossIcon2 from "../Svgs/CrossIcon2";
import { TCountryCode } from "@/types/TCountryCode";
import { useEffect, useState } from "react";

const SelectCountryCodeDropdown = ({
  setIsSelectCountryCodeOpen,
  setSelectedCountryCode,
}: {
  setIsSelectCountryCodeOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCountryCode: React.Dispatch<React.SetStateAction<TCountryCode>>;
}) => {
  const [filteredCountryCodes, setFilteredCountryCodes] =
    useState<TCountryCode[]>(countryCodes);
  const [searchCountryCode, setSearchCountryCode] = useState<string>("");

  useEffect(() => {
    setFilteredCountryCodes(
      countryCodes.filter((countryCode) =>
        countryCode.dial_code.includes(searchCountryCode)
      )
    );
  }, [searchCountryCode]);

  return (
    <div
      className="p-4 rounded-lg bg-bg-default-white"
      style={{ boxShadow: "0px 0px 77px 0px #0C1A4B2E" }}
    >
      <div
        className="px-[18px] py-3 w-full bg-bg-table-head flex justify-between items-center gap-4"
        style={{
          boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
        }}
      >
        <h4 className="text-text-table-head text-[11px] leading-[16px] tracking-[6%] font-semibold uppercase">
          Country Code
        </h4>

        <div
          onClick={() => setIsSelectCountryCodeOpen(false)}
          className="w-3 h-3 cursor-pointer"
        >
          <CrossIcon2 />
        </div>
      </div>

      <div className="mt-[14px]">
        <TextInputV2
          name="searchCountryCode"
          placeholder="Search By Code..."
          isIcon={true}
          className="!py-[14px] !pl-[41px]"
          iconClassName="!left-[17px]"
          value={searchCountryCode}
          onChange={(e) => setSearchCountryCode(e.target.value)}
        />

        <div className="mt-5 max-h-[216px] h-[216x] overflow-y-auto add-organization-scrollbar">
          <div className="pt-1 space-y-2">
            {filteredCountryCodes?.map((countryCode, index) => {
              return (
                <div
                  onClick={() => setSelectedCountryCode(countryCode)}
                  key={index}
                  className="flex justify-between items-center gap-2 cursor-pointer"
                >
                  <div className="text-[28px] leading-[28px]">
                    {countryCode?.flag}
                  </div>

                  <div className="pr-2">
                    <h4 className="text-text-natural-gray-2 text-[14px] leading-[18px] font-normal">
                      {countryCode?.dial_code}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCountryCodeDropdown;
