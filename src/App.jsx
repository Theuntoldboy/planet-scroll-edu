import React, { useRef, useEffect, useState } from "react";
import { PlanetSection } from "@/components/PlanetSection.jsx";
import { PlanetNav } from "@/components/PlanetNav.jsx";
import { Footer } from "@/components/Footer.jsx";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const PLANETS = [
 {
 name: "Mercury",
 type: "Terrestrial",
 headline: "The Swiftest Planet",
 description:
 "Mercury is the closest planet to the Sun and zips around it every88 days. Its surface is cratered and scorched, with temperatures swinging from blazing hot to freezing cold.",
 distance: "57.9M km",
 diameter: "4,880 km",
 moons: "0",
 yearLength: "88 days",
 image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
 size:80,
 orbitDuration:12,
 },
 {
 name: "Venus",
 type: "Terrestrial",
 headline: "Earth's Mysterious Twin",
 description:
 "Venus is shrouded in thick, toxic clouds and has surface temperatures hot enough to melt lead. Despite its beauty, it's the hottest planet in our solar system.",
 distance: "108.2M km",
 diameter: "12,104 km",
 moons: "0",
 yearLength: "225 days",
 image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
 size:110,
 orbitDuration:16,
 },
 {
 name: "Earth",
 type: "Terrestrial",
 headline: "Our Blue Marble",
 description:
 "Earth is the only planet known to support life. Its vast oceans, dynamic weather, and diverse ecosystems make it truly unique in the cosmos.",
 distance: "149.6M km",
 diameter: "12,742 km",
 moons: "1",
 yearLength: "365 days",
 image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
 size:120,
 orbitDuration:20,
 },
 {
 name: "Mars",
 type: "Terrestrial",
 headline: "The Red Planet",
 description:
 "Mars is a cold desert world with the largest volcano and canyon in the solar system. Its rusty surface hints at a watery past and the possibility of future exploration.",
 distance: "227.9M km",
 diameter: "6,779 km",
 moons: "2",
 yearLength: "687 days",
 image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
 size:100,
 orbitDuration:24,
 },
 {
 name: "Jupiter",
 type: "Gas Giant",
 headline: "The Giant Among Planets",
 description:
 "Jupiter is the largest planet, famous for its swirling storms and Great Red Spot. Its immense gravity shapes the solar system and protects inner planets from comets.",
 distance: "778.5M km",
 diameter: "139,820 km",
 moons: "95",
 yearLength: "12 years",
 image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
 size:170,
 orbitDuration:30,
 },
 {
 name: "Saturn",
 type: "Gas Giant",
 headline: "Lord of the Rings",
 description:
 "Saturn is adorned with dazzling rings made of ice and rock. It's a gas giant with dozens of moons, including Titan, which has its own thick atmosphere.",
 distance: "1.43B km",
 diameter: "116,460 km",
 moons: "83",
 yearLength: "29 years",
 image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
 size:150,
 orbitDuration:36,
 },
 {
 name: "Uranus",
 type: "Ice Giant",
 headline: "The Tilted Wonder",
 description:
 "Uranus spins on its side, making its seasons extreme. Its pale blue color comes from methane in its atmosphere, and it has faint rings and dozens of moons.",
 distance: "2.87B km",
 diameter: "50,724 km",
 moons: "27",
 yearLength: "84 years",
 image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
 size:130,
 orbitDuration:42,
 },
 {
 name: "Neptune",
 type: "Ice Giant",
 headline: "The Windy Blue",
 description:
 "Neptune is a deep blue world with supersonic winds and mysterious dark storms. It's the farthest planet from the Sun and has a dynamic, active atmosphere.",
 distance: "4.5B km",
 diameter: "49,244 km",
 moons: "14",
 yearLength: "165 years",
 image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
 size:125,
 orbitDuration:48,
 },
];

function getSectionId(name) {
 return name.toLowerCase();
}

export default function App() {
 const sectionRefs = useRef([]);
 const [current, setCurrent] = useState(0);
 const [mobileOpen, setMobileOpen] = useState(false);
 const { scrollY } = useScroll();

 // Scroll spy: update current section based on scroll position
 useMotionValueEvent(scrollY, "change", (latest) => {
 const offsets = sectionRefs.current.map((ref) =>
 ref ? ref.getBoundingClientRect().top : Infinity
 );
 const idx = offsets.findIndex((top, i) => top > window.innerHeight *0.3);
 if (idx === -1) {
 setCurrent(PLANETS.length -1);
 } else if (idx ===0) {
 setCurrent(0);
 } else {
 setCurrent(idx -1);
 }
 });

 // Keyboard navigation
 useEffect(() => {
 const handler = (e) => {
 if (e.key === "ArrowDown" || e.key === "PageDown") {
 e.preventDefault();
 scrollToSection(current +1);
 } else if (e.key === "ArrowUp" || e.key === "PageUp") {
 e.preventDefault();
 scrollToSection(current -1);
 }
 };
 window.addEventListener("keydown", handler);
 return () => window.removeEventListener("keydown", handler);
 // eslint-disable-next-line
 }, [current]);

 function scrollToSection(idx) {
 if (idx <0 || idx >= PLANETS.length) return;
 sectionRefs.current[idx]?.scrollIntoView({ behavior: "smooth" });
 }

 function handleSelect(idx) {
 scrollToSection(idx);
 }

 function handlePrev() {
 scrollToSection(current -1);
 }

 function handleNext() {
 scrollToSection(current +1);
 }

 // Set background color on body for smooth transitions
 useEffect(() => {
 const bgMap = {
 Mercury: "#23272f",
 Venus: "#f7c873",
 Earth: "#3b82f6",
 Mars: "#e2584d",
 Jupiter: "#f5d68a",
 Saturn: "#e7c97f",
 Uranus: "#7de2e6",
 Neptune: "#4f6ee2",
 };
 document.body.style.transition = "background0.7s";
 document.body.style.background = `linear-gradient(to bottom, ${bgMap[PLANETS[current].name]}, #0b112080%)`;
 }, [current]);

 return (
 <div className="font-body min-h-screen bg-deep text-white">
 <PlanetNav
 planets={PLANETS}
 current={current}
 onSelect={handleSelect}
 onPrev={handlePrev}
 onNext={handleNext}
 mobileOpen={mobileOpen}
 setMobileOpen={setMobileOpen}
 />
 <main className="pt-24">
 {PLANETS.map((planet, i) => (
 <div
 key={planet.name}
 id={getSectionId(planet.name)}
 ref={(el) => (sectionRefs.current[i] = el)}
 tabIndex={-1}
 aria-label={planet.name}
 >
 <PlanetSection
 planet={planet}
 direction={i %2 ===0 ? "left" : "right"}
 />
 </div>
 ))}
 </main>
 <Footer />
 <motion.div
 initial={{ opacity:0 }}
 animate={{ opacity:1 }}
 className="pointer-events-none fixed inset-0 z-0 bg-stars opacity-10"
 aria-hidden="true"
 />
 <a
 href="#top"
 className="fixed bottom-6 right-6 z-40"
 aria-label="Back to top"
 onClick={() => scrollToSection(0)}
 >
 <motion.button
 whileHover={{ scale:1.1 }}
 whileTap={{ scale:0.95 }}
 className="rounded-full bg-white/20 hover:bg-white/40 text-white shadow-lg p-3 focus-visible:ring-2 focus-visible:ring-white/80 transition"
 >
 <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" viewBox="002424"><path d="M1219V5M512l7-777" /></svg>
 </motion.button>
 </a>
 </div>
 );
}
