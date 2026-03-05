import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  LayoutDashboard, 
  BookOpen, 
  Settings, 
  Trophy 
} from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { OverviewTab } from "./components/OverviewTab";
import { MyCoursesTab } from "./components/MyCoursesTab";
import { AchievementsTab } from "./components/AchievementsTab";
import { SettingsTab } from "./components/SettingsTab";
import { LessonDetail } from "./components/LessonDetail"; // Import component mới

interface StudentDashboardProps {
  onLogout: () => void;
}

export const StudentDashboard = ({ onLogout }: StudentDashboardProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedCourse, setSelectedCourse] = useState<any>(null); // Quản lý khóa học đang xem

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Tổng quan" },
    { id: "my-courses", icon: BookOpen, label: "Khóa học của tôi" },
    { id: "achievements", icon: Trophy, label: "Thành tích" },
    { id: "settings", icon: Settings, label: "Cài đặt" },
  ];

  const myCourses = [
    {
      id: 1,
      title: "Lập trình Python cho AI",
      progress: 65,
      lastAccessed: "2 giờ trước",
      lessons: "12/24",
      image: "https://csc.edu.vn/data/images/tin-tuc/lap-trinh-csdl/kien-thuc-lap-trinh/lap-trinh-python-cho-nguoi-moi-bat-dau/lap-trinh-python-cho-nguoi-moi-bat-dau_png.png",
    },
    {
      id: 2,
      title: "UI/UX Design cho Mobile App",
      progress: 30,
      lastAccessed: "Hôm qua",
      lessons: "8/32",
      image: "https://amela.vn/wp-content/uploads/2023/07/1.-Thiet-ke-UX_UI-la-gi_-.jpg",
    },
    {
      id: 3,
      title: "Data Science cơ bản",
      progress: 100,
      lastAccessed: "3 ngày trước",
      lessons: "40/40",
      image: "https://cafebiz.cafebizcdn.vn/162124557946388480/2020/12/10/data-science-16075678125471922501066.jpg",
    }
  ];

  const renderContent = () => {
    // Nếu có khóa học được chọn, hiển thị LessonDetail bất kể đang ở Tab nào
    if (selectedCourse) {
      return <LessonDetail onBack={() => setSelectedCourse(null)} />;
    }

    switch (activeTab) {
      case "dashboard":
        return <OverviewTab myCourses={myCourses} setActiveTab={setActiveTab} onCourseClick={setSelectedCourse} />;
      case "my-courses":
        return <MyCoursesTab myCourses={myCourses} onCourseClick={setSelectedCourse} />;
      case "achievements":
        return <AchievementsTab learningData={[]} effortData={[]} />;
      case "settings":
        return <SettingsTab />;
      default:
        return null;
    }
  };

  // Reset selectedCourse khi đổi Tab ở Sidebar
  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden">
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
        menuItems={menuItems} 
        onLogout={onLogout} 
      />

      <main className="flex-1 h-screen overflow-y-auto relative">
        <TopBar 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen} 
          activeTabLabel={selectedCourse ? "Chi tiết bài học" : menuItems.find(i => i.id === activeTab)?.label || "Dashboard"} 
        />

        <div className="p-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCourse ? "detail" : activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};