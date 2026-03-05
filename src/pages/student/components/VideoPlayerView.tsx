import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ChevronLeft,
    FileText,
    Play,
    CheckCircle2
} from "lucide-react";
import { AIChatAssistant } from "./AIChatAssistant"; // Import component mới

export const VideoPlayerView = ({ onBack, lessonTitle }: { onBack: () => void, lessonTitle: string }) => {
    const [activeTab, setActiveTab] = useState("transcript");
    const [showAIChat, setShowAIChat] = useState(false);

    return (
        <div className="max-w-[1600px] mx-auto min-h-screen bg-white">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100 sticky top-0 bg-white z-20">
                <button onClick={onBack} className="flex items-center gap-2 font-black text-slate-600 hover:text-indigo-600 transition-all">
                    <ChevronLeft size={20} /> Quay lại danh sách bài
                </button>
                <h2 className="font-black text-slate-900 truncate px-4">{lessonTitle}</h2>
                <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400">Tiến độ khóa học: 65%</span>
                    <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 w-[65%]"></div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-0 h-[calc(100vh-65px)]">
                {/* CỘT TRÁI: Nội dung chính */}
                <div className="lg:col-span-8 p-6 overflow-y-auto border-r border-slate-100">
                    <div className="aspect-video bg-slate-900 rounded-32 overflow-hidden relative shadow-2xl mb-8 group cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                                <Play size={40} fill="currentColor" />
                            </div>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200"
                            className="w-full h-full object-cover opacity-60"
                            alt="Hình nền video"
                        />
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-8 border-b border-slate-100 mb-6">
                        {[
                            { id: "transcript", label: "Nội dung văn bản" },
                            { id: "tài liệu", label: "Tài liệu đính kèm" },
                            { id: "ghi chú", label: "Ghi chú cá nhân" }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-4 text-sm font-black uppercase tracking-wider transition-all relative ${activeTab === tab.id ? "text-indigo-600" : "text-slate-400"
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="prose prose-slate max-w-none">
                        {activeTab === "transcript" && (
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p><span className="font-bold text-indigo-600 mr-2">00:15</span> Chào mừng các bạn...</p>
                                <p><span className="font-bold text-indigo-600 mr-2">01:42</span> Hãy chú ý đến biến môi trường...</p>
                            </div>
                        )}
                        {activeTab === "tài liệu" && (
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-slate-700">
                                <div className="flex items-center gap-3"><FileText className="text-red-500" /> Tai-lieu-buoi-hoc.pdf</div>
                                <button className="text-xs font-black text-indigo-600 hover:underline">TẢI VỀ</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* CỘT PHẢI: Playlist */}
                <div className="lg:col-span-4 bg-slate-50/50 overflow-y-auto h-full p-6">
                    <h3 className="font-black text-slate-900 mb-6 uppercase text-sm tracking-widest">Danh sách bài học</h3>
                    <div className="space-y-3">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className={`p-4 rounded-2xl flex items-center gap-4 transition-all cursor-pointer ${item === 1 ? "bg-white shadow-md border-l-4 border-indigo-600" : "hover:bg-white"}`}>
                                <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                                    {item === 1 ? <Play size={14} fill="currentColor" /> : <CheckCircle2 size={14} className="text-slate-400" />}
                                </div>
                                <div className="flex-1 text-sm font-bold">
                                    <p className={item === 1 ? "text-indigo-600" : "text-slate-700"}>Bài {item}: Nội dung bài học</p>
                                    <p className="text-[10px] text-slate-400 uppercase">12:45 • VIDEO</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sử dụng Component AI Chatbox ở đây */}
            <AIChatAssistant
                isOpen={showAIChat}
                setIsOpen={setShowAIChat}
                lessonTitle={lessonTitle}
            />
        </div>
    );
};