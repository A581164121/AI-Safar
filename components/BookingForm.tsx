import React, { useState } from 'react';
import { BookingData } from '../types';
import { saveBooking } from '../services/bookingService';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BookingFormProps {
  packageId?: string;
  routeId?: string;
  title: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ packageId, routeId, title }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    dob: '',
    passportNumber: '',
    passportExpiry: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    // Basic Validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.passportNumber) {
      alert("Please fill in all required fields.");
      return;
    }

    const newBooking: BookingData = {
      id: Math.random().toString(36).substr(2, 9),
      packageId,
      routeId,
      bookingDate: new Date().toISOString(),
      personalInfo: formData,
      status: 'Pending'
    };

    try {
      saveBooking(newBooking);
      setStatus('success');
      setTimeout(() => {
        navigate('/my-bookings');
      }, 2000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center animate-fade-in">
        <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-emerald-800 mb-2">Booking Confirmed!</h3>
        <p className="text-emerald-700">Your details have been securely saved. Redirecting to your bookings...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b pb-4">
        Booking: <span className="text-emerald-600">{title}</span>
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter first name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter surname"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              placeholder="+92 300 1234567"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Passport Number</label>
            <input
              type="text"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              placeholder="AA1234567"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Passport Expiry Date</label>
            <input
              type="date"
              name="passportExpiry"
              value={formData.passportExpiry}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800">
            Your personal data is handled securely. We never share your passport details with third parties without your consent.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition-colors shadow-md text-lg"
        >
          Confirm & Book Securely
        </button>
      </form>
    </div>
  );
};
