import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Settings,
  Trophy
} from "lucide-react";
import { TopBar } from "./components/TopBar";
import { OverviewTab } from "./components/OverviewTab";
import { MyCoursesTab } from "./components/MyCoursesTab";
import { AchievementsTab } from "./components/AchievementsTab";
import { SettingsTab } from "./components/SettingsTab";
import { LessonDetail } from "./components/LessonDetail";
import { AllCourses, ALL_COURSES } from "./components/AllCourses";
import { StudentCourseDetail } from "./components/StudentCourseDetail";
import { MembershipPlan } from "./components/MembershipPlan";
import { PaymentPage } from "./components/PaymentPage";

interface StudentDashboardProps {
  onLogout: () => void;
}

export const StudentDashboard = ({ onLogout }: StudentDashboardProps) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isViewingCourseDetail, setIsViewingCourseDetail] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const theme = {
    bg: "bg-slate-50",
    card: "bg-white border-slate-100",
    text: "text-slate-900",
    textMuted: "text-slate-500",
    border: "border-slate-100",
  };

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Tổng quan" },
    { id: "my-courses", icon: BookOpen, label: "Khóa học của tôi" },
    { id: "achievements", icon: Trophy, label: "Thành tích" },
    { id: "settings", icon: Settings, label: "Cài đặt" },
  ];

  const myCourses = ALL_COURSES.slice(0, 3).map((course) => ({
    ...course,
    progress: Math.floor(Math.random() * 100),
    lastAccessed: "2 giờ trước",
    lessons: "12/24",
  }));

  const renderContent = () => {
    if (isViewingCourseDetail && selectedCourse) {
      return (
        <StudentCourseDetail
          course={selectedCourse}
          onBack={() => {
            setIsViewingCourseDetail(false);
            setSelectedCourse(null);
          }}
          onStartLearning={() => {
            setIsViewingCourseDetail(false);
          }}
          onSelectMembership={() => {
            setSelectedCourse(null);
            setIsViewingCourseDetail(false);
            setActiveTab("membership");
          }}
        />
      );
    }

    if (selectedCourse && !isViewingCourseDetail) {
      return <LessonDetail onBack={() => setSelectedCourse(null)} />;
    }

    switch (activeTab) {
      case "dashboard":
        return <OverviewTab myCourses={myCourses} setActiveTab={setActiveTab} onCourseClick={setSelectedCourse} />;
      case "my-courses":
        return <MyCoursesTab myCourses={myCourses} onCourseClick={setSelectedCourse} />;
      case "achievements":
        return <AchievementsTab theme={theme} />;
      case "settings":
        return <SettingsTab />;
      case "membership":
        return (
          <MembershipPlan
            onBack={() => {
              setActiveTab("all-courses");
            }}
            onSelectPlan={(plan) => {
              setSelectedPlan(plan);
              setActiveTab("payment");
            }}
          />
        );
      case "payment":
        return (
          <PaymentPage
            selectedPlan={selectedPlan}
            onBack={() => {
              setActiveTab("membership");
            }}
            onPaymentSuccess={() => {
              setActiveTab("dashboard");
              setSelectedPlan(null);
            }}
          />
        );
      case "all-courses":
        return (
          <AllCourses
            searchQuery={searchQuery}
            onCourseClick={(course) => {
              setSelectedCourse(course);
              setIsViewingCourseDetail(true);
            }}
            onSelectPlan={() => {
              setActiveTab("membership");
            }}
          />
        );
      default:
        return null;
    }
  };

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setSelectedCourse(null);
  };

  const handleLogoClick = () => {
    setActiveTab("all-courses");
    setSelectedCourse(null);
  };

  return (
    <div className={`min-h-screen ${theme.bg} flex flex-col`}>
      <TopBar
        searchQuery={searchQuery}
        setSearchQuery={(value) => {
          setSearchQuery(value);
          if (value.trim() !== "") {
            setActiveTab("all-courses");
          }
        }}
        menuItems={menuItems}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onLogout={onLogout}
        onLogoClick={handleLogoClick}
      />

      <main className="flex-1 h-screen overflow-y-auto relative scroll-smooth">
        <div className={`p-8 ${activeTab === "all-courses" ? "w-full" : "max-w-7xl mx-auto"}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={
                isViewingCourseDetail
                  ? `course-${selectedCourse?.id}`
                  : selectedCourse
                  ? "lesson-detail"
                  : selectedPlan
                  ? `payment-${selectedPlan?.name}`
                  : activeTab
              }
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};
