import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Roshan Siddartha Sivakumar | Data Scientist & Engineer",
  description:
    "Data Science graduate student at Vanderbilt. Building predictive models, ML pipelines, and dashboards that drive better decisions.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "Vanderbilt",
    "Portfolio",
    "Python",
    "Analytics",
  ],
  openGraph: {
    title: "Roshan Siddartha Sivakumar | Data Scientist & Engineer",
    description:
      "Data Science graduate at Vanderbilt. Building predictive models, ML pipelines, and dashboards.",
    url: "https://rroshann.github.io",
    siteName: "Roshan Sivakumar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshan Sivakumar | Data Scientist & Engineer",
    description:
      "Data Science graduate at Vanderbilt. ML, AI, and Analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <div className="flex flex-col min-h-screen pt-20 md:pt-24">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
