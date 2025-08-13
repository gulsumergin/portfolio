import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'tr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    caseStudies: 'Case Studies',
    contact: 'Contact',
    
    // About Page
    aboutTitle: 'About Me',
    aboutSubtitle: 'UX & Software Engineer focused on user experience, data visualization, and human-computer interaction.',
    myStory: 'My Story',
    myStoryContent1: 'I hold a Software Engineering degree from Bahçeşehir University and am pursuing a Master\'s in Usability Engineering at Hochschule Rhein-Waal in Germany.',
    myStoryContent2: 'My experience includes user research, usability testing, eye-tracking studies, and exploring prompt engineering in projects like the Museum Chatbot.',
    myStoryContent3: 'I am passionate about AI, human-AI interaction, and building accessible, user-centered digital solutions that improve everyday life.',
    
    skills: 'Skills',
    skillsDescription: 'Technical and design skills I possess',
    
    experience: 'Experience',
    experienceUX: 'UX Designer',
    experienceUXCompany: 'Tech Company',
    experienceUXPeriod: '2022 - Present',
    experienceUXDesc: 'Conducted user research and usability testing, collaborated with cross-functional teams to improve product experience.',
    experienceFrontend: 'Frontend Developer',
    experienceFrontendCompany: 'Digital Agency',
    experienceFrontendPeriod: '2021 - 2022',
    experienceFrontendDesc: 'Developed user interfaces with React and TypeScript, focusing on performance and accessibility.',
    
    certifications: 'Certifications',
    googleUX: 'Google UX Design Certificate',
    googleUXIssuer: 'Google',
    hci: 'Human-Computer Interaction',
    hciIssuer: 'University Course',
    d3js: 'Data Visualization with D3.js',
    d3jsIssuer: 'Online Platform',
    
    photography: 'Photography',
    photographyDescription: 'A selection of my photography work showcasing my creative perspective and attention to detail.',
    
    downloadCV: 'Download CV'
    },
    tr: {
    // Navigation
    home: 'Ana Sayfa',
    about: 'Hakkımda',
    projects: 'Projeler',
    caseStudies: 'Vaka Çalışmaları',
    contact: 'İletişim',
    
    // About Page
    aboutTitle: 'Hakkımda',
    aboutSubtitle: 'Kullanıcı deneyimi ve yazılım geliştirme alanlarında uzmanlaşmış, insan odaklı tasarım yaklaşımı benimseyen bir mühendisim.',
    myStory: 'Hikayem',
    myStoryContent1: 'Merhaba! Ben bir UX ve yazılım mühendisiyim. Kullanıcı deneyimi tasarımı, veri görselleştirme ve insan-bilgisayar etkileşimi alanlarında çalışıyorum.',
    myStoryContent2: 'Üniversite eğitimim sırasında hem teknik hem de tasarım becerilerimi geliştirdim. Özellikle kullanıcı araştırmaları, usability testleri ve eye tracking çalışmalarında deneyim kazandım.',
    myStoryContent3: 'Amacım, teknoloji ve tasarımı birleştirerek insanların hayatını kolaylaştıran, erişilebilir ve kullanıcı dostu dijital çözümler geliştirmek.',
    
    skills: 'Yeteneklerim',
    skillsDescription: 'Sahip olduğum teknik ve tasarım becerileri',
    
    experience: 'Deneyim',
    experienceUX: 'UX Tasarımcı',
    experienceUXCompany: 'Teknoloji Şirketi',
    experienceUXPeriod: '2022 - Günümüz',
    experienceUXDesc: 'Kullanıcı araştırmaları ve usability testleri gerçekleştirdim',
    experienceFrontend: 'Frontend Geliştirici',
    experienceFrontendCompany: 'Dijital Ajans',
    experienceFrontendPeriod: '2021 - 2022',
    experienceFrontendDesc: 'React ve TypeScript ile kullanıcı arayüzleri geliştirdim',
    
    certifications: 'Sertifikalar',
    googleUX: 'Google UX Tasarım Sertifikası',
    googleUXIssuer: 'Google',
    hci: 'İnsan-Bilgisayar Etkileşimi',
    hciIssuer: 'Üniversite Dersi',
    d3js: 'D3.js ile Veri Görselleştirme',
    d3jsIssuer: 'Online Platform',
    
    photography: 'Fotoğrafçılık',
    photographyDescription: 'Yaratıcı bakış açımı sergileyen fotoğraf çalışmalarımdan bir seçki',
    
    downloadCV: 'CV İndir'
  },
  de: {
    // Navigation
    home: 'Startseite',
    about: 'Über mich',
    projects: 'Projekte',
    caseStudies: 'Fallstudien',
    contact: 'Kontakt',
    
    // About Page
    aboutTitle: 'Über mich',
    aboutSubtitle: 'Ein UX- und Software-Ingenieur, spezialisiert auf Benutzererfahrung und Softwareentwicklung, mit einem menschenzentrierten Designansatz.',
    myStory: 'Meine Geschichte',
    myStoryContent1: 'Hallo! Ich bin ein UX- und Software-Ingenieur. Ich arbeite in den Bereichen User Experience Design, Datenvisualisierung und Mensch-Computer-Interaktion.',
    myStoryContent2: 'Während meines Universitätsstudiums habe ich sowohl technische als auch Design-Fähigkeiten entwickelt. Ich sammelte besonders Erfahrungen in der Benutzerforschung, Usability-Tests und Eye-Tracking-Studien.',
    myStoryContent3: 'Mein Ziel ist es, zugängliche und benutzerfreundliche digitale Lösungen zu entwickeln, die das Leben der Menschen durch die Kombination von Technologie und Design erleichtern.',
    
    skills: 'Fähigkeiten',
    skillsDescription: 'Technische und Design-Fähigkeiten, die ich besitze',
    
    experience: 'Erfahrung',
    experienceUX: 'UX Designer',
    experienceUXCompany: 'Tech-Unternehmen',
    experienceUXPeriod: '2022 - Heute',
    experienceUXDesc: 'Durchführung von Benutzerforschung und Usability-Tests',
    experienceFrontend: 'Frontend-Entwickler',
    experienceFrontendCompany: 'Digitalagentur',
    experienceFrontendPeriod: '2021 - 2022',
    experienceFrontendDesc: 'Entwicklung von Benutzeroberflächen mit React und TypeScript',
    
    certifications: 'Zertifizierungen',
    googleUX: 'Google UX Design Zertifikat',
    googleUXIssuer: 'Google',
    hci: 'Mensch-Computer-Interaktion',
    hciIssuer: 'Universitätskurs',
    d3js: 'Datenvisualisierung mit D3.js',
    d3jsIssuer: 'Online-Plattform',
    
    photography: 'Fotografie',
    photographyDescription: 'Eine Auswahl meiner Fotografiearbeiten, die meine kreative Perspektive zeigt',
    
    downloadCV: 'CV herunterladen'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};