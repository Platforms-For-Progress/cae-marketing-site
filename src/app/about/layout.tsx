import Navbar from "../_components/Navbar";

export const metadata = {
  title: "Career Advancement Exchange",
  description: "About Us",
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
