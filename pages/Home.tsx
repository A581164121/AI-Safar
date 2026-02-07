import React from 'react';
import { Hero } from '../components/Hero';
import { PackageCard } from '../components/PackageCard';
import { PACKAGES, POPULAR_ROUTES } from '../constants';
import { Link } from 'react-router-dom';
import { Plane, MapPin, Star } from 'lucide-react';

export const Home: React.FC = () => {
  const featuredPackages = PACKAGES.slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      <Hero />
      
      {/* Featured Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Featured Sacred Journeys</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose from our carefully curated Hajj and Umrah packages designed to provide comfort, proximity to Haram, and peace of mind.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map(pkg => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/packages" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors">
            View All Packages <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Popular Domestic Routes */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Popular Routes in Pakistan</h2>
              <p className="text-slate-600">Frequent flights and comfortable travel options between major cities.</p>
            </div>
            <Link to="/routes" className="hidden md:block text-emerald-600 font-semibold hover:text-emerald-700">See all routes</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_ROUTES.map((route) => (
              <Link 
                key={route.id} 
                to={`/booking/route-${route.id}`}
                className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all border border-slate-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-emerald-50 p-2 rounded-lg group-hover:bg-emerald-100 transition-colors">
                    <Plane className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-xs font-bold text-slate-400">{route.duration}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-slate-800">{route.from}</span>
                  <div className="h-px bg-slate-300 flex-grow mx-2 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-slate-400 rounded-full"></div>
                  </div>
                  <span className="font-bold text-slate-800">{route.to}</span>
                </div>
                <div className="text-sm text-slate-500 mb-3">{route.airline}</div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                  <span className="text-emerald-600 font-bold">{route.price}</span>
                  <span className="text-xs text-slate-400 group-hover:text-emerald-600 transition-colors">Book Now →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 relative z-10">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <MapPin className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Locations</h3>
              <p className="text-slate-400 text-sm">Hotels within walking distance to Haram in both Mecca and Medina.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Plane className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Seamless Travel</h3>
              <p className="text-slate-400 text-sm">We handle visa processing, flights, and ground transport effortlessly.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Star className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">5-Star Service</h3>
              <p className="text-slate-400 text-sm">Rated 4.9/5 by over 10,000 satisfied pilgrims and travelers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};