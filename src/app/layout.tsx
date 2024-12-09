import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

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
        <TooltipProvider>
          {children}
          <Toaster/>
        </TooltipProvider>
      </body>
    </html>
  );
}
