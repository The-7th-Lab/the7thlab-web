"use client";

import React from 'react';
import Link from 'next/link';
import QuickEmailForm from "../components/Forms/QuickEmailForm";

// Using iframe embed instead of Spline component

const Home = () => {
  return (
    <div className="min-h-screen">
       {/* Hero Section */}
       <section className="relative h-[80vh] w-full overflow-hidden">
         {/* Spline Background - Layer 1 (Deepest) */}
         <div className="absolute inset-0 z-0">
           <iframe 
             src='https://my.spline.design/the7thlabbackgroundii-SUqEmpJBmwta4BT22ck7aFWG/' 
             style={{ border: 'none' }}
             width='100%' 
             height='100%'
             className="w-full h-full"
           />
         </div>
         
         {/* Slanted Black Background - Layer 2 (Middle) */}
         <div className="absolute bottom-0 left-0 w-full h-3/4 z-10 bg-Black" style={{
           clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)'
         }}>
          <div className="container mx-auto h-full max-w-[1080px] border-x-[0.5px] border-border-dark px-[10px]">
          </div>
         </div>
         
         {/* Content Layer - Layer 3 (Top) */}
         <div className="relative z-20 h-full flex pt-[80px]">
           <div className="container mx-auto max-w-[1080px] px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* Text Content - Left Side */}
               <div className="space-y-8">
                {/* Attention Banner */}
                <Link href="/projects" className="inline-block">
                  <div className="px-3 py-3 bg-blueLagoon/20 rounded-[10px] hover:bg-blueLagoon/40 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-White/80">
                        <span className="font-medium text-blueLagoon px-2 py-1 bg-blueLagoon/20 rounded-[7px] mr-2">Latest</span>Project List PL_001 is now in active development
                      </span>
                    </div>
                  </div>
                </Link>
                 <h1 className="text-5xl font-medium font-sans leading-tight">
                   Open-source innovation that answers to people.
                 </h1>
                 <p className="text-md text-[#a1a1a1] leading-relaxed">
                   The 7th Lab builds sustainable open-source tools and platforms. Each project drives accountability in big tech and delivers real value to end users.
                 </p>
                 <div className="flex gap-4">
                   <QuickEmailForm />
                 </div>
               </div>
               
               {/* Image/Visual Content - Right Side */}
               <div className="flex justify-center lg:justify-end">
                 <div className="w-full max-w-md h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center">
                   <div className="text-center text-gray-400">
                     <div className="w-24 h-24 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                       <span className="text-2xl">🚀</span>
                     </div>
                     <p className="text-sm">Visual Content Placeholder</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* About Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-5">
        <div className="container mx-auto h-full max-w-[1080px] border-x-[0.5px] border-border-dark px-[10px]">
        </div>
      </section>

      {/* Services Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-5">
        <div className="container mx-auto h-full max-w-[1080px] border-x-[0.5px] border-border-dark px-[10px]">
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-5">
        <div className="container mx-auto h-full max-w-[1080px] border-x-[0.5px] border-border-dark px-[10px]">
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-5">
        <div className="container mx-auto h-full max-w-[1080px] border-x-[0.5px] border-border-dark px-[10px]">
        </div>
      </section>
    </div>
  );
};

export default Home;