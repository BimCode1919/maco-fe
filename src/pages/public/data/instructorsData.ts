export const CAREER_PATHS = [
    { id: 'web', label: 'Xây dựng nền tảng vững chắc và tạo ra sản phẩm thực tế ngay từ đầu', count: 12 },
    { id: 'ai', label: 'Hiểu cách AI hoạt động và áp dụng vào bài toán thực tế', count: 8 },
    { id: 'security', label: 'Nắm cách hệ thống bị tấn công và cách bảo vệ chúng', count: 5 },
];

export const ALL_INSTRUCTORS = [
    {
        id: 1,
        displayName: "Giảng viên Cybersecurity",
        professionalTitle: "Senior Security Architect",
        specialty: "Cybersecurity",
        rating: 4.9,
        students: 2500,
        coursesCount: 12,
        achievement: "Cố vấn an ninh mạng hệ thống Ngân hàng, 15 năm kinh nghiệm thực chiến",
        // Icon User mặc định kiểu Facebook - SVG sắc nét
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMjUwIDMwMEMzMDUuMjI4IDMwMCAzNTAgMjU1LjIyOCAzNTAgMjAwQzM1MCAxNDQuNzcyIDMwNS4yMjggMTAwIDI1MCAxMDBDMTk0Ljc3MiAxMDAgMTUwIDE0NC43NzIgMTUwIDIwMEMxNTAgMjU1LjIyOCAxOTQuNzcyIDMwMCAyNTAgMzAwWiIgZmlsbD0iIzFBNTZEQiIvPjxwYXRoIGQ9Ik0xMDAgNDQ1QzEwMCAzNjQuOTE1IDE2NC45MTUgMzAwIDI0NSAzMDBIMjU1QzMzNS4wODUgMzAwIDQwMCAzNjQuOTE1IDQwMCA0NDVWNTAwSDEwMFY0NDVaIiBmaWxsPSIjMUE1NkRCIi8+PC9zdmc+",
        bio: "Chuyên gia bảo mật chuyên sâu về kiến trúc phòng thủ và ứng cứu sự cố hạ tầng số tại Việt Nam.",
        skills: ["Ethical Hacking", "Network Security", "ISO 27001", "Cryptography"],
        social: { linkedin: "#", github: "#" },
        verified: true
    },
    {
        id: 2,
        displayName: "Giảng viên AI Specialist",
        professionalTitle: "AI Research Lead",
        specialty: "AI & Data Science",
        rating: 5.0,
        students: 4000,
        coursesCount: 8,
        achievement: "Chuyên gia tối ưu mô hình ngôn ngữ lớn (LLM) cho tiếng Việt",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMjUwIDMwMEMzMDUuMjI4IDMwMCAzNTAgMjU1LjIyOCAzNTAgMjAwQzM1MCAxNDQuNzcyIDMwNS4yMjggMTAwIDI1MCAxMDBDMTk0Ljc3MiAxMDAgMTUwIDE0NC43NzIgMTUwIDIwMEMxNTAgMjU1LjIyOCAxOTQuNzcyIDMwMCAyNTAgMzAwWiIgZmlsbD0iIzFBNTZEQiIvPjxwYXRoIGQ9Ik0xMDAgNDQ1QzEwMCAzNjQuOTE1IDE2NC45MTUgMzAwIDI0NSAzMDBIMjU1QzMzNS4wODUgMzAwIDQwMCAzNjQuOTE1IDQwMCA0NDVWNTAwSDEwMFY0NDVaIiBmaWxsPSIjMUE1NkRCIi8+PC9zdmc+",
        bio: "Dẫn dắt các dự án nghiên cứu AI tại các tập đoàn công nghệ hàng đầu, tập trung vào Generative AI.",
        skills: ["Python", "TensorFlow", "NLP", "Machine Learning"],
        social: { linkedin: "#", github: "#" },
        verified: true
    },
    {
        id: 3,
        displayName: "Giảng viên Cloud & DevOps",
        professionalTitle: "DevOps Tech Lead",
        specialty: "DevOps",
        rating: 4.8,
        students: 900,
        coursesCount: 15,
        achievement: "Certified AWS Solutions Architect Professional",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMjUwIDMwMEMzMDUuMjI4IDMwMCAzNTAgMjU1LjIyOCAzNTAgMjAwQzM1MCAxNDQuNzcyIDMwNS4yMjggMTAwIDI1MCAxMDBDMTk0Ljc3MiAxMDAgMTUwIDE0NC43NzIgMTUwIDIwMEMxNTAgMjU1LjIyOCAxOTQuNzcyIDMwMCAyNTAgMzAwWiIgZmlsbD0iIzFBNTZEQiIvPjxwYXRoIGQ9Ik0xMDAgNDQ1QzEwMCAzNjQuOTE1IDE2NC45MTUgMzAwIDI0NSAzMDBIMjU1QzMzNS4wODUgMzAwIDQwMCAzNjQuOTE1IDQwMCA0NDVWNTAwSDEwMFY0NDVaIiBmaWxsPSIjMUE1NkRCIi8+PC9zdmc+",
        bio: "Chuyên gia vận hành hệ hệ thống Cloud quy mô lớn, tối ưu hóa quy trình triển khai tự động CI/CD.",
        skills: ["Docker", "Kubernetes", "Terraform", "Jenkins"],
        social: { linkedin: "#", github: "#" },
        verified: true
    },
    {
        id: 4,
        displayName: "Giảng viên Frontend",
        professionalTitle: "Senior Frontend Engineer",
        specialty: "Frontend",
        rating: 4.9,
        students: 1600,
        coursesCount: 10,
        achievement: "Kiến trúc sư giao diện cho các siêu ứng dụng (Super App) tại Việt Nam",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMjUwIDMwMEMzMDUuMjI4IDMwMCAzNTAgMjU1LjIyOCAzNTAgMjAwQzM1MCAxNDQuNzcyIDMwNS4yMjggMTAwIDI1MCAxMDBDMTk0Ljc3MiAxMDAgMTUwIDE0NC43NzIgMTUwIDIwMEMxNTAgMjU1LjIyOCAxOTQuNzcyIDMwMCAyNTAgMzAwWiIgZmlsbD0iIzFBNTZEQiIvPjxwYXRoIGQ9Ik0xMDAgNDQ1QzEwMCAzNjQuOTE1IDE2NC45MTUgMzAwIDI0NSAzMDBIMjU1QzMzNS4wODUgMzAwIDQwMCAzNjQuOTE1IDQwMCA0NDVWNTAwSDEwMFY0NDVaIiBmaWxsPSIjMUE1NkRCIi8+PC9zdmc+",
        bio: "Tập trung vào tối ưu hiệu năng Frontend và trải nghiệm người dùng (UX) trên nền tảng Web & Mobile.",
        skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        social: { linkedin: "#", github: "#" },
        verified: true
    },
    {
        id: 5,
        displayName: "Giảng viên Backend",
        professionalTitle: "Software Architect",
        specialty: "Backend",
        rating: 4.7,
        students: 1000,
        coursesCount: 9,
        achievement: "Hơn 10 năm xây dựng hệ thống Microservices cho các sàn TMĐT lớn",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMjUwIDMwMEMzMDUuMjI4IDMwMCAzNTAgMjU1LjIyOCAzNTAgMjAwQzM1MCAxNDQuNzcyIDMwNS4yMjggMTAwIDI1MCAxMDBDMTk0Ljc3MiAxMDAgMTUwIDE0NC43NzIgMTUwIDIwMEMxNTAgMjU1LjIyOCAxOTQuNzcyIDMwMCAyNTAgMzAwWiIgZmlsbD0iIzFBNTZEQiIvPjxwYXRoIGQ9Ik0xMDAgNDQ1QzEwMCAzNjQuOTE1IDE2NC45MTUgMzAwIDI0NSAzMDBIMjU1QzMzNS4wODUgMzAwIDQwMCAzNjQuOTE1IDQwMCA0NDVWNTAwSDEwMFY0NDVaIiBmaWxsPSIjMUE1NkRCIi8+PC9zdmc+",
        bio: "Chuyên gia xử lý dữ liệu lớn và thiết kế hệ thống chịu tải cao bằng Java/Spring Boot.",
        skills: ["Java", "Spring Boot", "Microservices", "PostgreSQL"],
        social: { linkedin: "#", github: "#" },
        verified: true
    },
    {
        id: 6,
        displayName: "Giảng viên Mobile App",
        professionalTitle: "Fullstack Mobile Lead",
        specialty: "Mobile App",
        rating: 4.9,
        students: 200,
        coursesCount: 6,
        achievement: "Tác giả của nhiều ứng dụng Top-chart trên Google Play và App Store",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMjUwIDMwMEMzMDUuMjI4IDMwMCAzNTAgMjU1LjIyOCAzNTAgMjAwQzM1MCAxNDQuNzcyIDMwNS4yMjggMTAwIDI1MCAxMDBDMTk0Ljc3MiAxMDAgMTUwIDE0NC43NzIgMTUwIDIwMEMxNTAgMjU1LjIyOCAxOTQuNzcyIDMwMCAyNTAgMzAwWiIgZmlsbD0iIzFBNTZEQiIvPjxwYXRoIGQ9Ik0xMDAgNDQ1QzEwMCAzNjQuOTE1IDE2NC45MTUgMzAwIDI0NSAzMDBIMjU1QzMzNS4wODUgMzAwIDQwMCAzNjQuOTE1IDQwMCA0NDVWNTAwSDEwMFY0NDVaIiBmaWxsPSIjMUE1NkRCIi8+PC9zdmc+",
        bio: "Chuyên gia phát triển ứng dụng đa nền tảng, tập trung vào tính mượt mà và bảo mật ứng dụng.",
        skills: ["Flutter", "React Native", "Firebase", "Node.js"],
        social: { linkedin: "#", github: "#" },
        verified: true
    }
];

export const INSTRUCTOR_STATS = [
    { label: "Chuyên gia hàng đầu", value: "50+" },
    { label: "Học viên đang học", value: "45,000+" },
    { label: "Tỷ lệ hài lòng", value: "99%" },
    { label: "Dự án thực tế", value: "200+" },
];