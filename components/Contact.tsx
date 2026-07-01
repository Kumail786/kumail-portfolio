"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Briefcase } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { Reveal } from "./ui";
import { profile } from "@/lib/data";

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail, value: profile.email },
  { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin, value: "in/kumail-raza-rawjani" },
  { label: "GitHub", href: profile.links.github, icon: Github, value: "Kumail786" },
  { label: "Upwork", href: profile.links.upwork, icon: Briefcase, value: "Hire on Upwork" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="card-glow glass relative overflow-hidden rounded-3xl p-8 sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, #38bdf8, transparent 60%)" }}
            />
            <div className="relative">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">
                Contact
              </p>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Let&#39;s build something{" "}
                <span className="gradient-text">worth shipping.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Open to remote roles and freelance projects with distributed teams worldwide,
                especially applied AI work. I usually reply within a day.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-3 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03]"
                >
                  Say hello
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/50 hover:text-accent"
                >
                  Connect on LinkedIn
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {socials.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="flex items-center gap-4 rounded-xl border border-black/10 bg-white/70 px-5 py-4 transition-colors hover:border-accent/50"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium">{s.label}</span>
                        <span className="block truncate text-xs text-muted">{s.value}</span>
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
