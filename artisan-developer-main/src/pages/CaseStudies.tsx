import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";


const CaseStudies = () => {
  const caseStudies = [
    {
      id: "swoosh",
      title: "SWOOSH: Racket Sports Community App",
      description: "A semester-long UX research and design project for a racket sports application aimed at connecting players, organizing matches, and fostering community, completed with a team of 7 in Germany.",
      category: "UI/UX Design",
      duration: "1 semester (~4 months)",
      teamSize: "7 people",
      myRole: "Personas & Background Research",
  image: "/portfolio/images/swoosh-cover.png",
      tags: [
        "Personas", 
        "User Research", 
        "Sports Tech", 
        "Community Building",
        "iOS Design",
        "Market Analysis",
        "Team Project"
      ],
      impact: {
        "Personas Developed": "5+",
        "Market Research": "Germany’s 3.6M racket sports users (2029 forecast)",
        "Key Flows Designed": "Browse, Create, Record Games",
      },
      problem: "Racket sports enthusiasts lack a centralized platform to find players of similar skill levels, coordinate matches, and integrate sports into their routines—leading to fragmented communities and scheduling inefficiencies.",
      solution: "Designed an iOS-first app with skill-based matchmaking, real-time game coordination, and social features (e.g., achievements, leaderboards) to bridge gaps between players, clubs, and courts. Included a scalable design system and monetization strategy.",
  pdf: "/portfolio/pdf/case-studies/swoosh-case-study.pdf",
      collaborators: {
        "Academic Advisor": "Kai Philipp Haase (HSRW)"
      },
      highlights: {
        "Research": "Synthesized psychological benefits of sports (e.g., mental health, social connection) into persona motivations.",
        "Design": "Created a modular design system with SF Pro typography, Remix icons, and accessibility-tested colors.",
        "Strategy": "Defined freemium revenue model (€3.49/month premium) and 12-month growth forecast (60K MAUs target)."
      }
    },
    {
      id: "kui-bot",
      title: "Kui Bot: Museum Chatbot for Art Exploration",
      description:
        "A museum chatbot project developed for my master's HCI course. The project included a literature review, prototyping, and simulation in a museum context.",
      category: "HCI / Chatbot / Usability",
      duration: "Oct 2023 – Aug 31, 2024",
      teamSize: "3 people",
      myRole: "Software Engineer & Background Research",
  image: "/portfolio/images/kui-bot-cover.png",
      tags: [
        "Python",
        "HTML",
        "CSS",
        "Prompt Engineering",
        "Usability Research",
        "Chatbot",
        "Museum",
        "Art",
        "Prototyping",
        "HCI",
        "SQLite"
      ],
      researchQuestion:
        "How can AI chatbots in a contemporary art exhibition increase young visitors’ understanding of the stories behind artefacts?",
        collaborators: {
        "Academic Advisor": "Prof. Dr. Kai Essig (HSRW)"
      },
      impact: {
        "Usability Study": "Completed",
        "Artists Simulated": "Multiple",
        "Tech Stack": "Python, HTML, CSS, SQLite"
      },
      problem:
        "Young visitors often struggle to engage with and understand the stories behind contemporary art pieces in exhibitions. Traditional museum experiences lack interactive, personalized, and accessible storytelling.",
      solution:
        "Built a secure, multimodal AI-powered chatbot for a museum exhibition, targeting young visitors to boost engagement and understanding of artifact stories. The chatbot features an intuitive, user-centered design and leverages a SQLite database for artifact/story storage. The solution was validated through user testing in a simulated museum environment.",
  pdf: "/portfolio/pdf/case-studies/museum chatbot.pdf",
  manuscript: "/portfolio/pdf/case-studies/manuscript.pdf",
      evaluation: "UEQ and MES were used to evaluate both the usability of the chatbot and the quality of the overall exhibition experience.",
      results: "12 participants took part in the study: 7 females, 5 males, aged between 22 and 29 years old."
      
    },
    {
      id: "ctrl-sea",
      title: "CTRL+SEA: Net Zero Fleet Management for the Marine Sector",
      description:
        "A semester-long team project focused on designing an AI-powered analytics platform for sustainable fleet management in the maritime industry.",
      category: "AI / Maritime / Product Design",
      duration: "1 semester (~4 months)",
      teamSize: "4 people",
      myRole: "Wireframes & User Interviews",
      image: "/business-model.png",
      tags: [
        "AI Analytics",
        "Predictive Routing",
        "Regulation Intelligence",
        "IoT",
        "Wireframing",
        "User Interviews",
        "SaaS",
        "Maritime",
        "Net Zero"
      ],
      impact: {
        "Prototyped Features": "AI Analytics, Predictive Routing, Regulation Engine, Real-time IoT",
        "Business Model": "SaaS for the Sea",
        "Team Size": "4 people"
      },
      problem:
        "Shipping is a major source of emissions and faces rapidly changing regulations. Captains and fleet managers struggle to keep up with compliance and optimize for sustainability.",
      solution:
        "Designed and prototyped an AI-powered platform for net zero fleet management, featuring analytics, predictive routing, regulation intelligence, and real-time IoT integration. Demonstrated business model as SaaS for the Sea.",
  pdf: "/portfolio/pdf/case-studies/ctrlsea.pdf"
    },
    {
      id: "bridgeroute-pro",
      title: "BridgeRoute Pro: Logistics Route Optimization",
      description: "A 4-day design sprint focused on optimizing logistics route planning for freight transport, completed with a team of 9 in collaboration with industry professionals.",
      category: "UI/UX Design",
      duration: "4-day sprint",
      teamSize: "9 people",
      myRole: "Team Member (T.S. & D.A.)",
  image: "/portfolio/images/bridgeroute-cover.png",
      tags: [
        "Route Optimization", 
        "Logistics", 
        "AI Support", 
        "Eco-Conscious Design",
        "Sprint Project",
        "Team Collaboration"
      ],
      impact: {
        "User Pain Points Addressed": "4+",
        "Prototype Developed": "Logistics Dashboard",
        "Industry Collaboration": "Supervisor & Academic Guidance"
      },
      problem: "Route planners in logistics face inefficiencies due to manual processes, late data, and pressure to reduce costs while meeting delivery targets and sustainability goals (e.g., fuel consumption, CO₂ emissions).",
      solution: "Designed a scalable logistics dashboard prototype with AI-driven optimization, real-time monitoring, and eco-conscious features to streamline route planning, reduce LTL shipments, and improve delivery accuracy.",
  pdf: "/portfolio/pdf/case-studies/bridge route.pdf",
      collaborators: {
        "Industry Supervisor": "Iga Dudek",
        "Academic Advisor": "Prof. Dr. Karsten Nebe"
      }
    },
    {
      id: "mental-companion",
      title: "MinCo: AI-Powered Mental Health Companion for Women",
      description: "A 5-day design sprint focused on creating an AI-driven mental health app tailored for young women, addressing stress management and self-care through personalized tools and real-time insights.",
      category: "UI/UX Design",
      duration: "5-day sprint",
      teamSize: "5 people",
      myRole: "Content Wireframes",
  image: "/portfolio/images/minco-cover.png",
      images: [
  "/portfolio/images/minco-cover.png",
  "/portfolio/images/minco-ui1.png",
  "/portfolio/images/minco-ui2.png"
      ],
      tags: [
        "Mental Health Tech", 
        "AI-Driven Design", 
        "Women’s Wellness", 
        "Sprint Project",
        "Wireframing",
        "Inclusive Design"
      ],
      impact: {
        "User Personas Developed": "2 (Young Professionals & Students)",
        "Key Flows Designed": "Onboarding, Daily Check-Ins, Goal Tracking",
        "Target Audience": "Women aged 15-30",
        "Ethical AI Focus": "Privacy-first recommendations"
      },
      problem: "Young women face fragmented mental health support, with existing apps lacking personalization, gender-specific insights, and integration of daily wellness tools into busy schedules.",
      solution: "Designed an AI companion app that offers real-time mood analysis, adaptive goal-setting, and micro-interventions (e.g., meditation prompts) through a privacy-centric, inclusive interface. Prototyped core user flows for onboarding and habit-building.",
  pdf: "/portfolio/pdf/case-studies/Team Clarity MinCo.pdf",
      collaborators: {
        "Academic Advisor": "Prof. Dr. Karsten Nebe"
      },
      highlights: {
        "Research": "Identified pain points (e.g., social media overwhelm, burnout) and gains (e.g., all-in-one platform) through competitor analysis (Calm, Wysa).",
        "Wireframing": "Crafted content-driven wireframes for onboarding, daily check-ins, and goal screens to ensure clarity and empathy in AI interactions.",
        "Future Vision": "Planned 24/7 virtual assistant integration with ethical AI guidelines."
      }
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabClick = (idx: number) => {
    setActiveIndex(idx);
    cardRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detailed examples from real projects. Discover the processes I followed from problem definition to solution and the results I achieved.
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {caseStudies.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveIndex(idx)}
              className={
                "px-6 py-2 rounded-lg font-semibold transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/60 " +
                (activeIndex === idx
                  ? "bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-lg"
                  : "bg-white text-foreground border border-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-300 hover:text-white hover:shadow-md")
              }
              style={{
                minWidth: 160,
                boxShadow: activeIndex === idx ? "0 4px 24px 0 rgba(168,85,247,0.18)" : undefined,
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              {study.title}
            </button>
          ))}
        </div>

        {/* Only show the selected case study */}
        <div>
          <Card 
            className="overflow-hidden hover:shadow-card transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${activeIndex * 0.2}s` }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Images - Multiple for Swoosh and Kui Bot */}
              <div className="flex flex-col items-center justify-center gap-6 bg-muted py-8">
                {caseStudies[activeIndex].id === "swoosh" ? (
                  <div className="flex flex-col gap-6 w-full items-center">
                    <img
                      src="/portfolio/images/swoosh-cover.png"
                      alt="Swoosh Cover"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                    <img
                      src="/portfolio/images/swoosh-ui.png"
                      alt="Swoosh UI"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                    <img
                      src="/portfolio/images/swoosh-heatmap.png"
                      alt="Swoosh Heatmap"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                  </div>
                ) : caseStudies[activeIndex].id === "kui-bot" ? (
                  <div className="flex flex-col gap-6 w-full items-center">
                    <img
                      src="/portfolio/images/artandstories.png"
                      alt="Art and Stories"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                    <img
                      src="/portfolio/images/chat.png"
                      alt="Chat"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                    <img
                      src="/portfolio/images/selectartist.png"
                      alt="Select Artist"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                  </div>
                ) : caseStudies[activeIndex].id === "ctrl-sea" ? (
                  <div className="flex flex-col gap-6 w-full items-center">
                    <img
                      src="/portfolio/images/ctrlsea1.png"
                      alt="CTRL+SEA Screenshot 1"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                    <img
                      src="/portfolio/images/ctrlsea2.png"
                      alt="CTRL+SEA Screenshot 2"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                    <img
                      src="/portfolio/images/ctrlsea3.png"
                      alt="CTRL+SEA Screenshot 3"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                  </div>
                ) : caseStudies[activeIndex].id === "bridgeroute-pro" ? (
                  <div className="flex flex-col gap-6 w-full items-center">
                    <img
                      src="/portfolio/images/bridge1.png"
                      alt="BridgeRoute Pro Screenshot 1"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                    <img
                      src="/portfolio/images/bridge2.png"
                      alt="BridgeRoute Pro Screenshot 2"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                    <img
                      src="/portfolio/images/bridge3.png"
                      alt="BridgeRoute Pro Screenshot 3"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                  </div>
                ) : caseStudies[activeIndex].id === "mental-companion" ? (
                  <div className="flex flex-col gap-6 w-full items-center">
                    <img
                      src="/portfolio/images/minco-cover.png"
                      alt="MinCo Cover"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                    <img
                      src="/portfolio/images/minco-ui1.png"
                      alt="MinCo UI 1"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                    <img
                      src="/portfolio/images/minco-ui2.png"
                      alt="MinCo UI 2"
                      className="rounded-lg shadow-lg max-w-[340px] w-full object-contain transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                      style={{ background: "#f9fafb" }}
                    />
                  </div>
                ) : (
                  <img 
                    src={caseStudies[activeIndex].image} 
                    alt={caseStudies[activeIndex].title}
                    className="max-h-56 w-auto object-contain rounded-lg shadow-sm transition-transform duration-300 hover:scale-[1.45] hover:z-30"
                    style={{ maxWidth: "90%", background: "#f9fafb" }}
                  />
                )}
              </div>
              {/* Content */}
              <div className="p-8 flex-1 min-w-0">
                <div className="mb-4">
                  <Badge variant="outline" className="mb-4">
                    {caseStudies[activeIndex].category}
                  </Badge>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    {caseStudies[activeIndex].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {caseStudies[activeIndex].description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">{caseStudies[activeIndex].duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">{caseStudies[activeIndex].teamSize}</div>
                    <div className="text-xs text-muted-foreground">Team</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">{caseStudies[activeIndex].myRole}</div>
                    <div className="text-xs text-muted-foreground">My Role</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudies[activeIndex].tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                  {Object.entries(caseStudies[activeIndex].impact)
                    .filter(([key]) =>
                      caseStudies[activeIndex].id !== "ctrl-sea" ||
                      key === "Prototyped Features" ||
                      key === "Business Model" ||
                      key === "Team Size"
                    )
                    .map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                  ))}
                </div>

                {/* Problem & Solution */}
                <div className="space-y-4 mb-6">
                  {/* Show research question if present */}
                  {caseStudies[activeIndex].researchQuestion && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Research Question</h4>
                      <p className="text-sm text-muted-foreground">{caseStudies[activeIndex].researchQuestion}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Problem</h4>
                    <p className="text-sm text-muted-foreground">{caseStudies[activeIndex].problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">{caseStudies[activeIndex].solution}</p>
                  </div>
                  {/* Show collaborators if present */}
                  {caseStudies[activeIndex].collaborators && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Collaborators</h4>
                      <ul className="text-sm text-muted-foreground">
                        {Object.entries(caseStudies[activeIndex].collaborators).map(([role, name]) => (
                          <li key={role}><span className="font-medium">{role}:</span> {name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Show highlights if present */}
                  {caseStudies[activeIndex].highlights && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Highlights</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {Object.entries(caseStudies[activeIndex].highlights).map(([topic, detail]) => (
                          <li key={topic}><span className="font-medium">{topic}:</span> {detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Show evaluation and results if present */}
                  {caseStudies[activeIndex].evaluation && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Evaluation</h4>
                      <p className="text-sm text-muted-foreground">{caseStudies[activeIndex].evaluation}</p>
                    </div>
                  )}
                  {caseStudies[activeIndex].results && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Results & Findings</h4>
                      <p className="text-sm text-muted-foreground">{caseStudies[activeIndex].results}</p>
                    </div>
                  )}
                </div>

                {/* CTA */}
                {caseStudies[activeIndex].pdf ? (
                  <div className="flex flex-col gap-2">
                    <Button
                      asChild
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                    >
                      <a
                        href={caseStudies[activeIndex].pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {caseStudies[activeIndex].id === "ctrl-sea"
                          ? "View Final Demo Deck"
                          : "View Full Case Study"}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    {/* Show manuscript button only for Kui Bot */}
                    {caseStudies[activeIndex].manuscript && (
                      <Button
                        asChild
                        className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                      >
                        <a
                          href={caseStudies[activeIndex].manuscript}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Manuscript
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    )}
                  </div>
                ) : (
                  <Button
                    asChild
                    className="w-full group bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Link to={`/case-studies/${caseStudies[activeIndex].id}`}>
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Want to See More Projects?
          </h3>
          <p className="text-muted-foreground mb-8">
            You can view all my projects and work on the projects page.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <Link to="/projects/ux-research">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default CaseStudies;