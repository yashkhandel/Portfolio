import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiReact, SiGo, SiPostgresql, SiDocker, SiPython, SiJavascript } from "react-icons/si";
import heroImage from "@assets/generated_images/Professional_developer_workspace_hero_9f59a79c.png";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <Badge
          variant="secondary"
          className="mb-6 bg-primary/20 text-primary-foreground backdrop-blur-sm border border-primary/30"
          data-testid="badge-hero-status"
        >
          Open to Work
        </Badge>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          Hi, I'm <span className="text-primary">Yash Khandelwal</span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white/90">
          Full Stack Developer
        </p>

        <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 text-white/80">
          Building scalable web applications with React.js, Golang, PostgreSQL, and Docker.
          Passionate about clean code, modern architecture, and delivering exceptional user experiences.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={scrollToProjects}
            data-testid="button-view-projects"
          >
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="backdrop-blur-sm bg-white/10 border-white/30 text-white"
            data-testid="button-contact-me"
          >
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="backdrop-blur-sm bg-white/10 border-white/30 text-white"
            data-testid="button-download-resume"
          >
            <a href="/api/resume" download>
              <Download className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="mailto:yashkhandelwal863@gmail.com"
            className="p-2 hover-elevate active-elevate-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/20"
            data-testid="link-email"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/khandelwal2001"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover-elevate active-elevate-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/20"
            data-testid="link-linkedin"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-white" />
          </a>
          <a
            href="tel:+918824200359"
            className="p-2 hover-elevate active-elevate-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/20"
            data-testid="link-phone"
            aria-label="Phone"
          >
            <Phone className="h-5 w-5 text-white" />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
          <div className="flex items-center gap-2" data-testid="tech-react">
            <SiReact className="h-6 w-6" />
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="flex items-center gap-2" data-testid="tech-golang">
            <SiGo className="h-6 w-6" />
            <span className="text-sm font-medium">Golang</span>
          </div>
          <div className="flex items-center gap-2" data-testid="tech-postgresql">
            <SiPostgresql className="h-6 w-6" />
            <span className="text-sm font-medium">PostgreSQL</span>
          </div>
          <div className="flex items-center gap-2" data-testid="tech-docker">
            <SiDocker className="h-6 w-6" />
            <span className="text-sm font-medium">Docker</span>
          </div>
          <div className="flex items-center gap-2" data-testid="tech-python">
            <SiPython className="h-6 w-6" />
            <span className="text-sm font-medium">Python</span>
          </div>
          <div className="flex items-center gap-2" data-testid="tech-javascript">
            <SiJavascript className="h-6 w-6" />
            <span className="text-sm font-medium">JavaScript</span>
          </div>
        </div>
      </div>
    </section>
  );
}
