import React from "react";

import FilledButton from "@/components/Buttons/FilledButton";
import OutlineButton from "@/components/Buttons/OutlinedButton";
import SelectInput from "@/components/Inputs/SelectInput";
import TextInput from "@/components/Inputs/TextInput";
import UploadInput from "@/components/Inputs/UploadInput";

import CallIcon from "@/components/Svgs/CallIcon";
import OrganizationStep1Icon from "@/components/Svgs/OrganizationStep1Icon";
import SupportIcon from "@/components/Svgs/SupportIcon";
import H2 from "@/components/Typography/H2";
import TextBody from "@/components/Typography/TextBody";
import { FieldError, useFormContext } from "react-hook-form";

const SetupOrganizationStep1 = ({
  setStepNumber,
}: {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="px-4 sm:px-0 py-[47.84px] flex-[7.22] flex items-center min-w-0">
      <div className="py-16 px-10 max-w-[424px] mx-auto w-full  bg-bg-gray-100 rounded-lg">
        <div className="flex justify-center">
          <div className="w-[56px] h-[55px]">
            <OrganizationStep1Icon />
          </div>
        </div>

        <H2 className="pt-[30px] text-center text-[#27272E]">
          Set up your Organization
        </H2>

        <div className="mt-[46px] space-y-[30px]">
          <TextInput
            register={register("organizationName", {
              required: "Organization name is required",
            })}
            error={errors.organizationName as FieldError}
            labelText="Organization Name"
            name="organizationName"
          />

          <SelectInput
            register={register("organizationType", {
              required: "Organization type is required",
            })}
            error={errors.organizationType as FieldError}
            labelText="Organization Type"
            name="organizationType"
            placeholder="Select One"
            options={[
              { label: "Hospital", value: "hospital" },
              { label: "Clinic", value: "clinic" },
              { label: "Pharmacy", value: "pharmacy" },
            ]}
          />

          <UploadInput
            name="organizationLogo"
            labelText="Organization Logo"
            register={register("organizationLogo")}
          />

          <div className="space-y-4">
            <FilledButton onClick={() => setStepNumber(2)} text="Continue" />
            <OutlineButton onClick={() => setStepNumber(2)} text="Skip?" />
          </div>

          <TextBody
            variant="small"
            className="text-text-body-muted text-center"
          >
            Do you trouble for setup organization?
          </TextBody>

          <div className="flex justify-center items-center gap-4">
            <div
              className="w-[68px] h-[53.32px] bg-bg-surface-primary flex justify-center items-center rounded-lg"
              style={{
                boxShadow:
                  "0px 3px 8px -1px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
              }}
            >
              <div className="w-[30px] h-[30px]">
                <SupportIcon />
              </div>
            </div>

            <div
              className="w-[68px] h-[53.32px] bg-bg-surface-primary flex justify-center items-center rounded-lg"
              style={{
                boxShadow:
                  "0px 3px 8px -1px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
              }}
            >
              <div className="w-6 h-6">
                <CallIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupOrganizationStep1;
