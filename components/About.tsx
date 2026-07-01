"use client";

import { Reveal, SectionHeading } from "./ui";
import { education, certifications } from "@/lib/data";
import { GraduationCap, BadgeCheck } from "lucide-react";

const paragraphs = [
  "I'm a Senior Software Engineer with 7+ years designing and shipping scalable, high-performance software — web apps, SaaS platforms, enterprise systems, cloud-native services, and AI-powered products.",
  "My work spans the entire lifecycle: solution architecture and system design, development and testing, deployment, and performance optimization. I work closely with clients to translate business goals into reliable systems that create measurable value.",
  "Lately I'm focused on applied AI — building agentic systems that plan, decide, and act, grounded in real data and designed to be trustworthy, observable, and secure.",
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering that ships and scales."
        />
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="space-y-4">
            <Reveal>
              <div className="card-glow glass rounded-2xl p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="font-semibold">Education</h3>
                </div>
                <p className="font-medium">{education.degree}</p>
                <p className="text-sm text-muted">{education.school}</p>
                <p className="mt-1 text-xs text-muted">{education.period}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-glow glass rounded-2xl p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent-2/10 text-accent-2">
                    <BadgeCheck size={20} />
                  </div>
                  <h3 className="font-semibold">Certifications</h3>
                </div>
                <ul className="space-y-3">
                  {certifications.map((c) => (
                    <li key={c.name}>
                      <p className="text-sm font-medium">{c.name}</p>
                      <p className="text-xs text-muted">
                        {c.issuer} · {c.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
