import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { FloatingNav } from "@/components/floating-nav"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FloatingNav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  )
}
