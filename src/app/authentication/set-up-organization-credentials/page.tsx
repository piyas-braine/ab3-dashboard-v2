"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building, Upload } from "lucide-react";
import Image from "next/image";
import LeftSideCard from "@/components/authentications/LeftSideCard";

export default function SetUpOrganizationCredentials() {
  const [organizationName, setOrganizationName] = useState("");
  const [organizationType, setOrganizationType] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSideCard />

        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-lg shadow-md">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white border-2 border-[#1E52DC] rounded-full flex items-center justify-center">
                <Building className="w-8 h-8 text-[#1E52DC]" />
              </div>
            </div>

            <div className="text-center mb-10 text-[#27272E]">
              <h2 className="text-[28px] font-bold mb-3">
                Set up your Organization
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <Label
                  htmlFor="organizationName"
                  className="text-gray-700 font-medium text-left block mb-2"
                >
                  Organization Name
                </Label>
                <Input
                  id="organizationName"
                  type="text"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  className="h-12 text-lg bg-white shadow-xl"
                  placeholder=""
                />
              </div>

              <div>
                <Label
                  htmlFor="organizationType"
                  className="text-gray-700 font-medium text-left block mb-2"
                >
                  Organization Type
                </Label>
                <Select
                  value={organizationType}
                  onValueChange={setOrganizationType}
                >
                  <SelectTrigger className="h-12 text-lg bg-white shadow-xl">
                    <SelectValue placeholder="Select One" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hospital">Hospital</SelectItem>
                    <SelectItem value="clinic">Clinic</SelectItem>
                    <SelectItem value="practice">Medical Practice</SelectItem>
                    <SelectItem value="pharmacy">Pharmacy</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-white">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-[#1E52DC] rounded-full flex items-center justify-center">
                    <Upload className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-700">
                      Upload Logo
                    </div>
                    <div className="text-xs text-gray-500">
                      Upload a square image
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="text-[#1E52DC] border-[#1E52DC] hover:bg-[#1E52DC] hover:text-white"
                >
                  Upload
                </Button>
              </div>

              <div className="space-y-4 pt-4">
                <Button className="w-full bg-[#1E52DC] hover:bg-blue-700 h-12 text-lg font-semibold">
                  Continue
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-12 text-lg font-semibold border-2 border-[#1E52DC] text-[#1E52DC] hover:bg-[#1E52DC] hover:text-white"
                >
                  Skip?
                </Button>
              </div>

              <p className="text-[#7A7A9D] text-center mt-8 text-sm">
                Do you trouble for setup organization?
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
