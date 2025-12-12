import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Red Hat Certified System Administrator (EX-200)",
    issuer: "Red Hat",
    year: "2025",
    color: "from-red-500/20 to-orange-500/20",
    link: "https://www.credly.com/badges/f0e9f265-90ec-40b8-aede-fe3a2212a414/public_url",
  },
  {
    title: "Oracle Cloud Infrastructure Multicloud Architect Professional",
    issuer: "Oracle",
    year: "2025",
    color: "from-red-600/20 to-red-500/20",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C269F55B910CA0355D5485AC92C32BE40383574475A112674D4B90957CBBDC04",
  },
  {
    title: "Oracle Cloud Infrastructure DevOps Professional",
    issuer: "Oracle",
    year: "2025",
    color: "from-red-600/20 to-red-500/20",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=2FA099AF4D90CF6A7BE83067CEBD95314FD466B9BFA4546EE14B0C61E4803E8C",
  },
  {
    title: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    color: "from-red-600/20 to-red-500/20",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=35869586176CDD82A9059451DA02A71CAD17EA03BD7297EC2AF11D964D44EC16",

  },
  {
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    color: "from-red-600/20 to-red-500/20",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=75F8F95B3D32E1C0851DB3E9A99A2C85924DD6BBAE9A1B8330E13E17AA6D365F",
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2025",
    color: "from-blue-500/20 to-cyan-500/20",
    link: "https://www.credly.com/earner/earned/badge/4b167ef5-ac35-4b81-abbd-ef612c3b47d6",
  },
  {
    title: "Scrum Foundation Professional Certificate (SFPC)",
    issuer: "CertiProf",
    year: "2024",
    color: "from-green-500/20 to-emerald-500/20",  },
  {
    title: "EF SET English Certificate (Level C2)",
    issuer: "EF Education First",
    year: "2023",
    color: "from-purple-500/20 to-pink-500/20",
    link: "https://cert.efset.org/en/SC3PDW",

  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in Cloud, DevOps, and Agile methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group relative"
            >
              <div className={`w-full h-1 rounded-full bg-gradient-to-r ${cert.color} mb-4`} />

              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground leading-tight text-balance mb-2">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {cert.year}
                </Badge>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
