"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { profile, stats } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = useMemo(() => /^(\d+)(.*)$/.exec(value), [value]);
  const [display, setDisplay] = useState(match ? `0${match[2]}` : value);

  useEffect(() => {
    if (!inView || !match) return;
    const controls = animate(0, parseInt(match[1], 10), {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${Math.round(v)}${match[2]}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);

  return (
    <div ref={ref} className="text-3xl font-bold gradient-text sm:text-4xl">
      {display}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center px-4 pt-28 pb-16">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="float inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-sm text-muted shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for remote work
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
          >
            <span className="gradient-text">{profile.role}</span>
            <span className="text-muted"> · {profile.focus}</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-accent" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-accent" /> {profile.availability}
            </span>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-3 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03]"
            >
              Get in touch
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/50 hover:text-accent"
            >
              View work
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white/70 transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white/70 transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 grid grid-cols-2 gap-4 border-t border-black/10 pt-8 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <StatValue value={s.value} />
                <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
