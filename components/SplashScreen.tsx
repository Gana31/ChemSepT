'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SplashScreen: React.FC = () => {
  const columns = 5;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none bg-[#0a1120]">
      {/* 
        Laboratory Atmosphere Layer
        Using a rich Midnight Navy with a subtle blueprint grid
      */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1c35] via-[#0a1120] to-[#040812]" />
        
        {/* Subtle Blueprint Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
        
        {/* Animated Glow "Reactions" */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f86d70]/10 blur-[120px] rounded-full"
        />
      </div>

      {/* 
        Glassy Staggered Exit Columns
        These provide the translucent "melt-in" reveal
      */}
      <div className="absolute inset-0 flex z-[10]">
        {[...Array(columns)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '0%' }}
            exit={{ 
              y: '-100%',
              transition: { 
                duration: 0.9, 
                ease: [0.76, 0, 0.24, 1],
                delay: i * 0.1 
              } 
            }}
            className="h-full bg-[#0a1120]/95 backdrop-blur-xl border-r border-white/5"
            style={{ width: `${100 / columns}%` }}
          />
        ))}
      </div>

      {/* 
        Central Content (Logo)
        Layered clearly on top
      */}
      <motion.div
        exit={{ 
          opacity: 0, 
          scale: 0.9,
          filter: 'blur(12px)',
          transition: { duration: 0.5 } 
        }}
        className="relative z-[20] flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, filter: 'blur(15px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative px-12 py-8"
        >
          {/* Scientific Glow Aura */}
          <div className="absolute inset-0 bg-[#f86d70]/5 blur-3xl rounded-full scale-75 opacity-70" />
          
          <div className="relative">
            <Image
              src="/chemlogo1.png"
              alt="ChemSepT"
              width={280}
              height={120}
              priority
              className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            />
            
            {/* Elegant Scanline / Processing Line */}
            <motion.div 
              className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#f86d70] to-transparent"
              initial={{ width: 0, opacity: 0, x: '-50%' }}
              animate={{ width: '200%', opacity: 1, x: '0%' }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Technical Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <span className="text-white text-[10px] tracking-[0.6em] font-light uppercase">
            Engineering the Future
          </span>
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.3 
                }}
                className="w-1 h-1 bg-[#f86d70] rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Glassy Overlay Grain */}
      <div className="absolute inset-0 z-[100] opacity-[0.05] pointer-events-none mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default SplashScreen;
