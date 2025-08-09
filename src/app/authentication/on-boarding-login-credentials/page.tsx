"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";
import Image from "next/image";

export default function OnBoardingLoginCredentials() {
  const [name, setName] = useState("Steve Nickson");
  const [email, setEmail] = useState("stevenickson563@gmail.com");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex min-h-screen">
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="max-w-lg mx-auto w-full flex flex-col items-center justify-center">
            <Image
              src="/logo.png"
              alt="AB3 Medical Logo"
              height={100}
              width={100}
              className="w-[135px] h-[85px]"
            />
            <div className="bg-[#E4ECF7] w-[756px] h-[756px] rounded-full flex flex-col items-center justify-center relative">
              <h1 className="font-bold text-[28px] leading-[28px] text-center font-['Inter'] mb-8">
                Welcome to AB3 <span className="text-[#F32448]">Medical</span>
              </h1>

              <div className="bg-[#1E52DC] w-[421px] h-[421px] rounded-full flex flex-col items-center justify-center shadow-xl">
                <div className="w-[513px] h-[359px] bg-white/50 backdrop-blur-sm rounded-[22px] flex items-center justify-center shadow-2xl">
                  <div className="w-[476px] h-[318px] bg-white rounded-xl grid grid-cols-2 gap-6 shadow-lg p-4">
                    <div className="flex flex-col items-center justify-center">
                      <h2 className="text-[20px] font-bold text-[#030733] pr-20">
                        Statistics
                      </h2>

                      <div className="flex items-center justify-center">
                        <Image
                          src="/chart.png"
                          alt="Chart"
                          width={400}
                          height={400}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="max-w-48 flex-wrap text-xs flex items-center justify-center gap-2 -mt-10">
                        <div className="flex items-center justify-center rounded-[6px] p-1 bg-[#A6B7D445]">
                          <span className="text-[#5F708D]">Teams</span>
                        </div>
                        <div className="flex items-center justify-center rounded-[6px] p-1 bg-[#E1E8FF]">
                          <span className="text-[#1E52DC]">Organizations</span>
                        </div>
                        <div className="flex items-center justify-center rounded-[6px] p-1 bg-[#FFEFF3]">
                          <span className="text-[#FF92AE]">Patients</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 flex flex-col justify-center">
                      <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-xl">
                        <div>
                          <div className="text-xs text-[#5F708D] mb-1">
                            Teams
                          </div>
                          <div className="text-lg font-bold text-[#030733]">
                            2,526
                          </div>
                          <div className="text-xs text-[#13CF7D] mt-1">
                            <span className="bg-[#DEFFEE] p-1 rounded-md">
                              +25%
                            </span>{" "}
                            Since last month
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-[#8B5CF6] rounded-full"></div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-xl">
                        <div>
                          <div className="text-xs text-[#FF779A] mb-1">
                            Patients
                          </div>
                          <div className="text-lg font-bold text-[#030733]">
                            1,324
                          </div>
                          <div className="text-xs text-[#13CF7D] mt-1">
                            <span className="bg-[#DEFFEE] p-1 rounded-md">
                              +16%
                            </span>{" "}
                            Since last month
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-[#FF92AE] rounded-full"></div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-xl">
                        <div>
                          <div className="text-xs text-[#1E52DC] mb-1">
                            Organizations
                          </div>
                          <div className="text-lg font-bold text-[#030733]">
                            1,985
                          </div>
                          <div className="text-xs text-[#13CF7D] mt-1">
                            <span className="bg-[#DEFFEE] p-1 rounded-md">
                              +12%
                            </span>{" "}
                            Since last month
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-[#1E52DC] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-[#425466] text-lg mb-6">
                  Let&apos;s see what we have new, check it out! So maybe
                  <br />
                  explore here something more.
                </p>

                <div className="w-[191px] bg-gray-200 rounded-full h-[8px] mx-auto">
                  <div className="bg-[#1E52DC] h-full rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-lg shadow-md">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white border-2 border-[#1E52DC] rounded-full flex items-center justify-center">
                <UserPlus className="w-8 h-8 text-[#1E52DC]" />
              </div>
            </div>

            <div className="text-center mb-10 text-[#27272E]">
              <h2 className="text-[28px] font-bold mb-3">Welcome!</h2>
            </div>

            <div className="text-center mb-8">
              <p className="text-gray-600 mb-10">
                You&apos;ve been invited to join{" "}
                <span className="text-[#1E52DC] font-medium">[CONMEBOL]</span>{" "}
                on
                <br />
                AB3 Medical. Let&apos;s get your secure account
                <br />
                set up.
              </p>

              <div className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-gray-700 font-medium text-left block mb-2"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 text-lg bg-white shadow-xl"
                    disabled
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-gray-700 font-medium text-left block mb-2"
                  >
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-lg bg-white shadow-xl"
                    disabled
                  />
                </div>
              </div>

              <Button className="w-full bg-[#1E52DC] hover:bg-blue-700 h-12 text-lg font-semibold mt-8">
                Continue
              </Button>

              <p className="text-[#7A7A9D] text-center mt-8 text-sm">
                Do you have trouble ?
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
