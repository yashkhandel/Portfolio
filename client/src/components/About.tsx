import { Card } from "@/components/ui/card";
import { Award, Briefcase, Code2 } from "lucide-react";
import aboutImage from "@assets/generated_images/Snapchat-1983312326.jpg";

export function About() {
  const stats = [
    {
      icon: Briefcase,
      label: "Years Experience",
      value: "2+",
      description: "Building production apps",
    },
    {
      icon: Code2,
      label: "Technologies",
      value: "15+",
      description: "Proficient in full stack",
    },
    {
      icon: Award,
      label: "Projects",
      value: "10+",
      description: "Successfully delivered",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="heading-about">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="Yash Khandelwal"
              className="rounded-md w-full max-w-md object-cover"
              data-testid="img-profile"
            />
          </div>

          <div className="space-y-6">
            <p className="text-base md:text-lg text-foreground/80" data-testid="text-bio-1">
              I'm a Full Stackkkkkk Developer currently working at <span className="font-semibold text-foreground">Micronic InfoTech Pvt. Limited</span> in Jaipur, where I build scalable web applications using cutting-edge technologies.
            </p>
            <p className="text-base md:text-lg text-foreground/80" data-testid="text-bio-2">
              My journey in software development began with a Bachelor's in Computer Applications from Rajasthan University, followed by a Master's in Computer Applications with a specialization in <span className="font-semibold text-foreground">AI & Machine Learning</span> from Chandigarh University.
            </p>
            <p className="text-base md:text-lg text-foreground/80" data-testid="text-bio-3">
              I specialize in creating robust backend systems with Golang and PostgreSQL, while crafting intuitive user interfaces with React.js. My expertise extends to containerization with Docker, implementing secure authentication mechanisms, and following Agile methodologies for efficient project delivery.
            </p>
            <p className="text-base md:text-lg text-foreground/80" data-testid="text-bio-4">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and continuously improving my skills in machine learning and cloud technologies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover-elevate active-elevate-2"
                data-testid={`card-stat-${index}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-md">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2" data-testid={`stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium mb-1" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`stat-desc-${index}`}>
                  {stat.description}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
