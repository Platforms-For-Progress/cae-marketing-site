import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

export const metadata = {
  title: "Career Advancement Exchange Solutions",
  description: "Our solutions for addressing inequities in the hiring process",
};

export default function SolutionsLayout({
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
