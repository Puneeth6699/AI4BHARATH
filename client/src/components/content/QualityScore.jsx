import React from 'react';

export function QualityScore({ score = 0, size = 180, strokeWidth = 12 }) {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (score / 100) * circumference;

    let color = '#EF4444'; // Red
    if (score >= 70) color = '#F59E0B'; // Yellow
    if (score >= 90) color = '#10B981'; // Green
    if (score >= 80 && score < 90) color = '#3B82F6'; // Blue

    return (
        <div className="relative flex items-center justify-center p-4" style={{ width: size, height: size }}>
            <svg className="transform -rotate-90 w-full h-full drop-shadow-xl">
                {/* Background Circle */}
                <circle
                    className="text-slate-100"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                {/* Progress Circle */}
                <circle
                    className="transition-all duration-1000 ease-out"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke={color}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className="text-5xl font-extrabold tracking-tighter" style={{ color: color }}>
                    {score}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Engagement Score
                </span>
            </div>
        </div>
    );
}
