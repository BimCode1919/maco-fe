import React, { useState, useEffect } from "react"; // 1. Thêm useEffect
import { AnimatePresence, motion } from "framer-motion";
import { InstructorSidebar } from "./components/InstructorSidebar";
import { InstructorTopBar } from "./components/InstructorTopBar";
import { InstructorOverview } from "./components/InstructorOverview";
import { MyCourses } from "./components/MyCourses";
import { CourseContent } from "./components/CourseContent";
import { CreateCourse } from "./components/CreateCourse";
import { StudentAnalytics } from "./components/StudentAnalytics";
import { RevenueAnalytics } from "./components/RevenueAnalytics";
import { InstructorSettings } from "./components/InstructorSettings";

interface InstructorDashboardProps {
  onLogout: () => void;
}

export const InstructorDashboard = ({ onLogout }: InstructorDashboardProps) => {
  // 2. SỬA: Khởi tạo trạng thái dựa trên window.innerWidth
  // Nếu màn hình lớn (>1024px) thì mặc định mở, ngược lại thì đóng
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    typeof window !== "undefined" ? window.innerWidth > 1024 : true
  );

  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

  // 3. THÊM: Theo dõi sự thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBackToCourses = () => {
    setSelectedCourseId(null);
    setActiveTab("courses");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return <InstructorOverview />;
      case "courses":
        return selectedCourseId ? (
          <CourseContent onBack={handleBackToCourses} />
        ) : (
          <MyCourses onViewDetails={(id) => setSelectedCourseId(id)} />
        );
      case "students": return <StudentAnalytics />;
      case "revenue": return <RevenueAnalytics />;
      case "create-course": return <CreateCourse onBack={() => setActiveTab("courses")} />;
      case "settings": return <InstructorSettings />;
      default: return <InstructorOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden font-sans">
      {/* 4. CẬP NHẬT: Truyền thêm setIsSidebarOpen vào Sidebar */}
      <InstructorSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeTab={activeTab === "create-course" ? "courses" : activeTab}
        setActiveTab={(id) => {
          setActiveTab(id);
          setSelectedCourseId(null);
        }}
        onLogout={onLogout}
      />

      <main className="flex-1 h-screen overflow-y-auto relative no-scrollbar">
        <InstructorTopBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + (selectedCourseId || "")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-4 lg:p-8 max-w-7xl mx-auto" // Thêm padding cho nội dung chính
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};