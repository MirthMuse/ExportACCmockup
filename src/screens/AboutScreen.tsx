import { Info, Coffee, Users, History } from "lucide-react";
import React from "react";
import SEO from "../components/SEO";

export default function AboutScreen() {
  return (
    <main className="p-4 space-y-12 max-w-4xl mx-auto pb-32">
      <SEO 
        title="Our Story | Alberto's Tex-Mex Since 1974" 
        description="Learn about Alberto's history, our commitment to family-owned authentic Tex-Mex, and our roots in West Texas since 1974."
        path="/about"
      />
      {/* Hero Section */}
      <section className="text-center mt-12 bg-white border-4 border-black neo-shadow p-8 mb-16 relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white border-2 border-black px-4 py-2 rotate-2 neo-shadow font-display font-black uppercase text-xl">
          SINCE 1974
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-black uppercase mb-4 mt-4">ABOUT ALBERTO'S</h1>
        <p className="font-sans text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto">
          We didn't start with a plan. We started with a fire, a few recipes, and a commitment to flavor that refuses to be ignored.
        </p>
      </section>

      {/* Story Sections */}
      <div className="space-y-12">
        <AboutSection 
          title="The Story"
          icon={<History size={32} strokeWidth={2.5} />}
          content="Founded in West Texas in 1974, Alberto's began as a single grill and a dream to bring authentic, bold flavors to the community. Over five decades, we've remained family-owned, staying true to our roots while constantly pushing the boundaries of what 'good' food means."
          image="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop"
          reverse={false}
        />

        <AboutSection 
          title="The Community"
          icon={<Users size={32} strokeWidth={2.5} />}
          content="We believe food is the ultimate connector. Alberto's isn't just a place to eat; it's a hub where people from all walks of life gather. From students to local workers, everyone finds a seat and a story at our table."
          image="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=800&auto=format&fit=crop"
          reverse={true}
        />

        <AboutSection 
          title="The Craft"
          icon={<Coffee size={32} strokeWidth={2.5} />}
          content="Every salsa, every spice blend, and every slice of meat is prepared with obsessive care. Our small-batch ranchero sauce is still made using Alberto's original 1974 recipe, ensuring every bite carries the weight of history."
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
          reverse={false}
        />
      </div>

      {/* Values Staggered */}
      <section className="mt-24 bg-tertiary border-4 border-black p-8 md:p-12 text-white neo-shadow-lg">
        <h2 className="font-display text-4xl font-bold uppercase mb-8 border-b-2 border-white pb-4">OUR VALUES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="bg-secondary text-black w-12 h-12 flex items-center justify-center border-2 border-black font-black text-2xl">1</div>
            <h3 className="font-display text-2xl font-bold uppercase">UNCOMPROMISING FLAVOR</h3>
            <p className="font-sans text-stone-200">If it isn't bold, it isn't Alberto's. We don't do bland.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-secondary text-black w-12 h-12 flex items-center justify-center border-2 border-black font-black text-2xl">2</div>
            <h3 className="font-display text-2xl font-bold uppercase">FAMILY FIRST</h3>
            <p className="font-sans text-stone-200">Our employees and customers are family. We treat you like it.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-secondary text-black w-12 h-12 flex items-center justify-center border-2 border-black font-black text-2xl">3</div>
            <h3 className="font-display text-2xl font-bold uppercase">TEXAS ROOTS</h3>
            <p className="font-sans text-stone-200">Born in the West, serving the best of Texas spirit in every dish.</p>
          </div>
        </div>
      </section>

    </main>
  );
}

function AboutSection({ title, icon, content, image, reverse }: { title: string, icon: React.ReactNode, content: string, image: string, reverse: boolean }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={`${reverse ? 'md:order-2' : ''} space-y-4`}>
        <div className="flex items-center gap-4 text-primary">
          <div className="bg-neutral border-2 border-black p-2 neo-shadow">
            {icon}
          </div>
          <h2 className="font-display text-3xl font-bold uppercase">{title}</h2>
        </div>
        <p className="font-sans text-lg text-stone-700 leading-relaxed">
          {content}
        </p>
      </div>
      <div className={`${reverse ? 'md:order-1' : ''} border-4 border-black overflow-hidden neo-shadow-lg h-64 md:h-80`}>
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
      </div>
    </div>
  );
}
