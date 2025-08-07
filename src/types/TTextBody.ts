import { ReactNode } from "react";

export type TTextBody = {
  variant: "small";
  children: ReactNode;
  weight?: string;
  className?: string; // Optional className
}
