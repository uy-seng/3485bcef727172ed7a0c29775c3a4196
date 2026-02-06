import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helen Ham | Marketing Strategist & Digital Brand Builder",
  description: "Marketing Coordinator specializing in data-driven campaigns, bilingual marketing, and strategic brand development. Proven track record: 40% rise in student inquiries, 25% enrollment improvement, and 100% beta participation for tech startup.",
  keywords: ["marketing strategist", "digital marketing", "brand development", "bilingual marketing", "CRM analytics", "campaign strategy"],
  authors: [{ name: "Helen Ham" }],
  openGraph: {
    title: "Helen Ham | Marketing Strategist & Digital Brand Builder",
    description: "Driving measurable growth through data-driven campaigns, bilingual storytelling, and strategic brand development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helen Ham | Marketing Strategist & Digital Brand Builder",
    description: "Driving measurable growth through data-driven campaigns, bilingual storytelling, and strategic brand development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
