"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          company,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setName("");
        setCompany("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-[#1F3527] sm:text-5xl">
          Contact
        </h1>

        <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
          Confidential inquiries for cultivators, MSOs, and vertically
          integrated operators.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-[#1F3527]">
              Schedule a conversation
            </h2>

            <p className="mt-4 leading-relaxed text-gray-700">
              Eco Firma Advisors works with a limited number of operators each
              year. Reach out with a short summary of your facility, state, and
              current challenge.
            </p>

            <div className="mt-8 space-y-4 text-gray-700">
              <p>
                <strong>Email Jesse:</strong>{" "}
                <a
                  href="mailto:jesse@ecofirmaadvisors.com?subject=Eco%20Firma%20Advisors%20Consultation%20Request"
                  className="text-[#31543A] underline underline-offset-4"
                >
                  jesse@ecofirmaadvisors.com
                </a>
              </p>

              <p>
                <strong>General inquiries:</strong>{" "}
                <a
                  href="mailto:info@ecofirmaadvisors.com?subject=Eco%20Firma%20Advisors%20General%20Inquiry"
                  className="text-[#31543A] underline underline-offset-4"
                >
                  info@ecofirmaadvisors.com
                </a>
              </p>

              <p>
                <strong>Focus:</strong> Cultivation efficiency, facility
                strategy, operational optimization
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-[#D7E3D2] bg-white p-6 shadow-sm"
          >
            <div>
              <label className="mb-2 block text-sm font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 focus:ring-green-700"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Company</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 focus:ring-green-700"
                placeholder="Company name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 focus:ring-green-700"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 focus:ring-green-700"
                rows={5}
                placeholder="Tell me about your facility, market, and what you're trying to solve."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-2xl bg-[#31543A] px-6 py-3 text-white transition hover:bg-[#27442F] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send inquiry"}
            </button>

            {status === "success" && (
              <p className="text-sm leading-6 text-green-700">
                Your inquiry was sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm leading-6 text-red-600">
                Something went wrong. Please try again or email Jesse directly.
              </p>
            )}

            <p className="text-sm leading-6 text-gray-500">
              Your message will be sent directly to Eco Firma Advisors.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}