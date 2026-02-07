export interface TravelPackage {
  id: string;
  title: string;
  type: 'Hajj' | 'Umrah' | 'Domestic' | 'International';
  price: string;
  duration: string;
  image: string;
  video?: string;
  description: string;
  rating: number;
  features: string[];
}

export interface RouteInfo {
  id: string;
  from: string;
  to: string;
  duration: string;
  airline: string;
  price: string;
  image: string;
}

export interface BookingData {
  id: string;
  packageId?: string;
  routeId?: string;
  bookingDate: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    phone: string;
    dob: string;
    passportNumber: string;
    passportExpiry: string;
  };
  status: 'Confirmed' | 'Pending';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
