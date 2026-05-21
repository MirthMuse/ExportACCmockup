import React from "react";
import SEO from "../components/SEO";

export default function PrivacyPolicyScreen() {
  return (
    <main className="p-4 space-y-8 max-w-4xl mx-auto pb-32">
      <SEO 
        title="Privacy Policy | Alberto's Authentic Tex-Mex" 
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
        <p className="font-bold text-lg max-w-2xl">
          Your privacy is important to us.
        </p>
      </section>

      {/* Content Placeholder */}
      <section className="bg-white border-4 border-black neo-shadow p-6 md:p-10 space-y-6">
        <p className="font-bold text-xl uppercase text-primary border-b-2 border-black pb-2">
          Effective Date: {new Date().getFullYear()}
        </p>
        
        <div className="space-y-4">
          <p className="text-lg">
            This is a placeholder for your Privacy Policy. Once you provide the official text, we will update this page. 
          </p>
          <p className="text-lg">
            Commonly, privacy policies for restaurants will include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 font-medium text-lg">
            <li>What information is collected (e.g., name, email, phone for reservations/orders).</li>
            <li>How the information is used to improve our services safely.</li>
            <li>Use of cookies or other tracking on the website.</li>
            <li>Third-party services handling online ordering or analytics.</li>
            <li>Contact information for data inquiries.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
