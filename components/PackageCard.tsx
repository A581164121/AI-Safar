import React from 'react';
import { Star, Clock, Check } from 'lucide-react';
import { TravelPackage } from '../types';
import { Link } from 'react-router-dom';

interface PackageCardProps {
  pkg: TravelPackage;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-slate-100 group">
      <div className="relative h-56 overflow-hidden">
        {pkg.video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            poster={pkg.image}
          >
            <source src={pkg.video} type="video/mp4" />
          </video>
        ) : (
          <img 
            src={pkg.image} 
            alt={pkg.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wide z-10">
          {pkg.type}
        </div>
        {/* Overlay for better text contrast if we had text over image, mostly adding a slight shade for video depth */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 font-serif">{pkg.title}</h3>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded text-yellow-700">
            <Star className="h-4 w-4 fill-current mr-1" />
            <span className="text-sm font-bold">{pkg.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-slate-500 text-sm mb-4">
          <Clock className="h-4 w-4 mr-1.5" />
          <span>{pkg.duration}</span>
        </div>
        
        <p className="text-slate-600 text-sm mb-6 line-clamp-2">
          {pkg.description}
        </p>

        <ul className="mb-6 space-y-2">
          {pkg.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-center text-xs text-slate-500">
              <Check className="h-3 w-3 text-emerald-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400">Starting from</span>
            <span className="text-2xl font-bold text-emerald-600">{pkg.price}</span>
          </div>
          <Link 
            to={`/booking/${pkg.id}`}
            className="bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-emerald-600 transition-colors text-sm font-medium"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};
