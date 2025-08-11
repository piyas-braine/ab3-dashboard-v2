"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import LeftSideCard from "@/components/authentications/LeftSideCard";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSideCard />

        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full  bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-lg shadow-md">
            <div className="flex justify-center mb-8">
              <Image
                src="/doctor-symbol.png"
                alt="User"
                width={64}
                height={64}
              />
            </div>

            <div className="text-center mb-10 text-[#27272E]">
              <h2 className="text-[28px] font-bold  mb-3">Welcome back!</h2>
              <p className="text-base">
                Secure access to your organization
                <br />
                dashboard
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Enter your email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 h-12 text-lg bg-white"
                  placeholder=""
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <div className="relative mt-2">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 text-lg pr-12  bg-white"
                    placeholder=""
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="remember"
                    checked={remember}
                    onCheckedChange={(checked) => setRemember(checked === true)}
                    className="w-5 h-5 border-2 border-[#1E52DC] data-[state=checked]:bg-[#1E52DC] data-[state=checked]:border-[#1E52DC] data-[state=checked]:text-white focus:ring-2 focus:ring-[#1E52DC]"
                  />
                  <Label
                    htmlFor="remember"
                    className="text-gray-600 font-medium"
                  >
                    Remember
                  </Label>
                </div>
                <div className="bg-[#E2EAFF] px-4 py-2 rounded-full">
                  <a href="#" className="text-[#1E52DC] text-[14px]">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <Button className="w-full cursor-pointer bg-[#1E52DC] hover:bg-blue-700 h-12 text-lg font-semibold">
                  Sign In
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full cursor-pointer h-12 text-lg font-semibold border-2 border-[#1E52DC] text-[#1E52DC] hover:text-[#1E52DC]"
                >
                  Sign Up
                </Button>
              </div>
            </div>

            <p className="text-[#7A7A9D] text-center mt-8">
              Do you trouble signing in ?
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
