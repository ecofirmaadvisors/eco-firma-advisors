import "./globals.css";
import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./components/MobileNav";

export const metadata: Metadata = {
  title: "Eco Firma Advisors",
  description:
    "Cannabis Cultivation Efficiency & Facility Strategy for MSOs and operators nationwide.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-6 text-sm font-medium text-[#4F6553] md:flex">
      <Link href="/" className="transition hover:text-[#31543A]">
        Home
      </Link>
      <Link href="/services" className="transition hover:text-[#31543A]">
        Services
      </Link>
      <Link href="/founder" className="transition hover:text-[#31543A]">
        Founder
      </Link>
      <Link href="/case-studies" className="transition hover:text-[#31543A]">
        Case Studies
      </Link>
      <Link href="/insights" className="transition hover:text-[#31543A]">
        Insights
      </Link>
      <Link href="/contact" className="transition hover:text-[#31543A]">
        Contact
      </Link>
      <Link
        href="/cultivation-audit"
        className="rounded-xl bg-[#31543A] px-4 py-2 text-white transition hover:bg-[#27442F]"
      >
        Take the Quiz
      </Link>
    </nav>
  );
}

function FloatingContactButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full bg-[#31543A] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#27442F] sm:bottom-6 sm:right-6"
      aria-label="Talk With Jesse"
    >
      Talk With Jesse
    </Link>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#D7E3D2] bg-[#F7F3E9]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Eco Firma Advisors home"
        >
          <Image
            src="/logos/efa-header-lockup-nav.png"
            alt="Eco Firma Advisors"
            width={275}
            height={64}
            priority
            sizes="(max-width: 768px) 180px, 275px"
            className="h-auto w-[180px] sm:w-[210px] md:w-[275px]"
          />
        </Link>

        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F4EFE3] pb-24 text-[#1F3527] antialiased">
        <Nav />
        <main>{children}</main>
        <FloatingContactButton />
      </body>
    </html>
  );
}