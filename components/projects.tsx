"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const items = [
  { division: "Tent King", title: "Rapid-deploy structures", type: "Temporary infrastructure", src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85", h: "h-[470px]" },
  { division: "Eventing King", title: "Corporate experiences", type: "Events & staging", src: "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1400&q=85", h: "h-[330px]" },
  { division: "Prop King", title: "Commercial environments", type: "Property & facilities", src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85", h: "h-[390px]" },
  { division: "Loo-King", title: "Site-ready sanitation", type: "Sanitation infrastructure", src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85", h: "h-[350px]" },
  { division: "Eventing King", title: "Built for the occasion", type: "Décor & production", src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85", h: "h-[470px]" },
  { division: "Prop King", title: "Places that perform", type: "Asset management", src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85", h: "h-[330px]" },
];
export function Projects() {
  const [filter, setFilter] = useState("All"); const filters = ["All", "Tent King", "Loo-King", "Eventing King", "Prop King"]; const shown = filter === "All" ? items : items.filter(i => i.division === filter);
  return <><div className="mb-10 flex flex-wrap gap-2">{filters.map(f => <button key={f} onClick={() => setFilter(f)} className={`focus-ring border px-4 py-2 text-xs font-black uppercase tracking-wider transition ${filter === f ? "border-king-red bg-king-red text-white" : "border-neutral-300 hover:border-black"}`}>{f}</button>)}</div><motion.div layout className="masonry"><AnimatePresence>{shown.map(item => <motion.article layout initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} key={item.title} className={`group relative overflow-hidden bg-neutral-900 ${item.h}`}><Image src={item.src} alt={`Representative ${item.type.toLowerCase()} project`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent"/><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white"><div><p className="mb-2 text-[10px] font-black uppercase tracking-[.18em] text-red-400">{item.division}</p><h3 className="text-xl font-black">{item.title}</h3><p className="mt-1 text-sm text-white/65">{item.type}</p></div><ArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div></motion.article>)}</AnimatePresence></motion.div></>;
}
