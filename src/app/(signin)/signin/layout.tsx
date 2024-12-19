import type { Metadata } from "next";
import { archivo } from "@/fonts/font";
import React from "react";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Welcome to Opinion",
  description: "Start your journey in to the world of anonymous opinions",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en">
      <body className={`${archivo.className} antialiased bg-blackVarCol text-whiteVarCol`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;