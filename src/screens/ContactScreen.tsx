import { Navigation, QrCode, Star, Mail, Phone, MessageSquare, CheckCircle2, User, MailIcon, PhoneIcon, MapPin } from "lucide-react";
import React, { useState } from "react";
import SEO from "../components/SEO";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

enum OperationType {
  CREATE = 'create',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function ContactScreen() {
  return (
    <main className="p-4 space-y-8 max-w-7xl mx-auto pb-32">
      <SEO 
        title="Contact & Rewards | Alberto's Big Spring, TX" 
        description="Join the Crystal Club rewards program, find our location in Big Spring, TX, or get in touch with us. We're here to serve you."
        path="/contact"
      />
      
      <div className="mt-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="inline-block bg-secondary border-4 border-black px-6 py-3 -rotate-2 neo-shadow">
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase text-black">CONTACT & CLUB</h1>
        </div>
        
        <a 
          href="tel:4322672310"
          className="bg-white text-black py-3 px-8 border-4 border-black font-display font-bold uppercase transition-all neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none text-xl flex items-center"
        >
          <Phone className="mr-3" size={24} strokeWidth={2.5}/>
          (432) 267-2310
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-12">
        {/* Visit Us Box */}
        <a 
          href="https://maps.google.com/?q=Alberto's+Crystal+Cafe,+411+E+3rd+St,+Big+Spring,+TX+79720"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-tertiary text-white border-4 border-black p-8 md:p-12 neo-shadow-lg transition-all group hover:bg-primary hover-jiggle flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <MapPin size={64} strokeWidth={2.5} className="mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-none mb-4 tracking-tighter">VISIT US</h2>
            <p className="font-sans text-xl md:text-2xl font-bold mb-6">411 E 3rd St<br/>Big Spring, TX 79720</p>
            <span className="bg-secondary text-black font-display font-bold uppercase px-6 py-3 border-2 border-black text-sm tracking-widest group-hover:-translate-y-1 transition-transform neo-shadow">
              Get Directions
            </span>
          </div>
        </a>

        {/* The "Order Online" Box (Red one) */}
        <a 
          href="https://online.skytab.com/s/albertos"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-primary text-white border-4 border-black p-8 md:p-12 neo-shadow-lg transition-all group hover:bg-tertiary hover-jiggle flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <QrCode size={64} strokeWidth={2.5} className="mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-none mb-4 tracking-tighter">ORDER ONLINE</h2>
            <p className="font-sans text-xl md:text-2xl font-bold">Skip the line and get your tacos now.</p>
          </div>
        </a>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* The Rewards Box in the small boxt format */}
        <div className="bg-white border-4 border-black p-6 md:p-12 neo-shadow-lg relative group">
          <div className="absolute -top-4 -right-2 bg-secondary border-2 border-black px-3 py-1.5 font-display font-bold text-sm rotate-[8deg] uppercase tracking-wider">
              CRYSTAL CLUB
          </div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-display text-3xl font-black text-primary leading-none mb-2 uppercase tracking-tighter">EARN REWARDS</h2>
              <p className="font-sans text-lg font-bold text-stone-500 uppercase">JOIN FOR EXCLUSIVE PERKS</p>
            </div>
            <div className="border-2 border-black px-4 py-2 font-display font-bold text-xl uppercase bg-[#FFF521] rotate-2">
                FREE
            </div>
          </div>
          <div className="mb-8 border-b-4 border-black pb-8">
            <p className="font-sans text-xl text-stone-900 font-bold">Sign up with your phone and email to receive special offers, new menu updates, and free rewards.</p>
          </div>
          <RewardSignupForm />
        </div>
      </div>
    </main>
  );
}

