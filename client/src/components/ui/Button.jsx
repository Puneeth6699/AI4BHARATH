import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    children,
    ...props
}) {
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30 active:scale-[0.98]',
        secondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm active:scale-[0.98]',
        ghost: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
        outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 active:scale-[0.98]',
    };

    const sizes = {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10 p-2 text-sm justify-center'
    };

    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:opacity-50 disabled:pointer-events-none',
                variants[variant],
                sizes[size],
                className
            )}
            disabled={loading || props.disabled}
            {...props}
        >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </button>
    );
}
