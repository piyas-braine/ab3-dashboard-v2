"use client";

import AuthLeftBanner from "@/components/setup-organization/AuthLeftBanner";
import SetupOrganizationStep1 from "@/components/setup-organization/SetupOrganizationStep1";
import SetupOrganizationStep2 from "@/components/setup-organization/SetupOrganizationStep2";
import SetupOrganizationStep3 from "@/components/setup-organization/SetupOrganizationStep3";
import SetupOrganizationStep4 from "@/components/setup-organization/SetupOrganizationStep4";
import { useState } from "react";

const SetupOrganizationPage = () => {
  const [stepNumber, setStepNumber] = useState(1);

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-[6.58] min-w-0">
          <AuthLeftBanner />
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
    </div>
  );
};

export default SetupOrganizationPage;
