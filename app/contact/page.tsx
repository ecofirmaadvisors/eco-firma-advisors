export default function ContactPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-6 text-gray-600">
          Confidential inquiries for cultivators, MSOs, and vertically integrated operators.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Schedule a conversation</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Eco Firma Advisors works with a limited number of operators each year.
              Reach out with a short summary of your facility, state, and current challenge.
            </p>

            <div className="mt-8 space-y-3 text-gray-700">
              <p><strong>Email:</strong> hello@ecofirmaadvisors.com</p>
              <p><strong>Focus:</strong> Cultivation efficiency, facility strategy, operational optimization</p>
            </div>
          </div>

          <form className="space-y-4 rounded-2xl border p-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Company</label>
              <input
                type="text"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Company name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>
              <textarea
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
                rows={5}
                placeholder="Tell me about your facility, market, and what you're trying to solve."
              />
            </div>

            <button
              type="submit"
              className="rounded-2xl bg-gray-900 px-6 py-3 text-white hover:bg-gray-800"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}