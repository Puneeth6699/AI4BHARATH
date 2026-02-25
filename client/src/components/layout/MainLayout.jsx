import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function MainLayout() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar />
            <main className="pl-20 lg:pl-64 transition-all duration-300">
                <div className="container mx-auto p-6 lg:p-10 max-w-7xl">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
