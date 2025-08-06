import React from "react";
import { Github, Globe } from "lucide-react";

export function Footer() {
 return (
 <footer className="bg-deep/90 border-t border-white/10 py-8 px-4 md:px-10 mt-12">
 <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
 <div className="flex items-center gap-2">
 <img src="https://raw.githubusercontent.com/astronautweb/planet-icons/master/svg/earth.svg" alt="Solar Scroll Logo" className="w-7 h-7" />
 <span className="font-display text-lg text-white font-bold">Solar Scroll</span>
 </div>
 <nav className="flex gap-5 items-center">
 <a href="#mercury" className="text-white/80 hover:text-white transition-colors">Mercury</a>
 <a href="#venus" className="text-white/80 hover:text-white transition-colors">Venus</a>
 <a href="#earth" className="text-white/80 hover:text-white transition-colors">Earth</a>
 <a href="#mars" className="text-white/80 hover:text-white transition-colors">Mars</a>
 <a href="#jupiter" className="text-white/80 hover:text-white transition-colors">Jupiter</a>
 <a href="#saturn" className="text-white/80 hover:text-white transition-colors">Saturn</a>
 <a href="#uranus" className="text-white/80 hover:text-white transition-colors">Uranus</a>
 <a href="#neptune" className="text-white/80 hover:text-white transition-colors">Neptune</a>
 </nav>
 <div className="flex gap-3 items-center">
 <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
 <Github className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
 </a>
 <a href="https://solarsystem.nasa.gov/planets/overview/" target="_blank" rel="noopener noreferrer" aria-label="NASA Solar System">
 <Globe className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
 </a>
 </div>
 </div>
 <div className="text-center text-xs text-white/40 mt-4">
 &copy; {new Date().getFullYear()} Solar Scroll. All rights reserved.
 </div>
 </footer>
 );
}
