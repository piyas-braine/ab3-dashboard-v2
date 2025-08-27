import React from "react";

import FilledButton from "@/components/Buttons/FilledButton";
import SelectInput from "@/components/Inputs/SelectInput";
import TextInput from "@/components/Inputs/TextInput";

import H2 from "@/components/Typography/H2";
import OrganizationStep3Icon from "@/components/Svgs/OrganizationStep3Icon";
import OutlineButton from "@/components/Buttons/OutlinedButton";
import TextBody from "@/components/Typography/TextBody";
import { FieldError, useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";

type FormValues = {
  emailAddress: string;
  assignedRole: string;
};

const SetupOrganizationStep3 = ({
  setStepNumber,
}: {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: { emailAddress: string; assignedRole: string }) => {
    console.log("Final Data:", data);
  };

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
            register={register("emailAddress", {
              required: "Email address is required",
            })}
            error={errors.emailAddress as FieldError}
          />

          <SelectInput
            labelText="Assign Role"
            name="assignedRole"
            placeholder="Select One"
            options={[
              { label: "Patient", value: "patient" },
              { label: "Doctor", value: "doctor" },
            ]}
            register={register("assignedRole", {
              required: "Assigned role is required",
            })}
            error={errors.assignedRole as FieldError}
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
              onClick={handleSubmit(onSubmit)}
              text="Send Invites"
            />
            <OutlineButton
              onClick={() => {
                localStorage.setItem("organizationCurrentStep", `${email}-4`);
                setStepNumber(4);
              }}
              text="Skip for now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupOrganizationStep3;
