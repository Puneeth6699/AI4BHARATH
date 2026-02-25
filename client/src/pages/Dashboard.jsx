import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Input, Textarea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Sparkles, History } from 'lucide-react';

export default function Dashboard() {
    const [idea, setIdea] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            const response = await fetch('/api/generate-ideas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idea })
            });
            const data = await response.json();
            // In a real app, we'd store 'data' in context/state. 
            // For this proto, we'll just navigate.
            if (response.ok) {
                window.location.href = '/ideas';
            }
        } catch (error) {
            console.error("Generation failed:", error);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-12 py-10">
            {/* Hero Heading */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                    Dashboard Makes Better
                </h1>
                <p className="text-lg text-slate-500">
                    Transform your raw thoughts into high-impact content across every platform.
                </p>
            </div>

            {/* Main Search/Input Bar */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                <Card className="relative border-none shadow-premium rounded-3xl overflow-hidden">
                    <CardContent className="p-2 flex flex-col md:flex-row items-center gap-2">
                        <div className="flex-1 w-full px-6 py-4">
                            <input
                                placeholder="What would you like to create today?"
                                className="w-full bg-transparent border-none focus:ring-0 text-xl text-slate-900 placeholder:text-slate-300 outline-none"
                                value={idea}
                                onChange={(e) => setIdea(e.target.value)}
                            />
                        </div>
                        <Button
                            size="lg"
                            disabled={!idea.trim()}
                            loading={isGenerating}
                            onClick={handleGenerate}
                            className="w-full md:w-auto px-10 h-14 rounded-2xl text-lg font-bold"
                        >
                            <Sparkles className="w-5 h-5 mr-3 fill-white/20" />
                            Generate Ideas
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Ideas Grid */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <History className="w-5 h-5 text-blue-600" />
                        Recent Generations
                    </h2>
                    <Button variant="ghost" size="sm" className="text-blue-600 font-semibold px-4">
                        View All
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="hover:shadow-premium transition-all cursor-pointer group border-none shadow-sm bg-white/50 backdrop-blur-sm">
                        <CardContent className="p-6 flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                                    The Shift to AI-Powered Workplaces
                                </p>
                                <p className="text-sm text-slate-500">LinkedIn • Instagram • Blog</p>
                                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest pt-2">2 hours ago</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-premium transition-all cursor-pointer group border-none shadow-sm bg-white/50 backdrop-blur-sm">
                        <CardContent className="p-6 flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <History className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                                    Future of Sustainable Tech
                                </p>
                                <p className="text-sm text-slate-500">Platform Strategy</p>
                                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest pt-2">Yesterday</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
