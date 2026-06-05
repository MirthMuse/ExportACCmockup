import { Info, ChefHat, Users, History, Flame, Sprout, Sparkles, Heart } from "lucide-react";
import React from "react";
import SEO from "../components/SEO";

export default function AboutScreen() {
  return (
    <main className="p-4 space-y-12 max-w-4xl mx-auto pb-32">
      <SEO 
        title="Our Story | Alberto's Crystal Cafe" 
        description="Learn about the history of Alberto's Crystal Cafe and our roots in West Texas since 1974."
        path="/about"
      />
      {/* Hero Section */}
      <section className="text-center mt-12 bg-white border-4 border-black neo-shadow p-8 mb-16 relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white border-2 border-black px-4 py-2 rotate-2 neo-shadow font-brand-display font-black uppercase text-xl">
          SINCE 1974
        </div>
        <h1 className="font-brand-display text-5xl md:text-7xl font-black uppercase mb-4 mt-4">ABOUT ALBERTO'S</h1>
        <p className="font-brand-sans text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto">
          It started with 15 stools and a four burner stove. 50 plus years later we're still standing, still strong, still family. And for that we thank you!
        </p>
      </section>

      {/* Story Sections */}
      <div className="space-y-12">
        <AboutSection 
          title="Our Legacy"
          icon={<History size={32} strokeWidth={2.5} />}
          content={"The Crossroads of West Texas has always brought people together. From every corner of the map, it has seen people passing through, whether they are here for work or carry a family name. And we’ve always welcomed them to our table, adding their story to serve the next.\n\nWe don't pride ourselves on having a wall of famous faces or autographs. Our legacy lives on in people. Because chances are, if you've ever been to Big Spring, TX, you have a story to tell about Alberto's."}
          image="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop"
          reverse={false}
        />

        <AboutSection 
          title="Our Craft"
          icon={<Users size={32} strokeWidth={2.5} />}
          content="Every single person who sits down with us brings something unique to the table. They share a piece of themselves, and over the decades, those moments add up. Alberto's is a living record of those shared lives, and we take everything people have imprinted on us and pour it directly back into our food and our craft."
          image="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=800&auto=format&fit=crop"
          reverse={true}
        />

        <AboutSection 
          title="Our Service"
          icon={<ChefHat size={32} strokeWidth={2.5} />}
          content={`We carry the responsibility of honoring those who built the foundation of Alberto's while protecting the table for the ones to come. For us, consistency is the standard, not a goal. It is a simple formula of responsive service, good food, and a welcoming experience, brought to life by the complex ingredient of "stories told throughout the land."`}
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
          reverse={false}
        />
      </div>

      {/* The Secret Formula */}
      <section className="mt-24 mb-12">
        <div className="bg-primary border-4 border-black p-8 md:p-12 text-white neo-shadow-lg transform -rotate-1">
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase text-white mb-8 border-b-4 border-black pb-4 tracking-tighter">THE SECRET<br/>FORMULA</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white text-black border-4 border-black p-6 hover-jiggle neo-shadow transition-transform hover:-translate-y-2 group">
              <Flame size={48} strokeWidth={2.5} className="mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl font-bold uppercase mb-2">Fire</h3>
              <p className="font-sans font-bold text-stone-600">Bring the heat.</p>
            </div>
            
            <div className="bg-secondary text-black border-4 border-black p-6 hover-jiggle neo-shadow transition-transform hover:-translate-y-2 group">
              <Sprout size={48} strokeWidth={2.5} className="mb-4 text-tertiary group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl font-bold uppercase mb-2">Fresh</h3>
              <p className="font-sans font-bold text-stone-600">Locally untamed.</p>
            </div>

            <div className="bg-neutral text-black border-4 border-black p-6 hover-jiggle neo-shadow transition-transform hover:-translate-y-2 group">
              <Sparkles size={48} strokeWidth={2.5} className="mb-4 text-black group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl font-bold uppercase mb-2">Spice</h3>
              <p className="font-sans font-bold text-stone-600">Cultivated curation.</p>
            </div>

          </div>
          
          <div className="mt-12 flex justify-end">
            <div className="inline-block bg-tertiary text-white px-8 py-4 font-display font-bold uppercase border-4 border-black text-xl neo-shadow transform rotate-2">
              (And no, we won't share the ratios)
            </div>
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
          <h2 className="font-brand-display text-3xl font-bold uppercase">{title}</h2>
        </div>
        <p className="font-brand-sans text-lg text-stone-700 leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </div>
      <div className={`${reverse ? 'md:order-1' : ''} border-4 border-black overflow-hidden neo-shadow-lg h-64 md:h-80`}>
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
      </div>
    </div>
  );
}
