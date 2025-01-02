import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              VidMaker
            </span>
          </div>

          <Link to="/auth" className="flex space-x-4">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium shadow-lg"
            >
             Start for Free
            </motion.button>
            
          </Link>
        </div>
      </div>
    </header>
  );
}
