import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import RecaptchaProvider from "@/components/providers/RecaptchaProvider";
import ChatWidget from "@/components/chat/ChatWidget";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://logicware.tech";
const SITE_NAME = "Logicware LLC";
const SITE_TITLE = "Logicware LLC | Mental Health Billing Specialists";
const SITE_DESCRIPTION =
  "Logicware LLC handles end-to-end medical billing for solo therapists and small mental health practices across the US — claim submission, denial management, credentialing, and transparent reporting.";
const OG_IMAGE = `${SITE_URL}/favicon/android-chrome-512x512.png`;

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Logicware LLC",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
    other: [
      { rel: "icon", url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 512,
        height: 512,
        alt: "Logicware LLC — Mental Health Billing Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@logicwarellc",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Logicware LLC",
  url: "https://logicware.tech",
  logo: "https://logicware.tech/favicon/android-chrome-512x512.png",
  description:
    "Mental health billing specialists handling claim submission, denial management, credentialing, and reporting for solo therapists and small practices across the US.",
  email: "contact@logicware.tech",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1007 N Orange St. 4th Floor, 4682",
    addressLocality: "Wilmington",
    addressRegion: "DE",
    postalCode: "19801",
    addressCountry: "US",
  },
  sameAs: [
    "https://x.com/logicwarellc",
    "https://linkedin.com/company/logicwarellc",
    "https://facebook.com/logicwarellc",
    "https://instagram.com/logicwarellc",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Theme init — must run before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.dataset.theme='dark';}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google tag (gtag.js) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text-primary)] font-poppins antialiased">
        <RecaptchaProvider siteKey={RECAPTCHA_KEY}>
          {children}
        </RecaptchaProvider>
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
