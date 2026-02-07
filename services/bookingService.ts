import { BookingData } from '../types';

const STORAGE_KEY = 'alsafar_bookings';

export const saveBooking = (data: BookingData): void => {
  const existing = getBookings();
  const updated = [data, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const getBookings = (): BookingData[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
