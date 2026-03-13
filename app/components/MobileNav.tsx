"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Toggle navigation menu"
        className="flex items-center gap-2 rounded-xl border border-[#C9D8C5] bg-white px-4 py-2 text-sm font-medium text-[#31543A] shadow-sm transition hover:bg-[#F8FBF6]"
      >
        Menu
        <span className={`text-xs transition ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {open ? (
        <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-64 overflow-hidden rounded-2xl border border-[#D7E3D2] bg-[#F7F3E9] shadow-xl">
          <nav className="flex flex-col p-2 text-sm font-medium text-[#31543A]">
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 transition hover:bg-[#E9F0E5]"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 transition hover:bg-[#E9F0E5]"
            >
              Services
            </Link>
            <Link
              href="/founder"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 transition hover:bg-[#E9F0E5]"
            >
              Founder
            </Link>
            <Link
              href="/case-studies"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 transition hover:bg-[#E9F0E5]"
            >
              Case Studies
            </Link>
            <Link
              href="/insights"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 transition hover:bg-[#E9F0E5]"
            >
              Insights
            </Link>
            <a
              href="mailto:info@ecofirmaadvisors.com?subject=Eco%20Firma%20Advisors%20General%20Inquiry"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 transition hover:bg-[#E9F0E5]"
            >
              Contact
            </a>

            <div className="px-2 py-2">
              <Link
                href="/cultivation-audit"
                onClick={closeMenu}
                className="block rounded-xl bg-[#31543A] px-4 py-3 text-center text-white transition hover:bg-[#27442F]"
              >
                Take the Quiz
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}