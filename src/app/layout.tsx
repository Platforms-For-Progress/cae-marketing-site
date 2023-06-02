import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

import { Providers } from "./providers";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import WoopraScript from "@/woopra";

export const metadata = {
  title: "Career Advancement Exchange",
  description: "Career Advancement Exchange",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Footer />
        </Providers>
        <WoopraScript />
      </body>
    </html>
  );
}
