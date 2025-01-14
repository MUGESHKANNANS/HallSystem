import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { SearchFilters } from './components/SearchFilters';
import { HallCard } from './components/HallCard';
import { WeddingCategories } from './components/WeddingCategories';
import { RealWeddingStories } from './components/RealWeddingStories';
import { VenueDetails } from './pages/VenueDetails';
import { Wishlist } from './pages/Wishlist';
import { StoryDetails } from './pages/StoryDetails';
import venues from './pages/venueData';





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
                {/* Hero Section */}
                <div
                  className="h-[60vh] bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80)',
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
                      Find Your Perfect Wedding Venue
                    </h1>
                    <p className="text-xl text-center mb-8">
                      Discover and book the best marriage halls in your city
                    </p>
                  </div>
                </div>

                {/* Search Filters */}
                <div className="container mx-auto px-4">
                  <SearchFilters />

                  {/* Wedding Categories */}
                  <WeddingCategories />

                  {/* Featured Venues */}
                  <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Venues</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {venues.map((venue) => (
                        <HallCard key={venue.id} hall={venue} />
                      ))}
                    </div>
                  </div>


                  {/* Real Wedding Stories */}
                  <RealWeddingStories />
                </div>
              </>
            }
          />
          <Route path="/venue/:id" element={<VenueDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/story/:id" element={<StoryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;