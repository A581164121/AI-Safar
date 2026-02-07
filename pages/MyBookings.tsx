import React, { useEffect, useState } from 'react';
import { getBookings } from '../services/bookingService';
import { BookingData } from '../types';
import { PACKAGES, POPULAR_ROUTES } from '../constants';
import { Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MyBookings: React.FC = () => {
  const [bookings, setBookings] = useState<BookingData[]>([]);

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  const getTitle = (booking: BookingData) => {
    if (booking.packageId) {
      return PACKAGES.find(p => p.id === booking.packageId)?.title || 'Unknown Package';
    }
    if (booking.routeId) {
      const r = POPULAR_ROUTES.find(rt => rt.id === booking.routeId);
      return r ? `${r.from} to ${r.to}` : 'Unknown Route';
    }
    return 'General Booking';
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-8">My Bookings</h1>

        {bookings.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-12 text-center">
            <h3 className="text-xl font-medium text-slate-700 mb-2">No bookings yet</h3>
            <p className="text-slate-500 mb-6">You haven't made any reservations with us yet.</p>
            <Link to="/packages" className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Browse Packages
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded uppercase">
                      {booking.status}
                    </span>
                    <span className="text-xs text-slate-400">Ref: #{booking.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{getTitle(booking)}</h3>
                  <div className="text-sm text-slate-500 mt-1">
                    Traveler: {booking.personalInfo.firstName} {booking.personalInfo.lastName}
                  </div>
                  <div className="text-sm text-slate-500">
                    Booked on: {new Date(booking.bookingDate).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
                  {booking.status === 'Confirmed' ? (
                    <div className="flex items-center text-emerald-600 gap-2">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Confirmed</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-amber-500 gap-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-medium">Processing</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
