import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export function About() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
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
          Our Story
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative"
          >
            <div className="relative z-10">
              <h3 className="font-dancing text-3xl text-pink-500 mb-4">
                Where Creativity Meets Viral Success
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Born from a passion for creative expression, TikMaker emerged as
                the go-to platform for aspiring content creators. We believe
                everyone has a story to tell, and we're here to help you tell it
                in the most engaging way possible.
              </p>
          
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="relative"
          >
            <motion.img
              style={{
                y: y2,
              }}
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXB1Y3k0M3QyZmV5ZWhmOWRtdXA0YjFkbHZqeXdxMjB6cXEzNmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlQXlQ3nHyLMvte/giphy.gif"
              alt="Social Media Success"
              className="rounded-2xl shadow-2xl mb-8"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <h3 className="font-dancing text-3xl text-purple-500 mb-6">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We're on a mission to democratize content creation and help everyone
            achieve their dreams of social media success. With TikMaker, you're
            not just creating videos – you're crafting viral moments that
            capture hearts and minds.
          </p>
          <motion.div
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="mt-8"
          >
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWI1ZDRnYnFyNnBjbTRyeXR5ZXdydnQwcmxpZGlseDJzM2Nwd2ppbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aCXpnE2y0YCCoJq/giphy.gif"
              alt="Our Vision"
              className="w-32 h-32 mx-auto rounded-full shadow-lg"
            />
          </motion.div>
        </motion.div>
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap");
          .font-dancing {
            font-family: "Dancing Script", cursive;
          }
        `}</style>
      </div>
    </section>
  );
}
