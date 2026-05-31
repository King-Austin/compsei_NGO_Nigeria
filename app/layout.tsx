import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { OrganizationJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://compsei.com.ng"),
  title: {
    default: "COMPSEI — Community Psychosocial Support Empowerment Initiative",
    template: "%s | COMPSEI",
  },
  description:
    "COMPSEI is a Nigerian NGO addressing psychosocial, environmental, and community-level challenges through inclusive, community-driven solutions.",
  keywords: [
    "psychosocial support Nigeria",
    "community empowerment NGO",
    "mental health Nigeria",
    "climate resilience Nigeria",
    "COMPSEI",
  ],
  authors: [{ name: "COMPSEI" }],
  creator: "COMPSEI",
  openGraph: {
    siteName: "COMPSEI",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/compsei-logo.png",
        width: 512,
        height: 512,
        alt: "COMPSEI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@COMPSEI",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <OrganizationJsonLd />
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
