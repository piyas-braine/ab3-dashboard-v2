import React from "react";

import FilledButton from "@/components/Buttons/FilledButton";
import SelectInput from "@/components/Inputs/SelectInput";
import TextInput from "@/components/Inputs/TextInput";

import H2 from "@/components/Typography/H2";
import OrganizationStep2Icon from "../Svgs/OrganizationStep2Icon";

const SetupOrganizationStep2 = ({
  setStepNumber,
}: {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="px-4 sm:px-0 py-[47.84px] flex-[7.22] flex items-center min-w-0">
      <div className="py-16 max-w-[424px] mx-auto w-full  bg-bg-gray-100 rounded-lg">
        <div className="flex justify-center">
          <div className="w-[56px] h-[51px]">
            <OrganizationStep2Icon />
          </div>
        </div>

        <H2 className="pt-[30px] px-4 text-center text-[#27272E]">
          Organization Contact Info
        </H2>

        <div className="mt-[46px] px-4 sm:px-10 space-y-[30px]">
          <TextInput labelText="Street Address" name="streetAddress" />

          <div className="flex flex-col sm:flex-row gap-[30px]">
            <TextInput labelText="City" name="city" />
            <TextInput labelText="Post Code" name="postCode" />
          </div>

          <SelectInput
            labelText="Country & Timezone"
            name="countryAndTimezone"
            placeholder="Select One"
            options={[
              { value: "USA", label: "USA" },
              { value: "Canada", label: "Canada" },
              { value: "UK", label: "UK" },
            ]}
          />

          <TextInput labelText="Organization Email" name="organizationEmail" />

          <TextInput
            labelText="Organization Phone Number"
            name="organizationPhoneNumber"
          />

          <FilledButton onClick={() => setStepNumber(3)} text="Continue" />
        </div>
      </div>
    </div>
  );
};

export default SetupOrganizationStep2;
