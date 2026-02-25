import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Users, Briefcase, GraduationCap, Instagram, Linkedin, FileText, Check, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const AUDIENCES = [
    { id: 'professional', label: 'Professionals', icon: Briefcase, description: 'Formal, industry-focused tone' },
    { id: 'marketer', label: 'Marketers', icon: Users, description: 'Engaging, action-oriented tone' },
    { id: 'student', label: 'Students', icon: GraduationCap, description: 'Educational, approachable tone' },
];

const PLATFORMS = [
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin },
    { id: 'instagram', label: 'Instagram', icon: Instagram },
    { id: 'blog', label: 'Blog Post', icon: FileText },
];

export default function AudienceSelector() {
    const navigate = useNavigate();
    const [selectedAudience, setSelectedAudience] = useState('professional');
    const [selectedPlatforms, setSelectedPlatforms] = useState(['linkedin']);

    const togglePlatform = (id) => {
        if (selectedPlatforms.includes(id)) {
            setSelectedPlatforms(selectedPlatforms.filter(p => p !== id));
        } else {
            setSelectedPlatforms([...selectedPlatforms, id]);
        }
    };

    const handleGenerate = () => {
        navigate('/workspace');
    };

    return (
        <div className="max-w-4xl mx-auto space-y-16 py-10">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Configure Generation</h1>
                <p className="text-lg text-slate-500">Fine-tune the personality and reach of your content.</p>
            </div>

            {/* Audience Selection */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg">1</div>
                    <h2 className="text-2xl font-bold text-slate-900">Choose Your Audience</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {AUDIENCES.map((audience) => (
                        <Card
                            key={audience.id}
                            className={cn(
                                "cursor-pointer transition-all duration-300 border-none shadow-sm hover:shadow-premium scale-100 hover:scale-[1.02]",
                                selectedAudience === audience.id
                                    ? "ring-2 ring-blue-600 bg-white"
                                    : "bg-white/50 backdrop-blur-sm"
                            )}
                            onClick={() => setSelectedAudience(audience.id)}
                        >
                            <CardContent className="p-8 text-center space-y-4">
                                <div className={cn(
                                    "w-16 h-16 mx-auto rounded-3xl flex items-center justify-center transition-all duration-300 shadow-sm",
                                    selectedAudience === audience.id ? "bg-blue-600 text-white shadow-blue-200 shadow-xl scale-110" : "bg-blue-50 text-blue-600"
                                )}>
                                    <audience.icon className="w-8 h-8" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-slate-900 text-lg">{audience.label}</h3>
                                    <p className="text-sm text-slate-400 leading-tight">{audience.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Platform Selection */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg">2</div>
                    <h2 className="text-2xl font-bold text-slate-900">Select Target Platforms</h2>
                </div>

                <div className="flex flex-wrap gap-6">
                    {PLATFORMS.map((platform) => {
                        const isSelected = selectedPlatforms.includes(platform.id);
                        return (
                            <div
                                key={platform.id}
                                onClick={() => togglePlatform(platform.id)}
                                className={cn(
                                    "cursor-pointer flex items-center gap-4 px-8 py-6 rounded-3xl border-none transition-all duration-300 min-w-[200px] shadow-sm hover:shadow-premium",
                                    isSelected
                                        ? "bg-blue-600 text-white scale-105 shadow-xl shadow-blue-200"
                                        : "bg-white text-slate-500 hover:bg-white"
                                )}
                            >
                                <div className={cn(
                                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                                    isSelected ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"
                                )}>
                                    <platform.icon className="w-6 h-6 border-current" />
                                </div>
                                <span className="font-bold text-lg">
                                    {platform.label}
                                </span>
                                {isSelected && (
                                    <div className="ml-auto w-6 h-6 rounded-full bg-white text-blue-600 flex items-center justify-center">
                                        <Check className="w-4 h-4 font-bold" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-center pt-10">
                <Button
                    size="lg"
                    onClick={handleGenerate}
                    disabled={selectedPlatforms.length === 0}
                    className="h-16 px-16 text-xl rounded-2xl font-bold shadow-blue-600/30"
                >
                    Generate Content
                    <ArrowRight className="w-6 h-6 ml-4" />
                </Button>
            </div>
        </div>
    );
}
