import Image from "next/image";
import React, { useEffect, useState } from "react";

import ab3MedicalLogo from "@/assets/svgs/ab3-medical-auth-logo.svg";
import AuthStatCircle from "@/components/Shared/AuthStatCircle";
import AuthStatCard from "@/components/Cards/AuthStatCard";

export const AuthLeftBanner2 = ({ stepNumber }: { stepNumber: number }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const progress = (stepNumber / 5) * 100;

    setCurrentProgress(progress);
  }, [stepNumber]);

  return (
    <div className="w-full bg-[#E4ECF7] lg:min-w-[530px] relative pt-[33.5px] pb-[200px] sm:pb-[57px] h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="w-[135px] h-[84.28px]">
          <Image
            src={ab3MedicalLogo}
            alt="Ab3 Medical"
            width={135}
            height={84.28}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="px-4 sm:px-0 relative z-[500] xl:-ml-[19px] 2xl:ml-0 max-w-[513px] w-full">
        <div className="mt-[68.44px] flex justify-center items-center">
          <h2 className="text-text-default-white text-[28px] leading-[100%] font-bold text-center">
            Welcome to
          </h2>

          <Image
            src={ab3MedicalLogo}
            alt="AB3 Medical"
            width={43.37}
            height={27.07}
            className="w-[43.37px] h-[27.07px] ml-[6.29px] mr-[6.34px]"
          />

          <h2 className=" text-text-default-white text-[28px] leading-[100%] font-bold text-center">
            Medical
          </h2>
        </div>

        <div className="mt-[94px] relative z-[500] pt-[21px] pb-5 pl-[19px] pr-[18px] w-full rounded-[22px] bg-bg-surface-primary/50">
          <div
            className="pl-[32px] lg:pl-5 xl:pl-[32px] pb-[15px] pr-[13px] pt-[13px] bg-bg-surface-primary rounded-[22px] flex flex-col sm:flex-row justify-between items-center gap-[35px] lg:gap-5 xl:gap-[35px]"
            style={{
              boxShadow:
                "0px 30px 40px 0px #14253F14, 0px 0px 1px 0px #0C1A4B1A",
            }}
          >
            <div className="w-full">
              <h2 className="font-bold text-[22px] leading-[22px]">
                Statistics
              </h2>

              <div className="mt-[23px] flex justify-center">
                <AuthStatCircle />
              </div>

              <div className="mt-[27px] flex flex-col items-center">
                <div className="flex justify-center items-center gap-[9px]">
                  <div className="px-2 py-[4.5px] w-fit bg-[#A6B7D445] rounded-md">
                    <span className="text-[12px] leading-[100%] font-medium text-[#5F708D]">
                      Teams
                    </span>
                  </div>

                  <div className="px-2 py-[4.5px] w-fit bg-[#E1E8FF] rounded-md">
                    <span className="text-[12px] leading-[100%] font-medium text-text-primary-blue">
                      Organizations
                    </span>
                  </div>
                </div>

                <div className="mt-[13px] px-2 py-[4.5px] w-fit bg-[#FFEFF3] rounded-md">
                  <span className="text-[12px] leading-[100%] font-medium text-[#FF92AE]">
                    Patients
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-full sm:max-w-[221px] w-full flex flex-row flex-wrap sm:flex-col space-y-[15px]">
              <AuthStatCard
                statTitle="Teams"
                statNumber="2,526"
                statPercentage="+25%"
                statIconClassName="bg-[#6686BD]"
                titleColor="text-[#5F708D]"
              />

              <AuthStatCard
                statTitle="Patients"
                statNumber="1,324"
                statPercentage="+16%"
                statIconClassName="bg-[#FF92AE]"
                titleColor="text-[#FF779A]"
              />

              <AuthStatCard
                statTitle="Organizations"
                statNumber="1,985"
                statPercentage="+12%"
                statIconClassName="bg-[#1E52DC]"
                titleColor="text-[#1E52DC]"
              />
            </div>
          </div>
        </div>

        <p className="z-10 mt-[128px] max-w-[447px] mx-auto text-[18px] leading-[30px] font-medium text-text-default-white text-center">
          Let’s see what we have new, check it out! So maybe explore here
          something more.
        </p>

        <div className="flex justify-center">
          <div className="relative z-10 mt-[30px] w-[191px] h-[8px] bg-bg-default-danger-soft rounded-xl">
            <div
              style={{ width: `${currentProgress}%` }}
              className="bg-bg-default-success h-full rounded-xl"
            ></div>
          </div>
        </div>

        <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-[756px] h-[756px] bg-[#E4ECF7]/3 rounded-full">
          <div className="hidden sm:block max-w-[627px] w-full h-[627px] absolute z-[50] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#E4ECF7]/6 rounded-full">
            <div className="hidden sm:block max-w-[421px] w-[421px] h-[421px] bg-bg-primary-blue absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};