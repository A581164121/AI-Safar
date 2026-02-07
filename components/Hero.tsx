import React from 'react';
import { VIDEOS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1600"
      >
        <source src={VIDEOS.HERO_MAIN} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/30"></div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start text-white">
        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md animate-fade-in">
          Spiritual Journey Awaits
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
          Experience <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
            Mecca & Medina
          </span>
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-slate-200 mb-8 leading-relaxed drop-shadow-md">
          Embark on a sacred journey with our premium Hajj & Umrah packages. 
          We handle the details so you can focus on your worship.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/packages" 
            className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2 group backdrop-blur-sm"
          >
            Explore Packages
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/routes" 
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all shadow-lg"
          >
            Domestic Flights
          </Link>
        </div>
      </div>
    </div>
  );
};
