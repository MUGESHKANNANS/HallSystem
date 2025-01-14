export interface Hall {
  id: string;
  name: string;
  location: string;
  price: number;
  capacity: number;
  rating: number;
  images: string[];
  amenities: string[];
  description: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  bookings: Booking[];
  wishlist: string[];
}

export interface Booking {
  id: string;
  hallId: string;
  userId: string;
  date: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalAmount: number;
}