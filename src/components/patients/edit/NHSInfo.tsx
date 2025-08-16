import TextInputV4 from "@/components/Inputs/TextInputV4";
import GeoLocationIcon from "@/components/Svgs/GeoLocationIcon";
import HashIcon from "@/components/Svgs/HashIcon";
import PersonIcon from "@/components/Svgs/PersonIcon";
import H3 from "@/components/Typography/H3";
import React from "react";

const NHSInfo = () => {
  return (
    <div>
      <section className="mt-[30px]">
        <H3 className="text-text-heading-dark">
          NHS Information (For UK Patients)
        </H3>

        <div
          className="mt-[18px] p-[30px] w-full bg-bg-default-white flex flex-col justify-start items-start gap-8 rounded-2xl"
          style={{
            boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
          }}
        >
          <div className="w-full md:w-[calc(50%-16px)]">
            <TextInputV4
              name="nhsNumber"
              placeholder="Enter NHS Number"
              labelText="NHS Number"
              isIcon={true}
              icon={<HashIcon />}
            />
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-8">
            <TextInputV4
              name="gpName"
              placeholder="Enter GP name"
              labelText="GP Name"
              isIcon={true}
              icon={<PersonIcon />}
            />

            <TextInputV4
              name="gpAddress"
              placeholder="Enter GP address"
              labelText="GP Address"
              isIcon={true}
              icon={<GeoLocationIcon />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NHSInfo;
