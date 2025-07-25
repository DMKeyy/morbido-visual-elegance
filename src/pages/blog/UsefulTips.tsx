
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const UsefulTips = () => {
  const tips = [
    {
      title: "Choosing the Right Sofa Size",
      excerpt: "Learn how to measure your space and select the perfect sofa proportions for your living room.",
      date: "March 15, 2024"
    },
    {
      title: "Caring for Solid Wood Furniture",
      excerpt: "Essential maintenance tips to keep your wooden furniture looking beautiful for decades.",
      date: "March 10, 2024"
    },
    {
      title: "Creating Visual Balance",
      excerpt: "Simple principles for arranging furniture to create harmony and flow in any room.",
      date: "March 5, 2024"
    },
    {
      title: "Mixing Textures and Materials",
      excerpt: "How to combine different materials and textures for a sophisticated, layered look.",
      date: "February 28, 2024"
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-soft-cream relative">
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-36 right-10 w-28 h-28 bg-warm-brown/5 rounded-full"
          animate={{ 
            y: [0, -16, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-12 w-22 h-22 bg-warm-brown/6 rounded-full"
          animate={{ 
            y: [0, 12, 0],
            x: [0, 8, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/5 w-16 h-16 bg-warm-brown/4 rounded-full"
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <Header />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-charcoal-black mb-8">
            Useful Tips
          </h1>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto">
            Expert advice and practical guidance to help you make the most of your furniture and living spaces.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {tips.map((tip, index) => (
              <article key={index} className="bg-pure-white rounded-2xl p-8 soft-shadow hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-medium text-charcoal-black mb-4">{tip.title}</h2>
                    <p className="text-lg text-medium-grey leading-relaxed mb-4">{tip.excerpt}</p>
                    <time className="text-sm text-warm-brown font-medium">{tip.date}</time>
                  </div>
                  <div className="w-full lg:w-48 aspect-video bg-light-grey rounded-xl overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-warm-brown/20 to-medium-grey/10" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default UsefulTips;
