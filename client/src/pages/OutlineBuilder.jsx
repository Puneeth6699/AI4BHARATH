import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Input, Textarea } from '../components/ui/Input';
import { Plus, GripVertical, Trash2, ArrowRight } from 'lucide-react';

const INITIAL_OUTLINE = [
    { id: 1, title: 'Introduction', content: 'Hook: The changing landscape of work. Thesis: AI is not replacing jobs, but upgrading roles.' },
    { id: 2, title: 'The Efficiency Gains', content: 'Discuss how automation handles repetitive tasks (data entry, scheduling).' },
    { id: 3, title: 'The Creativity Boom', content: 'Explain how employees can focus on strategy and innovation.' },
    { id: 4, title: 'Real-world Examples', content: 'Case studies of companies using AI tools effectively.' },
    { id: 5, title: 'Conclusion', content: 'Call to action: Embrace the tools or get left behind.' }
];

export default function OutlineBuilder() {
    const navigate = useNavigate();
    const [outline, setOutline] = useState(INITIAL_OUTLINE);

    const handleUpdate = (id, field, value) => {
        setOutline(outline.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    const handleDelete = (id) => {
        setOutline(outline.filter(item => item.id !== id));
    };

    const handleAddSection = () => {
        const newId = Math.max(...outline.map(i => i.id)) + 1;
        setOutline([...outline, { id: newId, title: 'New Section', content: '' }]);
    };

    const handleContinue = () => {
        navigate('/audience');
    };

    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Refine Your Outline</h1>
                    <p className="text-lg text-slate-500">Fine-tune the structure before we generate your final content.</p>
                </div>
                <Button
                    variant="secondary"
                    size="sm"
                    className="h-10 px-6 rounded-xl font-bold shadow-sm"
                    onClick={handleAddSection}
                >
                    <Plus className="w-4 h-4 mr-2" />
                    New Section
                </Button>
            </div>

            <div className="space-y-6">
                {outline.map((section, index) => (
                    <Card key={section.id} className="border-none shadow-premium group relative bg-white overflow-visible">
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg z-10 transition-transform group-hover:scale-110">
                            {index + 1}
                        </div>
                        <CardContent className="p-8 flex gap-6">
                            <div className="flex-1 space-y-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-300 uppercase tracking-widest pl-1">Section Title</label>
                                    <input
                                        value={section.title}
                                        onChange={(e) => handleUpdate(section.id, 'title', e.target.value)}
                                        className="w-full font-bold text-2xl text-slate-900 border-none focus:ring-0 px-0 h-auto bg-transparent outline-none placeholder:text-slate-100"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-300 uppercase tracking-widest pl-1">Key Points & Details</label>
                                    <textarea
                                        value={section.content}
                                        onChange={(e) => handleUpdate(section.id, 'content', e.target.value)}
                                        className="w-full resize-none text-slate-500 text-lg border-none focus:ring-0 px-0 min-h-[100px] bg-transparent outline-none placeholder:text-slate-100"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="p-2 text-slate-100 cursor-grab hover:text-slate-300 transition-colors">
                                    <GripVertical className="w-6 h-6" />
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDelete(section.id)}
                                    className="text-slate-100 hover:text-red-500 hover:bg-red-50 transition-colors"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center pt-10 sticky bottom-8">
                <Button
                    size="lg"
                    onClick={handleContinue}
                    className="h-16 px-16 text-xl rounded-2xl font-bold shadow-blue-600/30"
                >
                    Configure & Generate
                    <ArrowRight className="w-6 h-6 ml-4" />
                </Button>
            </div>
        </div>
    );
}
