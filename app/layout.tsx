import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Hair Club Aligarh — Luxury Hair & Grooming Experience",
  description:
    "Experience premium luxury hair salon services in Aligarh. Korean Hydra Facial, Premium Hair Spa, Advanced Haircut & more. Best Hair Salon in Aligarh.",
  keywords: [
    "Best Hair Salon in Aligarh",
    "Luxury Hair Salon Aligarh",
    "Korean Hydra Facial Aligarh",
    "Premium Hair Spa Aligarh",
    "Hair Color Aligarh",
    "Beard Grooming Aligarh",
    "Best Salon in Aligarh",
    "The Hair Club Aligarh",
  ],
  openGraph: {
    title: "The Hair Club Aligarh — Luxury Hair & Grooming Experience",
    description:
      "Premium luxury hair salon services in Aligarh. Where grooming becomes an experience.",
    type: "website",
    locale: "en_IN",
    siteName: "The Hair Club Aligarh",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://thehairclubaligarh.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#F5F3EE" />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <main className="page-transition">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}