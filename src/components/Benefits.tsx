
import { motion } from "framer-motion";
import { Trophy, Users, Zap, ChartBar } from "lucide-react";
import CountUp from "react-countup";
export function Benefits() {
  const benefits = [
    {
      icon: Trophy,
      title: "Likes Boost",
      description: "Get 10k+ likes in just days!",
      stat: "10,000",
      unit: "Likes",
    },
    {
      icon: Users,
      title: "Follows Growth",
      description: "Grow your following fast",
      stat: "5,000",
      unit: "Followers",
    },
    {
      icon: Zap,
      title: "Quick Popularity",
      description: "Go viral within hours",
      stat: "24",
      unit: "Hours",
    },
    {
      icon: ChartBar,
      title: "Engagement Rate",
      description: "High engagement guaranteed",
      stat: "45",
      unit: "%",
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
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
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
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
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/20 shadow-xl"
            >
              <benefit.icon className="h-12 w-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <div className="text-3xl font-bold text-purple-600">
                <CountUp
                  end={parseInt(benefit.stat.replace(/,/g, ""))}
                  duration={2.5}
                  separator=","
                />
                <span className="text-lg ml-1">{benefit.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
