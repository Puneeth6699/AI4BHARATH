import React from 'react';
import { cn } from '../../lib/utils';

export function Card({ className, children, ...props }) {
    return (
        <div
            className={cn(
                "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className, children, ...props }) {
    return (
        <div className={cn("p-6 pb-3", className)} {...props}>
            {children}
        </div>
    );
}

export function CardContent({ className, children, ...props }) {
    return (
        <div className={cn("p-6 pt-3", className)} {...props}>
            {children}
        </div>
    );
}
