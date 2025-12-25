"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { NAV_TARGETS } from "../lib/navTargets";
import PortalScene from "./components/PortalScene";

type MediaQueryWithHandlers = MediaQueryList & {
  addListener?: (
    this: MediaQueryList,
    listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void
  ) => void;
  removeListener?: (
    this: MediaQueryList,
    listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void
  ) => void;
};

export default function Home() {
  return (
    <main className="relative flex h-screen flex-col overflow-hidden bg-neutral-950 text-white">
      <HomePortal />
      <div className="pointer-events-none absolute inset-x-0 top-6 flex justify-center text-xs uppercase tracking-[0.4em] text-white/40 sm:text-sm">
        vibeblind portal
      </div>
    </main>
  );
}

function HomePortal() {
  const [canShowScene, setCanShowScene] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ) as MediaQueryWithHandlers;
    const evaluate = () => {
      const isReducedMotion = motionQuery.matches;
      const width = window.innerWidth;
      setCanShowScene(!isReducedMotion && width >= 768);
    };

    evaluate();

    const handleMotionChange = () => evaluate();
    const cleanups: (() => void)[] = [];
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", handleMotionChange);
      cleanups.push(() =>
        motionQuery.removeEventListener("change", handleMotionChange)
      );
    } else if (motionQuery.addListener) {
      motionQuery.addListener(handleMotionChange);
      cleanups.push(() =>
        motionQuery.removeListener?.(handleMotionChange)
      );
    }

    const handleResize = () => evaluate();
    window.addEventListener("resize", handleResize);
    cleanups.push(() => window.removeEventListener("resize", handleResize));

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <div className="relative flex-1">
      {canShowScene ? (
        <div className="absolute inset-0">
          <PortalScene />
        </div>
      ) : (
        <div className="absolute inset-0">
          <FallbackNavigation />
        </div>
      )}
    </div>
  );
}

function FallbackNavigation() {
  return (
    <section className="flex h-full min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black px-6 text-center">
      <div className="max-w-lg space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">portal room</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Portal room disabled
        </h1>
        <p className="text-sm text-white/70">
          We honor narrow screens and reduced motion preferences with a focused navigation
          stack. Tap or click to jump straight into the experience you want.
        </p>
      </div>

      <nav className="grid w-full max-w-md gap-3">
        {NAV_TARGETS.map((target) => (
          <Link
            key={target.href}
            href={target.href}
            className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-left text-base font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
          >
            <span className="block text-lg">{target.label}</span>
            <span className="text-sm font-normal uppercase tracking-[0.3em] text-white/40">
              {target.description}
            </span>
          </Link>
        ))}
      </nav>

      <p className="text-xs uppercase tracking-[0.4em] text-white/40">
        Expand your browser or allow motion to re-enter the room.
      </p>
    </section>
  );
}
