import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/app/_components/Navbar";

import { Providers } from "../providers";

export const metadata = {
  title: "Career Advancement Exchange Solutions",
  description: "Our solutions for addressing inequities in the hiring process",
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
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
