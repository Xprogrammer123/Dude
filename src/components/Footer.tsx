
import { motion } from "framer-motion";
import { Star, Instagram, Twitter, Facebook } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Star className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              TikMaker
            </span>
          </div>
          <div className="flex space-x-6">
            <motion.a
              href="#"
              whileHover={{
                scale: 1.1,
              }}
              className="text-gray-600 hover:text-pink-500"
            >
              <Instagram className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{
                scale: 1.1,
              }}
              className="text-gray-600 hover:text-pink-500"
            >
              <Twitter className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{
                scale: 1.1,
              }}
              className="text-gray-600 hover:text-pink-500"
            >
              <Facebook className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 text-sm">
          © 2023 TikMaker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
