import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { SearchFiltershome } from './components/SearchFiltershome';
import { HallCard } from './components/HallCard';
import { WeddingCategories } from './components/WeddingCategories';
import { RealWeddingStories } from './components/RealWeddingStories';
import { VenueDetails } from './pages/VenueDetails';
import { Wishlist } from './pages/Wishlist';
import { StoryDetails } from './pages/StoryDetails';
import venues from './pages/venueData';
import { HeroSection } from './components/HeroSection'; // Import HeroSection
import SearchPage from './pages/SearchPage'; // Import SearchPage

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <div className="container mx-auto px-4">
                  <SearchFiltershome />
                  <WeddingCategories />
                  <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Venues</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {venues.map((venue) => (
                        <HallCard key={venue.id} hall={venue} />
                      ))}
                    </div>
                  </div>
                  <RealWeddingStories />
                </div>
              </>
            }
          />
          <Route path="/venue/:id" element={<VenueDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/story/:id" element={<StoryDetails />} />
          <Route path="/search" element={<SearchPage />} /> {/* New Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;