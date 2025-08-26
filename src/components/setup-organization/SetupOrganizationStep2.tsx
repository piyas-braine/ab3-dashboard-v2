import React from "react";

import FilledButton from "@/components/Buttons/FilledButton";
import SelectInput from "@/components/Inputs/SelectInput";
import TextInput from "@/components/Inputs/TextInput";

import H2 from "@/components/Typography/H2";
import OrganizationStep2Icon from "@/components/Svgs/OrganizationStep2Icon";
import { FieldError, useFormContext } from "react-hook-form";
import { useSetUpOrganizationMutation } from "@/store/apis/Organization";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const SetupOrganizationStep2 = ({
  setStepNumber,
}: {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [setUpOrganization] = useSetUpOrganizationMutation();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();

  const handleStep2Submit = async() => {
    const {
      streetAddress,
      city,
      postCode,
      countryAndTimezone,
      organizationEmail,
      organizationPhoneNumber,
    } = getValues();

    try {
      const response = await setUpOrganization({
        token: token,
        streetAddress,
        city,
        postCode,
        countryAndTimezone,
        email: organizationEmail,
        phoneNumber: organizationPhoneNumber,
      });

      if (response?.error) {
        throw new Error(JSON.stringify(response.error));
      }

      localStorage.setItem("organizationCurrentStep", `${email}-3`);
      setStepNumber(3);
      toast.success("Updated organization details successfully!");
    } catch (error) {
      console.log("Error:", error);

      toast.error("Set up organization failed!");
    }
  };

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
          <TextInput
            register={register("streetAddress")}
            error={errors.streetAddress as FieldError}
            labelText="Street Address"
            name="streetAddress"
          />

          <div className="flex flex-col sm:flex-row gap-[30px]">
            <TextInput
              register={register("city")}
              error={errors.city as FieldError}
              labelText="City"
              name="city"
            />
            <TextInput
              register={register("postCode")}
              error={errors.postCode as FieldError}
              labelText="Post Code"
              name="postCode"
            />
          </div>

          <SelectInput
            register={register("countryAndTimezone")}
            error={errors.countryAndTimezone as FieldError}
            labelText="Country & Timezone"
            name="countryAndTimezone"
            placeholder="Select One"
            options={[
              { value: "USA", label: "USA" },
              { value: "Canada", label: "Canada" },
              { value: "UK", label: "UK" },
            ]}
          />

          <TextInput
            register={register("organizationEmail")}
            error={errors.organizationEmail as FieldError}
            labelText="Organization Email"
            name="organizationEmail"
            isDisabled={true}
          />

          <TextInput
            register={register("organizationPhoneNumber")}
            error={errors.organizationPhoneNumber as FieldError}
            labelText="Organization Phone Number"
            name="organizationPhoneNumber"
          />

          <FilledButton onClick={handleStep2Submit} text="Continue" />
        </div>
      </div>
    </div>
  );
};

export default SetupOrganizationStep2;
