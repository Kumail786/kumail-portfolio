import { Background } from "@/components/Background";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-black/10 px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js & Framer Motion.
          </p>
          <div className="flex gap-5">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-accent">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
              LinkedIn
            </a>
            <a href={profile.links.upwork} target="_blank" rel="noreferrer" className="hover:text-accent">
              Upwork
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
