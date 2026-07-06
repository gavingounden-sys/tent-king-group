"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const divisions = [
  ["Tent King", "Infrastructure & manufacturing", "#tent-king"],
  ["Loo-King", "Sanitation solutions", "#loo-king"],
  ["Eventing King", "Events & experiences", "#eventing-king"],
  ["Prop King", "Property & facilities", "#prop-king"],
];

export function Navigation() {
  const [open, setOpen] = useState(false); const [mega, setMega] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 20); fn(); addEventListener("scroll", fn, { passive: true }); return () => removeEventListener("scroll", fn); }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-white shadow-[0_1px_0_rgba(0,0,0,.12)]" : "bg-white/95"}`}>
    <div className="container-site flex h-[76px] items-center justify-between">
      <a href="#top" aria-label="Tent King Group home" className="focus-ring relative h-12 w-36 overflow-hidden"><Image src="/logos/tent-king.webp" alt="Tent King" fill priority sizes="144px" className="object-contain" /></a>
      <nav aria-label="Primary navigation" className="hidden h-full items-center gap-8 lg:flex">
        <a href="#about" className="text-sm font-bold hover:text-king-red">About</a>
        <div className="relative flex h-full items-center" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
          <button onClick={() => setMega(!mega)} className="flex items-center gap-1 text-sm font-bold hover:text-king-red" aria-expanded={mega}>Divisions <ChevronDown size={15} /></button>
          <AnimatePresence>{mega && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="absolute left-1/2 top-[76px] w-[680px] -translate-x-1/2 border-t-2 border-king-red bg-white p-7 shadow-2xl">
            <div className="mb-5 flex items-end justify-between"><div><p className="text-xs font-black uppercase tracking-[.18em] text-king-red">Group capability</p><h2 className="mt-1 text-2xl font-black">Four specialist divisions</h2></div><span className="text-xs text-neutral-500">One trusted partner</span></div>
            <div className="grid grid-cols-2 gap-px bg-neutral-200">{divisions.map(([name, desc, href], i) => <a key={name} href={href} onClick={() => setMega(false)} className="group bg-white p-5 hover:bg-neutral-50"><span className="text-[10px] font-black text-king-red">0{i+1}</span><p className="mt-2 font-black group-hover:text-king-red">{name}</p><p className="mt-1 text-xs text-neutral-500">{desc}</p></a>)}</div>
          </motion.div>}</AnimatePresence>
        </div>
        <a href="#projects" className="text-sm font-bold hover:text-king-red">Projects</a><a href="#industries" className="text-sm font-bold hover:text-king-red">Industries</a><a href="#contact" className="text-sm font-bold hover:text-king-red">Contact</a>
      </nav>
      <a href="#contact" className="focus-ring hidden bg-king-red px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:bg-black lg:block">Request a quote</a>
      <button onClick={() => setOpen(!open)} className="focus-ring p-2 lg:hidden" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>{open && <motion.nav initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden border-t bg-white lg:hidden"><div className="container-site py-6">{[["About","#about"],["Divisions","#divisions"],["Projects","#projects"],["Industries","#industries"],["Contact","#contact"]].map(([n,h]) => <a key={n} href={h} onClick={() => setOpen(false)} className="block border-b py-4 text-lg font-black">{n}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="mt-6 block bg-king-red px-5 py-4 text-center text-sm font-black uppercase text-white">Request a quote</a></div></motion.nav>}</AnimatePresence>
  </header>;
}
