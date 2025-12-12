import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "DevOps Intern",
    organization: "Ministry of Youth and Sports",
    period: "07/2025 – 09/2025",
    description:
      "Implemented CI/CD pipeline with GitLab for ministry application deployment. Managed application deployment on Docker and Kubernetes.",
    tags: ["GitLab CI/CD", "Docker", "Kubernetes"],
  },
  {
    type: "work",
    title: "Web Development Intern",
    organization: "National Centre for Information Technology (CNI)",
    period: "07/2024 – 09/2024",
    description:
      "Developed automation application for VMware hosting, simplifying resource allocation and virtual machine management processes.",
    tags: ["VMware", "Automation", "Web Development"],
  },
  {
    type: "work",
    title: "Mobile Development Intern",
    organization: "Nexym",
    period: "02/2023 – 06/2023",
    description:
      "Developed Quick-Commerce mobile applications with Flutter for order management, notifications, and real-time tracking (Client, Provider, and Delivery apps).",
    tags: ["Flutter", "Mobile Development", "Real-time Systems"],
  },
]

const education = [
  {
    degree: "Engineering Degree in Computer Science",
    specialization: "Cloud and Virtualization",
    institution: "University of Engineering - iTeam",
    period: "09/2024 – Present",
  },
  {
    degree: "Master of Research in Computer Science",
    specialization: "Intelligent Systems (ISI)",
    institution: "National School of Engineers of Tunis",
    period: "09/2023 – 02/2025",
  },
  {
    degree: "Bachelor in Software Engineering",
    specialization: "Information Systems",
    institution: "Higher Institute of Computer Science and Mathematics of Monastir",
    period: "09/2020 – 06/2023",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 bg-card border-l-4 border-l-primary">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.organization}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-card border-l-4 border-l-accent">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-accent font-medium">{edu.specialization}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
