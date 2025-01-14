import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Palette, Heart, Building2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    icon: Building2,
    name: 'Venues',
    path: '/venues',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
  },
  {
    icon: Camera,
    name: 'Photographers',
    path: '/photographers',
    image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&q=80',
  },
  {
    icon: Palette,
    name: 'Makeup',
    path: '/makeup',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80',
  },
  {
    icon: Video,
    name: 'Pre Wedding Shoot',
    path: '/pre-wedding',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80',
  },
  {
    icon: Sparkles,
    name: 'Planning & Decor',
    path: '/planning',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
  },
  {
    icon: Heart,
    name: 'Bridal Wear',
    path: '/bridal-wear',
    image: 'https://plus.unsplash.com/premium_photo-1661609526719-7fc1899736ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const WeddingCategories = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Wedding Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link
                  to={category.path}
                  className="block relative overflow-hidden rounded-lg shadow-md"
                >
                  <div className="relative h-64">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-30" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <Icon className="h-12 w-12 mb-3" />
                      <span className="text-lg font-semibold">{category.name}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};