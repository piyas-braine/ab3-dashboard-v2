"use client";

import AuthLeftBanner from "@/components/Shared/AuthLeftBanner";
import SetupOrganizationStep1 from "@/components/setup-organization/SetupOrganizationStep1";
import SetupOrganizationStep2 from "@/components/setup-organization/SetupOrganizationStep2";
import SetupOrganizationStep3 from "@/components/setup-organization/SetupOrganizationStep3";
import SetupOrganizationStep4 from "@/components/setup-organization/SetupOrganizationStep4";
import ChatIcon from "@/components/Svgs/ChatIcon";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const SetupOrganizationPage = () => {
  const [stepNumber, setStepNumber] = useState(1);

  // 🔹 Create the form methods once for all steps
  const methods = useForm({
    defaultValues: {
      organizationName: "",
      organizationType: "",
      organizationLogo: null,
      streetAddress: "",
      city: "",
      postCode: "",
      countryAndTimezone: "",
      organizationEmail: "",
      organizationPhoneNumber: "",
    },
    mode: "onChange",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log("Final Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="relative">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-[6.98] bg-bg-primary-blue min-h-screen min-w-0">
              <AuthLeftBanner stepNumber={stepNumber} />
            </div>

            {stepNumber === 1 && (
              <SetupOrganizationStep1 setStepNumber={setStepNumber} />
            )}

            {stepNumber === 2 && (
              <SetupOrganizationStep2 setStepNumber={setStepNumber} />
            )}

            {stepNumber === 3 && (
              <SetupOrganizationStep3 setStepNumber={setStepNumber} />
            )}

            {stepNumber === 4 && (
              <SetupOrganizationStep4 setStepNumber={setStepNumber} />
            )}
          </div>

          <div
            className="absolute bottom-[31px] right-[34px] w-[80px] h-[80px] rounded-full flex justify-center items-center"
            style={{
              background: `linear-gradient(225deg, #29272E 0%, #27272E 100%)`,
            }}
          >
            <div className="w-[27.23px] h-[27.23px]">
              <ChatIcon />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default SetupOrganizationPage;
