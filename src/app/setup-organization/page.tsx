"use client";

import AuthLeftBanner from "@/components/setup-organization/AuthLeftBanner";
import SetupOrganizationStep1 from "@/components/setup-organization/SetupOrganizationStep1";
import SetupOrganizationStep2 from "@/components/setup-organization/SetupOrganizationStep2";
import SetupOrganizationStep3 from "@/components/setup-organization/SetupOrganizationStep3";
import SetupOrganizationStep4 from "@/components/setup-organization/SetupOrganizationStep4";
import ChatIcon from "@/components/Svgs/ChatIcon";
import { useState } from "react";

const SetupOrganizationPage = () => {
  const [stepNumber, setStepNumber] = useState(1);

  return (
    <div className="relative ">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-[6.58] min-h-screen min-w-0">
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
  );
};

export default SetupOrganizationPage;
