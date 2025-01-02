import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "How does TikMaker work?",
      answer:
        "TikMaker provides an easy-to-use platform where you can upload your content, edit it with our tools, and share it directly to TikTok.",
    },
    {
      question: "Is TikMaker really free?",
      answer:
        "Yes! TikMaker is completely free to use with all basic features. We also offer premium features for power users.",
    },
    {
      question: "Can I use TikMaker on mobile?",
      answer:
        "Absolutely! TikMaker is fully responsive and works great on both desktop and mobile devices.",
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
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
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
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-md"
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-pink-500" />
                ) : (
                  <Plus className="h-5 w-5 text-pink-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white shadow-md rounded-b-lg mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
