import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { dark } from "@clerk/themes";

import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>
          <ClerkLoading>
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-dark-1">
              <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <Topbar />
            <main className="flex flex-row">
              <LeftSidebar />
              <section className="main-container">
                <div className="w-full max-4xl">
                  {children}
                </div>
              </section>
              <RightSidebar />
            </main>
            <Bottombar />
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
