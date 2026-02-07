import React from 'react';
import { POPULAR_ROUTES, IMAGES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

export const RoutePage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4 text-center">Domestic Travel Routes</h1>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
          Connect across Pakistan with our reliable flight and bus booking services. 
          Whether you're traveling for business or visiting family, we ensure a smooth journey.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {POPULAR_ROUTES.map((route) => (
            <div key={route.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group flex flex-col sm:flex-row h-full">
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                <img 
                  src={route.image} 
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-md uppercase">One Way</span>
                    <span className="text-slate-400 text-xs">Daily Flights</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 flex flex-wrap gap-2 items-center">
                    {route.from} 
                    <ArrowRight className="h-5 w-5 text-emerald-500" /> 
                    {route.to}
                  </h3>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-slate-600">
                      <span className="font-semibold w-20">Airline:</span>
                      {route.airline}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <span className="font-semibold w-20">Duration:</span>
                      {route.duration}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <span className="block text-xs text-slate-400">Best Price</span>
                    <span className="text-xl font-bold text-emerald-600">{route.price}</span>
                  </div>
                  <Link 
                    to={`/booking/route-${route.id}`}
                    className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2"
                  >
                    Book <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Scheduling</h3>
              <p className="text-slate-600">
                Don't see the date you want? We have access to real-time inventory for PIA, AirBlue, Serene Air, and AirSial. 
                Use our AI Assistant to check availability for specific dates not listed here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
