import TextInputV2 from "@/components/Inputs/TextInputV2";
import CrossIcon2 from "@/components/Svgs/CrossIcon2";
import { useEffect, useState } from "react";
import { TCountryLanguage } from "@/types/TCountryLanguage";
import { countryLanguages } from "@/data/countryLanguages";

const SelectCountryLanguageDropdown = ({
  setIsSelectCountryLanguageOpen,
  setSelectedCountryLanguage,
}: {
  setIsSelectCountryLanguageOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCountryLanguage: React.Dispatch<
    React.SetStateAction<TCountryLanguage>
  >;
}) => {
  const [filteredCountryLanguages, setFilteredCountryLanguages] =
    useState<TCountryLanguage[]>(countryLanguages);
  const [searchCountryLanguage, setSearchCountryLanguage] =
    useState<string>("");

  useEffect(() => {
    setFilteredCountryLanguages(
      countryLanguages.filter((countryLanguage) =>
        countryLanguage.language.includes(searchCountryLanguage)
      )
    );
  }, [searchCountryLanguage]);

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
          Spoken Language
        </h4>

        <div
          onClick={() => setIsSelectCountryLanguageOpen(false)}
          className="w-3 h-3 cursor-pointer"
        >
          <CrossIcon2 />
        </div>
      </div>

      <div className="mt-[14px]">
        <TextInputV2
          name="searchCountryLanguage"
          placeholder="Search By Language..."
          isIcon={true}
          className="!py-[14px] !pl-[41px]"
          iconClassName="!left-[17px]"
          value={searchCountryLanguage}
          onChange={(e) => {
            setSearchCountryLanguage(e.target.value);
          }}
        />

        <div className="mt-5 max-h-[216px] h-[216x] overflow-y-auto add-organization-scrollbar">
          <div className="pt-1 space-y-2">
            {filteredCountryLanguages?.map((countryLanguage, index) => {
              return (
                <div
                  onClick={() => {
                    setSelectedCountryLanguage(countryLanguage);
                    setIsSelectCountryLanguageOpen(false);
                  }}
                  key={index}
                  className="flex justify-between items-center gap-2 cursor-pointer"
                >
                  <div className="text-[28px] leading-[28px]">
                    {countryLanguage?.flag}
                  </div>

                  <div className="pr-2">
                    <h4 className="text-text-natural-gray-2 text-[14px] leading-[18px] font-normal">
                      {countryLanguage?.language}
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

export default SelectCountryLanguageDropdown;
