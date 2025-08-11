"use client";

import LeftSideCard from "@/components/authentications/LeftSideCard";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import Image from "next/image";

export default function TwoFAOptionalSecurityPreferences() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSideCard />

        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
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
                Would you like to enable Two-Factor Authentication
                <br />
                for added security?
              </p>
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
                <Image src="/headphone.png" alt="User" width={30} height={30} />
              </button>
              <button className="w-12 h-12 bg-white p-2 rounded-md flex shadow-md items-center justify-center">
                <Image src="/call.png" alt="User" width={30} height={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
