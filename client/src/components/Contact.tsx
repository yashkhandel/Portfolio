import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yashkhandelwal863@gmail.com",
      href: "mailto:yashkhandelwal863@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8824200359",
      href: "tel:+918824200359",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jaipur, Rajasthan, India",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/khandelwal2001",
      href: "https://linkedin.com/in/khandelwal2001",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="heading-contact">
            Let's Work Together
          </h2>
          <p className="text-lg text-foreground/80 mb-6" data-testid="text-contact-intro">
            I'm currently open to new opportunities and exciting projects. Feel free to reach out!
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary"
              data-testid="badge-availability"
            >
              Available for opportunities
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="text-response-time">
              <Clock className="h-4 w-4" />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8" data-testid="card-contact">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-md hover-elevate active-elevate-2"
                    data-testid={`contact-item-${index}`}
                  >
                    <div className="p-2 bg-primary/10 rounded-md flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground mb-1" data-testid={`contact-label-${index}`}>
                        {contact.label}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground font-medium hover:text-primary transition-colors break-words"
                          data-testid={`contact-link-${index}`}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium" data-testid={`contact-value-${index}`}>
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
