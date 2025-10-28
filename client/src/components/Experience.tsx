import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experience = {
    company: "Micronic InfoTech Pvt. Limited",
    role: "Full Stack Developer",
    location: "Jaipur, Rajasthan",
    period: "Feb 2025 – Present",
    current: true,
    responsibilities: [
      "Developing and maintaining scalable web applications using React.js (frontend) and Golang with GORM + PostgreSQL (backend & database)",
      "Designing and implementing RESTful APIs with Go (GORM) and integrating them seamlessly with React frontend",
      "Building reusable UI components, optimizing React state management, and improving application performance",
      "Creating and managing database schemas, migrations, and query optimizations in PostgreSQL",
      "Implementing secure authentication and authorization mechanisms (JWT & role-based access)",
      "Containerizing and deploying applications using Docker, enabling CI/CD and scalable deployments",
      "Utilizing Git/GitHub for version control, conducting code reviews, and ensuring clean, maintainable codebase",
    ],
  };

  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="heading-experience">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/30" data-testid="timeline-line"></div>
            <div className="absolute left-0 top-8 w-3 h-3 -ml-1.5 rounded-full bg-primary ring-4 ring-background" data-testid="timeline-dot"></div>
            
            <Card className="p-8 hover-elevate" data-testid="card-experience">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold" data-testid="text-role">
                        {experience.role}
                      </h3>
                      {experience.current && (
                        <Badge variant="secondary" className="mt-1 bg-primary/20 text-primary" data-testid="badge-experience-current">
                          Current Position
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-lg font-medium text-muted-foreground mb-2" data-testid="text-company">
                    {experience.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1" data-testid="text-period">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1" data-testid="text-location">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground/90 mb-3">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((resp, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-foreground/80"
                      data-testid={`responsibility-${index}`}
                    >
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
