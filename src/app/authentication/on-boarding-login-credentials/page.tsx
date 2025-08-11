"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";
import Image from "next/image";
import LeftSideCard from "@/components/authentications/LeftSideCard";

export default function OnBoardingLoginCredentials() {
  const [name, setName] = useState("Steve Nickson");
  const [email, setEmail] = useState("stevenickson563@gmail.com");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSideCard />

        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
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
