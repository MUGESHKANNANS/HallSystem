import React from 'react';
import venues from './venueData'; // Import the venue data
import { HallCard } from '../components/HallCard'; // Import the HallCard component
import type { Hall } from '../types'; // Import the Hall type if used

const VenuesList = () => {
  return (
    <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {venues.map((hall: Hall) => (
        <HallCard key={hall.id} hall={hall} />
      ))}
    </div>
  );
};

export default VenuesList;
