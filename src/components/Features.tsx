
import { motion } from "framer-motion";
import { Video, Music, Sparkles, Share2 } from "lucide-react";
export function Features() {
  const features = [
    {
      icon: Video,
      title: "Smart Video Editor",
      description: "Edit videos like a pro with our intuitive tools",
    },
    {
      icon: Music,
      title: "Trending Music",
      description: "Access the latest viral music tracks",
    },
    {
      icon: Sparkles,
      title: "Effects Library",
      description: "Add stunning effects with one click",
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share directly to TikTok in seconds",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          Powerful Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
