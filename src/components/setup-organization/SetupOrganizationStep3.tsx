import React from "react";

import FilledButton from "@/components/Buttons/FilledButton";
import SelectInput from "@/components/Inputs/SelectInput";
import TextInput from "@/components/Inputs/TextInput";

import H2 from "@/components/Typography/H2";
import OrganizationStep3Icon from "@/components/Svgs/OrganizationStep3Icon";
import OutlineButton from "@/components/Buttons/OutlinedButton";
import TextBody from "@/components/Typography/TextBody";

const SetupOrganizationStep3 = ({
  setStepNumber,
}: {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="px-4 sm:px-0 py-[47.84px] flex-[7.22] flex items-center min-w-0">
      <div className="py-16 max-w-[424px] mx-auto w-full  bg-bg-gray-100 rounded-lg">
        <div className="flex justify-center">
          <div className="w-[56px] h-[56px]">
            <OrganizationStep3Icon />
          </div>
        </div>

        <H2 className="pt-[30px] px-4 text-center text-[#27272E]">
          Add users to your organization
        </H2>

        <div className="mt-[30px] px-4 sm:px-10 space-y-[30px]">
          <TextInput
            type="email"
            labelText="Email Address"
            name="emailAddress"
          />

          <SelectInput
            labelText="Assign Role"
            name="assignedRole"
            placeholder="Select One"
            options={[
              { label: "Admin", value: "admin" },
              { label: "User", value: "user" },
              { label: "Viewer", value: "viewer" },
            ]}
          />

          <div className="py-3">
            <TextBody
              variant="regular"
              className="text-center text-text-natural-gray-2"
            >
              You can skip this step and add users later from the dashboard.
            </TextBody>
          </div>

          <div className="space-y-4">
            <FilledButton
              onClick={() => setStepNumber(4)}
              text="Send Invites"
            />
            <OutlineButton
              onClick={() => setStepNumber(4)}
              text="Skip for now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupOrganizationStep3;
