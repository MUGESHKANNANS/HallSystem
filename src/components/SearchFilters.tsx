import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Users } from 'lucide-react';
import venues from '../components/venueData'; // Ensure venueData is properly exported
import { HallCard } from './HallCard'; // Import the HallCard component

export const SearchFilters = () => {
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false); // New state to control showing "No venues" message

  const handleSearch = () => {
    const results = venues.filter((venue) => {
      const matchesSearch = search
        ? venue.location.toLowerCase().includes(search.toLowerCase()) ||
          venue.name.toLowerCase().includes(search.toLowerCase())
        : true; // Case-insensitive check for venue name or location

      const matchesDate = date ? venue.date === date : true;
      const matchesGuests = guests
        ? venue.capacity >= parseInt(guests, 10)
        : true;

      return matchesSearch && matchesDate && matchesGuests;
    });

    setFilteredVenues(results);
    setShowNoResults(results.length === 0); // Show 'No results' if no matching venues
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto -mt-12 relative z-10"
      >
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Venue Name or Location"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="relative w-full md:w-1/3">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="relative w-full md:w-1/3">
            <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="">Guests</option>
              <option value="100">Up to 100</option>
              <option value="300">Up to 300</option>
              <option value="500">Up to 500</option>
              <option value="1000">Up to 1000</option>
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

      {filteredVenues.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Available Venues</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVenues.map((venue) => (
              <HallCard key={venue.id} hall={venue} />
            ))}
          </div>
        </div>
      )}

      {showNoResults && (
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-500">
            No venues found matching your criteria.
          </h3>
        </div>
      )}
    </div>
  );
};
