"use client";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import IntroSidebar from "../components/IntroSidebar";
import Hero from "../components/Hero";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import Footer from "../components/Footer";

const SECTION_IDS = ["about", "experience", "projects"] as const;
type SectionId = (typeof SECTION_IDS)[number];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          const id = visible.target.id as SectionId;
          if (SECTION_IDS.includes(id)) {
            setActiveSection(id);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="page">
      <Header />
      <div className="page-inner layout-root">
        <aside className="layout-sidebar">
          <IntroSidebar activeSection={activeSection} />
        </aside>
        <main className="layout-main">
          <Hero />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}
