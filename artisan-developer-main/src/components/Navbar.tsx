import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('home'), href: "/" },
    { name: t('about'), href: "/about" },
    { name: t('caseStudies'), href: "/case-studies" },
    { name: t('contact'), href: "/contact" },
  ];

  const projectCategories = [
    { name: "Game & Interaction Design", href: "/projects/game-design" },
    { name: "Software Projects", href: "/projects/software" },
    { name: "Academic Projects", href: "/projects/academic" },
    { name: "Data Visualization & Eye Tracking", href: "/projects/data-viz" },
    { name: "Design Projects", href: "/projects/design-projects" },
    { name: "Project Management", href: "/projects/project-management" },
    { name: "UX Research & Testing", href: "/projects/ux-research" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass-bg backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group focus:outline-none relative" tabIndex={0}>
            <div
              className="w-20 h-12 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110 group-focus:scale-110 relative"
              style={{ willChange: 'transform' }}
              aria-label="Go to homepage"
            >
              {/* Logo: always show main logo, fade out on hover/focus, fade in hover logo */}
              <img
                src="/portfolio/uge.png"
                alt="Logo"
                className={
                  "w-10 h-10 object-contain mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200" +
                  " opacity-100 group-hover:opacity-0 group-focus:opacity-0"
                }
                draggable={false}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              />
              <img
                src="/portfolio/uge.png"
                alt="Logo"
                className="w-10 h-10 object-contain mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200"
                draggable={false}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              />
            </div>
          </Link>
          <style>{`
            .smiley-face .smiley-hover { display: none; }
            .group:hover .smiley-face .smiley-normal,
            .group:focus .smiley-face .smiley-normal {
              display: none;
            }
            .group:hover .smiley-face .smiley-hover,
            .group:focus .smiley-face .smiley-hover {
              display: inline;
            }
          `}</style>
          <style>{`
            .drop-shadow {
              filter: drop-shadow(0 2px 6px rgba(0,0,0,0.18));
              transition: filter 0.3s;
            }
            .group:hover .drop-shadow,
            .group:focus .drop-shadow {
              filter: drop-shadow(0 4px 12px rgba(255, 107, 129, 0.25)) drop-shadow(0 2px 6px rgba(0,0,0,0.18));
            }
          `}</style>
          <style>{`
            @keyframes melt {
              0% { filter: none; transform: scaleY(1); }
              30% { filter: blur(0.5px); transform: scaleY(1.1) skewY(2deg); }
              60% { filter: blur(2px); transform: scaleY(1.25) skewY(6deg); }
              100% { filter: blur(4px) brightness(0.8); transform: scaleY(1.4) skewY(10deg); opacity: 0.7; }
            }
            .minimal-uge {
              animation: none;
            }
            .group:hover .minimal-uge,
            .group:focus .minimal-uge {
              animation: melt 0.7s cubic-bezier(.7,0,.3,1) forwards;
            }
            .group:not(:hover):not(:focus) .minimal-uge {
              animation: none;
            }
          `}</style>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                {item.name}
              </Link>
            ))}

            {/* Projects Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span
                  className={`text-sm font-medium transition-colors relative cursor-pointer
                    text-foreground hover:text-primary
                    after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300
                    hover:after:scale-x-100 hover:after:origin-bottom-left
                    px-0 py-0
                  `}
                  tabIndex={0}
                >
                  {t('projects')}
                  <ChevronDown className="ml-1 h-4 w-4 inline" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-card border-border shadow-card">
                {projectCategories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link
                      to={category.href}
                      className="cursor-pointer text-foreground hover:text-primary"
                    >
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Selector */}
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md rounded-lg mt-2 shadow-card">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">{t('projects')}</div>
                {projectCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="block px-2 py-1 text-sm text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2 border-t border-border/20">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;