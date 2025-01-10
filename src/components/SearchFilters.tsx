import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Users, IndianRupee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SearchFilters = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (date) params.append('date', date);
    if (guests) params.append('guests', guests);
    if (budget) params.append('budget', budget);
    
    navigate(`/venues?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto -mt-12 relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div className="relative">
          <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="">Guests</option>
            <option value="100">Up to 100</option>
            <option value="300">Up to 300</option>
            <option value="500">Up to 500</option>
            <option value="1000">Up to 1000</option>
          </select>
        </div>

        <div className="relative">
          <IndianRupee className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="">Budget</option>
            <option value="50000">Under ₹50,000</option>
            <option value="100000">Under ₹1,00,000</option>
            <option value="200000">Under ₹2,00,000</option>
            <option value="500000">Under ₹5,00,000</option>
          </select>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSearch}
        className="w-full mt-4 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
      >
        Search Venues
      </motion.button>
    </motion.div>
  );
};