
import React from "react";
import { photos as originalPhotos } from "@/assets/photography/photos";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Award, BookOpen, Briefcase, Camera, BarChart, PenTool, Server, User, Leaf, Coffee, Users, Crown, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Fotoğrafçılık bölümündeki ilk 10 fotoğrafın 'feeling' alanlarını güncelle (TR ve EN ayrı)
const updatedFeelings = [
  {
    tr: "Bazen İstanbul’dan kaçıp gitmek istersin, kuş kadar özgür olmak… Ama ne denizi ne de eskimiş anılarınla dolu o binaları bırakabilirsin.",
    en: "Sometimes you wish to escape from Istanbul, to be as free as a bird… Yet you can’t leave the sea, nor the buildings filled with your old memories."
  },
  {
    tr: "Yaşadığını hissettiren her anın içinde bir canlılık vardır.",
    en: "There is a spark of life in every moment that makes you feel truly alive."
  },
  {
    tr: "Üzerinde Atatürk olan eski Türk paraları… Fotoğraf Sirkeci’de, aslında bir şeker dükkânında çekildi. Bana güzel bir Türkiye anısını hatırlatıyor. Gurbet bazen ağır geldiğinde bakmak istediğim fotoğraflardan biri.",
    en: "Old Turkish banknotes with Atatürk on them… Taken in Sirkeci, inside what is actually a candy shop. It reminds me of a beautiful memory from Turkey — one I look at when the weight of being far from home feels heavy."
  },
  {
    tr: "Aslında bir akvaryum fotoğrafı… Ama sanki balıklar özgürmüş gibi, kimse onları cam bir fanusa koymamış gibi hissettiriyor.",
    en: "A photograph of an aquarium… Yet it feels as if the fish are free, as if no one has ever placed them in a glass tank."
  },
  {
    tr: "Dünyayı hiç benim gözümden görmediniz.",
    en: "You have never seen the world through my eyes."
  },
  {
    tr: "Bu fotoğraf sadece şunu söylüyor: “İstanbul aşk demektir.” Dünyanın neresine giderseniz gidin, bir İstanbul daha yok.",
    en: "This photo simply says: “Istanbul means love.” No matter where you go in the world, there is no other city like it."
  },
  {
    tr: "Bu fotoğrafla bir yarışma kazanmıştım. Bana hayata ayrıntılı bakmayı hatırlatıyor; bazen güzellikler ayrıntılarda gizlidir.",
    en: "This photo once won me a competition. It reminds me to look at life closely — sometimes beauty is hidden in the details."
  },
  {
    tr: "Betonların ve yeşillerin arasında sıkışmış, ama kocaman çiçek açmış bir turuncu çiçek… Aslında tam da ben gibi, sen gibi.",
    en: "A bright orange flower, trapped between concrete and greenery, yet blooming large and proud… Just like me, just like you."
  },
  {
    tr: "Bu, para fotoğrafındaki dükkânın içi. İçeride bir amca var. Ne kadar baksam da İstanbul sokaklarının kokusunu, dokusunu hissettiren bir fotoğraf. Belki de 80’lerde doğmalıydım.",
    en: "The inside of the shop from the money photo. There’s an old man inside. No matter how many times I look, this picture brings back the scent and texture of Istanbul’s streets. Maybe I should have been born in the 80s."
  },
  {
    tr: "Evet, bu fotoğrafı Android ile çektim. Keşke bir fotoğraf makinem olsaydı dediğim anlardan biri… Denize aşığım ve hayatımda denizin olduğu her an güzeldir. Belki bir makinem olsaydı fark etmezdi bile, çünkü olmayan imkânlar beni daha çok görmeye ve çalışmaya itti.",
    en: "Yes, I took this with an Android phone. One of those moments when I wished I had a real camera… I’m in love with the sea, and every moment with it is beautiful. Maybe a camera wouldn’t have made a difference — the lack of tools pushed me to see more and work harder."
  }
];

// photos dizisini güncelle (feeling artık bir nesne)
const photos = originalPhotos.map((photo, idx) =>
  idx < 10 ? { ...photo, feeling: updatedFeelings[idx] } : photo
);

const sectionIds = [
  "about-hero",
  "about-skills",
  "about-experience",
  "about-leadership",
  "about-photography",
  "about-certifications",
  "about-cta"
];

const sectionLabels = [
  "About",
  "Skills",
  "Experience",
  "Leadership",
  "Photography",
  "Certifications",
  "View CV"
];

