"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import Image from "next/image";
import LeftSideCard from "@/components/authentications/LeftSideCard";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSideCard />

        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-lg shadow-md">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white border-2 border-[#1E52DC] rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-[#1E52DC]" />
              </div>
            </div>

            <div className="text-center mb-10 text-[#27272E]">
              <h2 className="text-[28px] font-bold mb-3">
                Reset your Password
              </h2>
              <p className="text-base text-gray-600">
                Enter your registered email address.
                <br />
                We&apos;ll send you a link to reset your password.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <Label
                  htmlFor="email"
                  className="text-gray-700 font-medium text-left block mb-2"
                >
                  Enter your email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-lg bg-white shadow-xl"
                  placeholder=""
                />
              </div>

              <div className="space-y-4 pt-4">
                <Button className="w-full bg-[#1E52DC] hover:bg-blue-700 h-12 text-lg font-semibold">
                  Reset Password
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 text-lg font-semibold border-2 border-[#1E52DC] text-[#1E52DC] hover:bg-[#1E52DC] hover:text-white"
                >
                  Sign In
                </Button>
              </div>
            </div>

            <p className="text-[#7A7A9D] text-center mt-8 text-sm">
              Do you trouble in reset password?
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
