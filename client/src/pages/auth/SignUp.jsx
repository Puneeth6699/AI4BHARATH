import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Loader2 } from 'lucide-react';

export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) throw error;
            setSubmitted(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Check your email</h2>
                <p className="text-slate-600">
                    We've sent a verification link to <span className="font-semibold">{email}</span>.
                    Please verify your email to continue.
                </p>
                <div className="pt-4">
                    <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                        Back to Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900">Create an account</h2>
                <p className="text-slate-600 mt-2">Start creating amazing content today</p>
            </div>

            {error && (
                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                    {error}
                </div>
            )}

            <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <Input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                    <Input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        minLength={6}
                    />
                </div>
                <Button className="w-full" disabled={loading}>
                    {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                    Sign Up
                </Button>
            </form>

            <div className="text-center text-sm text-slate-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Log in
                </Link>
            </div>
        </div>
    );
}
