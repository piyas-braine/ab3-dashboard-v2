import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import ReduxProvider from "@/store/ReduxProvider";

export const metadata: Metadata = {
  title: "Ab3 Medical",
  description: "Ab3 Medical",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
