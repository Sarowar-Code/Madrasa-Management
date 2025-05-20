"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Hind_Siliguri, Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
const hind = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bangla",
});

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${hind.variable}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
