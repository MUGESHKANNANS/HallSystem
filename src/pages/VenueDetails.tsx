import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  Star,
  MapPin,
  Calendar,
  Wifi,
  Car,
  UtensilsCrossed,
  Music,
  Phone,
} from 'lucide-react';

export const VenueDetails = () => {
  const { id } = useParams();
  // In a real app, fetch venue details using the id
  const venue = {
    id: '1',
    name: 'Royal Palace Banquet',
    location: 'Mumbai, Maharashtra',
    price: 150000,
    capacity: 500,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80',
    ],
    amenities: ['WiFi', 'Parking', 'Catering', 'DJ'],
    description:
      'Luxurious wedding venue with modern amenities and elegant decor. Perfect for grand celebrations.',
    reviews: [
      {
        id: '1',
        userName: 'Priya S.',
        rating: 5,
        comment: 'Amazing venue! Our wedding was perfect.',
        date: '2024-02-15',
      },
    ],
  };

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 p-4">
            <img
              src={venue.images[0]}
              alt={venue.name}
              className="w-full h-96 object-cover rounded-lg col-span-2"
            />
            <img
              src={venue.images[1]}
              alt={venue.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src={venue.images[2]}
              alt={venue.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Venue Details */}
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{venue.name}</h1>
                <div className="flex items-center space-x-2 mt-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">{venue.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-600">
                  ₹{venue.price.toLocaleString()}
                </div>
                <span className="text-gray-600">/day</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span>Up to {venue.capacity} guests</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>{venue.rating} Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                <span>Available Today</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-purple-600" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* Amenities */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Wifi className="h-5 w-5 text-purple-600" />
                  <span>Free WiFi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="h-5 w-5 text-purple-600" />
                  <span>Parking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <UtensilsCrossed className="h-5 w-5 text-purple-600" />
                  <span>Catering</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Music className="h-5 w-5 text-purple-600" />
                  <span>DJ Allowed</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">About this venue</h2>
              <p className="text-gray-600">{venue.description}</p>
            </div>

            {/* Reviews */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Reviews</h2>
              {venue.reviews.map((review) => (
                <div
                  key={review.id}
                  className="border-t border-gray-200 py-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{review.userName}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1">{review.rating}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600">{review.comment}</p>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              ))}
            </div>

            {/* Book Now Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors font-medium"
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};