import { ArrowRight, ShoppingCart, MapPin, Star, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function HomeScreen() {
  return (
    <main className="p-4 space-y-8 max-w-6xl mx-auto pb-32">
      <SEO />
      {/* Welcome Message */}
      <section className="mt-8 mb-12">
        <div className="relative inline-block -rotate-3 bg-secondary border-4 border-black px-6 py-4 neo-shadow-lg mb-6">
          <h1 className="font-display text-5xl md:text-6xl font-black uppercase text-black leading-none">
            The Taste of West Texas
          </h1>
        </div>
        <p className="font-sans text-lg md:text-xl max-w-md mt-4 font-bold uppercase tracking-tight">
          Five decades of perfecting flavor crafted a heritage that brings you the aroma of home.
        </p>
      </section>

      {/* Hero: Video Spotlight */}
      <section className="border-4 border-black neo-shadow-lg flex flex-col md:flex-row bg-white overflow-hidden relative mb-8">
        <div className="relative w-full aspect-[4/5] md:w-[45%] lg:w-[40%] xl:w-[35%] border-b-4 md:border-b-0 md:border-r-4 border-black shrink-0 bg-stone-900 mx-auto md:mx-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Alberto's To Be Served Opening.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute top-4 left-4 bg-tertiary text-white border-2 border-black px-4 py-1.5 font-display font-bold uppercase text-sm -rotate-2 tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
            A WEST TEXAS TRADITION
          </div>
        </div>
        
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center flex-1 z-10">
          <div className="mb-6 md:mb-12 text-center md:text-left xl:pr-10">
            <h2 className="font-display text-5xl min-[400px]:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-black uppercase text-black leading-none tracking-tight mb-3 md:mb-4 lg:mb-6">
              PROVECHO!
            </h2>
            <p className="font-sans font-bold text-stone-600 uppercase tracking-widest text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              IN SERVICE SINCE 1974
            </p>
          </div>
          
          <div className="w-full flex justify-center md:justify-start">
            <Link 
              to="/about"
              className="inline-block border-4 border-black bg-primary px-8 lg:px-10 py-3 lg:py-4 text-center font-display text-lg sm:text-xl lg:text-2xl font-black uppercase text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none sm:-rotate-1 sm:hover:rotate-1"
            >
              OUR STORY
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Action Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Order Now */}
        <a href="https://online.skytab.com/s/albertos" target="_blank" rel="noopener noreferrer" className="bg-secondary border-4 border-black p-6 neo-shadow flex flex-col justify-between min-h-[220px] active-press hover-jiggle transition-all cursor-pointer">
          <div>
            <Utensils className="text-black mb-4" size={40} strokeWidth={2.5} />
            <h2 className="font-display text-3xl font-bold uppercase leading-none">ORDER<br />NOW</h2>
          </div>
          <div className="flex justify-between items-end mt-4">
            <p className="font-display font-bold text-xs uppercase tracking-widest">Skip the line</p>
            <ArrowRight size={24} strokeWidth={2.5} />
          </div>
        </a>
        
        {/* View Menu */}
        <Link to="/menu" className="bg-tertiary text-white border-4 border-black p-6 neo-shadow flex flex-col justify-between min-h-[220px] active-press hover-jiggle transition-all cursor-pointer">
          <div>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="mb-4"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            <h2 className="font-display text-3xl font-bold uppercase leading-none">VIEW<br />MENU</h2>
          </div>
          <div className="flex justify-between items-end mt-4">
            <p className="font-display font-bold text-xs uppercase tracking-widest text-[#dee9ff]">Explore</p>
            <ArrowRight size={24} strokeWidth={2.5} />
          </div>
        </Link>

        {/* Find Us */}
        <Link to="/contact" className="bg-white border-4 border-black p-6 neo-shadow flex flex-col justify-between min-h-[220px] active-press hover-jiggle transition-all cursor-pointer">
          <div>
             <MapPin size={40} className="text-black mb-4" strokeWidth={2.5} />
             <h2 className="font-display text-3xl font-bold uppercase leading-none">VISIT<br/>US</h2>
          </div>
          <div className="flex justify-between items-end mt-4">
             <p className="font-display font-bold text-xs uppercase tracking-widest text-stone-500">Big Spring, TX</p>
             <ArrowRight size={24} strokeWidth={2.5} />
          </div>
        </Link>
      </section>

      {/* Rewards Sticker */}
      <section className="py-12 flex justify-center pb-24">
        <div className="relative rotate-3 bg-primary border-4 border-black p-8 neo-shadow-lg text-center w-full max-w-lg">
          <h2 className="font-display text-3xl font-bold text-white uppercase mb-2">REWARDS PROGRAM</h2>
          <p className="text-white font-sans text-xl font-bold mb-4 uppercase tracking-widest text-center py-4">
            Coming Soon!
          </p>
          <Link to="/contact" state={{ tab: 'rewards' }} className="bg-white border-2 border-black inline-block px-8 py-3 font-display font-bold text-xl uppercase neo-shadow text-black active-press hover-jiggle">
            SIGN UP FOR UPDATES
          </Link>
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary border-2 border-black rounded-full flex items-center justify-center -rotate-6">
            <Star className="text-black fill-black" size={32} />
          </div>
        </div>
      </section>
      
    </main>
  );
}
