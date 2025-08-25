import { ReactNode } from "react";

export type TTextBody = {
  variant: "regular" | "small" | "extraSmall";
  children: ReactNode;
  weight?: string;
  className?: string; // Optional className
  onClick?: () => void; // Optional onClick handler
}
