
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-5/12 px-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="hero-content"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Create. Share.
                <br />
                Go Viral!
              </h1>
              <p className="text-lg text-gray-600 mb-10">
                Transform your ideas into viral TikTok videos with our free,
                easy-to-use platform. No experience needed!
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium text-lg shadow-lg flex items-center"
              >
                Try It Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
          <div className="w-full lg:w-7/12 px-4 mt-12 lg:mt-0">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=2574"
                alt="TikTok Creation Platform"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-20" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
