import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Footer from "@/app/_components/Footer";

import { Providers } from "../providers";
import Navbar from "../_components/Navbar";

export const metadata = {
  title: "Career Advancement Exchange",
  description: "Contact Us",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
