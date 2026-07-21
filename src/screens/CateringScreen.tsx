import { Citrus, Users, Truck, Calendar } from "lucide-react";
import React from "react";
import SEO from "../components/SEO";
import { cn } from "../lib/utils";

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
          <div className="bg-tertiary text-white border-4 border-black px-8 py-5 md:px-12 md:py-8 -rotate-2 neo-shadow mb-8">
            <h1 className="font-display text-4xl md:text-6xl font-black uppercase italic tracking-tight leading-none">
              Party Time,<br />Excellent!
            </h1>
          </div>
          <p className="font-sans text-xl md:text-2xl text-stone-600 max-w-2xl">
            Whether it's a birthday, corporate event, or a backyard blowout, Alberto's Party Packs bring the flavor that will have your guests talking for years.
          </p>
          <a href="/menu" className="mt-10 bg-primary text-white border-4 border-black px-10 py-5 font-display font-bold text-xl uppercase neo-shadow hover:bg-tertiary transition-all active-press hover-jiggle inline-block">
              ORDER NOW
          </a>
        </div>
      </section>

      {/* Why Alberto's Catering */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Citrus size={40} strokeWidth={2.5} />}
          title="FRESH"
          desc="Made from scratch daily with the best ingredients."
        />
        <FeatureCard 
          icon={<Truck size={40} strokeWidth={2.5} />}
          title="FAST"
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
        <div className="mb-8">
          <div className="inline-block bg-tertiary text-white border-4 border-black px-6 py-3 -rotate-1 neo-shadow">
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tight italic">
              PARTY PACKS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 pt-6 pb-2">
          <PackageCard 
            title="Fajita Feast"
            price="$275"
            description="A 10-pound, fire-grilled, and sizzling choice of meats for the ultimate build-your-own fajita! Pick or mix your perfect lineup of beef, chicken, or shrimp. We’ll toss in the charred onions and bell peppers, then pair it all with the classic essentials: rice, beans, fresh guacamole, and pico de gallo. Top 'em off with shredded cheese and sour cream, all wrapped inside one of our homemade flour or corn tortillas. It’s the party pack that delivers for anyone and everyone, exactly how they like it!"
            items={["20 Fajitas (10 lbs)", "Tortillas", "Peppers & Onions", "Salsa"]}
            featured={true}
            colorIndex={0}
          />
          <PackageCard 
            title="Taco Pack"
            price="$85"
            items={["30 Tacos (Beef + Chicken)", "Rice", "Beans"]}
            colorIndex={1}
          />
          <PackageCard 
            title="Enchilada Pack"
            price="$85"
            items={["30 Enchiladas (Mix and Match 3 Kinds)", "Rice", "Beans"]}
            colorIndex={2}
          />
          <PackageCard 
            title="Taco & Enchilada Pack"
            price="$100"
            items={["20 Tacos", "20 Enchiladas", "Rice", "Beans"]}
            colorIndex={3}
          />
          <PackageCard 
            title="Combo Platter"
            price="$75"
            items={["10 Cheesesticks", "10 Wings", "6 Egg Rolls", "10 Wraps"]}
            colorIndex={4}
          />
          <PackageCard 
            title="50 Wings Pack"
            price="$85"
            items={["50 Wings (Mix and Match flavors)", "Fries"]}
            colorIndex={5}
          />
          <PackageCard 
            title="30 Wings Pack"
            price="$65"
            items={["30 Wings", "Fries"]}
            colorIndex={6}
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

function PackageCard({ title, price, items, description, featured = false, colorIndex = 0 }: { title: string, price: string, items: string[], description?: string, featured?: boolean, colorIndex?: number }) {
  const COLOR_COMBOS = [
    "text-primary drop-shadow-[2px_2px_0_var(--color-tertiary)]", // Red text, Blue shadow
    "text-tertiary drop-shadow-[2px_2px_0_var(--color-secondary)]", // Blue text, Yellow shadow
    "text-secondary drop-shadow-[2px_2px_0_black]", // Yellow text, Black shadow
    "text-primary drop-shadow-[2px_2px_0_black]", // Red text, Black shadow
    "text-primary drop-shadow-[2px_2px_0_var(--color-secondary)]", // Red text, Yellow shadow
    "text-tertiary drop-shadow-[2px_2px_0_var(--color-primary)]", // Blue text, Red shadow
    "text-secondary drop-shadow-[2px_2px_0_var(--color-tertiary)]", // Yellow text, Blue shadow
  ];

  const BUTTON_COLORS = [
    "bg-primary text-white hover:bg-tertiary hover:text-white", // Red bg (from text-primary), hover blue
    "bg-tertiary text-white hover:bg-primary hover:text-white", // Blue bg (from text-tertiary), hover red
    "bg-secondary text-black hover:bg-black hover:text-white", // Yellow bg (from text-secondary), hover black
    "bg-primary text-white hover:bg-black hover:text-white", // Red bg, hover black
    "bg-primary text-white hover:bg-secondary hover:text-black", // Red bg, hover yellow
    "bg-tertiary text-white hover:bg-secondary hover:text-black", // Blue bg, hover yellow
    "bg-secondary text-black hover:bg-tertiary hover:text-white", // Yellow bg, hover blue
  ];

  const comboClass = COLOR_COMBOS[colorIndex % COLOR_COMBOS.length];
  const buttonClass = BUTTON_COLORS[colorIndex % BUTTON_COLORS.length];

  return (
    <div className={cn("bg-white border-4 border-black neo-shadow flex flex-col hover:-translate-y-1 transition-transform duration-200 relative", featured && "md:col-span-2 lg:col-span-3")}>
      <div className={cn("p-6 flex-1 flex flex-col relative", featured ? "pt-12 md:p-10" : "pt-10")}>
        <div className={cn("absolute bg-secondary border-2 border-black font-display font-bold rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10", featured ? "-top-5 -right-3 md:top-6 md:right-8 px-6 py-3 text-2xl" : "-top-5 -right-3 px-4 py-2 text-lg")}>
          {price}
        </div>
        <div className={cn("flex flex-col flex-1", featured && "md:w-3/4 lg:w-2/3")}>
            <h3 className={cn("font-display font-black uppercase italic tracking-tight leading-none", comboClass, featured ? "text-3xl md:text-5xl mb-4" : "text-2xl mb-4")}>
              {title}
            </h3>
            {description && (
              <p className={cn("font-sans text-stone-600 mb-6 leading-relaxed", featured ? "text-base md:text-lg" : "text-sm")}>
                {description}
              </p>
            )}
            <ul className={cn("mb-6 flex-1", featured ? "grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4" : "space-y-2")}>
              {items.map((item, i) => (
                <li key={i} className={cn("flex gap-2 font-sans text-stone-700 italic", featured ? "text-base md:text-lg" : "text-sm")}>
                  <div className={cn("bg-primary flex-shrink-0 rounded-full", featured ? "w-2.5 h-2.5 mt-2" : "w-1.5 h-1.5 mt-1.5")}></div>
                  {item}
                </li>
              ))}
            </ul>
        </div>
        <button className={cn("border-2 border-black font-display font-bold uppercase transition-all active-press neo-shadow", buttonClass, featured ? "py-4 text-lg w-full md:w-auto md:px-12 self-start mt-auto" : "w-full py-3 text-sm mt-auto")}>
          ADD TO ORDER
        </button>
      </div>
    </div>
  );
}
