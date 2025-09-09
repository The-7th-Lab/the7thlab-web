"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
});

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Attention Banner Section */}
      <section className="flex items-center justify-center w-full px-5 py-8">
        <div className="container mx-auto my-auto h-full max-w-[1080px] px-[10px]">
          {/* Attention Banner */}
          <div className="px-4 py-3">
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="text-[#a1a1a1]">
                <span className="font-medium text-blueLagoon px-3 py-2 bg-blueLagoon/20 rounded-[100px] mr-2">Latest</span> Project List PL_001 is now in active development • Follow the progress
              </span>

              <Link
                    href="/projects"
                    className="px-4 py-2 bg-blueLagoon text-White text-sm font-medium rounded-[9px] hover:bg-opacity-90 transition-colors duration-200"
                >
                    Follow
                </Link>
            </div>
          </div>
        </div>
      </section>
       {/* Hero Section */}
       <section className="flex items-center justify-center h-[720px] w-full px-5">
         <div className="container flex flex-col items-center justify-center mx-auto h-full max-w-[1080px] px-[10px] relative">
           {/* Spline Background - Layer 1 (Bottom) */}
           <div className="absolute inset-0 z-0">
             <Spline 
               scene="https://prod.spline.design/6cP8ZMADLuZmfGON/scene.splinecode"
               className="w-full h-full"
             />
           </div>
           
           {/* Grid Background - Layer 2 (Middle) */}
           <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-0 pointer-events-none border-l border-t border-border-light dark:border-border-dark z-10">
             {Array.from({ length: 96 }, (_, i) => (
               <div
                 key={i}
                 className="border-r border-b border-border-light dark:border-border-dark relative"
                 style={{
                   //borderRightWidth: (i + 1) % 12 === 0 ? '0px' : '1px',
                   //borderBottomWidth: i >= 132 ? '0px' : '1px'
                 }}
               />
             ))}
           </div>
           
           {/* Card Content - Layer 3 (Top) */}
            <div className="flex flex-col items-center justify-center relative z-20 p-3 min-w-[901px] min-h-[360px] border-[0.5px] border-border-light dark:border-border-dark bg-Black opacity-85 backdrop-blur-lg">
             <h1 className="text-4xl font-bold">Welcome to my website</h1>
             <p className="text-lg">This is a simple website built with Next.js and Tailwind CSS.</p>
           </div>
         </div>
       </section>

      {/* About Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-5">
        <div className="container mx-auto h-full max-w-[1080px] border-x-[0.5px] border-border-light dark:border-border-dark px-[10px]">
        </div>
      </section>

      {/* Services Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-5">
        <div className="container mx-auto h-full max-w-[1080px] border-x-[0.5px] border-border-light dark:border-border-dark px-[10px]">
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-5">
        <div className="container mx-auto h-full max-w-[1080px] border-x-[0.5px] border-border-light dark:border-border-dark px-[10px]">
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-5">
        <div className="container mx-auto h-full max-w-[1080px] border-x-[0.5px] border-border-light dark:border-border-dark px-[10px]">
        </div>
      </section>
    </div>
  );
};

export default Home;