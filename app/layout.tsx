import { auth } from "@/auth";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/lib/query-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISU-Hub",
  description: "No filter chirping about anything at all",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en" className="dark">
        <body
          className={cn(inter.className, "bg-[#E4E4E7] dark:bg-[#0f0f0f] ")}
        >
          <div className="container mx-auto max-w-7xl">
            <Providers>
            <Navbar />
            {children}
            
            </Providers>
          </div>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
