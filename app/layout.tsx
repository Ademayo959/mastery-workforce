import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sora } from "next/font/google";
import "./globals.css";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Mastery Workforce PEO Limited",
  description: "Mastery Workforce PEO Limited — recruitment, HR advisory, outsourcing and talent search for organisations across Africa. Beyond talent. Beyond expectation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
