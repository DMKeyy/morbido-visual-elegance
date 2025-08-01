
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NewProducts = () => {
  const products = [
    {
      title: "Introducing the Zen Collection",
      excerpt: "Our latest line combines Japanese minimalism with Scandinavian functionality for ultimate serenity.",
      date: "March 25, 2024",
      isNew: true
    },
    {
      title: "Artisan Dining Tables Now Available",
      excerpt: "Handcrafted solid wood dining tables that celebrate the natural beauty of sustainable materials.",
      date: "March 22, 2024",
      isNew: true
    },
    {
      title: "Modular Seating System Launch",
      excerpt: "Revolutionary modular seating that adapts to your space and lifestyle with endless configuration possibilities.",
      date: "March 15, 2024"
    },
    {
      title: "Smart Storage Solutions",
      excerpt: "Innovative storage furniture that maximizes space while maintaining our signature aesthetic appeal.",
      date: "March 10, 2024"
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-soft-cream relative">
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-40 right-12 w-26 h-26 bg-warm-brown/5 rounded-full"
          animate={{ 
            y: [0, -18, 0],
            scale: [1, 1.12, 1]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-24 left-16 w-20 h-20 bg-warm-brown/8 rounded-full"
          animate={{ 
            y: [0, 16, 0],
            x: [0, 12, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-14 h-14 bg-warm-brown/6 rounded-full"
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <Header />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-charcoal-black mb-8">
            New Products
          </h1>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto">
            Stay updated with our latest furniture releases and discover the newest additions to our collections.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {products.map((product, index) => (
              <article key={index} className="bg-pure-white rounded-2xl p-8 soft-shadow hover:scale-[1.02] transition-transform duration-300 cursor-pointer relative">
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-warm-brown text-white px-3 py-1 rounded-full text-sm font-medium">
                    New
                  </div>
                )}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-medium text-charcoal-black mb-4">{product.title}</h2>
                    <p className="text-lg text-medium-grey leading-relaxed mb-4">{product.excerpt}</p>
                    <time className="text-sm text-warm-brown font-medium">{product.date}</time>
                  </div>
                  <div className="w-full lg:w-48 aspect-video bg-light-grey rounded-xl overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-warm-brown/25 to-soft-cream/60" />
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

export default NewProducts;
