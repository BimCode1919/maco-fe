import { useState } from "react";
import { LandingPage } from "./pages/public/LandingPage";
import { CoursesPage } from "./pages/public/CoursesPage";
import { InstructorsPage } from "./pages/public/InstructorPage";
import { AuthModal } from "./components/AuthModal";
import { StudentDashboard } from "./pages/student/StudentDashboard";
import { InstructorDashboard } from "./pages/instructor/InstructorDashboard";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AnimatePresence } from "motion/react";

type AuthMode = "login" | "register-select" | "register-student" | "register-instructor" | null;

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [authMode, setAuthMode] = useState<AuthMode>(null);

  if (currentPage === "student-dashboard") {
    return <StudentDashboard onLogout={() => setCurrentPage("home")} />;
  }

  if (currentPage === "instructor-dashboard") {
    return <InstructorDashboard onLogout={() => setCurrentPage("home")} />;
  }

  if (currentPage === "admin-dashboard") {
    return <AdminDashboard onLogout={() => setCurrentPage("home")} />;
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {authMode && (
          <AuthModal 
            mode={authMode} 
            onClose={() => setAuthMode(null)} 
            setMode={setAuthMode}
            onSuccess={(dashboard) => {
              setAuthMode(null);
              setCurrentPage(dashboard);
            }}
          />
        )}
      </AnimatePresence>

      {currentPage === "home" ? (
        <LandingPage onAuthClick={(mode) => setAuthMode(mode)} setCurrentPage={setCurrentPage} />
      ) : currentPage === "courses" ? (
        <CoursesPage setCurrentPage={setCurrentPage} openAuth={(mode) => setAuthMode(mode)} />
      ) : currentPage === "instructors" ? (
        <InstructorsPage setCurrentPage={setCurrentPage} openAuth={(mode) => setAuthMode(mode)} />
      ) : (
        <div className="pt-48 pb-32 text-center min-h-screen bg-slate-50">
          <h1 className="text-4xl font-black text-slate-900">Trang này đang được phát triển</h1>
          <button 
            onClick={() => setCurrentPage("home")}
            className="mt-8 text-indigo-600 font-bold hover:underline"
          >
            Quay lại trang chủ
          </button>
        </div>
      )}
    </div>
  );
}

