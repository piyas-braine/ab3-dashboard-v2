"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Check, X } from "lucide-react";
import Image from "next/image";
import LeftSideCard from "@/components/authentications/LeftSideCard";

export default function CreateNewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordRequirements = [
    { text: "At least 8 characters.", met: newPassword.length >= 8 },
    { text: "At least 1 number.", met: /\d/.test(newPassword) },
    { text: "At least 1 lowercase letter.", met: /[a-z]/.test(newPassword) },
    { text: "At least 1 uppercase letter.", met: /[A-Z]/.test(newPassword) },
    {
      text: "At least 1 special characters.",
      met: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    },
  ];

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
                Create New Password
              </h2>
              <p className="text-base text-gray-600">
                Enter your verification code
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <Label
                  htmlFor="newPassword"
                  className="text-gray-700 font-medium text-left block mb-2"
                >
                  New Password
                </Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="h-12 text-lg bg-white shadow-xl pr-12"
                    placeholder=""
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <Label
                  htmlFor="confirmPassword"
                  className="text-gray-700 font-medium text-left block mb-2"
                >
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-12 text-lg bg-white shadow-xl pr-12"
                    placeholder=""
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {passwordRequirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    {req.met ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <X className="w-4 h-4 text-gray-400" />
                    )}
                    <span
                      className={req.met ? "text-green-600" : "text-gray-500"}
                    >
                      {req.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-[#1E52DC] hover:bg-blue-700 h-12 text-lg font-semibold mt-6">
                Reset Password
              </Button>

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
