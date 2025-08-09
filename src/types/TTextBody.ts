import { ReactNode } from "react";

export type TTextBody = {
  variant: "regular" | "small";
  children: ReactNode;
  weight?: string;
  className?: string; // Optional className
}
