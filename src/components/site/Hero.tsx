"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="mb-4" variant="secondary">Available for work</Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Pixels, Code, and Pure Vision.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
            I’m Bhupender Sharma — a passionate React Native, React Js & JavaScript developer with 3 years of experience building secure, high-performance, and user-focused applications across fintech, enterprise, and consumer platforms.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative aspect-square md:aspect-[5/5] h-full"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent" />
          <Image
            src="/projects/Hero.png"
            alt="Hero image"
            fill
            className="object-center rounded-xl border"
            priority
          />
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="pointer-events-none absolute -z-10 -right-24 top-10 h-80 w-64 rounded-full bg-primary/10 blur-3xl"
      />
    </section>
  );
}


