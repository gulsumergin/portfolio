import { Button } from "@/components/ui/button";
import { Eye, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary-glow/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-card/80 backdrop-blur-md rounded-full border border-border/50 text-sm font-medium text-muted-foreground mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 mr-2 text-primary" />
          UX Design & Software Engineer Portfolio
        </div>

        {/* User Photo with interactive effect */}
        <div className="w-40 h-40 mx-auto mb-10 sm:mb-12 relative z-20 animate-fade-in group overflow-visible pt-4" style={{ animationDelay: '0.1s' }}>
          <a href="/images/me.png" target="_blank" rel="noopener noreferrer" tabIndex={0} className="focus:outline-none block overflow-visible">
            <img
              src="/images/me.png"
              alt="Profile Photo"
              className="w-40 h-40 object-cover rounded-full border-4 border-primary shadow-lg mx-auto transition-transform duration-300 ease-in-out group-hover:scale-125 group-focus:scale-125 cursor-pointer"
              style={{ willChange: 'transform' }}
              loading="lazy"
            />
          </a>
        </div>

        {/* Main heading */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s', wordBreak: 'break-word' }}>
          UX Designer & Software Engineer
        </h1>
        <span 
          className="block text-transparent bg-gradient-primary bg-clip-text animate-glow text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 mx-auto whitespace-normal break-words tracking-tight text-balance"
          style={{ wordBreak: 'break-word', lineHeight: '1.15', overflowWrap: 'break-word', overflow: 'visible' }}
        >
          Shaping Experiences
        </span>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Usability & Human-Centric Approach
          <span className="block mt-2 text-sm sm:text-base lg:text-lg">
            I develop digital solutions focused on <b>user experience</b> and <b>international best practices</b>.
          </span>
          <span className="block mt-1 text-xs sm:text-sm text-muted-foreground/80">
            I am currently exploring how <b>CNN</b> and <b>LSTM</b> based <b>machine learning</b> and <b>deep learning</b> methods can enhance <b>UX research</b> and real-life applications.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            asChild
            size="lg"
            className="group relative overflow-hidden bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground px-8 py-4 text-lg"
          >
            <Link to="/projects/academic">
              View My Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="group border-2 hover:bg-card hover:shadow-soft transition-all duration-300 px-8 py-4 text-lg"
          >
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              className="flex items-center text-foreground hover:text-primary transition-colors"
            >
              <Eye className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
              <span className="whitespace-nowrap">View CV</span>
            </a>
          </Button>
        </div>

        {/* Stats or quick info */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">MSc</div>
            <div className="text-muted-foreground">Student</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Tech Stacks</div>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator with animated arrow and glass effect */}
      <div
        className="absolute left-1/2 bottom-6 transform -translate-x-1/2 z-20"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          const nextSection = document.getElementById('about-section');
          if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
        }}
        tabIndex={0}
        aria-label="Scroll down"
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            const nextSection = document.getElementById('about-section');
            if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div
          className="w-12 h-12 flex items-center justify-center rounded-full bg-background/60 border border-border shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:bg-background/80 group"
        >
          <svg
            className="w-6 h-6 text-primary animate-bounce-slow group-hover:text-accent transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14m0 0l-5-5m5 5l5-5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;