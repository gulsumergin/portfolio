import { useState } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  // Modal state for footer info
  const [modal, setModal] = useState<null | { title: string; content: string }>(null);

  // Footer info content
  const footerInfo = {
    Terms: {
      title: "Terms of Service",
      content: "By using this portfolio website, you agree to use the content for personal and non-commercial purposes only. All project content and visuals are for demonstration and educational purposes."
    },
    Privacy: {
      title: "Privacy Policy",
      content: "This website does not collect personal data or use tracking cookies. Analytics may be used to improve user experience, but no personal information is stored or shared."
    },
    Security: {
      title: "Security",
      content: "All reasonable measures are taken to keep this site secure. Please do not submit sensitive information through contact forms or email links."
    },
    Status: {
      title: "Status",
      content: "This portfolio is actively maintained and updated with new projects. For feedback or bug reports, please contact me via email or LinkedIn."
    },
    Docs: {
      title: "Documentation",
      content: "Project documentation and case studies are available within each project section. For further details, please reach out directly."
    },
    Contact: {
      title: "Contact",
      content: "For inquiries, collaborations, or feedback, email me at ummugulsumerginn@gmail.com or use the social links above."
    },
    "Manage cookies": {
      title: "Cookies",
      content: "This site does not use cookies. No marketing or tracking cookies are used."
    },
    "Do not share my personal information": {
      title: "Personal Information",
      content: "No personal information is collected or shared by this site. You are in control of your data."
    }
  };

  return (
    <footer className="w-full py-8 mt-8 border-t bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
        {/* Sosyal ikonlar */}
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          {/* GitHub */}
          <a href="https://github.com/gulsumergin" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-gray-500 dark:text-gray-400"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          {/* Instagram */}
          <a href="https://instagram.com/ummugulsumergiin" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.981.981-1.275 2.093-1.334 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
          </a>
          {/* Pexels */}
          <a href="https://pexels.com/@ummu-gulsum-ergin-670659197/" target="_blank" rel="noopener noreferrer" aria-label="Pexels" className="hover:text-primary transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M21.5 2h-19A.5.5 0 0 0 2 2.5v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5zm-7.25 15.5h-4.5v-11h4.5a3.25 3.25 0 1 1 0 6.5h-2.25v4.5h2.25a1.25 1.25 0 1 0 0-2.5h-1.25v-2h1.25a3.25 3.25 0 1 1 0 6.5z"/></svg>
          </a>
          {/* Mail */}
          <a href="mailto:ummugulsumerginn@gmail.com" aria-label="Mail" className="hover:text-primary transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.985-8.065h23.97zm11.985-9.065h-23.97c-.554 0-1.015.447-1.015 1v16c0 .553.461 1 1.015 1h23.97c.554 0 1.015-.447 1.015-1v-16c0-.553-.461-1-1.015-1zm-11.985 10.935l-12-8.065v14.13c0 .553.461 1 1.015 1h23.97c.554 0 1.015-.447 1.015-1v-14.13l-12 8.065z"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/ümmü-gülsüm-ergin-6b584217b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
          </a>
        </div>
        {/* Slogan */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          I develop user-centric digital solutions and modern interfaces.
        </div>
        {/* Detaylı linkler */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-2">
          <button className="hover:underline" onClick={() => setModal(footerInfo.Terms)}>Terms</button>
          <button className="hover:underline" onClick={() => setModal(footerInfo.Privacy)}>Privacy</button>
          <button className="hover:underline" onClick={() => setModal(footerInfo.Security)}>Security</button>
          <button className="hover:underline" onClick={() => setModal(footerInfo.Status)}>Status</button>
          <button className="hover:underline" onClick={() => setModal(footerInfo.Docs)}>Docs</button>
          <a href="mailto:ummugulsumerginn@gmail.com" className="hover:underline" onClick={() => setModal(footerInfo.Contact)}>Contact</a>
          <button className="hover:underline" onClick={() => setModal(footerInfo["Manage cookies"])}>Manage cookies</button>
          <button className="hover:underline" onClick={() => setModal(footerInfo["Do not share my personal information"])}>Do not share my personal information</button>
        </div>
        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 dark:text-gray-600">
          &copy; {new Date().getFullYear()} Ümmü Gülsüm Ergin. All rights reserved.
        </div>
        {/* Modal for footer info */}
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 max-w-md w-full relative border border-border">
              <button
                className="absolute top-2 right-4 text-2xl font-bold text-muted-foreground hover:text-primary"
                onClick={() => setModal(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-lg font-bold mb-3 text-primary">{modal.title}</h3>
              <div className="text-sm text-foreground dark:text-gray-300 whitespace-pre-line">{modal.content}</div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
