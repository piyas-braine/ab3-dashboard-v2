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
import { UserPlus } from "lucide-react";
import Image from "next/image";
import LeftSideCard from "@/components/authentications/LeftSideCard";

export default function SetUpOrganizationAddUsers() {
  const [emailAddress, setEmailAddress] = useState("");
  const [assignRole, setAssignRole] = useState("");

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
              <h2 className="text-[28px] font-bold mb-3">
                Add Users To
                <br />
                Your Organisation
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <Label
                  htmlFor="emailAddress"
                  className="text-gray-700 font-medium text-left block mb-2"
                >
                  Email Address
                </Label>
                <Input
                  id="emailAddress"
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="h-12 text-lg bg-white shadow-xl"
                  placeholder=""
                />
              </div>

              <div>
                <Label
                  htmlFor="assignRole"
                  className="text-gray-700 font-medium text-left block mb-2"
                >
                  Assign Role
                </Label>
                <Select value={assignRole} onValueChange={setAssignRole}>
                  <SelectTrigger className="h-12 text-lg bg-white shadow-xl">
                    <SelectValue placeholder="Select One" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="nurse">Nurse</SelectItem>
                    <SelectItem value="staff">Staff</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="text-center py-4">
                <p className="text-gray-600 text-sm">
                  You can skip this step and add users later
                  <br />
                  from the dashboard.
                </p>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-[#1E52DC] hover:bg-blue-700 h-12 text-lg font-semibold">
                  Send Invites
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-12 text-lg font-semibold border-2 border-[#1E52DC] text-[#1E52DC] hover:bg-[#1E52DC] hover:text-white"
                >
                  Skip for Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
