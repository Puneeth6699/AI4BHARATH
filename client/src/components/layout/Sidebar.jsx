import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, Lightbulb, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
    { icon: Lightbulb, label: 'Ideas', to: '/ideas' },
    { icon: FileText, label: 'Content', to: '/content' },
    { icon: Settings, label: 'Settings', to: '/settings' },
];

export function Sidebar() {
    return (
        <aside className="w-20 lg:w-64 bg-white border-r border-slate-200 h-screen flex flex-col fixed left-0 top-0 z-40 transition-all duration-300">
            <div className="p-4 lg:p-6 flex items-center justify-center lg:justify-start gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shrink-0">
                    <LayoutDashboard className="w-6 h-6 fill-current" />
                </div>
                <span className="hidden lg:block text-xl font-bold tracking-tight text-slate-900">Flow AI</span>
            </div>

            <nav className="flex-1 p-3 lg:p-4 space-y-2 mt-4">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center justify-center lg:justify-start gap-3 p-3 lg:px-4 lg:py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                            )
                        }
                        title={item.label}
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon className={cn("w-6 h-6", !isActive && "group-hover:scale-110 transition-transform")} />
                                <span className="hidden lg:block font-medium">{item.label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-100 mb-2">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border-2 border-white shadow-sm overflow-hidden shrink-0">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Puneeth" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="hidden lg:block overflow-hidden">
                        <p className="font-semibold text-slate-900 text-sm truncate">Puneeth</p>
                        <p className="text-blue-600 text-[10px] font-bold uppercase tracking-wider">Pro Creator</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
