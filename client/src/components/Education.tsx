import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const education = [
    {
      institution: "Chandigarh University",
      degree: "Master of Computer Applications (MCA)",
      specialization: "AI & ML",
      period: "Aug 2023 – June 2025",
      location: "Mohali, Punjab",
      highlight: true,
    },
    {
      institution: "Rajasthan University",
      degree: "Bachelor Of Computer Applications (BCA)",
      period: "Aug 2019 – May 2022",
      location: "Jaipur, Rajasthan",
    },
    {
      institution: "Maheshwari Sr.Sec.School",
      degree: "Intermediate",
      period: "March 2018",
      location: "Jaipur, Rajasthan",
    },
  ];

  return (
    <section id="education" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="heading-education">
          Education
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2"
              data-testid={`card-education-${index}`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-md flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1" data-testid={`text-institution-${index}`}>
                    {edu.institution}
                  </h3>
                  {edu.specialization && (
                    <Badge
                      variant="secondary"
                      className="mb-2 bg-primary/20 text-primary"
                      data-testid={`badge-specialization-${index}`}
                    >
                      {edu.specialization}
                    </Badge>
                  )}
                </div>
              </div>

              <p className="font-medium text-foreground/90 mb-3" data-testid={`text-degree-${index}`}>
                {edu.degree}
              </p>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2" data-testid={`text-period-${index}`}>
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-2" data-testid={`text-location-${index}`}>
                  <MapPin className="h-4 w-4" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
