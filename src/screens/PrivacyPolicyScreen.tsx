import React from "react";
import SEO from "../components/SEO";
import privacyHtml from "../data/privacy-policy.html?raw";

export default function PrivacyPolicyScreen() {
  return (
    <main className="p-4 space-y-8 max-w-4xl mx-auto pb-32">
      <SEO 
        title="Privacy Policy | Alberto's Crystal Cafe" 
        description="Privacy policy and terms of online usage for Alberto's in Big Spring, Texas."
        path="/privacy"
      />
      {/* Header */}
      <section className="mt-8 mb-12 border-b-4 border-black pb-8">
        <div className="inline-block bg-tertiary text-white border-4 border-black px-6 py-3 -rotate-1 mb-8 neo-shadow">
          <h1 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter italic">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white border-4 border-black neo-shadow p-6 md:p-10 space-y-6">
        <div 
          className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-a:text-tertiary prose-a:font-bold hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: privacyHtml }}
        />
      </section>
    </main>
  );
}
