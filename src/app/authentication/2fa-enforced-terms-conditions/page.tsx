"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText } from "lucide-react";
import Image from "next/image";
import LeftSideCard from "@/components/authentications/LeftSideCard";

export default function TwoFAEnforcedTermsConditions() {
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSideCard />

        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-lg shadow-md">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white border-2 border-[#1E52DC] rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-[#1E52DC]" />
              </div>
            </div>

            <div className="text-center mb-10 text-[#27272E]">
              <h2 className="text-[28px] font-bold mb-3">Terms & Conditions</h2>
              <p className="text-base text-gray-600">
                Please review and accept
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="acceptTerms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) =>
                    setAcceptTerms(checked === true)
                  }
                  className="w-5 h-5 border-2 border-[#1E52DC] data-[state=checked]:bg-[#1E52DC] data-[state=checked]:border-[#1E52DC] data-[state=checked]:text-white focus:ring-2 focus:ring-[#1E52DC]"
                />
                <label
                  htmlFor="acceptTerms"
                  className="text-gray-600 font-medium"
                >
                  I accept the{" "}
                  <a href="#" className="text-[#1E52DC] underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#1E52DC] underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <Button
                className="w-full bg-[#1E52DC] hover:bg-blue-700 h-12 text-lg font-semibold"
                disabled={!acceptTerms}
              >
                Accept & Continue
              </Button>

              <p className="text-[#7A7A9D] text-center mt-8 text-sm">
                Do you want help ?
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
