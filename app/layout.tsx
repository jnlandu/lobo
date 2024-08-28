import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";


import { cn } from '@/lib/utils'
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "CarePulse",
  description: "A healthcare management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}">
        
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        
        </body>
    </html>
  );
}
