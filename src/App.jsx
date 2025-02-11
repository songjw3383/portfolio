import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Profile from "./pages/Profile.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

// const sections = ["Profile", "Skills", "Projects", "Contact"];
const sections = ["Skills", "Profile", "Projects", "Contact"];

const sectionComponents = {
  Profile: <Profile />,
  Skills: <Skills />,
  Projects: <Projects />,
  Contact: <Contact />,
};

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // 20% 이상 보이면 감지
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          setActiveSection(index);

          // 자동 스크롤 이동
          window.scrollTo({
            top: index * window.innerHeight,
            behavior: "smooth",
          });
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const sortedSections = [
    sections[activeSection], // 현재 활성화된 섹션을 제일 위로
    ...sections.filter((_, index) => index !== activeSection), // 나머지 섹션들
  ];

  return (
    <>
      <div className="grid grid-cols-[200px_1fr] h-screen">
        {/* 네비게이션 메뉴 (고정) */}
        <nav className="fixed top-5 left-5 w-[200px]">
          <ul className="flex flex-col space-y-2">
            {sortedSections.map((section, index) => {
              const originalIndex = sections.indexOf(section);
              return (
                <motion.li
                  key={section}
                  className={`cursor-pointer px-4 py-2 rounded-lg ${
                    activeSection === originalIndex
                      ? "text-6xl text-black"
                      : "text-2xl text-black"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: activeSection === originalIndex ? 1 : 0.15,
                  }}
                  exit={{ opacity: 0, y: -10 }}
                  layout
                  transition={{ duration: 0.3 }}
                >
                  {section}
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* 컨텐츠 영역 */}
        <div className="ml-[250px] w-[calc(100vw-250px)]">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="w-full h-screen flex items-center justify-center text-black snap-start p-4 bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full p-4">
                {sectionComponents[section]}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </>
  );
}
