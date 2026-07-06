import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tentkinggroup.co.za"),
  title: { default: "Tent King Group | Infrastructure, Sanitation, Events & Property", template: "%s | Tent King Group" },
  description: "Integrated infrastructure, sanitation, event and property solutions delivered nationally across South Africa since 2010.",
  keywords: ["temporary infrastructure South Africa", "tent manufacturing", "portable sanitation", "corporate events", "property facilities"],
  openGraph: { title: "Tent King Group", description: "Building Spaces. Enabling Experiences. Delivering Solutions.", type: "website", locale: "en_ZA", url: "/", siteName: "Tent King Group" },
  twitter: { card: "summary_large_image", title: "Tent King Group", description: "One group. Four specialist divisions. National capability." },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#111111" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: "Tent King Group", foundingDate: "2010", areaServed: "South Africa", email: "info@tentsking.co.za", telephone: "+27 11 972 0053", address: { "@type": "PostalAddress", streetAddress: "41 Mooifontein Road, Norkem Park", addressLocality: "Kempton Park", postalCode: "1618", addressCountry: "ZA" }, url: "https://tentkinggroup.co.za" };
  return <html lang="en"><body><a href="#main" className="fixed left-4 top-4 z-[100] -translate-y-24 bg-white px-4 py-3 font-bold text-black focus:translate-y-0">Skip to content</a>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
