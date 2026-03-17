import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, BookOpen } from "lucide-react";

export const FeatureHeader = () => (
    <div className="text-center max-w-3xl mx-auto mb-20 relative px-4">
        {/* Animated Background Icons */}
        <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -left-12 opacity-50 hidden md:block"
        >
            <Sparkles className="text-[#1A56DB]" size={40} />
        </motion.div>

        <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-10 -right-12 opacity-50 hidden md:block"
        >
            <Zap className="text-amber-500" size={36} />
        </motion.div>

        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-16 left-1/4 opacity-40 hidden md:block"
        >
            <BookOpen className="text-blue-500" size={32} />
        </motion.div>

        <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-slate-900 mb-2 tracking-tight leading-[1.1]">
            Trải nghiệm học tập với AI<br />
            <span className="text-[#1A56DB]">hỗ trợ ngay khi bạn cần</span>
        </h2>
        <p className="text-slate-600 text-base md:text-lg lg:text-[20px] font-medium leading-relaxed">
            MACO kết hợp quản lý khóa học với AI để hỗ trợ bạn hiểu bài, đặt câu hỏi và tiến bộ ngay trong quá trình học
        </p>
    </div>
);