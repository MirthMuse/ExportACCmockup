import { ShoppingBasket, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import SEO from "../components/SEO";
import menuData from "../data/menu.json";

export default function MenuScreen() {
  return (
    <main className="pb-32 max-w-6xl mx-auto">
      <SEO 
        title="Menu | Alberto's Authentic Tex-Mex" 
        description="Explore our menu of smash tacos, volcano burritos, and comfort classics. Authentic flavors with a bold twist."
        path="/menu"
      />
      {/* Hero Section */}
      <section className="px-4 py-8 md:py-16 relative overflow-hidden border-b-4 border-black bg-white">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="space-y-4 relative z-10 flex-1">
            <div className="inline-block bg-secondary text-black font-display font-bold px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2 transform uppercase tracking-widest text-xs">
              COMFORT CRAFTED
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-primary uppercase leading-none mt-4">Our Menu</h1>
            <p className="font-sans text-base md:text-xl max-w-lg">
              Experience the energy of bold spices and slow-cooked comfort infused into every bite. Alberto's brings Neo-Brutalist aesthetics to Tex-Mex.
            </p>
          </div>
          <div className="relative w-5/6 sm:w-2/3 md:w-full max-w-md mx-auto md:ml-auto md:mr-12 mt-8 md:mt-0 flex-1">
            <div className="border-4 border-black bg-white neo-shadow p-2 rotate-3 transform">
              <img 
                className="w-full aspect-[4/5] object-cover border-2 border-black" 
                alt="Chicken Fajitas and Salsa" 
                src="/chicken-fajitas-and-salsa.webp" 
              />
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-left-4 md:-left-8 bg-primary text-white p-3 md:p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-6 transform z-10">
              <p className="font-display font-bold leading-tight uppercase text-base md:text-xl whitespace-nowrap text-center">How About<br/>Them<br/>Fajita's!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="px-4 mt-12 md:mt-20 space-y-12 md:space-y-16">
        {menuData.categories.map((category: any, index: number) => (
          <MenuCategory key={index} title={category.category} initialOpen={category.category?.toLowerCase().includes("legacy")}>
            {category.items.map((item: any, itemIndex: number) => (
              <MenuItem 
                key={itemIndex}
                title={item.name}
                description={item.description}
                price={typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}
                imgSrc={item.imgSrc}
              />
            ))}
          </MenuCategory>
        ))}
      </div>

    </main>
  );
}

function MenuCategory({ title, children, initialOpen = false }: { title: string, children: React.ReactNode, key?: React.Key, initialOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <section>
      <div 
        className="flex items-center gap-2 sm:gap-4 mb-4 md:mb-6 cursor-pointer select-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-display text-xl sm:text-3xl font-bold text-tertiary uppercase leading-none transition-colors group-hover:text-primary">{title}</h2>
        <div className="flex-1 h-1 bg-black min-w-[1rem]"></div>
        <div className="border-2 border-black bg-white p-1 group-hover:bg-secondary transition-colors shrink-0">
          {isOpen ? <ChevronUp size={24} strokeWidth={2.5} /> : <ChevronDown size={24} strokeWidth={2.5} />}
        </div>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-300 overflow-hidden ${isOpen ? 'opacity-100 max-h-[5000px] mt-6' : 'opacity-0 max-h-0'}`}>
        {children}
      </div>
    </section>
  );
}

function MenuItem({ title, description, price, imgSrc }: { title: string, description: string, price: string, imgSrc?: string, key?: React.Key }) {
  return (
    <div className="bg-white border-4 border-black neo-shadow flex flex-col transition-all hover:-translate-y-1">
      {imgSrc && (
        <div className="aspect-[4/3] border-b-4 border-black overflow-hidden relative">
          <img className="w-full h-full object-cover" alt={title} src={imgSrc} />
          <span className="absolute top-4 right-4 bg-secondary border-2 border-black px-3 py-1 font-display font-bold">{price}</span>
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="font-display text-xl font-bold text-black uppercase leading-tight">{title}</h3>
          {!imgSrc && <span className="font-display font-bold text-primary text-xl whitespace-nowrap">{price}</span>}
        </div>
        {description && <p className="font-sans text-sm text-stone-600 flex-1 mb-4">{description}</p>}
        {/*
        <button className="mt-auto w-full bg-primary text-white border-2 border-black py-3 font-display font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all uppercase">
          ADD TO ORDER
        </button>
        */}
      </div>
    </div>
  );
}
