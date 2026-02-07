import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, User, Plane } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-emerald-600 font-semibold' : 'text-slate-600 hover:text-emerald-600';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <Globe className="h-8 w-8 text-emerald-600" />
                <span className="font-serif text-2xl font-bold text-slate-800">Al-Safar</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/packages" className={isActive('/packages')}>Packages</Link>
              <Link to="/routes" className={isActive('/routes')}>Routes</Link>
              <Link to="/my-bookings" className={isActive('/my-bookings')}>My Bookings</Link>
              <Link to="/booking/general" className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors shadow-md">
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-slate-900">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50">Home</Link>
              <Link to="/packages" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50">Packages</Link>
              <Link to="/routes" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50">Routes</Link>
              <Link to="/my-bookings" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50">My Bookings</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-emerald-500" />
                <span className="font-serif text-xl font-bold text-white">Al-Safar Travels</span>
              </div>
              <p className="max-w-md text-slate-400">
                Your trusted partner for spiritual journeys to Mecca and Medina, and adventures across Pakistan and the world. 
                Experience travel with peace of mind.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/packages" className="hover:text-emerald-400">Hajj & Umrah</Link></li>
                <li><Link to="/routes" className="hover:text-emerald-400">Domestic Flights</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-400">Contact Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-400">
                <li>123 Travel Plaza, Blue Area</li>
                <li>Islamabad, Pakistan</li>
                <li>+92 300 1234567</li>
                <li>info@alsafartravels.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Al-Safar Travels. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
