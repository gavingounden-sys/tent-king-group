"use client";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once: true }); const count = useMotionValue(0); const rounded = useTransform(count, v => Math.round(v).toLocaleString("en-ZA") + suffix);
  useEffect(() => { if (inView) animate(count, value, { duration: 1.8, ease: "easeOut" }); }, [inView, count, value]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}
