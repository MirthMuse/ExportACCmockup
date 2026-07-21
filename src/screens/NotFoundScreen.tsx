import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinOff, AlertTriangle, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundScreen() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 min-h-[70vh]">
      <SEO 
        title="404 Not Found | Alberto's Crystal Cafe" 
        description="Looks like you're lost. We can't find the page you're looking for, but we can help you find your way back to Alberto's."
        path="/404"
      />
      
      <div className="bg-primary text-white border-4 border-black p-8 md:p-12 neo-shadow-lg transform -rotate-1 max-w-2xl w-full text-center relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden flex items-center justify-center mt-12">
           <h2 className="text-[12rem] md:text-[15rem] leading-none whitespace-nowrap font-black font-display mix-blend-overlay rotate-[15deg] select-none">
             404 404
           </h2>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-32 h-32 bg-white border-4 border-black neo-shadow flex items-center justify-center -rotate-6 mb-8 hover-jiggle">
            <img src="/alberto logo.png" alt="Alberto's Logo" className="w-24 h-24 object-contain" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-black uppercase text-white mb-4 tracking-tighter">LOST IN THE DESERT?</h1>
          <p className="font-sans text-xl md:text-2xl font-bold mb-8 uppercase tracking-widest text-secondary">
            Error 404
          </p>

          <div className="bg-white text-black border-4 border-black p-6 w-full neo-shadow mb-8 transform rotate-1">
            <div className="flex justify-center gap-4 mb-4">
              <MapPinOff size={40} strokeWidth={2.5} className="text-primary" />
              <AlertTriangle size={40} strokeWidth={2.5} className="text-tertiary" />
            </div>
            <p className="font-sans text-lg font-bold">
              We searched everywhere—the kitchen, the walk-in, even under the tables—but we couldn't find the page you're looking for.
            </p>
          </div>

          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-3 bg-secondary text-black px-8 py-4 font-display font-bold uppercase border-4 border-black text-xl neo-shadow hover-jiggle hover:bg-white transition-colors group/btn active-press"
          >
            <ArrowLeft strokeWidth={2.5} className="group-hover/btn:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
