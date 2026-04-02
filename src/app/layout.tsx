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
*/
export const metadata: Metadata = {
  title: "Ahtesham Alvi | Computer Science & Finance",
  description:
    "Personal website of Ahtesham Alvi — Computer Science (Honors) and Finance student at the University of Maryland, College Park.",
  keywords: [
    "Ahtesham Alvi",
    "Computer Science",
    "Finance",
    "University of Maryland",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Ahtesham Alvi" }],
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
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
