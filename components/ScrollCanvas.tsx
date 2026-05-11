"use client";

/**
 * ScrollCanvas
 * Scroll-scrubbed frame sequence renderer — pinned canvas + GSAP ScrollTrigger.
 * The dolly hero of Archetype A.
 */

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  frameCount: number;
  pattern?: string;
  padLength?: number;
  scrollDistance?: number;
  snapPoints?: number[];
  children?: React.ReactNode;
  onProgress?: (progress: number) => void;
};

export default function ScrollCanvas({
  frameCount,
  pattern = "/frames/frame-{n}.jpg",
  padLength = 4,
  scrollDistance = 6,
  snapPoints,
  children,
  onProgress,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameStateRef = useRef({ current: 0 });

  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const [framesAvailable, setFramesAvailable] = useState(true);

  useEffect(() => {
    const images: HTMLImageElement[] = new Array(frameCount);
    let loadedCount = 0;
    let cancelled = false;
    let firstBatchFailed = 0;

    const buildUrl = (i: number) => {
      const n = String(i + 1).padStart(padLength, "0");
      return pattern.replace("{n}", n);
    };

    const loadOne = (i: number, trackFailures = false) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        const done = (failed = false) => {
          if (cancelled) return resolve();
          images[i] = img;
          loadedCount++;
          if (failed && trackFailures) firstBatchFailed++;
          setLoaded(loadedCount);
          resolve();
        };
        img.onload = () => done(false);
        img.onerror = () => done(true);
        img.src = buildUrl(i);
      });

    (async () => {
      const firstBatch = Math.min(30, frameCount);
      await Promise.all(
        Array.from({ length: firstBatch }, (_, i) => loadOne(i, true))
      );
      if (cancelled) return;

      // If every single frame in the first batch failed to load, frames don't
      // exist yet on disk — render the still placeholder instead of hanging on
      // a permanent "Loading cinematic" screen.
      if (firstBatchFailed === firstBatch) {
        setFramesAvailable(false);
        return;
      }

      imagesRef.current = images;
      setReady(true);

      const queue = Array.from(
        { length: frameCount - firstBatch },
        (_, i) => i + firstBatch
      );
      const workers = Array.from({ length: 8 }, async () => {
        while (queue.length && !cancelled) {
          const idx = queue.shift()!;
          await loadOne(idx);
        }
      });
      await Promise.all(workers);
    })();

    return () => {
      cancelled = true;
    };
  }, [frameCount, pattern, padLength]);

  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(frameStateRef.current.current);
    };

    const draw = (index: number) => {
      const img = imagesRef.current[index];
      if (!img || !img.width) return;
      const cw = window.innerWidth;
      const ch = window.innerHeight;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    resize();
    window.addEventListener("resize", resize);

    const state = frameStateRef.current;
    const isMobile = window.innerWidth < 768;

    const snap =
      isMobile || !snapPoints
        ? undefined
        : {
            snapTo: snapPoints,
            duration: { min: 0.2, max: 0.6 },
            delay: 0.1,
            ease: "power2.inOut",
          };

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${scrollDistance * 100}%`,
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      snap,
      onUpdate: (self) => {
        const target = Math.min(
          frameCount - 1,
          Math.floor(self.progress * (frameCount - 1))
        );
        if (target !== state.current) {
          state.current = target;
          draw(target);
        }
        onProgress?.(self.progress);
      },
    });

    return () => {
      window.removeEventListener("resize", resize);
      trigger.kill();
    };
  }, [ready, frameCount, scrollDistance, snapPoints, onProgress]);

  // Static placeholder mode — no frames on disk. Still pins on scroll,
  // still reports progress (so overlays still animate cleanly), but the
  // background is a still gradient + the still keyframe if it exists.
  useEffect(() => {
    if (framesAvailable) return;
    const container = containerRef.current;
    if (!container) return;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${scrollDistance * 100}%`,
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      onUpdate: (self) => {
        onProgress?.(self.progress);
      },
    });

    return () => trigger.kill();
  }, [framesAvailable, scrollDistance, onProgress]);

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: "100vh" }}
    >
      {framesAvailable ? (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 h-screen w-screen"
          style={{ background: "var(--bg)" }}
        />
      ) : (
        <div
          className="fixed inset-0 h-screen w-screen"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, #2a2218 0%, #14110d 35%, #050505 75%)",
          }}
          aria-hidden="true"
        />
      )}

      {framesAvailable && !ready && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg text-ink"
          style={{ height: "100dvh" }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/60">
              Loading cinematic
            </div>
            <div className="h-px w-48 overflow-hidden bg-ink/10">
              <div
                className="h-full bg-primary transition-[width] duration-150"
                style={{
                  width: `${Math.round((loaded / frameCount) * 100)}%`,
                }}
              />
            </div>
            <div className="font-mono text-[10px] text-ink/40">
              {loaded} / {frameCount}
            </div>
          </div>
        </div>
      )}

      <div className="pointer-events-none relative z-10 h-full">{children}</div>
    </section>
  );
}
