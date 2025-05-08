import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Resources } from './pages/Resources/Resources';
import { Navigation } from './pages/Navigation/Navigation';
import { Robotics } from './pages/Robotics/Robotics';
import { Infrastructure } from './pages/Infrastructure/Infrastructure';
import { SiteAnalysis } from './pages/SiteAnalysis/SiteAnalysis';
import { Medical } from './pages/Medical/Medical';
import { Administration } from './pages/Administration/Administration';
import { Security } from './pages/Security/Security';
import { Analytics } from './pages/Analytics/Analytics';
import { ModulePlacement } from './pages/ModulePlacement/ModulePlacement';
import { useAuthStore } from './store/authStore';

const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

const PublicRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/site-analysis" element={<SiteAnalysis />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/robotics" element={<Robotics />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/admin" element={<Administration />} />
          <Route path="/security" element={<Security />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/module-placement" element={<ModulePlacement />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;