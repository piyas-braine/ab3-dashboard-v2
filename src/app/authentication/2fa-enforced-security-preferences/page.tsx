"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import Image from "next/image";
import AuthStatCircle from "@/components/Shared/AuthStatCircle";
import AuthStatCard from "@/components/Cards/AuthStatCard";
import ab3MedicalLogo from "@/assets/svgs/ab3-medical-auth-logo.svg";

export default function TwoFAEnforcedSecurityPreferences() {
  const [selectedMethod, setSelectedMethod] = useState("authenticator");

  return (
    <div className="min-h-screen bg-[#F7FAFC] bg-gradient-to-br">
      <div className="flex min-h-screen">
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="max-w-lg mx-auto w-full flex flex-col items-center justify-center ">
            <Image
              src="/logo.png"
              alt="AB3 Medical Logo"
              height={100}
              width={100}
              className="w-[135px] h-[85px]"
            />
            <div className="px-4 sm:px-0 relative z-[500] xl:-ml-[19px] 2xl:ml-0 max-w-[513px] w-full">
              <div className="mt-[68.44px] flex justify-center items-center">
                <h2 className="text-[#030733] text-[28px] leading-[100%] font-bold text-center">
                  Welcome to
                </h2>
                <Image
                  src={"/logo.png"}
                  alt="AB3 Medical"
                  width={43.37}
                  height={27.07}
                  className="w-[43.37px] h-[27.07px] ml-[6.29px] mr-[6.34px]"
                />
                <h2 className=" text-[#F32448] text-[28px] leading-[100%] font-bold text-center">
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

              <p className="z-10 mt-[128px] max-w-[447px] mx-auto text-[18px] leading-[30px] font-medium text-[#425466] text-center relative">
                Let’s see what we have new, check it out! So maybe explore here
                something more.
              </p>

              <div className="flex justify-center">
                <div className="relative z-10 mt-[30px] w-[191px] h-[8px] bg-bg-default-danger-soft rounded-xl">
                  <div
                    style={{ width: `${100}%` }}
                    className="bg-bg-default-success h-full rounded-xl"
                  ></div>
                </div>
              </div>

              <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-[756px] h-[756px] bg-[#E4ECF7]/10 rounded-full">
                <div className="hidden sm:block max-w-[627px] w-full h-[627px] absolute z-[50] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#E4ECF7]/20 rounded-full">
                  <div className="hidden sm:block max-w-[421px] w-[421px] h-[421px] bg-bg-primary-blue absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-lg shadow-md">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white border-2 border-[#1E52DC] rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#1E52DC]" />
              </div>
            </div>

            <div className="text-center mb-10 text-[#27272E]">
              <h2 className="text-[28px] font-bold mb-3">
                Security Preferences
              </h2>
              <p className="text-base text-gray-600">
                Your organization requires Two-Factor
                <br />
                Authentication.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-gray-700 font-medium text-left block mb-4">
                  Choose 2FA Method:
                </p>

                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => setSelectedMethod("authenticator")}
                    className={`flex-1 p-4 rounded-lg border-2 text-center transition-all ${selectedMethod === "authenticator"
                      ? "border-[#1E52DC] bg-blue-50"
                      : "border-gray-300 bg-white"
                      }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${selectedMethod === "authenticator"
                          ? "border-[#1E52DC] bg-[#1E52DC]"
                          : "border-gray-300"
                          }`}
                      >
                        {selectedMethod === "authenticator" && (
                          <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                        )}
                      </div>
                      <span
                        className={`font-medium ${selectedMethod === "authenticator"
                          ? "text-[#1E52DC]"
                          : "text-gray-600"
                          }`}
                      >
                        Authenticator App
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedMethod("email")}
                    className={`flex-1 p-4 rounded-lg border-2 text-center transition-all ${selectedMethod === "email"
                      ? "border-[#1E52DC] bg-blue-50"
                      : "border-gray-300 bg-white"
                      }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${selectedMethod === "email"
                          ? "border-[#1E52DC] bg-[#1E52DC]"
                          : "border-gray-300"
                          }`}
                      >
                        {selectedMethod === "email" && (
                          <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                        )}
                      </div>
                      <span
                        className={`font-medium ${selectedMethod === "email"
                          ? "text-[#1E52DC]"
                          : "text-gray-600"
                          }`}
                      >
                        Email/SMS
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-[#1E52DC] hover:bg-blue-700 h-12 text-lg font-semibold">
                  Enable & Continue
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-12 text-lg font-semibold border-2 border-[#1E52DC] text-[#1E52DC] hover:bg-[#1E52DC] hover:text-white"
                >
                  Skip for now
                </Button>
              </div>

              <p className="text-[#7A7A9D] text-center mt-8 text-sm">
                Do you trouble to reset password?
              </p>

              <div className="flex justify-center gap-6 mt-6">
                <button className="w-12 h-12 bg-white p-2 rounded-md flex shadow-md items-center justify-center">
                  <Image
                    src="/headphone.png"
                    alt="User"
                    width={30}
                    height={30}
                  />
                </button>
                <button className="w-12 h-12 bg-white p-2 rounded-md flex shadow-md items-center justify-center">
                  <Image src="/call.png" alt="User" width={30} height={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
