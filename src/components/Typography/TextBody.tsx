import { TTextBody } from "@/types/TTextBody";
import React from "react";

const TextBody = ({ variant, children, weight, className }: TTextBody) => {
  const variants = {
    small: {
      text: "text-[10px]",
      leading: "leading-[100%]",
      font: weight === "semibold" ? "font-[600]" : "font-[400]",
    },
  };

  // Fallback to "regular" if an invalid `variant` is provided
  const { text, leading, font } = variants[variant] || variants["small"];

  return (
    <p className={`${text} ${leading} ${font} ${className}`}>
      {children}
    </p>
  );
};

export default TextBody;
