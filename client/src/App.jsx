import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { AuthLayout } from './components/auth/AuthLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/Dashboard';

import LandingPage from './pages/LandingPage';
import IdeaSelection from './pages/IdeaSelection';
import OutlineBuilder from './pages/OutlineBuilder';
import AudienceSelector from './pages/AudienceSelector';
import ContentWorkspace from './pages/ContentWorkspace';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Auth Routes */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>

                <Route path="/" element={<LandingPage />} />

                {/* Protected App Routes */}
                <Route element={<ProtectedRoute />}>
                    <Route element={<MainLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/ideas" element={<IdeaSelection />} />
                        <Route path="/outline" element={<OutlineBuilder />} />
                        <Route path="/audience" element={<AudienceSelector />} />
                        <Route path="/workspace" element={<ContentWorkspace />} />
                        <Route path="/content" element={<ContentWorkspace />} />
                        <Route path="/settings" element={<div>Settings Page</div>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
