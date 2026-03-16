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

interface LandingPageProps {
  onAuthClick: (mode: "login" | "register-select") => void;
  setCurrentPage: (page: string) => void;
}

export const LandingPage = ({ onAuthClick, setCurrentPage }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Nav 
        setCurrentPage={setCurrentPage} 
        currentPage="home" 
        openAuth={onAuthClick} 
      />
      <Hero setCurrentPage={setCurrentPage} />
      <Features />
      <AITechnology/>
      <StudentCTA />
      <InstructorCTA openAuth={() => onAuthClick("register-select")} />
      <Footer />
    </div>
  );
};
