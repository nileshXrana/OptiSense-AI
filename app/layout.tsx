
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UserProvider } from '@/context/UserProvider';
import { Toaster } from "sonner";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://optisense.nileshrana.tech"),
  title: {
    default: "OptiSense AI — Your Personal AI Assistants",
    template: "%s | OptiSense AI",
  },
  description:
    "OptiSense AI provides 50+ specialized AI assistants for coding, writing, finance, productivity and more. Fast, affordable, and tailored to professionals and teams.",
  keywords: [
    "OptiSense", "OptiSense AI", "AI assistants", "AI tools", "personal AI", "AI SaaS", "Google Gemini", "Razorpay", "Clerk auth", "Next.js", "productivity AI", "AI for developers", "content AI", "AI marketplace",
  ],
  authors: [
    { name: "Nilesh Rana", url: "https://nileshrana.tech" },
  ],
  creator: "Nilesh Rana",
  publisher: "OptiSense AI",
  openGraph: {
    title: "OptiSense AI — Your Personal AI Assistants",
    description:
      "50+ purpose-built AI assistants, custom assistant builder, pay-as-you-go credits. Built with Google Gemini, Next.js and Prisma.",
    url: "https://optisense.nileshrana.tech",
    siteName: "OptiSense AI",
    images: [
      {
        url: "https://optisense.nileshrana.tech/favicon.ico",
        width: 1200,
        height: 630,
        alt: "OptiSense AI assistants",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OptiSense AI — Your Personal AI Assistants",
    description:
      "50+ purpose-built assistants & custom assistant builder. Low-cost, India-first payments via Razorpay.",
    images: ["/robot.jpg"],
    creator: "@nileshxrana",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://optisense.nileshrana.tech",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
  // Helpful robots hints; advanced crawler directives can be added in public/robots.txt
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://optisense.nileshrana.tech/#organization",
        "name": "OptiSense AI",
        "url": "https://optisense.nileshrana.tech",
        "logo": "https://optisense.nileshrana.tech/robot.jpg",
        "sameAs": [
          "https://nileshrana.tech",
          "https://github.com/nileshxrana",
          "https://linkedin.com/in/nileshxrana"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "imp.communicate@gmail.com",
            "url": "https://optisense.nileshrana.tech/contact"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://optisense.nileshrana.tech/#website",
        "url": "https://optisense.nileshrana.tech",
        "name": "OptiSense AI",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://optisense.nileshrana.tech/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://optisense.nileshrana.tech/#app",
        "name": "OptiSense AI",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "url": "https://optisense.nileshrana.tech",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
      }
    ]
  };
  return (
    <ClerkProvider>
      <UserProvider>
        <html lang="en" suppressHydrationWarning>
          <head>
            <meta name="google-site-verification" content="6wwCguqA-T6EntDdLbsMwQfgqrJn0XzE7npL83xYeMo" />
            <link rel="icon" href="/favicon.ico" />
          </head>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
            {/* Structured data for rich results */}
            <Script id="structured-data" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            {/* PhonePe Checkout Script */}
            <Script
              src="https://mercury.phonepe.com/web/bundle/checkout.js"
              strategy="beforeInteractive"
            />

          </body>
        </html>
      </UserProvider>
    </ClerkProvider>
  );
}
