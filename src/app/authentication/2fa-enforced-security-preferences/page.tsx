"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import Image from "next/image";
import LeftSideCard from "@/components/authentications/LeftSideCard";

export default function TwoFAEnforcedSecurityPreferences() {
  const [selectedMethod, setSelectedMethod] = useState("authenticator");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSideCard />

        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 lg:p-10 rounded-lg shadow-md">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white border-2 border-[#1E52DC] rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-[#1E52DC]" />
              </div>
            </div>

            <div className="text-center mb-8 sm:mb-10 text-[#27272E]">
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-2 sm:mb-3">
                Security Preferences
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Your organization requires Two-Factor
                <br className="hidden sm:inline" />
                <span className="sm:hidden"> </span>Authentication.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <p className="text-gray-700 font-medium text-left block mb-3 sm:mb-4 text-sm sm:text-base">
                  Choose 2FA Method:
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <button
                    onClick={() => setSelectedMethod("authenticator")}
                    className={`flex-1 p-3 sm:p-4 rounded-lg border-2 text-center transition-all ${
                      selectedMethod === "authenticator"
                        ? "border-[#1E52DC] bg-blue-50"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          selectedMethod === "authenticator"
                            ? "border-[#1E52DC] bg-[#1E52DC]"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedMethod === "authenticator" && (
                          <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                        )}
                      </div>
                      <span
                        className={`font-medium text-sm sm:text-base ${
                          selectedMethod === "authenticator"
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
                    className={`flex-1 p-3 sm:p-4 rounded-lg border-2 text-center transition-all ${
                      selectedMethod === "email"
                        ? "border-[#1E52DC] bg-blue-50"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          selectedMethod === "email"
                            ? "border-[#1E52DC] bg-[#1E52DC]"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedMethod === "email" && (
                          <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                        )}
                      </div>
                      <span
                        className={`font-medium text-sm sm:text-base ${
                          selectedMethod === "email"
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

              <div className="space-y-3 sm:space-y-4">
                <Button className="w-full bg-[#1E52DC] hover:bg-blue-700 h-10 sm:h-12 text-base sm:text-lg font-semibold">
                  Enable & Continue
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-10 sm:h-12 text-base sm:text-lg font-semibold border-2 border-[#1E52DC] text-[#1E52DC] hover:bg-[#1E52DC] hover:text-white"
                >
                  Skip for now
                </Button>
              </div>

              <p className="text-[#7A7A9D] text-center mt-6 sm:mt-8 text-xs sm:text-sm">
                Do you trouble to reset password?
              </p>

              <div className="flex justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white p-2 rounded-md flex shadow-md items-center justify-center">
                  <Image
                    src="/headphone.png"
                    alt="Support"
                    width={30}
                    height={30}
                    className="w-6 h-6 sm:w-[30px] sm:h-[30px]"
                  />
                </button>
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white p-2 rounded-md flex shadow-md items-center justify-center">
                  <Image
                    src="/call.png"
                    alt="Call"
                    width={30}
                    height={30}
                    className="w-6 h-6 sm:w-[30px] sm:h-[30px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
