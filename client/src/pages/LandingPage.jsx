import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Sparkles, Share2, BarChart3, Zap } from 'lucide-react';

export default function LandingPage() {
    return (
        <div className="min-h-screen gradient-bg">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg">
                            <Zap className="w-6 h-6 fill-current" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-slate-900">ContentFlow AI</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/dashboard" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Dashboard</Link>
                        <Link to="/ideas" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Ideas</Link>
                        <Link to="/workspace" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Workspace</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" className="text-sm font-medium">Feedback</Button>
                        <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Puneeth" alt="User" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                                From One Idea to <br />
                                <span className="text-blue-600">Multi-Platform Impact</span>
                            </h1>

                            <p className="text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Transform your ideas into personalized content for LinkedIn, Instagram, & Blogs.
                                Scale your presence with AI-driven insights.
                            </p>

                            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                                <Link to="/dashboard">
                                    <Button size="lg" className="h-14 px-10 text-lg rounded-2xl">
                                        Get Started
                                    </Button>
                                </Link>
                                <Button variant="secondary" size="lg" className="h-14 px-10 text-lg rounded-2xl bg-white">
                                    View Demo
                                </Button>
                            </div>
                        </div>

                        <div className="flex-1 relative">
                            <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-slate-100 p-2 overflow-hidden transform hover:-rotate-1 transition-transform duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000"
                                    alt="Dashboard Preview"
                                    className="rounded-2xl"
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-0"></div>
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        <FeatureCard
                            icon={Sparkles}
                            title="AI Creativity"
                            description="Unlock unique perspectives for every topic with advanced language models."
                        />
                        <FeatureCard
                            icon={BarChart3}
                            title="Engagement Insights"
                            description="Optimize your content with predictive scores and actionable feedback."
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Lightning Fast"
                            description="Go from topic to full-platform campaign in under 60 seconds."
                        />
                    </div>
                </div>
            </section>

            <footer className="py-12 border-t border-slate-100 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-blue-600" />
                        <span className="font-bold text-slate-900">ContentFlow AI</span>
                    </div>
                    <div className="text-slate-400 text-sm">
                        © 2024 ContentFlow AI. Built with precision.
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, description }) {
    return (
        <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="text-slate-500 leading-relaxed">{description}</p>
            </CardContent>
        </Card>
    );
}
