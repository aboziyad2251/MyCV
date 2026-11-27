import type { Metadata, Viewport } from "next";
import "./globals.css";
import { contact, person } from "@/content/cv";

export const metadata: Metadata = {
  metadataBase: new URL(contact.site),
  title: `${person.name.en} | ${person.title.en}`,
  description: person.summary.en,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: contact.site,
    title: `${person.name.en} | ${person.title.en}`,
    description: person.tagline.en,
    siteName: person.name.en,
    locale: "en_US",
    alternateLocale: ["ar_SA"],
  },
  twitter: { card: "summary", title: person.name.en, description: person.tagline.en },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0A1628", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name.en,
  alternateName: person.name.ar,
  jobTitle: person.title.en,
  address: { "@type": "PostalAddress", addressLocality: "Jeddah", addressCountry: "SA" },
  email: `mailto:${contact.email}`,
  telephone: contact.phoneTel,
  url: contact.site,
  sameAs: [contact.linkedin, contact.github],
  alumniOf: ["MidOcean University", "Yanbu Industrial College"],
  worksFor: { "@type": "Organization", name: "Kohl Real Estate" },
  knowsLanguage: ["ar", "en"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&family=Tajawal:wght@400;500;700;800&display=swap"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
