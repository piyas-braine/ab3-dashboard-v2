import Image from "next/image";
import React, { useEffect, useState } from "react";

import ab3MedicalLogo from "@/assets/svgs/ab3-medical-auth-logo.svg";
import AuthStatCircle from "@/components/Shared/AuthStatCircle";
import AuthStatCard from "@/components/Cards/AuthStatCard";

const AuthLeftBanner = ({ stepNumber }: { stepNumber: number }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const progress = (stepNumber / 5) * 100;

    setCurrentProgress(progress);
  }, [stepNumber]);

  return (
    <div className="pt-[33.5px] pb-[57px] px-4 sm:px-7 xl:px-[60px] min-[1400px]:!pl-[83px] min-[1400px]:!pr-[102px] h-full flex items-center bg-[#F7FAFC] overflow-hidden">
      <div className="max-w-[513px] mx-auto w-full flex flex-col items-center">
        <div className="w-[135px] h-[84.28px]">
          <Image
            src={ab3MedicalLogo}
            alt="Ab3 Medical"
            width={135}
            height={84.28}
            className="w-full h-full"
          />
        </div>

        <div className="relative flex flex-col items-center">
          <div className="mt-[68.22px] flex justify-center items-center">
            <h2 className="text-text-primary-cetacean-blue text-[28px] leading-[100%] font-bold text-center">
              Welcome to
            </h2>

            <Image
              src={ab3MedicalLogo}
              alt="AB3 Medical"
              width={43.37}
              height={27.07}
              className="w-[43.37px] h-[27.07px] ml-[6.29px] mr-[6.34px]"
            />

            <h2 className=" text-text-primary-red text-[28px] leading-[100%] font-bold text-center">
              Medical
            </h2>
          </div>

          <div className="mt-[96px] relative z-10 w-full">
            <div className="relative pt-[21px] pb-5 pl-[19px] pr-[18px] w-full rounded-[22px] bg-bg-surface-primary/50">
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

              <div className="hidden sm:block absolute -z-20 left-1/2 -translate-x-1/2 -top-[35px] -bottom-[35px] w-full h-full sm:w-[421px] sm:h-[421px] bg-bg-primary-blue rounded-full"></div>
            </div>
          </div>
          <p className="relative z-10 mt-[128px] max-w-[447px] mx-auto text-[18px] leading-[30px] font-medium text-text-body-light text-center">
            Let’s see what we have new, check it out! So maybe explore here
            something more.
          </p>
          <div className="relative z-10 mt-[22px] w-[191px] h-[8px] bg-bg-default-danger-soft  rounded-xl">
            <div
              style={{ width: `${currentProgress}%` }}
              className="bg-bg-primary-blue h-full rounded-xl"
            ></div>
          </div>

          <div className="hidden sm:block absolute -top-1 left-1/2 -translate-x-1/2 w-[756px] h-[756px] bg-[#E4ECF7]/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AuthLeftBanner;