function StoreCard({ title, address, distance, status, popular, info, googleLink }: { title: string, address: string, distance: string, status: string, popular?: boolean, info?: string, googleLink?: string }) {
  const isOpen = status === 'OPEN';
  
  return (
    <div className="bg-white border-4 border-black p-6 neo-shadow relative group">
      {popular && (
        <div className="absolute -top-4 -right-2 bg-secondary border-2 border-black px-3 py-1.5 font-display font-bold text-sm rotate-[8deg] uppercase tracking-wider">
            MOST POPULAR
        </div>
      )}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-display text-2xl text-primary leading-none mb-2 font-normal uppercase">{title}</h3>
          <p className="font-sans text-base text-stone-500 uppercase">{address}</p>
        </div>
        <div className={`border-2 border-black px-3 py-1 font-sans text-sm uppercase ${isOpen ? 'bg-[#50E3C2]' : 'bg-stone-300'}`}>
            {status}
        </div>
      </div>
      <div className="flex items-center gap-3 mb-8">
        <Navigation size={20} strokeWidth={2.5} className="text-tertiary" />
        <span className="font-sans text-lg text-stone-900">{distance}</span>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {isOpen ? (
          <a href="https://online.skytab.com/s/albertos" target="_blank" rel="noopener noreferrer" className="block w-full bg-tertiary text-white border-2 border-black py-4 font-display font-normal hover:bg-secondary hover:text-black transition-all active-press hover-jiggle uppercase text-lg text-center">
              ORDER HERE
          </a>
        ) : (
          <button className="w-full bg-stone-200 text-stone-500 border-2 border-black py-4 font-display font-normal uppercase text-lg" disabled>
              {info}
          </button>
        )}
        {googleLink && (
          <a 
            href={googleLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-white text-black border-2 border-black py-4 font-display font-normal hover:bg-neutral transition-all active-press hover-jiggle uppercase text-lg text-center"
          >
            VIEW ON GOOGLE MAPS
          </a>
        )}
      </div>
    </div>
  );
}

function RewardSignupForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await addDoc(collection(db, 'signups'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '' });
    } catch (err) {
      setErrorMsg('Something went wrong. Please try again.');
      try {
        handleFirestoreError(err, OperationType.CREATE, 'signups');
      } catch (e) {
        // Logged internally
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center text-center py-4">
        <CheckCircle2 size={64} strokeWidth={2.5} className="text-[#50E3C2] mb-6" />
        <h3 className="font-display text-4xl font-black uppercase mb-4 tracking-tighter">YOU'RE IN!</h3>
        <p className="font-sans text-stone-600 text-lg max-w-md mx-auto">
          Welcome to the Crystal Club! Keep an eye on your phone and email for exclusive rewards and updates.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-8 bg-tertiary text-white border-4 border-black px-8 py-4 font-display font-bold uppercase transition-all shadow-none hover:bg-secondary hover:text-black neo-shadow hover-jiggle"
        >
          SIGN UP ANOTHER PERSON
        </button>
      </div>
    );
  }

  return (
    <div>
      {errorMsg && (
        <div className="bg-red-100 border-4 border-black text-red-700 p-4 font-bold font-sans mb-6 text-center">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="font-display font-bold uppercase text-sm pl-1">Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User size={20} strokeWidth={2.5} className="text-stone-400" />
            </div>
            <input 
              type="text" 
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
              placeholder="Alberto Rodriguez"
              className="w-full bg-neutral border-4 border-black px-12 py-3 font-sans text-lg focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="font-display font-bold uppercase text-sm pl-1">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MailIcon size={20} strokeWidth={2.5} className="text-stone-400" />
            </div>
            <input 
              type="email" 
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
              placeholder="alberto@example.com"
              className="w-full bg-neutral border-4 border-black px-12 py-3 font-sans text-lg focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="font-display font-bold uppercase text-sm pl-1">Phone Number</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <PhoneIcon size={20} strokeWidth={2.5} className="text-stone-400" />
            </div>
            <input 
              type="tel" 
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
              placeholder="(432) 123-4567"
              className="w-full bg-neutral border-4 border-black px-12 py-3 font-sans text-lg focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-tertiary text-white border-4 border-black py-4 font-display font-bold text-2xl uppercase neo-shadow hover:bg-secondary hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 active-press hover-jiggle"
        >
          {isSubmitting ? 'SIGNING UP...' : 'JOIN NOW'}
        </button>
      </form>
    </div>
  );
}

