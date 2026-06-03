import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJS Intro",
  description: "Simple multi-page website for a school assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
