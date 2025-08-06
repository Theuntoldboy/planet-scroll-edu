import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card.jsx";
import { Badge } from "@/components/ui/Badge.jsx";
import { cn } from "@/lib/utils";

const planetBg = {
 Mercury: "bg-gradient-to-b from-mercury to-deep",
 Venus: "bg-gradient-to-b from-venus to-deep",
 Earth: "bg-gradient-to-b from-earth to-deep",
 Mars: "bg-gradient-to-b from-mars to-deep",
 Jupiter: "bg-gradient-to-b from-jupiter to-deep",
 Saturn: "bg-gradient-to-b from-saturn to-deep",
 Uranus: "bg-gradient-to-b from-uranus to-deep",
 Neptune: "bg-gradient-to-b from-neptune to-deep",
};

const infoPanelVariants = {
 left: {
 initial: { x: -80, opacity:0 },
 animate: { x:0, opacity:1, transition: { type: "spring", stiffness:60, damping:18 } },
 exit: { x: -80, opacity:0 },
 },
 right: {
 initial: { x:80, opacity:0 },
 animate: { x:0, opacity:1, transition: { type: "spring", stiffness:60, damping:18 } },
 exit: { x:80, opacity:0 },
 },
};

export function PlanetSection({ planet, direction }) {
 return (
 <section
 className={cn(
 "min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-16 transition-bg duration-700",
 planetBg[planet.name],
 "relative"
 )}
 style={{ transitionProperty: "background-color, background-image" }}
 >
 <motion.div
 initial={{ y:80, opacity:0 }}
 whileInView={{ y:0, opacity:1 }}
 viewport={{ once: true, amount:0.6 }}
 transition={{ type: "spring", stiffness:60, damping:18 }}
 className="flex-1 flex items-center justify-center mb-8 md:mb-0"
 >
 <motion.div
 layout
 className="relative flex items-center justify-center"
 style={{ width:260, height:260 }}
 >
 <motion.div
 animate={{ rotate: [0,360] }}
 transition={{ repeat: Infinity, duration: planet.orbitDuration, ease: "linear" }}
 className="absolute inset-0 flex items-center justify-center"
 >
 <span
 className="block rounded-full border border-white/30"
 style={{ width:220, height:220 }}
 ></span>
 </motion.div>
 <motion.img
 src={planet.image}
 alt={planet.name + " planet"}
 className="z-10 shadow-2xl"
 style={{ width: planet.size, height: planet.size }}
 initial={{ scale:0.7, opacity:0 }}
 whileInView={{ scale:1, opacity:1 }}
 viewport={{ once: true, amount:0.7 }}
 transition={{ type: "spring", stiffness:80, damping:16, delay:0.2 }}
 />
 </motion.div>
 </motion.div>
 <motion.div
 initial={infoPanelVariants[direction].initial}
 whileInView={infoPanelVariants[direction].animate}
 exit={infoPanelVariants[direction].exit}
 viewport={{ once: true, amount:0.6 }}
 className="flex-1 max-w-lg w-full"
 >
 <Card className="backdrop-blur-md bg-white/10 border-white/20">
 <div className="flex items-center gap-3 mb-2">
 <Badge variant="planet" className="text-base px-4 py-2">
 {planet.name}
 </Badge>
 <span className="text-xs text-white/70">{planet.type}</span>
 </div>
 <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
 {planet.headline}
 </h2>
 <p className="text-white/90 text-lg mb-4">
 {planet.description}
 </p>
 <ul className="grid grid-cols-2 gap-3 text-sm text-white/80">
 <li><span className="font-semibold">Distance:</span> {planet.distance}</li>
 <li><span className="font-semibold">Diameter:</span> {planet.diameter}</li>
 <li><span className="font-semibold">Moons:</span> {planet.moons}</li>
 <li><span className="font-semibold">Year Length:</span> {planet.yearLength}</li>
 </ul>
 </Card>
 </motion.div>
 </section>
 );
}
