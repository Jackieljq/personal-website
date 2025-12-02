import Header from "../components/Header";
import IntroSidebar from "../components/IntroSidebar";
import Hero from "../components/Hero";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <div className="page-inner layout-root">
        <aside className="layout-sidebar">
          <IntroSidebar />
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
