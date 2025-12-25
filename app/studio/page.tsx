import Link from "next/link";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.5em] text-white/40">studio notes</p>
          <h1 className="text-4xl font-semibold tracking-tight">Process, tools, rigs</h1>
          <p className="max-w-2xl text-base text-white/70">
            This is where new experiments land: quick React Three Fiber sketches, focused
            constraint tests, and notes on tactile control systems. Nothing lands until it
            respects the constraints.
          </p>
        </div>

        <ul className="space-y-4 text-sm text-white/80">
          <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold text-white">Toolchain</h2>
            <p>Next.js, React Three Fiber, drei, maath easing, and a handful of minimal utilities.</p>
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold text-white">Rigs</h2>
            <p>Computers, portals, and simple light rigs that keep navigation clear and deliberate.</p>
          </li>
        </ul>

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
