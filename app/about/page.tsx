import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.5em] text-white/40">about</p>
          <h1 className="text-4xl font-semibold tracking-tight">About vibeblind</h1>
          <p className="max-w-2xl text-base text-white/70">
            I build focused digital experiences that stay legible under tight constraints.
            Portfolio v1 is intentionally small, coherent, and shippable.
          </p>
        </div>
        <Link href="/" className="self-start text-xs uppercase tracking-[0.5em] text-white/60">
          back to monitor room
        </Link>
      </div>
    </main>
  );
}
