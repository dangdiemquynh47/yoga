import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

// const BeVietNam = Be_Vietnam_Pro({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// } as any);

export const metadata: Metadata = {
  title: "Yoga Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
