import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const MOCK_IDEAS = [
    {
        id: 1,
        title: "The Shift to AI-Powered Workplaces",
        description: "Explore how AI tools are reshaping daily workflows, reducing repetitive tasks, and enabling employees to focus on creative problem-solving.",
        angle: "Future of Work"
    },
    {
        id: 2,
        title: "Why Soft Skills Matter in an AI World",
        description: "As AI takes over technical tasks, human skills like empathy, leadership, and emotional intelligence become the new currency of value.",
        angle: "Career Development"
    },
    {
        id: 3,
        title: "AI as a Collaborator, Not a Replacement",
        description: "Debunking the fear of job loss by highlighting success stories of teams that use AI to augment their capabilities rather than replace staff.",
        angle: "Industry Trends"
    }
];

export default function IdeaSelection() {
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState(null);

    const handleContinue = () => {
        if (selectedId) {
            navigate('/outline');
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Select an Angle</h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                    We've generated 3 unique approaches based on your idea. Which one fits your vision?
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {MOCK_IDEAS.map((idea) => (
                    <Card
                        key={idea.id}
                        className={cn(
                            "cursor-pointer transition-all duration-300 relative group border-none shadow-sm hover:shadow-premium scale-100 hover:scale-[1.02]",
                            selectedId === idea.id ? "ring-2 ring-blue-600 bg-white" : "bg-white/50 backdrop-blur-sm"
                        )}
                        onClick={() => setSelectedId(idea.id)}
                    >
                        {selectedId === idea.id && (
                            <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-2xl p-2 shadow-xl z-10 animate-in zoom-in-50 duration-300">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                        )}
                        <CardContent className="p-8 space-y-5">
                            <span className="inline-flex px-4 py-1.5 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                {idea.angle}
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {idea.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {idea.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center pt-8">
                <Button
                    size="lg"
                    disabled={!selectedId}
                    onClick={handleContinue}
                    className="h-16 px-12 text-lg rounded-2xl font-bold shadow-blue-500/20"
                >
                    Continue to Outline
                    <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
            </div>
        </div>
    );
}
