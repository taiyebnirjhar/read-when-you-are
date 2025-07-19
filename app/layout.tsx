import { cn } from "@/lib/utils";
import { Providers } from "@/redux/provider";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Read when you are ..",
  description:
    "Find comfort and guidance through beautiful verses from the Quran, tailored to your current emotional state.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen  font-sans antialiased", fontSans.variable)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
