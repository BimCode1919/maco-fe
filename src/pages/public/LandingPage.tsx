import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { LearningPaths } from "./components/LearningPaths";
import { InstructorCTA } from "./components/InstructorCTA";
import { Partners } from "../../components/Partners";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { AITechnology } from "./components/AITechnology"
import { StudentCTA } from "./components/StudentCTA";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { StudentFeature } from "./components/StudentFeature";
import { ValueProposition } from "./components/ValueProposition";

interface LandingPageProps {
  onAuthClick: (mode: "login" | "register-select") => void;
  setCurrentPage: (page: string) => void;
}

export const LandingPage = ({ onAuthClick, setCurrentPage }: LandingPageProps) => {
  const handleAction = () => {
    // 1. Chuyển state trang (nếu cần logic của App)
    setCurrentPage("home");

    // 2. Thực hiện cuộn ngay lập tức
    const element = document.getElementById('student-feature-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Nav
        setCurrentPage={setCurrentPage}
        currentPage="home"
        openAuth={onAuthClick}
      />
      <Hero setCurrentPage={setCurrentPage} />
      <ProblemSection />
      <SolutionSection openAuth={onAuthClick} />
      <StudentFeature />
      <ValueProposition />
      <StudentCTA />
      <Footer />
    </div>
  );
};
