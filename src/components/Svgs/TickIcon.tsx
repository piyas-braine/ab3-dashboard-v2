import React from "react";

const TickIcon = ({ className }: { className?: string }) => {
  return (
    <div className="w-full h-full block">
      <svg
        width="13"
        height="8"
        viewBox="0 0 13 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block"
      >
        <path
          d="M11.9966 0.161771C11.7737 -0.0509851 11.412 -0.0513518 11.1891 0.160868L4.33804 6.67133L1.8662 4.11339C1.65262 3.89248 1.2915 3.87816 1.05927 4.08164C0.827211 4.28514 0.812354 4.62939 1.02594 4.85049L3.90039 7.82487C4.00566 7.93388 4.15299 7.99719 4.30833 8.00026C4.3125 8.00043 4.31653 8.00043 4.32052 8.00043C4.47149 8.00043 4.61671 7.9433 4.7237 7.84173L11.9955 0.931329C12.2189 0.719137 12.2193 0.374526 11.9966 0.161771Z"
          fill="#1E52DB"
          className={className}
        />
      </svg>
    </div>
  );
};

export default TickIcon;
