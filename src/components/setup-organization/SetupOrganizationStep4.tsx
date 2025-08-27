import React, { useState } from "react";

import FilledButton from "@/components/Buttons/FilledButton";

import CallIcon from "@/components/Svgs/CallIcon";
import SupportIcon from "@/components/Svgs/SupportIcon";
import H2 from "@/components/Typography/H2";
import TextBody from "@/components/Typography/TextBody";
import OrganizationStep4Icon from "@/components/Svgs/OrganizationStep4Icon";
import CheckboxInput from "@/components/Inputs/CheckboxInput";
import { useRouter, useSearchParams } from "next/navigation";
import { useSetUpOrganizationMutation } from "@/store/apis/Organization";
import { toast } from "react-toastify";
import { useLoginMutation } from "@/store/apis/User";

const SetupOrganizationStep4 = ({
  // setStepNumber,
}: {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [setUpOrganization] = useSetUpOrganizationMutation();
  const [login] = useLoginMutation();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const router = useRouter();

  const handleStep4Submit = async () => {
    try {
      const response = await setUpOrganization({
        isActive: true,
        token,
        organizationStatus: "Active",
      });

      if (response?.error) {
        throw new Error(JSON.stringify(response.error));
      }

      toast.success("SetUp organization successfully!");

      const password = localStorage.getItem("organizationCurrentPassword");
      
      const response2 = await login({
        email,
        password: password,
      });

      if (response2?.error) {
        throw new Error(JSON.stringify(response2.error));
      }

      toast.success("Login successfully!");

      localStorage.removeItem("organizationCurrentStep");
      localStorage.removeItem("organizationCurrentPassword");

      router.push("/patients");
    } catch (error) {
      console.log("Error:", error);
      toast.error("SetUp organization failed!");
    }
  };

  return (
    <div className="px-4 sm:px-0 py-[47.84px] flex-[7.22] flex items-center min-w-0">
      <div className="py-10 px-10 max-w-[424px] mx-auto w-full  bg-bg-gray-100 rounded-lg">
        <div className="flex justify-center">
          <div className="w-[56px] h-[67px]">
            <OrganizationStep4Icon />
          </div>
        </div>

        <H2 className="pt-[30px] text-center text-[#27272E]">
          Terms & Conditions
        </H2>

        <TextBody
          variant="regular"
          className="pt-4 text-center text-text-natural-gray-2"
        >
          Please review and accept
        </TextBody>

        <div className="mt-10 space-y-[30px]">
          <CheckboxInput isChecked={isChecked} setIsChecked={setIsChecked} />

          <FilledButton
            onClick={handleStep4Submit}
            text="Accept & Continue"
            isDisabled={!isChecked}
          />

          <TextBody
            variant="small"
            className="text-text-body-muted text-center"
          >
            Do you want any help?
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

export default SetupOrganizationStep4;
