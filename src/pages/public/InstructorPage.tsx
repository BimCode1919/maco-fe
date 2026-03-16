import { useState } from "react"; // Đảm bảo đã import useState
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { AnimatePresence } from "framer-motion"; // Import để làm hiệu ứng Modal

// Import các Section Components
import { InstructorHero } from "./components/InstructorHero";
import { CareerPathFinder } from "./components/CareerPathFinder";
import { EliteExperts } from "./components/EliteExperts";
import { ExpertNetworkGrid } from "./components/ExpertNetworkGrid";
import { InstructorCTA } from "./components/InstructorCTA";
import { Testimonials } from "./components/Testimonials";
import { InstructorModal } from "./components/InstructorModal"; // Đảm bảo bạn đã tạo file này

interface InstructorsPageProps {
  setCurrentPage: (page: string) => void;
  openAuth: (mode: "login" | "register-select") => void;
}

export const InstructorsPage = ({ setCurrentPage, openAuth }: InstructorsPageProps) => {
  // KHAI BÁO STATE Ở ĐÂY - Đây là phần bạn đang thiếu
  const [selectedIns, setSelectedIns] = useState<any>(null);
  const scrollToGrid = () => {
    const element = document.getElementById("expert-grid");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav
        setCurrentPage={setCurrentPage}
        currentPage="instructors"
        openAuth={openAuth}
      />

      <InstructorHero onExplore={scrollToGrid} />
      <CareerPathFinder openAuth={openAuth} />

      {/* Truyền setSelectedIns vào onSelect */}
      <EliteExperts onSelect={setSelectedIns} />

      {/* Truyền setSelectedIns vào onSelect */}
      <div id="expert-grid">
        <ExpertNetworkGrid onSelect={setSelectedIns} />
      </div>

      <Testimonials />

      <InstructorCTA openAuth={() => openAuth("register-select")} />

      {/* HIỂN THỊ MODAL KHI CÓ GIẢNG VIÊN ĐƯỢC CHỌN */}
      <AnimatePresence>
        {selectedIns && (
          <InstructorModal
            ins={selectedIns}
            onClose={() => setSelectedIns(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};