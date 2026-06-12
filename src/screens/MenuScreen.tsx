import React, { useState, useEffect, useRef } from "react";
import SEO from "../components/SEO";
import menuData from "../data/menu.json";

export default function MenuScreen() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = menuData.categories[activeCategoryIndex];
  const scrollRef = useRef<HTMLDivElement>(null);

  // Update horizontal nav scroll when active category changes
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const activeButton = container.children[activeCategoryIndex] as HTMLButtonElement;
      if (activeButton) {
        const scrollLeft = activeButton.offsetLeft - (container.clientWidth / 2) + (activeButton.clientWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeCategoryIndex]);

  const handleCategoryClick = (index: number) => {
    setActiveCategoryIndex(index);
  };

  const cardColors = ["bg-primary", "bg-secondary", "bg-tertiary", "bg-black"];
  const textColors = ["text-white", "text-black", "text-white", "text-white"];

  return (
    <main className="pb-32 bg-neutral min-h-screen">
      <SEO 
        title="Menu | Alberto's Crystal Cafe" 
        description="Explore our menu of comfort classics, daily specials, and local favorites. Bold West Texas flavors."
        path="/menu"
      />
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16 relative overflow-hidden border-b-4 border-black bg-[#F8F8F8]">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="space-y-4 relative z-10 flex-1">
            <div className="flex flex-col items-start gap-2 mb-6 -rotate-2 transform origin-left">
              <h1 className="font-brand-display font-black uppercase text-[4.5rem] md:text-[7rem] leading-none tracking-tighter text-black bg-secondary px-4 py-1 border-4 border-black neo-shadow">
                OUR
              </h1>
              <h1 className="font-brand-display font-black uppercase text-[4.5rem] md:text-[7rem] leading-none tracking-tighter text-white bg-primary px-4 py-1 border-4 border-black neo-shadow ml-8 md:ml-16">
                MENU
              </h1>
            </div>
            <p className="font-brand-sans text-base md:text-lg lg:text-xl font-medium max-w-lg mt-4 mb-4">
              Experience the energy of bold spices and slow-cooked comfort infused into every bite. Alberto's Crystal Cafe serves up West Texas flavor with Neo-Brutalist aesthetics.
            </p>
            <h2 className="inline-block bg-tertiary text-secondary font-brand-display font-bold px-5 py-2.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2 transform uppercase tracking-widest text-sm mt-2">
              COMFORT CRAFTED
            </h2>
          </div>
          <div className="relative w-5/6 sm:w-2/3 md:w-full max-w-md mx-auto md:ml-auto md:mr-12 mt-8 md:mt-0 flex-1">
            <div className="border-4 border-black bg-[#F8F8F8] neo-shadow p-2 rotate-3 transform">
              <img 
                className="w-full aspect-[4/5] object-cover border-2 border-black" 
                alt="Chicken Fajitas and Salsa" 
                src="/chicken-fajitas-and-salsa.webp" 
              />
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-left-4 md:-left-8 bg-primary text-white p-3 md:p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-6 transform z-10">
              <p className="font-brand-display font-black leading-tight uppercase text-base md:text-xl whitespace-nowrap text-center">How About<br/>Them<br/>Fajita's!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Category Scroll */}
      <div className="sticky top-[52px] sm:top-[68px] z-40 bg-neutral py-4 border-b-4 border-black shadow-md">
        <div className="max-w-6xl mx-auto relative px-2">
           <div 
             ref={scrollRef}
             className="overflow-x-auto hide-scrollbar flex items-center gap-3 md:gap-4 px-2 snap-x"
           >
             {menuData.categories.map((category: any, index: number) => (
               <button 
                 key={index} 
                 onClick={() => handleCategoryClick(index)}
                 className={`snap-center shrink-0 px-6 py-3 font-brand-display font-bold text-lg md:text-xl border-2 border-black uppercase transition-all whitespace-nowrap ${
                   activeCategoryIndex === index 
                     ? 'bg-primary text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1' 
                     : 'bg-white text-black hover:bg-secondary active:scale-95'
                 }`}
               >
                 {category.category}
               </button>
             ))}
           </div>
        </div>
      </div>

      {/* Active Category Items Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-8 md:mt-12 min-h-[50vh]">
        <div className="mb-8 border-b-4 border-black pb-4 flex items-center justify-between">
          <h2 className="font-brand-display text-4xl sm:text-5xl font-black uppercase text-tertiary transform -rotate-1">
            {activeCategory.category}
          </h2>
          {/* Added a playful colorful block to category headers */}
          <div className={`hidden sm:block w-16 h-4 border-2 border-black neo-shadow transform rotate-3 ${cardColors[activeCategoryIndex % cardColors.length]}`}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activeCategory.items.map((item: any, itemIndex: number) => {
            // Determine color accents for the card
            const colorIdx = itemIndex % cardColors.length;
            const accentBg = cardColors[colorIdx];
            const accentText = textColors[colorIdx];

            return (
              <MenuItem 
                key={itemIndex}
                title={item.name}
                description={item.description}
                price={typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}
                imgSrc={item.imgSrc}
                accentBg={accentBg}
                accentText={accentText}
              />
            );
          })}
        </div>
      </div>

    </main>
  );
}

function MenuItem({ title, description, price, imgSrc, accentBg, accentText }: { title: string, description: string, price: string, imgSrc?: string, accentBg: string, accentText: string }) {
  // Use a pseudo-random rotation for the price tag
  const rotateClass = Math.random() > 0.5 ? 'rotate-2' : '-rotate-2';

  return (
    <div className={`bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col transition-transform hover:-translate-y-2 group relative overflow-hidden`}>
      {imgSrc && (
        <div className="aspect-[4/3] border-b-4 border-black overflow-hidden relative">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={title} src={imgSrc} />
        </div>
      )}
      
      <div className="p-5 flex-1 flex flex-col z-10 relative">
        <div className="mb-2 mt-1">
          <h3 className="font-brand-display text-3xl sm:text-4xl font-black text-black uppercase leading-none tracking-tight">{title}</h3>
        </div>
        
        {description && <p className="font-brand-sans text-sm text-stone-600 flex-1 mb-6 leading-relaxed mt-1">{description}</p>}
        
        <div className="mt-auto flex justify-end items-end">
          <span className={`inline-block px-3 py-1 border-2 border-black font-brand-display font-bold text-sm whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform ${rotateClass} ${accentBg} ${accentText}`}>
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}
