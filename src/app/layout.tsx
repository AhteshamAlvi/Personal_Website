import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

/*
  next/font/google downloads the font at build time and self-hosts it.
  No external network requests at runtime = faster page loads.
  The `variable` prop creates a CSS variable (--font-inter) we reference in globals.css.
*/
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Show fallback font immediately, swap in Inter when loaded
});

/*
  Metadata is how Next.js sets <title>, <meta description>, Open Graph tags, etc.
  This is critical for SEO and how your site appears in Google results and social shares.

  Open Graph (og:) tags control how the site appears when shared on
  LinkedIn, Twitter, Slack, iMessage, etc. — the title, description,
  and preview image shown in link previews.
*/
export const metadata: Metadata = {
  title: "Ahtesham Alvi",
  description:
    "Personal website of Ahtesham Alvi — Computer Science (Honors) and Finance student at the University of Maryland, College Park.",
  keywords: [
    "Ahtesham Alvi",
    "Computer Science",
    "Finance",
    "University of Maryland",
    "Software Engineer",
    "Machine Learning",
    "Robotics",
  ],
  authors: [{ name: "Ahtesham Alvi" }],
  openGraph: {
    title: "Ahtesham Alvi | Computer Science & Finance",
    description:
      "Computer Science (Honors) and Finance student at UMD. Machine learning, robotics, quantum computing, and systems programming.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahtesham Alvi | Computer Science & Finance",
    description:
      "Computer Science (Honors) and Finance student at UMD.",
  },
};

/*
  JSON-LD structured data — machine-readable info about you.
  Google uses this to power rich search results (knowledge panels,
  enhanced listings). Schema.org defines the vocabulary.

  This is a <script type="application/ld+json"> tag injected into <head>.
  Browsers ignore it, but search engines parse it.
*/
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahtesham Alvi",
  jobTitle: "Computer Science & Finance Student",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Maryland, College Park",
  },
  url: "https://ahteshamalvi.com",
  sameAs: [
    "https://github.com/AhteshamAlvi",
    "https://www.linkedin.com/in/ahtesham-alvi",
  ],
  knowsAbout: [
    "Machine Learning",
    "Robotics",
    "Quantum Computing",
    "Systems Programming",
    "Finance",
  ],
};

/*
  RootLayout wraps every page on the site.
  - <html> gets the font variable class and suppressHydrationWarning
    (needed because next-themes modifies the class attribute on the client,
    which would normally trigger a React hydration mismatch warning)
  - ThemeProvider enables dark/light mode toggling across the whole app
  - {children} is whatever page content Next.js renders for the current route
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Skip-to-content link — invisible until focused via keyboard Tab.
              Lets keyboard/screen-reader users jump past the navbar. */}
          <a
            href="#about"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
