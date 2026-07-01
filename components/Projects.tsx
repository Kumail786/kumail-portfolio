"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Check } from "lucide-react";
import { Reveal, SectionHeading, Tag } from "./ui";
import { Cover } from "./covers";
import { projects, type Project } from "@/lib/data";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="work" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="AI products, built to ship."
          sub="A closer look at the platforms and agent systems I've helped design and deliver. Click any project for the deep dive."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <motion.button
                type="button"
                onClick={() => setActive(p)}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="card-glow glass group relative flex h-full w-full flex-col overflow-hidden rounded-2xl text-left"
              >
                <div className="relative overflow-hidden border-b border-white/10">
                  <Cover
                    slug={p.slug}
                    className="aspect-[16/9] w-full transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/80 backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold">{p.name}</h3>
                      <p className="mt-0.5 text-sm text-accent/90">{p.tagline}</p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="mt-1 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="glass relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-black/40 text-white/80 backdrop-blur transition-colors hover:text-accent"
        >
          <X size={18} />
        </button>

        <Cover slug={project.slug} className="aspect-[16/9] w-full border-b border-white/10" />

        <div className="p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{project.category}</p>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{project.name}</h3>
          <p className="mt-1 text-accent/90">{project.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{project.summary}</p>

          <h4 className="mt-7 text-sm font-semibold uppercase tracking-wider text-foreground/90">Highlights</h4>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <h4 className="mt-7 text-sm font-semibold uppercase tracking-wider text-foreground/90">Stack</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>

          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-3 px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Visit site
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
