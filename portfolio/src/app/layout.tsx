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
  metadataBase: new URL("https://rroshann.github.io"),
  title: "Roshan Siddartha Sivakumar | Data Scientist & Engineer",
  description:
    "Data scientist (M.S., Vanderbilt). Building ML models, LLM applications, and production data pipelines that drive better decisions.",
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
      "Data scientist (M.S., Vanderbilt). ML models, LLM applications, and production data pipelines.",
    url: "https://rroshann.github.io",
    siteName: "Roshan Sivakumar Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roshan Siddartha Sivakumar — Data Scientist & Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshan Sivakumar | Data Scientist & Engineer",
    description:
      "Data scientist (M.S., Vanderbilt). ML, AI, and Analytics.",
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roshan Siddartha Sivakumar",
  url: "https://rroshann.github.io",
  email: "mailto:roshan.siddartha.24@gmail.com",
  jobTitle: "Data Scientist",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Vanderbilt University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Vellore Institute of Technology",
    },
  ],
  sameAs: [
    "https://linkedin.com/in/roshansiddartha",
    "https://github.com/rroshann",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
