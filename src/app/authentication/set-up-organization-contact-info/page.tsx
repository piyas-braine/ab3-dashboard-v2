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
import { Mail } from "lucide-react";
import Image from "next/image";
import LeftSideCard from "@/components/authentications/LeftSideCard";

export default function SetUpOrganizationContactInfo() {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [countryTimezone, setCountryTimezone] = useState("");
  const [organizationEmail, setOrganizationEmail] = useState("");
  const [organizationPhone, setOrganizationPhone] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSideCard />

        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-lg shadow-md">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white border-2 border-[#1E52DC] rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-[#1E52DC]" />
              </div>
            </div>

            <div className="text-center mb-10 text-[#27272E]">
              <h2 className="text-[28px] font-bold mb-3">
                Organization Contact Info
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <Label
                  htmlFor="streetAddress"
                  className="text-gray-700 font-medium text-left block mb-2"
                >
                  Street Address
                </Label>
                <Input
                  id="streetAddress"
                  type="text"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="h-12 text-lg bg-white shadow-xl"
                  placeholder=""
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="city"
                    className="text-gray-700 font-medium text-left block mb-2"
                  >
                    City
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="h-12 text-lg bg-white shadow-xl"
                    placeholder=""
                  />
                </div>
                <div>
                  <Label
                    htmlFor="postcode"
                    className="text-gray-700 font-medium text-left block mb-2"
                  >
                    Postcode
                  </Label>
                  <Input
                    id="postcode"
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="h-12 text-lg bg-white shadow-xl"
                    placeholder=""
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="countryTimezone"
                  className="text-gray-700 font-medium text-left block mb-2"
                >
                  Country & Timezone
                </Label>
                <Select
                  value={countryTimezone}
                  onValueChange={setCountryTimezone}
                >
                  <SelectTrigger className="h-12 text-lg bg-white shadow-xl">
                    <SelectValue placeholder="Select One" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us-est">United States (EST)</SelectItem>
                    <SelectItem value="us-pst">United States (PST)</SelectItem>
                    <SelectItem value="uk-gmt">United Kingdom (GMT)</SelectItem>
                    <SelectItem value="ca-est">Canada (EST)</SelectItem>
                    <SelectItem value="au-aest">Australia (AEST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="organizationEmail"
                  className="text-gray-700 font-medium text-left block mb-2"
                >
                  Organization Email
                </Label>
                <Input
                  id="organizationEmail"
                  type="email"
                  value={organizationEmail}
                  onChange={(e) => setOrganizationEmail(e.target.value)}
                  className="h-12 text-lg bg-white shadow-xl"
                  placeholder=""
                />
              </div>

              <div>
                <Label
                  htmlFor="organizationPhone"
                  className="text-gray-700 font-medium text-left block mb-2"
                >
                  Organization Phone Number
                </Label>
                <Input
                  id="organizationPhone"
                  type="tel"
                  value={organizationPhone}
                  onChange={(e) => setOrganizationPhone(e.target.value)}
                  className="h-12 text-lg bg-white shadow-xl"
                  placeholder=""
                />
              </div>

              <Button className="w-full bg-[#1E52DC] hover:bg-blue-700 h-12 text-lg font-semibold mt-8">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
