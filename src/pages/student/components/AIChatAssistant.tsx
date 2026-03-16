import React, { useState } from "react";
import { Send, X, Bot, Sparkles, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AIChatAssistantProps {
    lessonTitle: string;
    isOpen: boolean;
    onClose: () => void;
}

export const AIChatAssistant = ({ lessonTitle, isOpen, onClose }: AIChatAssistantProps) => {
    // Dữ liệu hội thoại mẫu để hiển thị ngay khi mở
    const [messages] = useState([
        {
            role: "ai",
            content: `Chào bạn! Tôi là AI Contextual Retrieval. Bạn có thắc mắc gì về bài học **"${lessonTitle}"** không?`
        },
        {
            role: "user",
            content: "Bạn có thể giúp gì hay làm được gì cho mình thế?"
        },
        {
            role: "ai",
            content: "Tôi có thể giải đáp mọi thắc mắc của bạn về nội dung bài học, tóm tắt ý chính, giải thích các đoạn mã nguồn phức tạp hoặc gợi ý lộ trình thực hành tiếp theo dựa trên kiến thức bạn vừa xem đấy!"
        }
    ]);

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 380, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            // THAY ĐỔI Ở ĐÂY: Dùng relative, h-full và border-l
            className="relative hidden lg:flex flex-col bg-white border-l border-slate-100 h-full shrink-0 z-10 w-[380px]"
        >
            {/* Header */}
            <div className="p-4 border-b border-slate-50 flex items-center justify-between bg-white shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                        <Sparkles size={16} fill="white" />
                    </div>
                    <div>
                        <h4 className="font-black text-slate-900 text-[11px] uppercase tracking-tight">AI Contextual Retrieval</h4>
                        <div className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                            <p className="text-[8px] text-slate-400 font-bold uppercase">Online</p>
                        </div>
                    </div>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full text-slate-300 transition-colors">
                    <X size={18} />
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto bg-slate-50/30 no-scrollbar flex flex-col">
                <div className="flex-1 min-h-[20px]" />

                <div className="p-4 space-y-4 pt-1"> {/* Giảm pt-4 xuống pt-2 để sát hơn nữa */}
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow-sm 
                    ${msg.role === "ai" ? "bg-white border border-slate-100 text-indigo-600" : "bg-indigo-600 text-white"}`}>
                                {msg.role === "ai" ? <Bot size={14} /> : <User size={14} />}
                            </div>
                            <div className={`p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm max-w-[85%] 
                    ${msg.role === "ai" ? "bg-white text-slate-600 rounded-tl-none" : "bg-indigo-500 text-white rounded-tr-none"}`}>
                                <p dangerouslySetInnerHTML={{ __html: msg.content.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-50 shrink-0">
                <div className="flex items-center gap-2 bg-slate-100 rounded-2xl p-1 pr-1.5 transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100 border border-transparent focus-within:border-indigo-100">
                    <input
                        type="text"
                        placeholder="Hỏi về bài học..."
                        className="flex-1 bg-transparent border-none py-2 px-3 text-[13px] font-bold text-slate-700 outline-none"
                    />
                    <button className="w-8 h-8 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-md active:scale-95 transition-all">
                        <Send size={14} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};