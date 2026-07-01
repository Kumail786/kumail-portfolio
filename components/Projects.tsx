"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading, Tag } from "./ui";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Products I've helped build."
          sub="A mix of AI platforms, SaaS products, and web experiences — spanning research, agents, and citizen engagement."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => {
            const Wrapper = p.href ? motion.a : motion.div;
            return (
              <Reveal key={p.name} delay={(i % 2) * 0.08}>
                <Wrapper
                  {...(p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {})}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="card-glow glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative flex items-start justify-between">
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
