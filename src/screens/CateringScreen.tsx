import { Utensils, Users, Truck, Calendar } from "lucide-react";
import React from "react";
import SEO from "../components/SEO";

export default function CateringScreen() {
  return (
    <main className="p-4 space-y-12 max-w-5xl mx-auto pb-32">
      <SEO 
        title="Catering | Alberto's Crystal Cafe for Events" 
        description="Feed the whole squad with Alberto's catering. Custom packages for corporate events, parties, and weddings in Big Spring, TX."
        path="/catering"
      />
      {/* Hero */}
      <section className="relative mt-8 group">
        <div className="absolute inset-0 bg-primary border-4 border-black translate-x-3 translate-y-3 neo-shadow-lg"></div>
        <div className="relative bg-white border-4 border-black p-8 md:p-16 flex flex-col items-center text-center">
          <div className="bg-secondary text-black px-5 py-2.5 border-2 border-black font-display font-bold uppercase text-base mb-6 rotate-2">
            FEED THE WHOLE SQUAD
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase mb-6 leading-none tracking-tight">CHAOS ON<br />WHEELS</h1>
          <p className="font-sans text-xl md:text-2xl text-stone-600 max-w-2xl">
            Whether it's a corporate takeover or a backyard blowout, Alberto's brings the flavor that will have your guests talking for years.
          </p>
          <button className="mt-10 bg-primary text-white border-4 border-black px-10 py-5 font-display font-bold text-xl uppercase neo-shadow hover:bg-tertiary transition-all active-press hover-jiggle">
              BOOK YOUR EVENT
          </button>
        </div>
      </section>

      {/* Why Alberto's Catering */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Users size={40} strokeWidth={2.5} />}
          title="ANY SIZE"
          desc="From 10 people to 1,000. We scale with your chaos."
        />
        <FeatureCard 
          icon={<Truck size={40} strokeWidth={2.5} />}
          title="RELIABLE"
          desc="Hot, fresh, and exactly on time. Every single time."
        />
        <FeatureCard 
          icon={<Calendar size={40} strokeWidth={2.5} />}
          title="FLEXIBLE"
          desc="Last minute order? Give us a call, we'll make it work."
        />
      </div>

      {/* Catering Packages */}
      <section className="space-y-8">
        <div className="flex items-end gap-4 mb-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase whitespace-nowrap">PACKAGES</h2>
          <div className="flex-1 h-1.5 bg-black mb-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PackageCard 
            title="THE TACO TAKEOVER"
            price="$15/PERSON"
            items={["Assorted Tacos (Beef, Chicken, Brisket)", "Chaos Salsa & Verde", "Cilantro Lime Rice", "Black Beans", "Churro Bites"]}
            image="https://images.unsplash.com/photo-1565299585323-38d6b0865ef4?q=80&w=600&auto=format&fit=crop"
          />
          <PackageCard 
            title="THE RANCHERO FEAST"
            price="$22/PERSON"
            items={["Comanche Ribeye Tips", "Sizzling Peppers & Onions", "Handmade Tortillas", "Guacamole Bar", "Agua Fresca Station"]}
            image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop"
          />
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="bg-secondary border-4 border-black p-8 md:p-12 neo-shadow-lg text-center">
        <h2 className="font-display text-4xl font-bold uppercase mb-4 text-black">READY TO START?</h2>
        <p className="font-sans text-xl text-black mb-8 max-w-xl mx-auto">
          Fill out our inquiry form or call our catering hotline to customize your menu.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-black text-white px-8 py-4 font-display font-bold uppercase border-2 border-white hover:bg-neutral hover:text-black transition-all hover-jiggle">
            INQUIRY FORM
          </button>
          <button className="bg-white text-black px-8 py-4 font-display font-bold uppercase border-2 border-black hover:bg-neutral transition-all hover-jiggle">
            (806) 555-0999
          </button>
        </div>
      </section>

    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white border-4 border-black p-8 neo-shadow flex flex-col items-center text-center group hover:bg-neutral transition-colors">
      <div className="text-primary mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6">{icon}</div>
      <h3 className="font-display text-2xl font-bold uppercase mb-2">{title}</h3>
      <p className="font-sans text-stone-600">{desc}</p>
    </div>
  );
}

function PackageCard({ title, price, items, image }: { title: string, price: string, items: string[], image: string }) {
  return (
    <div className="bg-white border-4 border-black overflow-hidden neo-shadow-lg flex flex-col">
      <div className="h-48 border-b-4 border-black overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col relative">
        <div className="absolute -top-6 right-6 bg-secondary border-2 border-black px-4 py-2 font-display font-bold text-base rotate-2">
          {price}
        </div>
        <h3 className="font-display text-3xl font-bold uppercase mb-6 leading-none mt-2">{title}</h3>
        <ul className="space-y-3 mb-8 flex-1">
          {items.map((item, i) => (
            <li key={i} className="flex gap-2 font-sans text-stone-700 italic">
              <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
              {item}
            </li>
          ))}
        </ul>
        <button className="w-full bg-tertiary text-white border-2 border-black py-4 font-display font-bold uppercase hover:bg-primary transition-all active-press hover-jiggle">
          SELECT PACKAGE
        </button>
      </div>
    </div>
  );
}
