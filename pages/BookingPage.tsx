import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookingForm } from '../components/BookingForm';
import { PACKAGES, POPULAR_ROUTES } from '../constants';
import { ChevronLeft } from 'lucide-react';

export const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  let packageData = PACKAGES.find(p => p.id === id);
  let routeData = POPULAR_ROUTES.find(r => `route-${r.id}` === id);
  
  // Default title if generic booking
  let title = "General Inquiry";
  let subtitle = "Start your journey with us";
  let price = "";
  
  if (packageData) {
    title = packageData.title;
    subtitle = `${packageData.duration} • ${packageData.type} Package`;
    price = packageData.price;
  } else if (routeData) {
    title = `${routeData.from} to ${routeData.to}`;
    subtitle = `One Way • ${routeData.airline}`;
    price = routeData.price;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-emerald-600 mb-8 transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-slate-900">{title}</h1>
          <div className="flex justify-between items-end mt-2">
            <p className="text-slate-600">{subtitle}</p>
            {price && <span className="text-2xl font-bold text-emerald-600">{price}</span>}
          </div>
        </div>

        <BookingForm 
          packageId={packageData?.id} 
          routeId={routeData?.id} 
          title={title} 
        />
      </div>
    </div>
  );
};
