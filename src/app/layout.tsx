import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Mayen Global Foundation",
  description: "Empowering communities through sustainable change across Africa. Join us in our mission to create lasting impact through healthcare, education, and environmental initiatives.",
  keywords: [
    "African NGO",
    "Community Development",
    "Healthcare Access",
    "Education Empowerment",
    "Waste Management",
    "Financial Literacy",
    "Sustainable Development",
    "African Communities",
    "Social Impact",
    "Volunteer Africa"
  ],
  authors: [{ name: "Mayen Global Foundation" }],
  creator: "Mayen Global Foundation",
  publisher: "Mayen Global Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: "#061640",
  colorScheme: "light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayenglobalfoundation.org",
    siteName: "Mayen Global Foundation",
    title: "Mayen Global Foundation",
    description: "Empowering communities through sustainable change across Africa",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mayen Global Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayen Global Foundation",
    description: "Empowering communities through sustainable change across Africa",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
