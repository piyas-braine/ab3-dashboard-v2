"use client";

import LeftSideCard from "@/components/authentications/LeftSideCard";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function PasswordResetSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSideCard />

        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-lg shadow-md">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white border-2 border-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </div>

            <div className="text-center mb-10 text-[#27272E]">
              <h2 className="text-[28px] font-bold mb-3">
                Password Reset Success
              </h2>
            </div>

            <div className="text-center mb-8">
              <p className="text-gray-600 mb-10">
                Your password has been reset
              </p>

              <p className="text-gray-600 mb-10">
                You can now sign in using your new
                <br />
                password.
              </p>

              <Button className="w-full bg-[#1E52DC] hover:bg-blue-700 h-12 text-lg font-semibold">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
