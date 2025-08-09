import { TTextBody } from "@/types/TTextBody";
import React from "react";

const TextBody = ({ variant, children, weight, className }: TTextBody) => {
  const variants = {
    regular: {
      text: "text-[16px]",
      leading: "leading-[162%]",
      font: weight === "semibold" ? "font-[600]" : "font-[400]",
    },
    small: {
      text: "text-[14px]",
      leading: "leading-[23px]",
      font: weight === "semibold" ? "font-[600]" : "font-[400]",
    },
    extraSmall: {
      text: "text-[12px]",
      leading: "leading-[20px]",
      font: weight === "semibold" ? "font-[600]" : "font-[400]",
    },
  };

  // Fallback to "regular" if an invalid `variant` is provided
  const { text, leading, font } = variants[variant] || variants["regular"];

  return (
    <p className={`${text} ${leading} ${font} ${className}`}>{children}</p>
  );
};

export default TextBody;
