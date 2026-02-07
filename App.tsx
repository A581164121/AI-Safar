import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { RoutePage } from './pages/RoutePage';
import { BookingPage } from './pages/BookingPage';
import { MyBookings } from './pages/MyBookings';
import { AIAssistant } from './components/AIAssistant';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PACKAGES } from './constants';
import { PackageCard } from './components/PackageCard';

// Simple wrapper for packages list page
const PackagesPage = () => (
  <div className="py-12 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8 text-center">All Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PACKAGES.map(pkg => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  </div>
);

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/routes" element={<RoutePage />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <WhatsAppButton />
        <AIAssistant />
      </Layout>
    </HashRouter>
  );
}

export default App;
