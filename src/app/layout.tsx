import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { TRPCProvider } from "@/trpc/client";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "900", "300"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Utube App",
  description: "Create utube app like youtube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
          <TRPCProvider>
            {children}
          </TRPCProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
