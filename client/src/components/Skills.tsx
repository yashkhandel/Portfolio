import { Card } from "@/components/ui/card";
import { Code2, Database, Server, Wrench, Brain, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Java", "Python", "JavaScript", "Go"],
    },
    {
      title: "Frontend",
      icon: Server,
      skills: ["React.js", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Golang (GORM)", "Flask"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "SQL"],
    },
    {
      title: "Tools & Deployment",
      icon: Wrench,
      skills: ["Docker", "Git", "GitHub"],
    },
    {
      title: "ML & Deep Learning",
      icon: Brain,
      skills: [
        "Scikit-learn",
        "TensorFlow",
        "OpenCV",
        "NLTK",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebooks",
      ],
    },
  ];

  const softSkills = [
    "Problem-Solving & Debugging",
    "Agile/Scrum Collaboration",
    "Code Review & Clean Coding Practices",
    "Time Management",
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="heading-skills">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate active-elevate-2"
                data-testid={`card-skill-category-${index}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg" data-testid={`text-category-${index}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-skill-${index}-${skillIndex}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hover-elevate" data-testid="card-soft-skills">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-md">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold" data-testid="heading-soft-skills">
                Soft Skills
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-muted/50 rounded-md"
                  data-testid={`soft-skill-${index}`}
                >
                  <span className="text-primary">✓</span>
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
