import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Eye, Code, Gamepad2, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPreview = () => {
  const projectCategories = [
    {
      title: "Academic Projects",
      description: "A collection of university projects blending UX research, usability testing, design innovation, and software development.",
      icon: Eye,
      count: 6,
      color: "text-primary",
      href: "/projects/academic"
    },
    {
      title: "Data Visualization",
      description: "Data visualization projects and interactive dashboard designs",
      icon: BarChart3,
      count: 2,
      color: "text-accent",
      href: "/projects/data-viz"
    },
    {
      title: "Game & Interaction Design",
      description: "Game design, graphic design, and interactive media projects",
      icon: Gamepad2,
      count: 3,
      color: "text-primary-glow",
      href: "/projects/game-design"
    },
    {
      title: "Software Projects",
      description: "Mini software projects on GitHub",
      icon: Code,
      count: 5,
      color: "text-foreground",
      href: "/projects/software"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            My Project Categories
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the projects I have completed in different fields
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projectCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="group hover:shadow-card transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-card ${category.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {category.count} projects
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link to={category.href}>
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <Link to="/projects/academic">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;