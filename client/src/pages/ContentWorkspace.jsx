import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Textarea } from '../components/ui/Input';
import { QualityScore } from '../components/content/QualityScore';
import { Linkedin, Instagram, FileText, Copy, Download, Calendar, Sparkles, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const MOCK_CONTENT = {
    linkedin: "🚀 The future of work isn't just about remote vs. office—it's about how we leverage AI to amplify human potential.\n\nWe're seeing a massive shift where automation handles the mundane, freeing us up for big-picture strategy. Are you ready to adapt?\n\n#FutureOfWork #AI #Leadership #Innovation",
    instagram: "AI + Human Creativity = 💥\n.\n.\nThe workplace is changing fast. It's time to stop fearing replacement and start mastering collaboration with new tools.\n.\nWhat's your take? 👇\n.\n#AI #TechTrends #WorkLife",
    blog: "## The Shift to AI-Powered Workplaces\n\nArtificial Intelligence is no longer a futuristic concept—it's here, and it's reshaping how we work daily. But contrary to popular belief, it's not here to take jobs, but to upgrade them.\n\n### The Efficiency Gains\nImagine a world where data entry, scheduling, and basic reports are handled instantly..."
};

const SUGGESTIONS = [
    { id: 1, text: "Add a question to boost engagement", type: "engagement" },
    { id: 2, text: "Use more emojis to break up text", type: "style" },
    { id: 3, text: "Stronger Call to Action needed", type: "impact" }
];

export default function ContentWorkspace() {
    const [activeTab, setActiveTab] = useState('linkedin');
    const [content, setContent] = useState(MOCK_CONTENT);
    const [score, setScore] = useState(85);

    const handleContentChange = (val) => {
        setContent({ ...content, [activeTab]: val });
    };

    // Simulate a score update on content change
    useEffect(() => {
        const timer = setTimeout(() => {
            // Random score fluctuation for demo
            setScore(Math.floor(Math.random() * (98 - 80) + 80));
        }, 1000);
        return () => clearTimeout(timer);
    }, [content[activeTab]]);

    return (
        <div className="h-[calc(100vh-140px)] flex flex-col gap-8">
            {/* Header & Platform Tabs */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl w-fit shadow-inner">
                    <TabButton
                        active={activeTab === 'linkedin'}
                        onClick={() => setActiveTab('linkedin')}
                        icon={Linkedin}
                        label="LinkedIn"
                    />
                    <TabButton
                        active={activeTab === 'instagram'}
                        onClick={() => setActiveTab('instagram')}
                        icon={Instagram}
                        label="Instagram"
                    />
                    <TabButton
                        active={activeTab === 'blog'}
                        onClick={() => setActiveTab('blog')}
                        icon={FileText}
                        label="Blog Post"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="secondary" className="rounded-xl px-6 font-bold shadow-sm">
                        <Copy className="w-4 h-4 mr-2" />
                        Copy All
                    </Button>
                    <Button variant="secondary" className="rounded-xl px-6 font-bold shadow-sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                    </Button>
                    <Button className="rounded-xl px-8 font-bold shadow-blue-600/20">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-8 flex-1 min-h-0">
                {/* Main Content Pane */}
                <div className="col-span-12 lg:col-span-8 flex flex-col min-h-0">
                    <Card className="flex-1 flex flex-col border-none shadow-premium rounded-[32px] bg-white overflow-hidden">
                        <div className="px-8 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Editor</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-slate-300">
                                    {content[activeTab].length} chars
                                </span>
                                <div className="h-4 w-[1px] bg-slate-200"></div>
                                <span className="text-xs font-bold text-slate-300">
                                    {content[activeTab].split(/\s+/).length} words
                                </span>
                            </div>
                        </div>
                        <textarea
                            className="flex-1 w-full p-10 resize-none focus:outline-none text-slate-700 text-xl leading-relaxed font-medium bg-transparent outline-none placeholder:text-slate-100"
                            value={content[activeTab]}
                            onChange={(e) => handleContentChange(e.target.value)}
                            placeholder="Start writing or let AI help..."
                        />
                        <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex gap-4">
                            <Button variant="ghost" size="sm" className="text-blue-600 font-bold hover:bg-white px-4">
                                <Sparkles className="w-4 h-4 mr-2" />
                                Rephrase with AI
                            </Button>
                            <Button variant="ghost" size="sm" className="text-slate-400 font-bold hover:bg-white px-4">
                                Fix Grammar
                            </Button>
                        </div>
                    </Card>
                </div>

                {/* Right Sidebar: Engagement Panel */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-8 overflow-y-auto pr-2 custom-scrollbar">
                    {/* Score Card */}
                    <Card className="border-none shadow-premium bg-white rounded-[32px] p-8">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-between w-full mb-6">
                                <h3 className="font-bold text-slate-900 text-lg italic">Engagement Panel</h3>
                                <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg">LIVE</div>
                            </div>
                            <QualityScore score={score} />
                            <p className="text-center text-sm font-medium text-slate-500 mt-6 leading-relaxed">
                                Your current score is <span className="text-blue-600 font-bold">{score}</span>.
                                Our AI expects this will trend in the top 5% on {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}.
                            </p>
                        </div>
                    </Card>

                    {/* Improvements List */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between pl-2">
                            <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-blue-600" />
                                AI Improvements
                            </h3>
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">{SUGGESTIONS.length} Found</span>
                        </div>

                        {SUGGESTIONS.map((suggestion) => (
                            <Card
                                key={suggestion.id}
                                className="group cursor-pointer hover:shadow-premium transition-all duration-300 border-none bg-white rounded-3xl"
                            >
                                <CardContent className="p-6 flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <p className="text-sm font-bold text-slate-900 leading-tight">{suggestion.text}</p>
                                        <button className="text-xs font-extrabold text-blue-600 uppercase tracking-widest hover:underline">
                                            Apply Improvement
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function TabButton({ active, onClick, icon: Icon, label }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300",
                active
                    ? "bg-white text-blue-600 shadow-sm scale-100"
                    : "text-slate-400 hover:text-slate-600 hover:bg-white/50"
            )}
        >
            <Icon className={cn("w-5 h-5", active ? "fill-blue-600/10" : "")} />
            {label}
        </button>
    );
}
