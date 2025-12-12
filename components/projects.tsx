"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Microservices Deployment & Automation",
    period: "09/2025 – 11/2025",
    description:
      "Deployed complete fleet tracking solution (GPS simulator, API Gateway, MongoDB) on Kubernetes cluster with CI/CD pipeline including build, unit tests, SonarQube analysis, and automated deployment.",
    tags: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "MongoDB"],
    color: "from-blue-500/20 to-cyan-500/20",
    },
  {
    title: "File Management Application",
    period: "04/2025 – 05/2025",
    description:
      "Built Next.js application for file upload, display, and deletion in AWS S3 with drag & drop. Configured IAM/CORS, deployed on EC2, managed processes with PM2, and implemented secure APIs.",
    tags: ["Next.js", "AWS S3", "EC2", "PM2", "IAM"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Secured Application with Keycloak",
    period: "02/2025 – 03/2025",
    description:
      "Developed secure backend with Spring Boot and integrated Keycloak for authentication/authorization using OAuth2 and OpenID Connect. Managed roles/permissions for resource access control.",
    tags: ["Spring Boot", "Keycloak", "OAuth2", "Security"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Library Management System",
    period: "01/2025 – 02/2025",
    description:
      "Created REST, GraphQL, and SOAP APIs for different functional needs. REST for standard operations, GraphQL for dynamic interfaces, SOAP for critical transactions.",
    tags: ["REST", "GraphQL", "SOAP", "API Design"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: 'Employee Management Platform "Beside You"',
    period: "10/2024 – 02/2025",
    description:
      "Full-stack platform with Admin and Employee spaces. Features include employee management, leave tracking, missions, loans, notifications. Developed using Agile methodology (Scrum/Jira).",
    tags: ["Laravel", "Angular", "MySQL", "Agile", "Scrum"],
    color: "from-yellow-500/20 to-amber-500/20",
    github: "https://github.com/zahafdonia/Gestion-des-employes",
  },
  {
    title: "VoiceGAN – Voice Conversion System",
    period: "12/2024 – 02/2025",
    description:
      "Built voice conversion model based on GAN with content encoder, style encoder, and FiLM generator. Integrated HiFi-GAN vocoder with complete training pipeline and Streamlit interface for A→B conversion.",
    tags: ["Python", "PyTorch", "Deep Learning", "GAN", "Streamlit"],
    color: "from-indigo-500/20 to-violet-500/20",
    github: "https://github.com/jihenefarhani/VoiceGAN-Voice-Conversion",
  },
  {
    title: "Stock Management System",
    period: "2024",
    description:
      "Complete inventory management solution for tracking stock items, managing suppliers, handling purchase orders, and generating reports. Built with modern web technologies for efficient warehouse operations.",
    tags: ["Inventory", "Management", "Full-Stack", "CRUD"],
    color: "from-teal-500/20 to-cyan-500/20",
    github: "https://github.com/jihenefarhani/Gestion-de-stock-iteam",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning DevOps, Cloud Computing, Full-Stack Development, and AI/ML
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group border-border"
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.color} mb-6`} />

              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors text-balance">
                  {project.title}
                </h3>
                <Badge variant="secondary" className="text-xs shrink-0 ml-2">
                  {project.period.split(" – ")[0]}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 min-h-[100px]">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>

              <div className="flex gap-2">
                {project.github && (
                  <Button size="sm" variant="ghost" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {!project.github && (
                  <Button size="sm" variant="ghost" className="flex-1" disabled>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Private
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
