"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
const faqs = [
  ["Can the group support projects outside Gauteng?", "Yes. Tent King Group supports clients nationally, with deployment capability for infrastructure, sanitation, events and property requirements across South Africa."],
  ["Do you manufacture structures in-house?", "Yes. Tent King manufactures on-site, enabling closer quality control, faster turnaround, custom specifications and branded structure solutions."],
  ["Can multiple divisions work on one project?", "Yes. The group model is designed to consolidate complex requirements through one accountable partner—from temporary structures and sanitation to event delivery and facilities support."],
  ["Do you work with government and procurement teams?", "Yes. The group serves government departments, municipalities, education, corporate, construction and private-sector clients, with project scoping available through the central enquiry team."],
];
export function FAQ() { const [open, setOpen] = useState(0); return <div>{faqs.map(([q,a],i) => <div key={q} className="border-t border-neutral-300"><button onClick={() => setOpen(open === i ? -1 : i)} className="focus-ring flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-black" aria-expanded={open===i}>{q}<Plus className={`shrink-0 transition ${open===i ? "rotate-45 text-king-red" : ""}`} /></button><AnimatePresence initial={false}>{open===i && <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} className="overflow-hidden"><p className="max-w-2xl pb-7 leading-7 text-neutral-600">{a}</p></motion.div>}</AnimatePresence></div>)}</div> }
