"use client";
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import MedicalMesh from '@/components/canvas/Particles';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Pill, BarChart3, Zap, ShieldCheck, LayoutDashboard, Database, ArrowRight, CheckCircle2, Mail, Smartphone } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  
  // Scroll tracking for 3D effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Bouncy spring physics for smooth movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 3D Transformations based on scroll
  const mainRotateX = useTransform(smoothProgress, [0, 0.2, 0.5, 1], [0, 5, -5, 0]);
  const mainScale = useTransform(smoothProgress, [0, 0.1], [1, 0.92]);
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.3]);

  return (
    <main ref={containerRef} className="no-scrollbar relative bg-[#020617] text-white selection:bg-indigo-500/30 overflow-x-hidden">
      <Navbar />

      {/* --- 3D PERSPECTIVE BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div style={{ scale: backgroundScale }} className="h-full w-full">
          <Canvas camera={{ position: [0, 0, 10] }} dpr={[1, 2]}>
            <MedicalMesh />
          </Canvas>
        </motion.div>
      </div>

      <div className="relative z-10 perspective-1000">
        
        {/* --- HERO SECTION (3D POP) --- */}
        <section className="h-screen flex flex-col items-center justify-center px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, z: -100 }}
            animate={{ opacity: 1, z: 0 }}
            style={{ 
              y: useTransform(smoothProgress, [0, 0.3], [0, 150]),
              opacity: useTransform(smoothProgress, [0, 0.2], [1, 0]) 
            }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-indigo-500/30 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold tracking-[0.2em] mb-8 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              The Operating System for Modern Pharmacies
            </div>
            <h1 className="text-6xl md:text-[130px] font-black tracking-tighter mb-8 leading-[0.8] drop-shadow-2xl">
              ZENO<span className="text-indigo-600">RX</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed mb-12">
              Scale your retail pharmacy with AI-driven intelligence. 
              <span className="text-white font-medium italic block mt-2">Inventory Prediction • GST Compliance • Cloud Analytics</span>
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05, translateZ: 20 }}
                className="group relative bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-indigo-700 transition-all shadow-[0_0_50px_rgba(79,70,229,0.3)] flex items-center gap-3"
              >
                Start Free Trial <ArrowRight />
              </motion.button>
              
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-[#020617]" alt="User" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">Trusted by 500+</p>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter italic">Pharmacists in Haryana</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- STATS BAR (Floating 3D) --- */}
        <motion.section 
          style={{ rotateX: mainRotateX }}
          className="py-12 border-y border-white/5 bg-[#020617]/80 backdrop-blur-xl sticky top-20 z-20"
        >
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: "Processing Speed", val: "2.4ms" },
                { label: "Data Integrity", val: "99.99%" },
                { label: "Tax Compliance", val: "100%" },
                { label: "Support", val: "Rewari" }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-3xl font-black text-indigo-500 group-hover:scale-125 transition-all">{stat.val}</div>
                  <div className="text-slate-500 text-[10px] uppercase tracking-[0.3em] mt-2 font-bold">{stat.label}</div>
                </div>
              ))}
           </div>
        </motion.section>

        {/* --- BENTO GRID (Deep Parallax) --- */}
        <section id="products" className="py-32 px-6 max-w-7xl mx-auto">
          <motion.div 
            style={{ scale: mainScale, rotateX: mainRotateX }}
            className="grid grid-cols-1 md:grid-cols-6 gap-6"
          >
            {/* Main Feature - Large Box with 3D Pop */}
            <motion.div 
              whileHover={{ rotateY: -5, rotateX: 5, z: 50 }}
              className="md:col-span-4 p-12 rounded-[3.5rem] bg-indigo-600 border border-indigo-400 shadow-2xl overflow-hidden relative group cursor-pointer"
            >
              <Database size={44} className="mb-8" />
              <h3 className="text-5xl font-black mb-6 leading-tight uppercase italic">Autonomous Inventory</h3>
              <p className="text-indigo-100 text-xl max-w-md">Our neural engine tracks batch expiries and demand spikes before they happen.</p>
              <div className="absolute right-[-5%] bottom-[-5%] opacity-10 group-hover:scale-125 transition-transform duration-1000">
                <Pill size={500} />
              </div>
            </motion.div>

            {/* Feature 2: Analytics */}
            <motion.div whileHover={{ z: 30 }} className="md:col-span-2 p-10 rounded-[3.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-3xl flex flex-col justify-between">
              <div>
                <BarChart3 className="text-indigo-500 mb-8" size={36} />
                <h3 className="text-2xl font-black mb-4 uppercase">Precision Analytics</h3>
                <p className="text-slate-400">Daily revenue heatmaps and SKU performance reports.</p>
              </div>
              <div className="text-indigo-400 font-black text-[10px] tracking-widest mt-8">ZENORX CORE AI</div>
            </motion.div>

            {/* Feature 3: GST */}
            <motion.div whileHover={{ z: 30 }} className="md:col-span-3 p-10 rounded-[3.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-3xl relative overflow-hidden group">
               <Zap className="text-indigo-500 mb-8" size={36} />
               <h3 className="text-3xl font-black mb-4 uppercase italic">Ultra-Fast Billing</h3>
               <p className="text-slate-400">Zero-latency GST invoicing designed for peak Indian retail hours.</p>
               <div className="mt-8 bg-indigo-500/10 p-4 rounded-xl border border-indigo-500/20 font-mono text-[9px] text-indigo-300">
                  {`> SECURE TRANSACTION READY...`}
               </div>
            </motion.div>

            {/* Feature 4: Cloud */}
            <motion.div whileHover={{ z: 30 }} className="md:col-span-3 p-10 rounded-[3.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-3xl">
              <ShieldCheck className="text-indigo-500 mb-8" size={36} />
              <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">Cloud Native</h3>
              <p className="text-slate-400">Sync multiple stores across Haryana effortlessly from your pocket.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* --- 3D CALL TO ACTION CARD --- */}
        <section className="py-40 px-6">
          <motion.div 
            style={{ rotateX: useTransform(smoothProgress, [0.8, 1], [20, 0]) }}
            className="max-w-5xl mx-auto text-center p-20 rounded-[4rem] bg-white text-black shadow-[0_50px_100px_-20px_rgba(255,255,255,0.1)] relative overflow-hidden"
          >
            <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter italic uppercase">Power Up.</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-indigo-600 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-black transition-all">
                Launch Trial
              </button>
              <a href="mailto:sahil@zenorx.in" className="border-2 border-black px-12 py-6 rounded-2xl font-black text-2xl flex items-center gap-3 hover:bg-black hover:text-white transition-all">
                <Mail /> Email Sahil
              </a>
            </div>
            <p className="mt-12 text-slate-500 font-bold uppercase tracking-[0.5em] text-[10px]">Rewari • Haryana • India</p>
          </motion.div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-24 border-t border-white/5 px-10 bg-[#020617]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-left">
              <div className="text-3xl font-black mb-6 tracking-tighter">ZENO<span className="text-indigo-600">RX</span></div>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed italic">The definitive software ecosystem for Indian healthcare retailers.</p>
            </div>
            <div className="space-y-4">
               <p className="text-white font-black text-xs tracking-widest uppercase">Connectivity</p>
               <a href="mailto:sahil@zenorx.in" className="text-slate-500 hover:text-indigo-500 block">sahil@zenorx.in</a>
            </div>
            <div className="space-y-4 text-right md:text-left">
               <p className="text-white font-black text-xs tracking-widest uppercase italic">ZENORX TECHNOLOGIES © 2026</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}