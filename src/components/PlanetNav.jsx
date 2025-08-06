import React from "react";
import { Button } from "@/components/ui/Button.jsx";
import { Menu, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PlanetNav({ planets, current, onSelect, onPrev, onNext, mobileOpen, setMobileOpen }) {
 return (
 <header className="fixed top-0 left-0 w-full z-30">
 <nav className="flex items-center justify-between px-4 md:px-10 py-4 bg-deep/80 backdrop-blur-md border-b border-white/10">
 <div className="flex items-center gap-3">
 <img src="https://raw.githubusercontent.com/astronautweb/planet-icons/master/svg/earth.svg" alt="Solar Scroll Logo" className="w-8 h-8" />
 <span className="font-display text-xl text-white font-bold tracking-wide">Solar Scroll</span>
 </div>
 <div className="hidden md:flex gap-2 items-center">
 {planets.map((p, i) => (
 <Button
 key={p.name}
 variant={i === current ? "primary" : "ghost"}
 size="sm"
 className={cn("transition-all", i === current && "ring-2 ring-white/80")}
 onClick={() => onSelect(i)}
 >
 {p.name}
 </Button>
 ))}
 </div>
 <div className="flex md:hidden items-center gap-2">
 <Button variant="ghost" size="sm" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open menu">
 <Menu className="w-6 h-6" />
 </Button>
 </div>
 <div className="hidden md:flex gap-2 ml-6">
 <Button variant="ghost" size="sm" onClick={onPrev} aria-label="Previous planet">
 <ArrowLeft className="w-5 h-5" />
 </Button>
 <Button variant="ghost" size="sm" onClick={onNext} aria-label="Next planet">
 <ArrowRight className="w-5 h-5" />
 </Button>
 </div>
 </nav>
 {mobileOpen && (
 <div className="md:hidden absolute top-full left-0 w-full bg-deep/95 border-b border-white/10 shadow-lg animate-in fade-in slide-in-from-top-4">
 <div className="flex flex-col gap-1 px-4 py-3">
 {planets.map((p, i) => (
 <Button
 key={p.name}
 variant={i === current ? "primary" : "ghost"}
 size="md"
 className={cn("w-full justify-start", i === current && "ring-2 ring-white/80")}
 onClick={() => { onSelect(i); setMobileOpen(false); }}
 >
 {p.name}
 </Button>
 ))}
 <div className="flex gap-2 mt-2">
 <Button variant="ghost" size="sm" onClick={onPrev} aria-label="Previous planet">
 <ArrowLeft className="w-5 h-5" />
 </Button>
 <Button variant="ghost" size="sm" onClick={onNext} aria-label="Next planet">
 <ArrowRight className="w-5 h-5" />
 </Button>
 </div>
 </div>
 </div>
 )}
 </header>
 );
}
