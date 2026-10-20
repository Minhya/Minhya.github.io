import type { Metadata } from "next";
import Link from "next/link";
import { Manrope } from "next/font/google";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import "./globals.css";

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <Nav />
          <main id="main-content" className="site-main">{children}</main>
          <footer className="site-footer">
            <span>© {new Date().getFullYear()} {site.name}</span><Link href="/#home">Back to top ↑</Link>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
