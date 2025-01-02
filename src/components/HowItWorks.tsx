
import { motion } from "framer-motion";
import { Layout, Wand2, Share } from "lucide-react";
export function HowItWorks() {
  const steps = [
    {
      icon: Layout,
      title: "Pick a Template",
      description: "Start with pre-made viral templates designed for success",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtYjB1Z2k4NWVxOWF4ZDR1bXA2aHBxdndqOGR5YnU2ZHV6YjlxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlQXlQ3nHyLMvte/giphy.gif",
    },
    {
      icon: Wand2,
      title: "Customize",
      description: "Add your text, music, and effects to make it unique",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXEyeWN0Y2twdWt6ZXd1Z2xxbzFqbDdqM2xxaW0xYmx1dWR1NWx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPz70v7PhX4M5Hi/giphy.gif",
    },
    {
      icon: Share,
      title: "Share & Go Viral",
      description: "Export in HD and share directly to TikTok",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHZxd2k3ZmQyY3QydWY4NjY5NmZ0ZnA2aWR5Y2txaW1icWx6ZHR6eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aCTPPm4OHfRLSH6/giphy.gif",
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
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
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.2,
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-8">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="rounded-2xl overflow-hidden shadow-xl relative"
                >
                  <img
                    src={step.gif}
                    alt={step.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              <motion.div
                className="mt-4 flex items-center justify-center"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  delay: index * 0.3,
                }}
              >
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-500 font-semibold">
                    {index + 1}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
