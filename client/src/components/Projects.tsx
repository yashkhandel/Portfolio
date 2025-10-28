import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Globe } from "lucide-react";
import projectImage from "@assets/generated_images/ERP_project_visualization_4f7b82d4.png";

export function Projects() {
  const project = {
    title: "Government University ERP Website",
    status: "Live",
    description:
      "Developed and deployed a comprehensive ERP system for a government university to manage students, faculty, courses, and administrative workflows with role-based authentication and secure data handling.",
    image: projectImage,
    technologies: ["React.js", "Golang (GORM)", "PostgreSQL", "Docker"],
    achievements: [
      "Built a responsive React.js frontend with reusable UI components for seamless user experience",
      "Designed and implemented RESTful APIs in Golang (GORM) integrated with PostgreSQL for secure, scalable data handling",
      "Implemented role-based authentication (JWT) for secure access control",
      "Containerized the application with Docker, enabling CI/CD and smooth production deployment",
    ],
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="heading-projects">
          Featured Projects
        </h2>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden hover-elevate" data-testid="card-project">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-testid="img-project"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    className="bg-primary text-primary-foreground"
                    data-testid="badge-project-status"
                  >
                    <Globe className="h-3 w-3 mr-1" />
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4" data-testid="text-project-title">
                  {project.title}
                </h3>

                <p className="text-foreground/80 mb-6" data-testid="text-project-description">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        data-testid={`badge-tech-${index}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm text-foreground/80"
                        data-testid={`achievement-${index}`}
                      >
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
