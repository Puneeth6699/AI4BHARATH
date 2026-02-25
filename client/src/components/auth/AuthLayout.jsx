import React from 'react';
import { Outlet } from 'react-router-dom';
import { Zap } from 'lucide-react';

export function AuthLayout() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 text-center bg-blue-600">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Zap className="w-7 h-7 text-white fill-current" />
                    </div>
                    <h1 className="text-2xl font-bold text-white">ContentFlow AI</h1>
                    <p className="text-blue-100 mt-2 text-sm">Create amazing content in seconds</p>
                </div>
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
