import React from "react";

type SwitchInputProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const SwitchInput: React.FC<SwitchInputProps> = ({ checked, onChange }) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-[44px] h-[22px] flex items-center rounded-[100px] transition-colors duration-500 ${
        checked ? "bg-bg-primary-blue" : "bg-[#E4EBF6]"
      } cursor-pointer`}
    >
      <span
        className={`absolute w-[16.41px] h-4  bg-bg-default-white rounded-full transform transition-all duration-700 ${
          checked ? "right-[3.08px]" : "left-[3.08px]"
        }`}
      />
    </button>
  );
};

export default SwitchInput;
