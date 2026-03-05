import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, Send } from "lucide-react";

interface Message {
    id: number;
    text: string;
    sender: "ai" | "user";
}

interface AIChatAssistantProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    lessonTitle?: string;
}

export const AIChatAssistant = ({ isOpen, setIsOpen, lessonTitle }: AIChatAssistantProps) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: `Chào bạn! Mình là trợ lý Maco. Mình đã sẵn sàng hỗ trợ bạn cho bài học "${lessonTitle || "này"}". Bạn cần hỏi gì không?`,
            sender: "ai",
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Cuộn xuống khi có tin nhắn mới
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        // Tin nhắn người dùng
        const userMsg: Message = {
            id: Date.now(),
            text: inputValue,
            sender: "user",
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Phản hồi hài hước sau 800ms
        setTimeout(() => {
            setIsTyping(false);
            const aiMsg: Message = {
                id: Date.now() + 1,
                text: "Maco đang phát triển tính năng này hẹ hẹ hẹ 🤡",
                sender: "ai",
            };
            setMessages((prev) => [...prev, aiMsg]);
        }, 800);
    };

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-[350px] sm:w-[400px] h-[550px] bg-white rounded-32 shadow-2xl border border-slate-100 flex flex-col mb-4 overflow-hidden"
                    >
                        {/* Header AI - Giữ nguyên thiết kế cũ */}
                        <div className="p-5 bg-indigo-600 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <p className="font-black text-sm">Maco AI Assistance</p>
                                    <p className="text-[10px] text-indigo-100 font-bold uppercase tracking-tighter">Đang sẵn sàng hỗ trợ</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/10 p-2 rounded-lg transition-colors"
                            >
                                <ChevronDown />
                            </button>
                        </div>

                        {/* Khu vực tin nhắn */}
                        <div
                            ref={scrollRef}
                            className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/50 text-sm scroll-smooth"
                        >
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-4 rounded-2xl shadow-sm leading-relaxed ${msg.sender === "user"
                                                ? "bg-indigo-600 text-white rounded-tr-none"
                                                : "bg-white text-slate-700 rounded-tl-none border border-slate-100 font-medium"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Hiệu ứng đang gõ nhẹ nhàng */}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Ô nhập liệu */}
                        <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                placeholder="Hỏi AI về bài học..."
                                className="flex-1 bg-slate-100 border-none rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-indigo-600 transition-all outline-none"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-90"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Nút bật/tắt Chat */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-indigo-600 text-white p-5 rounded-full shadow-2xl shadow-indigo-300 hover:scale-110 active:scale-95 transition-all flex items-center gap-3 group"
            >
                {!isOpen && (
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black text-sm whitespace-nowrap">
                        Hỏi AI bài học này
                    </span>
                )}
                <Sparkles size={24} />
            </button>
        </div>
    );
};