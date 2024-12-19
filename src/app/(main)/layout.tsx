import { archivo } from "@/fonts/font";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opinion",
  description: "Share your opinion about anything, anonymously",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en">
      <body className={`${archivo.className} antialiased min-h-screen flex flex-col bg-whiteVarCol text-blackVarCol dark:bg-blackVarCol dark:text-whiteVarCol dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;