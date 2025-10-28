import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:yashkhandelwal863@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/khandelwal2001",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="text-footer-name">
              Yash Khandelwal
            </h3>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-footer-tagline">
              Full Stack Developer passionate about building exceptional web experiences.
            </p>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-location">
              Based in Jaipur, Rajasthan
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="heading-quick-links">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="heading-connect">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-2 hover-elevate active-elevate-2 rounded-md border"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left" data-testid="text-copyright">
            © {currentYear} Yash Khandelwal. Built with{" "}
            <Heart className="inline h-4 w-4 text-primary fill-primary" /> using React.js
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            data-testid="button-back-to-top"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
