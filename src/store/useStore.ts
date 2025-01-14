import { create } from 'zustand';
import type { Hall, User, Booking } from '../types';

interface Store {
  halls: Hall[];
  user: User | null;
  bookings: Booking[];
  setUser: (user: User | null) => void;
  addToWishlist: (hallId: string) => void;
  removeFromWishlist: (hallId: string) => void;
}

export const useStore = create<Store>((set) => ({
  halls: [],
  user: null,
  bookings: [],
  setUser: (user) => set({ user }),
  addToWishlist: (hallId) =>
    set((state) => ({
      user: state.user
        ? { ...state.user, wishlist: [...state.user.wishlist, hallId] }
        : null,
    })),
  removeFromWishlist: (hallId) =>
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            wishlist: state.user.wishlist.filter((id) => id !== hallId),
          }
        : null,
    })),
}));