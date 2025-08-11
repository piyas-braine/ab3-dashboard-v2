"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import LeftSideCard from "@/components/authentications/LeftSideCard";

export default function UserRedirection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSideCard />

        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-lg shadow-md">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white border-2 border-[#1E52DC] rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#1E52DC]" />
              </div>
            </div>

            <div className="text-center mb-10 text-[#27272E]">
              <h2 className="text-[28px] font-bold mb-3">Welcome back...!</h2>
              <p className="text-xl font-semibold text-[#1E52DC] mb-4">
                Nickson
              </p>
            </div>

            <div className="text-center mb-8">
              <p className="text-gray-600 mb-10">
                Redirecting to your dashboard......
              </p>

              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 relative">
                  <svg
                    className="w-24 h-24 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#1E52DC"
                      strokeWidth="2"
                      strokeDasharray={`${progress}, 100`}
                    />
                  </svg>
                </div>
              </div>

              <p className="text-[#7A7A9D] text-sm mb-6">
                If you&apos;re not redirected in few seconds
              </p>

              <Button
                variant="outline"
                className="w-full border-2 border-[#1E52DC] text-[#1E52DC] hover:bg-[#1E52DC] hover:text-white h-12 font-semibold"
              >
                Click here
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
