import type { Metadata, Viewport } from "next";
import "@/styles/variables.scss";
import "@/styles/responsive.scss";
import "./globals.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata: Metadata = {
  title: "Vincent Hadinata | Software Engineer",
  description: "Portfolio of Vincent Hadinata, a Software Engineer (Frontend) currently at Octomate by HRnet, passionate about crafting intuitive user interfaces and impactful web experiences.",
  keywords: ["Vincent Hadinata", "Software Engineer (Frontend)", "Software Engineer", "Portfolio", "Web Development", "React", "Next.js", "Octomate"],
  authors: [{ name: "Vincent Hadinata" }],
  openGraph: {
    title: "Vincent Hadinata | Software Engineer",
    description: "Portfolio of Vincent Hadinata, a Software Engineer (Frontend) currently at Octomate by HRnet, passionate about crafting intuitive user interfaces and impactful web experiences.",
    url: "https://vincenthadinata.com",
    siteName: "Vincent Hadinata Portfolio",
    images: [
      {
        url: "/landing-image.webp",
        width: 800,
        height: 600,
        alt: "Vincent Hadinata",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#313B6B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
