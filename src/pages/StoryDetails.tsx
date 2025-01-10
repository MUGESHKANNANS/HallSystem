import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart } from 'lucide-react';

export const StoryDetails = () => {
  const { id } = useParams();
  // In a real app, fetch story details using the id
  const story = {
    id: '1',
    couple: 'Priya & Rahul',
    date: 'February 14, 2024',
    location: 'Mumbai, Maharashtra',
    images: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595407753234-0882f1e77954?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80',
    ],
    description: 'A beautiful beach wedding with traditional ceremonies',
    story: `Their love story began at a mutual friend's party where they instantly connected over their shared love for travel and photography. After dating for two years, Rahul proposed on a scenic beach at sunset. They planned their dream wedding that perfectly blended modern elegance with traditional customs.

The wedding was a three-day celebration filled with joy, laughter, and unforgettable moments. From the vibrant mehendi ceremony to the romantic beach-side reception, every event was thoughtfully curated to reflect their journey together.`,
    venue: 'Sunset Beach Resort',
    vendors: {
      photographer: 'PixelPerfect Studios',
      decorator: 'Elegant Events',
      makeup: 'Glamour Studio',
    }
  };

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="grid grid-cols-2 gap-4 p-4">
            <img
              src={story.images[0]}
              alt={story.couple}
              className="w-full h-96 object-cover rounded-lg col-span-2"
            />
            <img
              src={story.images[1]}
              alt={story.couple}
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src={story.images[2]}
              alt={story.couple}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">{story.couple}</h1>
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                <span>{story.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-purple-600" />
                <span>{story.location}</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Their Story</h2>
              <p className="text-gray-600 whitespace-pre-line">{story.story}</p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Wedding Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Venue</h3>
                  <p className="text-gray-600">{story.venue}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Vendors</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Photography: {story.vendors.photographer}</li>
                    <li>Decoration: {story.vendors.decorator}</li>
                    <li>Makeup: {story.vendors.makeup}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};