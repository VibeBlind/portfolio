"use client";

import { Float, Html, useCursor } from "@react-three/drei";
import { useState } from "react";
import type { NavTarget } from "../../lib/navTargets";

export default function PortalTarget({
  target,
  onSelect,
}: {
  target: NavTarget;
  onSelect: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  return (
    <Float
      speed={2}
      floatIntensity={hovered ? 0.6 : 0.2}
      rotationIntensity={0.6}
      floatingRange={[0.1, 0.4]}
      position={target.position}
    >
      <mesh
        castShadow
        receiveShadow
        onPointerOver={(event) => {
          event.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(event) => {
          event.stopPropagation();
          setHovered(false);
        }}
        onClick={(event) => {
          event.stopPropagation();
          onSelect();
        }}
      >
        <boxGeometry args={[1.4, 1.1, 0.3]} />
        <meshStandardMaterial
          color={target.color}
          emissive={hovered ? "#ffffff" : target.color}
          emissiveIntensity={hovered ? 0.8 : 0.4}
          roughness={0.2}
          metalness={0.6}
        />
        <Html
          position={[0, 0, 0.6]}
          center
          distanceFactor={4}
          className="pointer-events-none"
        >
          <div className="flex flex-col items-center gap-1 rounded-xl border border-white/20 bg-black/60 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.4em] text-white">
            <span className="text-base">{target.label}</span>
            <span className="text-[0.55rem] font-normal tracking-[0.2em] text-neutral-200">
              {target.description}
            </span>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}
