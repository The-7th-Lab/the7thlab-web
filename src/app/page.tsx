"use client";

import React, { useState, useEffect } from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Attention Banner Section */}
      <section className="flex items-center justify-center w-full px-5 py-8">
        <div className="container mx-auto my-auto h-full max-w-[1080px] px-[10px]">
          {/* Attention Banner */}
          <div className="px-4 py-3">
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-Vermilion">Latest</span> AI Gateway is now generally available • Global hackathon now live
              </span>
              <button className="px-4 py-1.5 bg-Vermilion text-White text-sm font-medium rounded-md hover:bg-opacity-90 transition-colors duration-200">
                explore
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="flex items-center justify-center h-[720px] w-full px-5">
        <div className="container flex flex-col items-center justify-center mx-auto h-full max-w-[1080px] px-[10px] relative">
          {/* 12x8 Grid Background */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-0 pointer-events-none border-l border-t border-border-light dark:border-border-dark">
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
          <div className="flex flex-col items-center justify-center relative z-10 p-3 min-w-[901px] min-h-[360px] border-[0.5px] border-border-light dark:border-border-dark bg-Zinc dark:bg-Black">
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