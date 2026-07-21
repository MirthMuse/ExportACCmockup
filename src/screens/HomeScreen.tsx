import { ArrowRight, MapPin, Star, Utensils, Truck, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function HomeScreen() {
  return (
    <div className="w-full">
      {/* SECTION 1: Hero & Welcome (Solid Crisp Neutral Background) */}
      <main className="p-4 space-y-8 max-w-6xl mx-auto z-10">
        <SEO />
        
        {/* Welcome Message */}
        <section className="mt-8 mb-12">
          <div className="relative inline-block -rotate-3 bg-secondary border-4 border-black px-6 py-4 neo-shadow-lg mb-6">
            <h1 className="font-display text-5xl md:text-6xl font-black uppercase text-black leading-none">
              The Taste of West Texas
            </h1>
          </div>
          <p className="font-sans text-lg md:text-xl max-w-md mt-4 font-bold uppercase tracking-tight">
            FIVE DECADES OF PERFECTING FLAVOR AND CRAFTING A HERITAGE THAT CREATES THE AROMA OF HOME.
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
              poster="/steak_ranchero_1200x.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/Alberto's To Be Served Opening.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute top-4 left-4 bg-tertiary text-white border-2 border-black px-4 py-1.5 font-display font-bold uppercase text-sm -rotate-2 tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
              A WEST TEXAS TRADITION
            </div>
          </div>
          
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center flex-1 z-10 relative overflow-hidden bg-white">
            <div className="mb-6 md:mb-12 text-center md:text-left xl:pr-10 relative z-10">
              <h2 className="font-display text-5xl min-[400px]:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-black uppercase text-black leading-none tracking-tight mb-3 md:mb-4 lg:mb-6">
                PROVECHO!
              </h2>
              <p className="font-sans font-bold text-stone-600 uppercase tracking-widest text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                IN SERVICE SINCE 1974
              </p>
            </div>
            
            <div className="w-full flex justify-center md:justify-start relative z-10">
              <Link 
                to="/about"
                className="inline-block border-4 border-black bg-primary px-8 lg:px-10 py-3 lg:py-4 text-center font-display text-lg sm:text-xl lg:text-2xl font-black uppercase text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none sm:-rotate-1 sm:hover:rotate-1"
              >
                OUR STORY
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 2: The Quick Actions (Bento Grid) on clean solid f8f8f8 background */}
      <div className="w-full bg-[#f8f8f8] border-y-4 border-black py-16 my-12">
        <div className="max-w-6xl mx-auto px-4">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Order Now */}
            <a href="https://online.skytab.com/s/albertos" target="_blank" rel="noopener noreferrer" className="bg-secondary border-4 border-black p-6 neo-shadow flex flex-col justify-between min-h-[220px] active-press hover-jiggle transition-all cursor-pointer relative overflow-hidden">
              <div>
                <Utensils className="text-black mb-4" size={40} strokeWidth={2.5} />
                <h2 className="font-display text-3xl font-bold uppercase leading-none">ORDER<br />NOW</h2>
              </div>
              <div className="flex justify-between items-end mt-4">
                <p className="font-display font-bold text-xs uppercase tracking-widest text-black/75">Skip the line</p>
                <ArrowRight size={24} strokeWidth={2.5} />
              </div>
            </a>
            
            {/* View Menu */}
            <Link to="/menu" className="bg-tertiary text-white border-4 border-black p-6 neo-shadow flex flex-col justify-between min-h-[220px] active-press hover-jiggle transition-all cursor-pointer relative overflow-hidden">
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
            <Link to="/contact" className="bg-white border-4 border-black p-6 neo-shadow flex flex-col justify-between min-h-[220px] active-press hover-jiggle transition-all cursor-pointer relative overflow-hidden">
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
        </div>
      </div>
 
      {/* SECTION 3: Pickup Window & Delivery Showcase (Contrasting subtle Diagonal Stripe background band) */}
      <div className="w-full bg-[#f8f8f8] py-16 pb-28 neo-stripes-subtle border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4">
          {/* Unified Showcase Box matching Hero Section layout */}
          <div className="border-4 border-black bg-white neo-shadow-lg flex flex-col md:flex-row overflow-hidden relative">
            
            {/* Left: Custom Showcase Image */}
            <div className="relative w-full md:w-[45%] lg:w-[40%] border-b-4 md:border-b-0 md:border-r-4 border-black shrink-0 bg-stone-100">
              <img 
                src="/Muchas Gracias To Go Order.webp" 
                alt="Muchas Gracias To Go Order - Pickup Window & Delivery" 
                className="w-full h-full object-cover min-h-[300px] md:min-h-full"
                referrerPolicy="no-referrer"
              />
              {/* Retro badge overlay */}
              <div className="absolute top-4 left-4 bg-secondary text-black font-display font-black text-sm uppercase px-4 py-2 border-2 border-black -rotate-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                TO-GO & DELIVERY!
              </div>
            </div>

            {/* Right: Info and Action Content */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between flex-1 bg-white">
              <div>
                <span className="bg-primary text-white font-display font-black text-xs uppercase tracking-[0.2em] px-3 py-1.5 border-2 border-black inline-block mb-4">
                  FAST & CONVENIENT
                </span>
                
                <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-black leading-none mb-4">
                  WE DELIVER DIRECT TO YOU & HAVE A DRIVE-UP WINDOW!
                </h2>
                
                <p className="font-sans text-stone-700 text-base md:text-lg mb-6 leading-relaxed">
                  Kick back at home and let our speedy delivery squad bring the fresh heat straight to your door! Or, if you're on the move, roll up to our drive-up window or step right inside to grab your feast.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {/* Delivery Card (Featured) */}
                  <div className="border-4 border-black p-4 bg-amber-50 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="absolute -top-3 -right-3 bg-tertiary text-white font-display font-black text-[10px] uppercase px-2 py-0.5 border-2 border-black rotate-6 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      FEATURED
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-tertiary p-1.5 border-2 border-black inline-flex items-center justify-center">
                        <Truck size={18} className="text-white" strokeWidth={2.5} />
                      </div>
                      <h3 className="font-display font-black text-lg uppercase tracking-tight text-primary">SPEEDY DELIVERY</h3>
                    </div>
                    <p className="font-sans text-xs text-stone-700 leading-normal">
                      Relax at home! Order online and we'll bring our legendary, bold flavor directly to your location.
                    </p>
                  </div>

                  {/* Pick-up Card */}
                  <div className="border-2 border-black p-4 bg-neutral relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] opacity-95">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-secondary p-1.5 border-2 border-black inline-flex items-center justify-center">
                        <ShoppingBag size={18} className="text-black" strokeWidth={2.5} />
                      </div>
                      <h3 className="font-display font-black text-lg uppercase tracking-tight">EASY PICK-UP</h3>
                    </div>
                    <p className="font-sans text-xs text-stone-600 leading-normal">
                      Drive up to our pickup window or step right inside the restaurant to collect your order.
                    </p>
                  </div>
                </div>
              </div>

              <a 
                href="https://online.skytab.com/s/albertos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary text-white border-4 border-black inline-block text-center w-full py-4 font-display text-xl font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active-press hover-jiggle"
              >
                ORDER ONLINE NOW
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
