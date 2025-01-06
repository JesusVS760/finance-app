import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { clerkMiddleware } from "@clerk/nextjs/server";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryProvider } from "@/provider/query-provider";
import { SheetProvider } from "@/provider/sheet-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <QueryProvider>
            <SheetProvider />
            {children}
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
