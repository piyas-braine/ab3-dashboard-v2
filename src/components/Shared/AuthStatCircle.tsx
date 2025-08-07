/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const AuthStatCircle = () => {
  const segments = [
    { percentage: 48, color: "#A6B7D4", label: "Light Blue" },
    { percentage: 20, color: "#3B82F6", label: "Blue" },
    { percentage: 32, color: "#FF92AE", label: "Pink" },
  ];

  const size = 139;
  const innerSize = 96;
  const centerText = "100%";

  const calculateSegments = (segments: any) => {
    let currentAngle = -90; // Start from top (12 o'clock)
    return segments.map((segment: any) => {
      const startAngle = currentAngle;
      const segmentAngle = (segment.percentage / 100) * 360;
      const endAngle = currentAngle + segmentAngle;
      currentAngle = endAngle;

      return {
        ...segment,
        startAngle,
        endAngle,
        segmentAngle,
      };
    });
  };

  const calculatedSegments = calculateSegments(segments);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div className="w-full h-full rounded-full relative overflow-hidden">
        {calculatedSegments.map((segment: any, index: number) => (
          <div
            key={index}
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from ${segment.startAngle}deg, ${segment.color} 0deg, ${segment.color} ${segment.segmentAngle}deg, transparent ${segment.segmentAngle}deg)`,
            }}
          />
        ))}

        {/* Inner white circle to create donut effect */}
        <div
          className="absolute top-1/2 left-1/2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ width: innerSize, height: innerSize }}
        >
          <span className="text-[20px] leading-[22px] font-bold text-gray-900">
            {centerText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthStatCircle;
