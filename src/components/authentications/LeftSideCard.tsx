import Image from "next/image";
import React from "react";

const LeftSideCard = () => {
  return (
    <div className="w-full lg:w-1/2 p-2 lg:p-12 flex flex-col justify-center min-h-screen lg:min-h-0">
      <div className="lg:max-w-lg mx-auto w-full flex flex-col items-center justify-center">
        <Image
          src="/logo.png"
          alt="AB3 Medical Logo"
          height={100}
          width={100}
          className="lg:w-[135px] lg:h-[85px] mt-10 lg:mt-0"
        />
        <div className="bg-[#E4ECF7] w-full lg:w-[756px] h-[85vh] lg:h-[756px] rounded-full flex flex-col items-center justify-center relative">
          <h1 className="font-bold text-lg lg:text-[28px] leading-[28px] text-center font-['Inter'] mb-4 lg:mb-8">
            Welcome to AB3 <span className="text-[#F32448]">Medical</span>
          </h1>

          <div className="bg-[#1E52DC] w-full lg:w-[421px] h-[45vh] lg:h-[421px] rounded-full flex flex-col items-center justify-center shadow-xl">
            <div className="w-full lg:w-[513px] h-[38vh] lg:h-[359px] bg-white/50 backdrop-blur-sm rounded-[22px] flex items-center justify-center shadow-2xl">
              <div className="w-full lg:w-[476px] lg:h-[318px] bg-white rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 shadow-lg p-3 lg:p-4">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-base lg:text-[20px] font-bold text-[#030733] pr-0 lg:pr-20 mb-2 lg:mb-0">
                    Statistics
                  </h2>

                  <div className="flex items-center justify-center h-24 lg:h-auto">
                    <Image
                      src="/chart.png"
                      alt="Chart"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain max-w-[120px] lg:max-w-none"
                    />
                  </div>

                  <div className="max-w-48 flex-wrap text-xs flex items-center justify-center gap-2 mt-2 lg:mt-0">
                    <div className="flex items-center justify-center rounded-[6px] p-1 bg-[#A6B7D445]">
                      <span className="text-[#5F708D]">Teams</span>
                    </div>
                    <div className="flex items-center justify-center rounded-[6px] p-1 bg-[#E1E8FF]">
                      <span className="text-[#1E52DC]">Organizations</span>
                    </div>
                    <div className="flex items-center justify-center rounded-[6px] p-1 bg-[#FFEFF3]">
                      <span className="text-[#FF92AE]">Patients</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 lg:space-y-2 flex flex-col justify-center">
                  <div className="flex items-center justify-between p-2 lg:p-3 bg-white rounded-xl shadow-xl">
                    <div>
                      <div className="text-xs text-[#5F708D] mb-1">Teams</div>
                      <div className="text-base lg:text-lg font-bold text-[#030733]">
                        2,526
                      </div>
                      <div className="text-xs text-[#13CF7D] mt-1">
                        <span className="bg-[#DEFFEE] p-1 rounded-md">
                          +25%
                        </span>{" "}
                        Since last month
                      </div>
                    </div>
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-[#8B5CF6] rounded-full"></div>
                  </div>

                  <div className="flex items-center justify-between p-2 lg:p-3 bg-white rounded-xl shadow-xl">
                    <div>
                      <div className="text-xs text-[#FF779A] mb-1">
                        Patients
                      </div>
                      <div className="text-base lg:text-lg font-bold text-[#030733]">
                        1,324
                      </div>
                      <div className="text-xs text-[#13CF7D] mt-1">
                        <span className="bg-[#DEFFEE] p-1 rounded-md">
                          +16%
                        </span>{" "}
                        Since last month
                      </div>
                    </div>
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-[#FF92AE] rounded-full"></div>
                  </div>

                  <div className="flex items-center justify-between p-2 lg:p-3 bg-white rounded-xl shadow-xl">
                    <div>
                      <div className="text-xs text-[#1E52DC] mb-1">
                        Organizations
                      </div>
                      <div className="text-base lg:text-lg font-bold text-[#030733]">
                        1,985
                      </div>
                      <div className="text-xs text-[#13CF7D] mt-1">
                        <span className="bg-[#DEFFEE] p-1 rounded-md">
                          +12%
                        </span>{" "}
                        Since last month
                      </div>
                    </div>
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-[#1E52DC] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 lg:mt-8 px-6 lg:px-0 flex-shrink-0">
            <p className="text-[#425466] lg:text-lg mb-6">
              Let&apos;s see what we have new, check it out! So maybe
              <br />
              explore here something more.
            </p>

            <div className="w-[191px] bg-gray-200 rounded-full h-[8px] mx-auto">
              <div className="bg-[#1E52DC] h-full rounded-full w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideCard;
