import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, Plus, Trash2, CheckCircle2, Save } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Component con cho câu hỏi để quản lý auto-resize độc lập
const QuestionCard = ({ q, qIdx, removeQuestion, updateQuestion }: any) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustHeight();
    }, [q.question]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-[24px] md:rounded-[32px] p-5 md:p-8 border border-slate-100 shadow-sm relative group"
        >
            {/* Nút xóa */}
            <button
                onClick={() => removeQuestion(q.id)}
                className="absolute top-4 right-4 p-2 text-slate-300 hover:text-red-500 transition-colors z-10"
            >
                <Trash2 size={18} />
            </button>

            <div className="flex flex-col md:flex-row gap-4">
                {/* Số thứ tự */}
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black flex-shrink-0">
                    {qIdx + 1}
                </span>

                <div className="flex-1 space-y-4 md:space-y-6">
                    {/* Câu hỏi: Tự động giãn nở, không có thanh scroll */}
                    <textarea
                        ref={textareaRef}
                        className="w-full text-base md:text-lg font-bold text-slate-900 border-none focus:ring-0 p-0 resize-none bg-transparent overflow-hidden leading-relaxed pr-8"
                        value={q.question}
                        rows={1}
                        onChange={(e) => updateQuestion(qIdx, "question", e.target.value)}
                        placeholder="Nhập nội dung câu hỏi..."
                    />

                    {/* Danh sách đáp án */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {q.options.map((opt: string, oIdx: number) => (
                            <div
                                key={oIdx}
                                className={`flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all ${q.correctIndex === oIdx
                                        ? 'border-emerald-500 bg-emerald-50/50'
                                        : 'border-slate-100 bg-slate-50/30 hover:border-indigo-200'
                                    }`}
                            >
                                <button
                                    onClick={() => updateQuestion(qIdx, "correctIndex", oIdx)}
                                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${q.correctIndex === oIdx
                                            ? 'bg-emerald-500 border-emerald-500 text-white'
                                            : 'border-slate-300 bg-white'
                                        }`}
                                >
                                    {q.correctIndex === oIdx && <CheckCircle2 size={12} />}
                                </button>
                                <input
                                    type="text"
                                    value={opt}
                                    className="flex-1 bg-transparent border-none focus:ring-0 text-xs md:text-sm font-medium p-0"
                                    onChange={(e) => {
                                        const newOptions = [...q.options];
                                        newOptions[oIdx] = e.target.value;
                                        updateQuestion(qIdx, "options", newOptions);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const AIQuizReview = ({ onBack, lessonTitle }: any) => {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: "Cơ chế chính giúp Transformer xử lý song song là gì?",
            options: ["Recurrent Neural Network", "Self-Attention", "Backpropagation", "Convolutional Layer"],
            correctIndex: 1
        },
        {
            id: 2,
            question: "Kiến trúc gốc của Transformer gồm những phần nào?",
            options: ["Chỉ Encoder", "Chỉ Decoder", "Encoder và Decoder", "Input và Output"],
            correctIndex: 2
        },
        {
            id: 3,
            question: "Kỹ thuật nào giúp mô hình Transformer hiểu được thứ tự của các từ trong câu?",
            options: ["Positional Encoding", "Word Embedding", "Layer Normalization", "Softmax Layer"],
            correctIndex: 0
        },
        {
            id: 4,
            question: "Trong cơ chế Attention, ba thành phần chính được tính toán là gì?",
            options: ["X, Y, Z", "Weight, Bias, Activation", "Query, Key, Value", "Input, Hidden, Output"],
            correctIndex: 2
        },
        {
            id: 5,
            question: "Lợi ích lớn nhất của Multi-head Attention là gì?",
            options: ["Làm mô hình chạy nhanh hơn", "Giảm lượng tham số", "Cho phép mô hình tập trung vào nhiều phần khác nhau của câu cùng lúc", "Tự động dịch ngôn ngữ"],
            correctIndex: 2
        },
        {
            id: 6,
            question: "Mô hình BERT được xây dựng dựa trên thành phần nào của Transformer?",
            options: ["Chỉ Encoder", "Chỉ Decoder", "Cả Encoder và Decoder", "Cross-Attention"],
            correctIndex: 0
        },
        {
            id: 7,
            question: "Dòng mô hình GPT (Generative Pre-trained Transformer) sử dụng kiến trúc nào?",
            options: ["Encoder-only", "Decoder-only", "Encoder-Decoder", "CNN Hybrid"],
            correctIndex: 1
        }
    ]);

    const removeQuestion = (id: number) => {
        setQuestions(questions.filter(q => q.id !== id));
    };

    const updateQuestion = (idx: number, field: string, value: any) => {
        const newQs = [...questions];
        (newQs[idx] as any)[field] = value;
        setQuestions(newQs);
    };

    const addQuestion = () => {
        const newId = questions.length > 0 ? Math.max(...questions.map(q => q.id)) + 1 : 1;
        setQuestions([...questions, {
            id: newId,
            question: "",
            options: ["", "", "", ""],
            correctIndex: 0
        }]);
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            {/* Sticky Header */}
            <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-100 p-4">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors flex-shrink-0">
                            <ArrowLeft size={20} />
                        </button>
                        <div className="overflow-hidden">
                            <h2 className="text-base md:text-xl font-black text-slate-900 leading-none truncate">Review AI Quiz</h2>
                            <p className="text-[10px] md:text-sm text-slate-500 mt-1 truncate">
                                Bài học: {lessonTitle}
                            </p>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-indigo-600 text-white rounded-xl md:rounded-2xl font-bold text-sm shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95 flex-shrink-0 ml-2">
                        <Save size={16} className="md:w-[18px]" />
                        <span className="hidden sm:inline">Xác nhận & Lưu</span>
                        <span className="sm:hidden">Lưu</span>
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-4 md:space-y-6">
                <AnimatePresence mode="popLayout">
                    {questions.map((q, qIdx) => (
                        <QuestionCard
                            key={q.id}
                            q={q}
                            qIdx={qIdx}
                            removeQuestion={removeQuestion}
                            updateQuestion={updateQuestion}
                        />
                    ))}
                </AnimatePresence>

                {/* Nút thêm câu hỏi thủ công */}
                <button
                    onClick={addQuestion}
                    className="w-full py-4 md:py-6 border-2 border-dashed border-slate-200 rounded-[24px] md:rounded-[32px] text-slate-400 font-bold flex items-center justify-center gap-2 hover:border-indigo-300 hover:text-indigo-600 hover:bg-white transition-all text-sm md:text-base"
                >
                    <Plus size={20} /> Thêm câu hỏi thủ công
                </button>
            </div>
        </div>
    );
};