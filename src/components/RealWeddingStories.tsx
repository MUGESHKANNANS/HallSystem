import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const stories = [
  {
    id: '1',
    couple: 'Priya & Rahul',
    date: 'February 14, 2024',
    location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80',
    description: 'A beautiful beach wedding with traditional ceremonies',
  },
  {
    id: '2',
    couple: 'Anita & Vikram',
    date: 'March 1, 2024',
    location: 'Udaipur, Rajasthan',
    image: 'https://images.unsplash.com/flagged/photo-1620830102229-9db5c00d4afc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Royal palace wedding with modern touches',
  },
  {
    id: '3',
    couple: 'Sarah & Arjun',
    date: 'January 20, 2024',
    location: 'Goa',
    image: 'https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?auto=format&fit=crop&q=80',
    description: 'Destination wedding with sunset ceremonies',
  },
];

export const RealWeddingStories = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Real Wedding Stories</h2>
          <Link
            to="/stories"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            View All Stories
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={story.image}
                  alt={story.couple}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">{story.couple}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{story.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{story.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">{story.description}</p>
                <Link
                  to={`/story/${story.id}`}
                  className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700"
                >
                  <span>Read Their Story</span>
                  <Heart className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};