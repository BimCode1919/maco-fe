import React, { useState } from "react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

  // Điều hướng về danh sách khóa học
  const handleBackToCourses = () => {
    setSelectedCourseId(null);
    setActiveTab("courses");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <InstructorOverview />;

      case "courses":
        return selectedCourseId ? (
          <CourseContent onBack={handleBackToCourses} />
        ) : (
          <MyCourses onViewDetails={(id) => setSelectedCourseId(id)} />
        );

      case "students":
        return <StudentAnalytics />;

      case "revenue":
        return <RevenueAnalytics />;

      case "create-course":
        return <CreateCourse onBack={() => setActiveTab("courses")} />;

      case "settings":
        return <InstructorSettings />;

      default:
        return <InstructorOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden font-sans">
      <InstructorSidebar
        isSidebarOpen={isSidebarOpen}
        activeTab={activeTab === "create-course" ? "courses" : activeTab}
        setActiveTab={(id) => {
          setActiveTab(id);
          setSelectedCourseId(null); // Reset view chi tiết khi đổi tab
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
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};