const About = () => {
  const { t } = useLanguage();

  const skills = [
    "User Experience Design",
    "User Interface Design",
    "User Research and Testing",
    "Usability Testing",
    "Data Visualization",
    "Frontend Development",
    "React",
    "TypeScript",
    "Python",
    "Java OOP",
    "Prompt Engineering",
    "HTML & CSS",
    "3D Design Blender",
    "Narrative Storytelling",
    "Character Design",
    "Arduino",
    "Digital Fabrication & Laser Cutting",
    "Figma",
    "Git",
    "Github Copilot",
    "Zbrush",
  ];

  // Flip state for each photo card
  const [flippedCards, setFlippedCards] = React.useState<boolean[]>(() => photos.slice(0, 10).map(() => false));
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState<"left" | "right" | null>(null);

  const handleFlip = (idx: number) => {
    setFlippedCards(prev => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  // Carousel navigation with smooth slide
  const handlePrev = () => {
    setSlideDirection("left");
    setTimeout(() => {
      setActiveIdx((prev) => (prev - 1 + photos.slice(0, 10).length) % photos.slice(0, 10).length);
      setSlideDirection(null);
    }, 200);
  };
  const handleNext = () => {
    setSlideDirection("right");
    setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % photos.slice(0, 10).length);
      setSlideDirection(null);
    }, 200);
  };

  // Reset flip when slide changes
  React.useEffect(() => {
    setFlippedCards(photos.slice(0, 10).map(() => false));
  }, [activeIdx]);

  // Table of Contents open/close state
  const [tocOpen, setTocOpen] = React.useState(true);

  // Track active section for highlighting in TOC
  const [activeSection, setActiveSection] = React.useState(sectionIds[0]);

  React.useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionIds.map(id => {
        const el = document.getElementById(id);
        if (!el) return Number.POSITIVE_INFINITY;
        const rect = el.getBoundingClientRect();
        return Math.abs(rect.top - 120); // 120px offset for navbar
      });
      const minIdx = offsets.indexOf(Math.min(...offsets));
      setActiveSection(sectionIds[minIdx]);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fix: When closing TOC, hide the toggle button only after animation
  const [showClosedBtn, setShowClosedBtn] = React.useState(false);
  React.useEffect(() => {
    if (!tocOpen) {
      setShowClosedBtn(true);
    } else {
      // Wait for slide animation before hiding
      const timeout = setTimeout(() => setShowClosedBtn(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [tocOpen]);

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Table of Contents - Left, slide, toggleable, smooth, active highlight */}
      <nav
        className={`
          fixed z-40
          top-24
          left-4
          transition-transform duration-300
          ${tocOpen ? "translate-x-0 opacity-100" : "-translate-x-[85%] opacity-60 pointer-events-none"}
          bg-white/95 backdrop-blur border border-muted rounded-xl shadow-2xl px-5 py-4 w-60
          flex flex-col gap-2
          hover:opacity-100
          group
          hidden lg:flex
        `}
        aria-label="Table of contents"
        style={{ minHeight: 320 }}
      >
        <button
          aria-label={tocOpen ? "Close contents" : "Open contents"}
          onClick={() => setTocOpen(o => !o)}
          className={`
            absolute -right-4 top-6 bg-white border border-muted shadow rounded-full w-8 h-8 flex items-center justify-center hover:bg-muted transition
            z-50
          `}
          style={{ display: tocOpen ? "flex" : "none" }}
        >
          <X size={20} />
        </button>
        <div className="font-bold text-base mb-2 tracking-wide text-foreground/80 pl-1">Contents</div>
        <ul className="space-y-1 mt-4">
          {sectionIds.map((id, idx) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`toc-link${activeSection === id ? " toc-link-active" : ""}`}
                aria-current={activeSection === id ? "page" : undefined}
              >
                {sectionLabels[idx]}
              </a>
            </li>
          ))}
        </ul>
        <style>{`
          .toc-link {
            display: block;
            color: #7c3aed;
            font-weight: 500;
            border-radius: 6px;
            padding: 4px 8px;
            transition: background 0.15s, color 0.15s;
            text-decoration: none;
            cursor: pointer;
          }
          .toc-link-active {
            background: #f3f4f6;
            color: #7c3aed;
            font-weight: 600;
          }
          .toc-link:hover, .toc-link:focus {
            background: #f3f4f6;
            color: #7c3aed;
            outline: none;
          }
        `}</style>
      </nav>
      {/* Toggle button for closed state (only visible when closed) */}
      {!tocOpen && (
        <button
          aria-label="Open contents"
          onClick={() => setTocOpen(true)}
          className={`
            fixed top-28 left-2 z-50 bg-white border border-muted shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-muted transition
            hidden lg:flex
          `}
        >
          <Menu size={22} />
        </button>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div id="about-hero" className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('aboutSubtitle')}
          </p>
        </div>

        {/* Bio Section */}
        <Card className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="text-2xl">{t('myStory')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t('myStoryContent1')}</p>
            <p>{t('myStoryContent2')}</p>
            <p>{t('myStoryContent3')}</p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card id="about-skills" className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="text-2xl">{t('skills')}</CardTitle>
            <CardDescription>
              {t('skillsDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors animate-fade-in"
                  style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card id="about-experience" className="mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Briefcase className="mr-2 h-6 w-6" />
              {t('experience')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Freelance Designer */}
            <div className="border-l-2 border-primary/20 pl-6 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Freelance Designer
                </h3>
                <span className="text-sm text-muted-foreground">2024 – current</span>
              </div>
              <span className="text-primary mb-2 block">Remote</span>
              <ul className="list-disc ml-5 text-muted-foreground text-sm space-y-1">
                <li>
                  Designed invitations, brochures, personal business cards, and managed social media accounts for a client.
                </li>
                <li>
                  Collaborated with real clients as part of my master's program: conducted meetings, worked in sprints, and delivered presentations to stakeholders.
                </li>
              </ul>
            </div>
            {/* Kovan App */}
            <div className="border-l-2 border-primary/20 pl-6 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Search Quality Improvement Specialist
                </h3>
                <span className="text-sm text-muted-foreground">07.17.2024 – 09.17.2024</span>
              </div>
              <a
                href="https://www.kovan.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary mb-2 block underline"
              >
                Kovan App (Remote)
              </a>
              <ul className="list-disc ml-5 text-muted-foreground text-sm space-y-1">
                <li>Worked for 2 months as a data annotator to help train artificial intelligence models.</li>
                <li>Content Analysis: Evaluated website content for relevance and reliability based on user queries.</li>
                <li>User Query & Visual Relation: Assessed the relationship between visuals and user queries.</li>
                <li>Text Content Analysis: Verified accuracy of text content and corrected inaccuracies.</li>
              </ul>
            </div>
            {/* Pointo */}
            <div className="border-l-2 border-primary/20 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Front-End Web Developer
                </h3>
                <span className="text-sm text-muted-foreground">07.10.2023 – 08.18.2023</span>
              </div>
              <a
                href="https://www.pointo.com.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary mb-2 block underline"
              >
                Pointo (Ankara, Turkiye / Remote)
              </a>
              <ul className="list-disc ml-5 text-muted-foreground text-sm space-y-1">
                <li>Crafted responsive websites and interfaces using HTML5, CSS, JavaScript, and REST API.</li>
                <li>Emphasized User Interface and User Experience Design principles for optimal user interaction.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Leadership */}
        <Card id="about-leadership" className="mb-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Crown className="mr-2 h-6 w-6" />
              Leadership & Volunteering
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Yeşilay Volunteer */}
            <div className="border-l-2 border-primary/20 pl-6 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Yeşilay Volunteer
                </h3>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <a
                href="https://www.instagram.com/p/C6yyqCYNchZ/?img_index=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary mb-2 block underline"
              >
                Bahçeşehir Üniversitesi Genç Yeşilay Kulübü
              </a>
              <p className="text-muted-foreground text-sm mb-2">
                Volunteered for one year, supporting social responsibility projects and community awareness activities.
              </p>
              <ul className="list-disc ml-5 text-muted-foreground text-sm space-y-1">
                <li>
                  Organized awareness events at university festivals, including an alcohol simulation activity, to promote Yeşilay’s mission and recruit new volunteers.
                </li>
                <li>
                  Participated in the 45th Istanbul Marathon and other community events to raise awareness about addiction prevention.
                </li>
              </ul>
            </div>
            {/* Photography Club Board Member */}
            <div className="border-l-2 border-primary/20 pl-6 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Board Member & Social Media Contributor
                </h3>
                <span className="text-sm text-muted-foreground">2023 – 2024</span>
              </div>
              <a
                href="https://www.instagram.com/p/C1ChvaDLyUU/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary mb-2 block underline"
              >
                Photography Club
              </a>
              <ul className="list-disc ml-5 text-muted-foreground text-sm space-y-1">
                <li>Served as a board member, contributing to club organization and event planning.</li>
                <li>Created and managed social media posts for the club.</li>
              </ul>
            </div>
            {/* Radio Club Broadcaster */}
            <div className="border-l-2 border-primary/20 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Broadcaster
                </h3>
                <span className="text-sm text-muted-foreground">2019 (4 months)</span>
              </div>
              <a
                href="https://www.instagram.com/bau_radyo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary mb-2 block underline"
              >
                Radio Club
              </a>
              <ul className="list-disc ml-5 text-muted-foreground text-sm space-y-1">
                <li>Produced and hosted radio shows, gaining experience in media and communication.</li>
                <li>Organized live broadcasts and invited guests to the studio for interviews and discussions.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Photography Section - Carousel with Flip Cards */}
        <Card id="about-photography" className="mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Camera className="mr-2 h-6 w-6" />
              {t('photography')}
            </CardTitle>
            <CardDescription>
              {t('photographyDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative flex flex-col items-center">
              <div className="w-full max-w-xl mx-auto flex flex-col items-center relative">
                {/* Oklar ve kart aynı hizada, oklar resmin tam ortasında */}
                <div className="flex items-center justify-center w-full relative" style={{ minHeight: 400 }}>
                  <button
                    aria-label="Previous"
                    onClick={handlePrev}
                    className="rounded-full p-2 group transition-colors absolute left-0 z-10"
                    style={{
                      background: "white",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      border: 'none',
                      top: "50%",
                      transform: "translateY(-50%)"
                    }}
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      width="28"
                      height="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="transition-colors duration-150 group-hover:stroke-primary"
                      style={{
                        background: "transparent"
                      }}
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                    <style>{`.group:hover { background: #f3f4f6 !important; }`}</style>
                  </button>
                  <div className="flex flex-col items-center mx-auto w-72 h-96 relative">
                    <div
                      className={`flip-card group w-72 h-96 cursor-pointer select-none
                        ${slideDirection === "left" ? "slide-left" : ""}
                        ${slideDirection === "right" ? "slide-right" : ""}
                        ${slideDirection === null ? "slide-in" : ""}
                      `}
                      tabIndex={0}
                      onClick={() => handleFlip(activeIdx)}
                      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleFlip(activeIdx); }}
                    >
                      <div
                        className={`flip-card-inner w-full h-full relative transition-transform duration-700 ${flippedCards[activeIdx] ? 'rotate-y-180' : ''}`}
                      >
                        {/* Front */}
                        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                          <img
                            src={photos[activeIdx].src}
                            alt={photos[activeIdx].title}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        {/* Back */}
                        <div className="flip-card-back absolute w-full h-full backface-hidden rounded-lg bg-background text-foreground p-6 flex flex-col justify-center items-center rotate-y-180 shadow-lg">
                          {/* TR normal, EN küçük, italik ve parantez içinde */}
                          {typeof photos[activeIdx].feeling === "object" ? (
                            <div className="text-sm opacity-80 text-center">
                              {photos[activeIdx].feeling.tr}
                              <br />
                              <span
                                style={{
                                  fontSize: "0.85em",
                                  fontStyle: "italic",
                                  fontWeight: 500,
                                  display: "block",
                                  marginTop: 6,
                                  color: "#888"
                                }}
                              >
                                ({photos[activeIdx].feeling.en})
                              </span>
                            </div>
                          ) : (
                            <div className="text-sm opacity-80 text-center">{photos[activeIdx].feeling}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    aria-label="Next"
                    onClick={handleNext}
                    className="rounded-full p-2 group transition-colors absolute right-0 z-10"
                    style={{
                      background: "white",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      border: 'none',
                      top: "50%",
                      transform: "translateY(-50%)"
                    }}
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      width="28"
                      height="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="transition-colors duration-150 group-hover:stroke-primary"
                      style={{
                        background: "transparent"
                      }}
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                    <style>{`.group:hover { background: #f3f4f6 !important; }`}</style>
                  </button>
                </div>
                {/* Only title below the photo */}
                <div className="w-72 mt-4 text-center">
                  <div className="text-lg font-semibold text-foreground">{photos[activeIdx].title}</div>
                </div>
                {/* Minimal Dots */}
                <div className="flex justify-center mt-6 gap-1">
                  {photos.slice(0, 10).map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Go to photo ${idx + 1}`}
                      className="w-2.5 h-2.5 rounded-full focus:outline-none"
                      style={{
                        background: activeIdx === idx ? '#222' : '#e5e7eb',
                        opacity: activeIdx === idx ? 1 : 0.5,
                        transform: activeIdx === idx ? 'scale(1.3)' : 'scale(1)',
                        transition: 'all 0.2s'
                      }}
                      onClick={() => setActiveIdx(idx)}
                    />
                  ))}
                </div>
                {/* Add Pexels link below carousel */}
                <a
                  href="https://www.pexels.com/@ummu-gulsum-ergin-670659197/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-xs text-primary underline hover:text-primary/80 transition"
                >
                  See more on Pexels
                </a>
              </div>
            </div>
            {/* Flip card and slide styles */}
            <style>{`
              .flip-card {
                perspective: 1200px;
                transition: opacity 0.2s, transform 0.2s;
                opacity: 1;
              }
              .slide-left {
                animation: slideLeftOut 0.2s forwards;
              }
              .slide-right {
                animation: slideRightOut 0.2s forwards;
              }
              .slide-in {
                animation: slideIn 0.2s;
              }
              @keyframes slideLeftOut {
                0% { opacity: 1; transform: translateX(0); }
                100% { opacity: 0; transform: translateX(-40px); }
              }
              @keyframes slideRightOut {
                0% { opacity: 1; transform: translateX(0); }
                100% { opacity = 0; transform: translateX(40px); }
              }
              @keyframes slideIn {
                0% { opacity: 0; transform: translateX(40px);}
                100% { opacity: 1; transform: translateX(0);}
              }
              .flip-card-inner {
                transition: transform 0.7s cubic-bezier(.4,2.3,.3,1);
                transform-style: preserve-3d;
                position: relative;
                width: 100%;
                height: 100%;
              }
              .rotate-y-180 {
                transform: rotateY(180deg);
              }
              .flip-card-front, .flip-card-back {
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
              }
              .flip-card-back {
                transform: rotateY(180deg);
              }
            `}</style>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card id="about-certifications" className="mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Award className="mr-2 h-6 w-6" />
              {t('certifications')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Certification 1 - Data Visualization with Python */}
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                <BarChart className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">Data Visualization with Python</h4>
                  <p className="text-sm text-muted-foreground">IBM / Coursera</p>
                  <p className="text-xs text-muted-foreground">2024</p>
                  <a
                    href="/portfolio/certificates/python.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline text-xs mt-1 inline-block"
                  >
                    View
                  </a>
                </div>
              </div>
              {/* Certification 2 - Mock-Up Figma */}
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                <PenTool className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">Mock-Up Figma</h4>
                  <p className="text-sm text-muted-foreground">Tübitak Bilgem YTE Bootcamp</p>
                  <p className="text-xs text-muted-foreground">2023</p>
                  <a
                    href="/portfolio/certificates/figma.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline text-xs mt-1 inline-block"
                  >
                    View
                  </a>
                </div>
              </div>
              {/* Certification 3 - Microservice Architecture */}
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                <Server className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">Microservice Architecture</h4>
                  <p className="text-sm text-muted-foreground">Tübitak Bilgem YTE Bootcamp</p>
                  <p className="text-xs text-muted-foreground">2023</p>
                  <a
                    href="/portfolio/certificates/microservices.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline text-xs mt-1 inline-block"
                  >
                    View
                  </a>
                </div>
              </div>
              {/* Certification 4 - Java Programming */}
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                <Coffee className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">Java Programming</h4>
                  <p className="text-sm text-muted-foreground">Tübitak Bilgem YTE Bootcamp</p>
                  <p className="text-xs text-muted-foreground">2023</p>
                  <a
                    href="/portfolio/certificates/java.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline text-xs mt-1 inline-block"
                  >
                    View
                  </a>
                </div>
              </div>
              {/* Certification 5 - Spring */}
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                <Leaf className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">Spring</h4>
                  <p className="text-sm text-muted-foreground">Tübitak Bilgem YTE Bootcamp</p>
                  <p className="text-xs text-muted-foreground">2023</p>
                  <a
                    href="/portfolio/certificates/spring.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline text-xs mt-1 inline-block"
                  >
                    View
                  </a>
                </div>
              </div>
              {/* Certification 6 - User Experience and Usability */}
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                <User className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">User Experience and Usability</h4>
                  <p className="text-sm text-muted-foreground">Tübitak Bilgem YTE Bootcamp</p>
                  <p className="text-xs text-muted-foreground">2023</p>
                  <a
                    href="/portfolio/certificates/ux.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline text-xs mt-1 inline-block"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div id="about-cta" className="text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <a
              href="/portfolio/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
            >
              <Eye className="mr-2 h-5 w-5" />
              View CV
            </a>
          </Button>
        </div>

      </div>
      {/* Smooth scroll behavior for anchor links */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @media (max-width: 1023px) {
          nav[aria-label="Table of contents"], .fixed.top-28.left-2 { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default About;