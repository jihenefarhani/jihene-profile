"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-chart-3/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
                <span className="text-primary">Jihene</span>
                <br />
                <span className="text-foreground">FARHANI</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">Cloud & DevOps Engineer</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Specialized in Cloud Computing and Virtualization, building cloud-native solutions and modern web
              applications with Docker, Kubernetes, AWS, and CI/CD pipelines.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <a href="mailto:jiheen.farhani@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+21652251442">
                  <Phone className="mr-2 h-5 w-5" />
                  (+216) 52 251 442
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/jihens"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/20">
                <Image
                  src="/profile.jpg"
                  alt="Jihene Farhani"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Floating orbs around image */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/60 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/60 rounded-full blur-xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="block">
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  )
}
