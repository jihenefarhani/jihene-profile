import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Google Cloud",
      "Azure",
      "OpenStack",
      "GitLab CI/CD",
      "Jenkins",
      "Ansible",
      "Puppet",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Python", "JavaScript", "PHP", "Java", "TypeScript", "Bash", "C", "Dart"],
  },
  {
    title: "Frameworks & Tools",
    icon: "🛠️",
    skills: ["Next.js", "React", "Node.js", "Laravel", "Django", "Spring Boot", "Flutter", "Angular"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Apache Cassandra"],
  },
  {
    title: "Operating Systems",
    icon: "🖥️",
    skills: ["Linux (RedHat, Ubuntu)", "Windows Server"],
  },
  {
    title: "Methodologies",
    icon: "📋",
    skills: ["Agile", "Scrum", "DevOps", "CI/CD", "Microservices"],
  },
]

const tools = [
  { name: "Docker", logo: "🐳" },
  { name: "Kubernetes", logo: "☸️" },
  { name: "AWS", logo: "☁️" },
  { name: "Python", logo: "🐍" },
  { name: "MongoDB", logo: "🍃" },
  { name: "GitLab", logo: "🦊" },
  { name: "Jenkins", logo: "👨‍🔧" },
  { name: "Ansible", logo: "📦" },
  { name: "Grafana", logo: "📊" },
  { name: "Prometheus", logo: "🔥" },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools Showcase */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="w-24 h-24 rounded-xl bg-card border border-border hover:border-primary hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">{tool.logo}</span>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
