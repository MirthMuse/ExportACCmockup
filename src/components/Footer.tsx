import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral border-t-4 border-black pt-12 pb-32 px-4 md:px-8 mt-12 relative overflow-hidden">
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 font-medium">
        
        {/* Brand & Address */}
        <div className="space-y-6">
          <div className="inline-block bg-tertiary border-4 border-black p-2 neo-shadow -rotate-2">
            <img src="/alberto text.png" alt="Alberto's Crystal Cafe" className="h-10 md:h-12 object-contain" />
          </div>
          <div className="space-y-2">
            <p className="flex items-start gap-2">
              <MapPin className="shrink-0 mt-1" size={20} />
              <span>2401 S Gregg St<br/>Big Spring, TX 79720</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={20} strokeWidth={2.5} />
              <a href="tel:4322672310" className="hover:text-primary hover:underline transition-colors">(432) 267-2310</a>
            </p>
          </div>
        </div>

        {/* Site Directory */}
        <div className="space-y-4">
          <h3 className="font-display font-bold uppercase text-xl border-b-2 border-black inline-block pb-1">Directory</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-primary hover:translate-x-1 inline-block transition-transform">Home</Link></li>
            <li><Link to="/menu" className="hover:text-primary hover:translate-x-1 inline-block transition-transform">Restaurant Menu</Link></li>
            <li><Link to="/catering" className="hover:text-primary hover:translate-x-1 inline-block transition-transform">Catering Services</Link></li>
            <li><Link to="/about" className="hover:text-primary hover:translate-x-1 inline-block transition-transform">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-primary hover:translate-x-1 inline-block transition-transform">Contact & Rewards</Link></li>
          </ul>
        </div>

        {/* Hours & Social */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-display font-bold uppercase text-xl border-b-2 border-black inline-block pb-1">Hours</h3>
            <ul className="space-y-1">
              <li><span className="font-bold">Mon - Sun:</span> 6:00 AM - 10:00 PM</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold uppercase text-xl border-b-2 border-black inline-block pb-1">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center neo-shadow hover:bg-secondary hover:-translate-y-1 transition-all">
                <Facebook size={20} strokeWidth={2.5} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center neo-shadow hover:bg-secondary hover:-translate-y-1 transition-all">
                <Instagram size={20} strokeWidth={2.5} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center neo-shadow hover:bg-secondary hover:-translate-y-1 transition-all font-display font-bold">
                Y!
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Credits & Developer Tools */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-display font-bold uppercase text-xl border-b-2 border-black inline-block pb-1">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-primary hover:translate-x-1 inline-block transition-transform">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-primary hover:translate-x-1 inline-block transition-transform">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="space-y-4 pt-4 border-t-2 border-black/10">
            <h3 className="font-display font-bold uppercase text-xl border-b-2 border-black inline-block pb-1">Developer</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={async (e) => {
                    e.preventDefault();
                    try {
                      const res = await fetch('/alberto-app-source.zip');
                      if (!res.ok) throw new Error('Network response was not ok');
                      const blob = await res.blob();
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'alberto-app-source.zip';
                      document.body.appendChild(a);
                      a.click();
                      window.URL.revokeObjectURL(url);
                      document.body.removeChild(a);
                    } catch (err) {
                      console.error('Download failed:', err);
                      window.open('/alberto-app-source.zip', '_blank');
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-primary text-white hover:bg-black font-bold px-4 py-2 border-2 border-black neo-shadow-sm transition-all hover:translate-x-1"
                >
                  Download Source ZIP
                </button>
              </li>
            </ul>
          </div>
        </div>
        
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t-4 border-black flex flex-col md:flex-row items-center justify-between gap-6">
         <p className="font-bold text-center md:text-left">
          &copy; {currentYear} Agapito Cerda, Inc.<br className="md:hidden" /> All rights reserved.
         </p>
         
         <div className="flex flex-col items-center gap-2">
           <a 
             href="https://www.mirthmuse.media" 
             target="_blank" 
             rel="noopener noreferrer"
             className="block hover:scale-105 transition-transform active:scale-95"
           >
             <img 
               src="/MirthMuseLogo red.png" 
               alt="Mirth Muse Media" 
               className="h-[72px] object-contain"
               onError={(e) => {
                 // Fallback if image isn't uploaded yet
                 e.currentTarget.style.display = 'none';
                 const span = document.createElement('span');
                 span.className = 'font-display font-black text-xl tracking-tighter italic text-primary bg-white px-2 border-2 border-black neo-shadow-sm inline-block';
                 span.innerText = "mirth muse media";
                 e.currentTarget.parentElement?.appendChild(span);
               }}
             />
           </a>
         </div>
      </div>
    </footer>
  );
}
