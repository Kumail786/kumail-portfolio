"use client";

import { Reveal, SectionHeading } from "./ui";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Seven years, five teams, two continents."
          sub="Building for startups and US product teams — remote-first, delivery-focused."
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent md:left-[9px]" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <Reveal key={`${job.company}-${job.period}`} delay={Math.min(i * 0.05, 0.2)}>
                <div className="relative pl-8 md:pl-12">
                  {/* dot */}
                  <span
                    className={`absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full md:h-[18px] md:w-[18px] ${
                      job.current ? "bg-accent" : "bg-white/20"
                    }`}
                  >
                    {job.current && (
                      <span className="absolute h-full w-full animate-ping rounded-full bg-accent/60" />
                    )}
                    <span className="h-1.5 w-1.5 rounded-full bg-background" />
                  </span>

                  <div className="card-glow glass rounded-2xl p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-semibold">
                        {job.role}{" "}
                        <span className="text-accent">@ {job.company}</span>
                      </h3>
                      <span className="text-sm text-muted">{job.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {job.type} · {job.location}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((p, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
