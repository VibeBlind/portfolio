import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.5em] text-white/40">contact</p>
          <h1 className="text-4xl font-semibold tracking-tight">Let&apos;s keep it simple</h1>
          <p className="max-w-2xl text-base text-white/70">
            Reach out through email or LinkedIn with a clear mission and a simple proposal.
            No forms, no authentication, no noise. Responses happen within 48 hours.
          </p>
        </div>

        <div className="space-y-3 text-sm text-white/80">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p>
              Email <span className="font-semibold text-white">hello@vibeblind.io</span>
            </p>
            <p className="text-xs text-white/40">Preferred for inquiries and collaborations.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p>
              LinkedIn{" "}
              <span className="font-semibold text-white">linkedin.com/in/vibeblind</span>
            </p>
            <p className="text-xs text-white/40">Signal to coordinate voice/video time.</p>
          </div>
        </div>

        <Link
          href="/"
          className="self-start text-xs uppercase tracking-[0.5em] text-white/60"
        >
          back to portal
        </Link>
      </div>
    </main>
  );
}
