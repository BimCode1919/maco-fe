export interface CourseDetail {
    id: string;
    title: string;
    image: string;
    description: string;
    instructor: {
        name: string;
        role: string;
        avatar: string;
        bio: string;
    };
    rating: number;
    reviewCount: number;
    duration: string; // e.g. "12 giờ"
    outcomes: string[];
    chapters: {
        title: string;
        lessons: string[];
    }[];
}