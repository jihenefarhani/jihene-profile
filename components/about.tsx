import { Card } from "@/components/ui/card"
import { Code, Cloud, Shield, Layers } from "lucide-react"

const expertise = [
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Implementing CI/CD pipelines and cloud infrastructure with Docker, Kubernetes, and AWS",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building web applications with Next.js, Laravel, Angular, and modern frameworks",
  },
  {
    icon: Shield,
    title: "Security & Automation",
    description: "Securing applications with OAuth2, Keycloak, and automated deployment workflows",
  },
  {
    icon: Layers,
    title: "Microservices",
    description: "Designing and deploying scalable microservices architectures",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-foreground font-semibold">Cloud & DevOps Engineer</span>{" "}
              specializing in cloud computing, virtualization, and modern development workflows. Currently pursuing an{" "}
              <span className="text-foreground font-semibold">Engineering degree in Computer Science</span> with a focus
              on Cloud and Virtualization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans{" "}
              <span className="text-foreground font-semibold">Docker, Kubernetes, GitLab CI/CD, Ansible, and AWS</span>.
              I excel at creating robust, scalable solutions that integrate security best practices with modern
              development workflows, from microservices architecture to full CI/CD pipeline implementation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I'm always exploring the intersection of{" "}
              <span className="text-foreground font-semibold">cloud technologies, AI/ML, and DevSecOps</span>, staying
              at the forefront of innovation to build secure, efficient applications that make a meaningful impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {expertise.map((item) => (
              <Card key={item.title} className="p-6 bg-card hover:bg-card/80 transition-colors border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
