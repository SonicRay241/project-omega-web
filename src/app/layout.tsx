import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Commerce sample app",
  description: "Real world simulation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
