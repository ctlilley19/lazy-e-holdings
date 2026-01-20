import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lazy E Holdings LLC | Texas-Based Holding Company",
  description:
    "Veteran-owned holding company based in Dallas-Fort Worth, Texas. Building innovative solutions in facilities management, property services, and pet care technology.",
  keywords: [
    "holding company",
    "Texas business",
    "veteran owned",
    "facilities management",
    "SaaS",
    "Dallas Fort Worth",
  ],
  authors: [{ name: "Lazy E Holdings LLC" }],
  creator: "Lazy E Holdings LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Lazy E Holdings LLC | Texas-Based Holding Company",
    description:
      "Veteran-owned holding company based in Dallas-Fort Worth, Texas. Building innovative solutions across multiple industries.",
    siteName: "Lazy E Holdings",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazy E Holdings LLC",
    description: "Veteran-owned Texas holding company building innovative solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/images/lazy-e-logo.png", type: "image/png" }],
    apple: [{ url: "/images/lazy-e-logo.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${fraunces.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
