"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield } from "lucide-react";
import Image from "next/image";
import LeftSideCard from "@/components/authentications/LeftSideCard";

export default function OtpVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(24);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSideCard />

        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-lg shadow-md">
            <div className="flex justify-center mb-8">
              <Image
                src="/doctor-symbol.png"
                alt="User"
                width={64}
                height={64}
              />
            </div>

            <div className="text-center mb-10 text-[#27272E]">
              <h2 className="text-[28px] font-bold mb-3">
                Two-Factor Authentication (2FA)
              </h2>
              <p className="text-base">Enter your verification code</p>
            </div>

            <div className="text-center mb-8">
              <p className="text-gray-600 mb-10">
                We&apos;ve sent a 6-digit code to your registered
                <br />
                device. Enter it below to continue.
              </p>

              <Label className="text-gray-700 text-left font-medium block mb-4">
                Enter 6 digit code
              </Label>

              <div className="flex gap-3 justify-center mb-6">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-12 h-12 text-center text-xl font-bold shadow-xl bg-white"
                  />
                ))}
              </div>

              <Button className="w-full bg-[#1E52DC] hover:bg-blue-700 h-12 text-lg font-semibold mb-6">
                Verify & Continue
              </Button>

              <div className="flex items-center justify-between text-sm">
                <button className="text-[#1E52DC] hover:underline font-medium">
                  Didn&apos;t get a code?
                </button>
                <div className="bg-white border border-[#1E52DC] p-3 rounded-md">
                  <span className="text-[#1E52DC]">
                    Resend in 00:{resendTimer.toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-[#7A7A9D] text-sm mb-4">
                Use backup method for code
              </p>

              <div className="bg-white p-3 rounded-md mb-6">
                <button className="text-[#1E52DC] text-sm font-medium">
                  For recovery Email or SMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
