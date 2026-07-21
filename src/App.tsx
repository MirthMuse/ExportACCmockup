import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Home, MapPin, Menu as MenuIcon, ShoppingCart, Smile, Star, Utensils, ChefHat, Mail, Phone, X, Car } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "./lib/utils";
import { motion, AnimatePresence } from "motion/react";

import { Suspense, lazy } from 'react';
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const MenuScreen = lazy(() => import("./screens/MenuScreen"));
const AboutScreen = lazy(() => import("./screens/AboutScreen"));
const ContactScreen = lazy(() => import("./screens/ContactScreen"));
const CateringScreen = lazy(() => import("./screens/CateringScreen"));
const PrivacyPolicyScreen = lazy(() => import("./screens/PrivacyPolicyScreen"));
const NotFoundScreen = lazy(() => import("./screens/NotFoundScreen"));
import Footer from "./components/Footer";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-neutral text-stone-900 mx-auto relative overflow-x-hidden">
        <TopBar onMenuClick={() => setIsMenuOpen(true)} />
        <MobileDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <Suspense fallback={<div className="flex-1 flex items-center justify-center min-h-[50vh]"><div className="w-12 h-12 border-4 border-black border-t-primary rounded-full animate-spin"></div></div>}>
          <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/menu" element={<MenuScreen />} />
          <Route path="/catering" element={<CateringScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/privacy" element={<PrivacyPolicyScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
        </Suspense>
        <Footer />
        <FloatingActionMenu />
        <BottomNav />
      </div>
    </Router>
  );
}

function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 w-full bg-neutral border-b-4 border-black sticky top-0 z-50">
      <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0 pr-2">
        <Link to="/" className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-black overflow-hidden neo-shadow bg-white block transition-transform active:scale-95 shrink-0" id="user-profile-img-container">
          <img
            alt="Alberto Logo"
            src="/alberto logo.png"
            className="w-full h-full object-cover p-0.5 sm:p-1"
          />
        </Link>
        <Link to="/" className="block transition-transform active:scale-95 min-w-0 shrink">
          <div className="flex items-center pb-0.5 sm:pb-0 h-8 sm:h-10">
            <img 
              src="/alberto text.png" 
              alt="Alberto's Logo" 
              className="max-h-full max-w-full object-contain drop-shadow-[2px_2px_0_rgba(0,0,0,1)] object-left"
              onError={(e) => {
                // Fallback if image isn't in public folder yet
                e.currentTarget.style.display = 'none';
                const span = document.createElement('span');
                span.className = 'text-xl sm:text-2xl font-display font-black uppercase tracking-tighter italic text-primary';
                span.innerText = "ALBERTO'S";
                e.currentTarget.parentElement?.appendChild(span);
              }}
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-end gap-2 sm:gap-3 shrink-0 pt-0.5 sm:pt-1">
        <a href="tel:4322672310" aria-label="Call Alberto's Crystal Cafe at 432-267-2310" className="bg-secondary text-black border-2 border-black p-1.5 sm:p-2 neo-shadow active-press transition-all hover:bg-primary hover:text-white" title="Call Us">
          <Phone strokeWidth={2.5} className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
        </a>
        <a href="https://online.skytab.com/s/albertos" target="_blank" rel="noopener noreferrer" className="bg-primary text-white border-2 border-black px-3 py-1.5 sm:px-4 sm:py-2 font-display font-bold uppercase tracking-normal text-xs sm:text-sm neo-shadow active-press transition-all hover:bg-tertiary whitespace-nowrap">
          ORDER NOW
        </a>
        <button 
          onClick={onMenuClick}
          aria-label="Toggle menu"
          className="text-black hover:bg-secondary transition-colors p-1 active:translate-y-0.5" 
          id="hamburger-menu-btn"
        >
          <MenuIcon strokeWidth={2.5} className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>
      </div>
    </header>
  );
}

function MobileDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const location = useLocation();

  const normalItems = [
    { name: "HOME", path: "/", icon: Home },
    { name: "MENU", path: "/menu", icon: Utensils },
    { name: "OUR STORY", path: "/about", icon: Smile },
  ];

  // Close drawer on navigation
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-neutral border-l-4 border-black z-[70] p-6 shadow-[-8px_0_0_0_rgba(0,0,0,1)] flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8 shrink-0">
              <img 
                src="/alberto text.png" 
                alt="Alberto's Logo" 
                className="h-[28px] object-contain drop-shadow-[2px_2px_0_rgba(0,0,0,1)]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const span = document.createElement('span');
                  span.className = 'text-xl font-display font-black uppercase tracking-tighter italic text-primary drop-shadow-[2px_2px_0_rgba(0,0,0,1)]';
                  span.innerText = "ALBERTO'S";
                  e.currentTarget.parentElement?.appendChild(span);
                }}
              />
              <button 
                onClick={onClose}
                type="button"
                className="bg-black text-white p-2 border-2 border-white hover:bg-primary transition-colors active-press"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col space-y-3">
              {normalItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-4 p-3 border-2 border-black font-display font-bold uppercase transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active-press",
                      isActive 
                        ? "bg-secondary text-black" 
                        : "bg-tertiary text-white hover:bg-secondary hover:text-black"
                    )}
                  >
                    <Icon size={20} strokeWidth={2.5} />
                    <span className="text-base">{item.name}</span>
                  </Link>
                );
              })}

              <div className="flex gap-3 mt-1">
                <Link 
                  to="/catering" 
                  className={cn(
                    "flex-1 flex flex-col items-center justify-center gap-1 p-3 border-2 border-black font-display font-bold uppercase transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm text-center active-press",
                    location.pathname === "/catering"
                      ? "bg-secondary text-black"
                      : "bg-tertiary text-white hover:bg-secondary hover:text-black"
                  )}
                >
                  <ChefHat size={20} strokeWidth={2.5} className="mb-1" />
                  <span>SERVICES</span>
                </Link>
                <a href="tel:4322672310" className="flex-1 flex flex-col items-center justify-center gap-1 p-3 bg-tertiary text-white hover:bg-secondary hover:text-black border-2 border-black font-display font-bold uppercase transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm text-center active-press">
                  <Phone size={20} strokeWidth={2.5} className="mb-1" />
                  <span>CALL US</span>
                </a>
              </div>

              <a href="https://online.skytab.com/s/albertos" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 bg-primary text-white border-2 border-black font-display font-bold uppercase neo-shadow hover:bg-primary/90 transition-colors active-press mt-4">
                <ShoppingCart size={22} className="shrink-0" />
                <span className="text-xl tracking-wide font-black">ORDER NOW</span>
              </a>
            </nav>

            <div className="mt-8 pt-4 pb-8 shrink-0">
              <div className="-rotate-2">
                <a href="https://online.skytab.com/s/albertos" target="_blank" rel="noopener noreferrer" className="block bg-secondary border-4 border-black p-4 neo-shadow-lg text-center hover:bg-white transition-colors active-press">
                  <h3 className="font-display font-bold uppercase text-2xl leading-none text-black tracking-tighter">We Deliver!</h3>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function BottomNav() {
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/", icon: Home },
    { name: "MENU", path: "/menu", icon: Utensils },
    { name: "CATERING", path: "/catering", icon: ChefHat },
    { name: "ABOUT", path: "/about", icon: Smile },
    { name: "CONTACT", path: "/contact", icon: Mail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center bg-neutral pb-safe border-t-4 border-black z-40 shadow-[0_-4px_0px_0px_rgba(0,0,0,1)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center p-1 sm:p-2 flex-1 transition-all",
              isActive 
                ? "bg-secondary text-black border-2 border-black m-0.5 sm:m-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-0.5 sm:p-1"
                : "text-black hover:bg-tertiary hover:text-white"
            )}
          >
            <Icon size={window.innerWidth < 640 ? 20 : 24} strokeWidth={isActive ? 3 : 2.5} className={cn(isActive && "fill-black")} />
            <span className="font-display font-bold text-[8px] sm:text-[10px] tracking-tight sm:tracking-widest uppercase">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isDraggingRef = useRef(false);
  const openedViaHoldRef = useRef(false);
  const startCoords = useRef({ x: 0, y: 0 });

  const startPress = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    openedViaHoldRef.current = false;
    startCoords.current = { x: e.clientX, y: e.clientY };
    
    // If it's already open, clicking it should just close it without doing the timer.
    if (isOpen) return;

    timerRef.current = setTimeout(() => {
      setIsOpen(true);
      openedViaHoldRef.current = true;
      if (window.navigator?.vibrate) window.navigator.vibrate(50);
    }, 450);
  };

  const cancelPress = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (Math.abs(e.clientX - startCoords.current.x) > 10 || Math.abs(e.clientY - startCoords.current.y) > 10) {
      isDraggingRef.current = true;
      cancelPress();
    }
  };

  const endPress = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isOpen) {
      if (!openedViaHoldRef.current) {
        setIsOpen(false);
      }
    } else if (!isDraggingRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Reset after a tiny delay so the click event doesn't immediately toggle it back if handled separately
    setTimeout(() => {
      openedViaHoldRef.current = false;
    }, 50);
  };

  // Radius for the arc
  const arcRadius = 90;

  return (
    <div className="fixed bottom-24 right-4 z-[90] flex items-center justify-center w-16 h-16 pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Order Now */}
            <motion.div
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, y: -arcRadius, scale: 1 }}
              exit={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute pointer-events-auto"
            >
              <a href="https://online.skytab.com/s/albertos" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} aria-label="Order food online" className="bg-primary border-4 border-black w-14 h-14 rounded-full neo-shadow flex items-center justify-center hover:bg-primary/90 transition-colors" title="Order Now">
                <Car size={24} strokeWidth={2.5} className="text-white" aria-hidden="true" />
              </a>
            </motion.div>

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
              animate={{ opacity: 1, x: -arcRadius * Math.sin(Math.PI / 4), y: -arcRadius * Math.cos(Math.PI / 4), scale: 1 }}
              exit={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
              className="absolute pointer-events-auto"
            >
              <Link to="/menu" onClick={() => setIsOpen(false)} aria-label="View restaurant menu" className="bg-secondary border-4 border-black w-14 h-14 rounded-full neo-shadow flex items-center justify-center hover:bg-secondary/90 transition-colors" title="Menu">
                <Utensils size={24} strokeWidth={2.5} className="text-black" aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Call Us */}
            <motion.div
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
              animate={{ opacity: 1, x: -arcRadius, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="absolute pointer-events-auto"
            >
              <a href="tel:4322672310" onClick={() => setIsOpen(false)} aria-label="Call Alberto's Crystal Cafe at 432-267-2310" className="bg-tertiary border-4 border-black w-14 h-14 rounded-full neo-shadow flex items-center justify-center hover:bg-tertiary/90 transition-colors" title="Call Us">
                <Phone size={24} strokeWidth={2.5} className="text-white" aria-hidden="true" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <button 
        onPointerDown={startPress}
        onPointerUp={endPress}
        onPointerLeave={cancelPress}
        onPointerMove={onPointerMove}
        onContextMenu={(e) => e.preventDefault()}
        aria-label={isOpen ? "Close action menu" : "Back to top or hold for quick actions"}
        className="bg-white border-4 border-black w-16 h-16 rounded-full neo-shadow flex items-center justify-center active-press transition-all p-2 overflow-hidden pointer-events-auto select-none relative z-10"
        title="Push for top, Hold for menu"
        style={{ WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}
      >
        {isOpen ? (
          <X size={28} strokeWidth={3} className="text-black" />
        ) : (
          <img src="/alberto logo.png" alt="Back to top" className="w-full h-full object-cover pointer-events-none select-none" style={{ userSelect: 'none', pointerEvents: 'none' }} />
        )}
      </button>
    </div>
  );
}
