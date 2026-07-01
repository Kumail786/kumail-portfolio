"use client";

import { Reveal, SectionHeading, Tag } from "./ui";
import { skillGroups, marqueeSkills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Skills"
          title="A full stack toolkit, AI first."
          sub="From polished front ends to cloud infrastructure and agentic AI, the tools I reach for to build products that last."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.06}>
              <div className="card-glow glass h-full rounded-2xl p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* marquee */}
      <div className="marquee relative mt-14 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="marquee-track flex shrink-0 items-center gap-4 pr-4">
          {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-lg font-medium text-white/25 transition-colors"
            >
              {s} <span className="px-2 text-accent/40">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
