import { Badge } from "@/components/ui/badge";
import { Braces } from "lucide-react";

const TechnologiesSection = () => {
  const technologies = [
    { name: "Figma", category: "Design" },
    { name: "Canva", category: "Design" },
    { name: "Miro", category: "Collaboration" },
    { name: "Google Colab", category: "Data Science" },
    { name: "Blender", category: "3D" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "HTML & CSS", category: "Frontend" },
    { name: "Python", category: "Backend" },
    { name: "Java OOP", category: "Backend" },
    { name: "Arduino", category: "Hardware" },
    { name: "Digital Fabrication & Laser Cutting", category: "Hardware" },
    { name: "Git", category: "Version Control" },
    { name: "GitHub Copilot", category: "AI Assistant" },
    { name: "Loveable", category: "AI Assistant" },
  ];

  const companies = [
    "Microsoft", "Google", "Apple", "Adobe", "Spotify", "Netflix"
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo-like code braces icon with hover/scale/transition */}
        <div className="flex justify-center mb-8">
          <div
            className="w-24 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/80 to-accent/80 shadow-lg select-none transition-transform duration-300 ease-in-out hover:scale-110 focus:scale-110 cursor-pointer group"
            tabIndex={0}
            aria-label="Code Braces Logo"
            style={{ willChange: 'transform' }}
          >
            <Braces className="w-10 h-10 text-white group-hover:text-white group-focus:text-white" />
          </div>
        </div>
        {/* Technologies */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Technologies I Use
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I develop user experience-focused solutions with modern tools and technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={tech.name}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech.name}
                <span className="ml-2 text-xs opacity-70">{tech.category}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;