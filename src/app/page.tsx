"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import MedicalMesh from '@/components/canvas/Particles';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Pill, BarChart3, Zap, ShieldCheck, LayoutDashboard, Database, ArrowRight, CheckCircle2, Mail, Smartphone } from 'lucide-react';

export default function Home() {
  return (
    <main className="no-scrollbar relative bg-[#020617] text-white selection:bg-indigo-500/30">
      <Navbar />

      {/* FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <MedicalMesh />
        </Canvas>
      </div>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="h-screen flex flex-col items-center justify-center px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
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
              <span className="text-white font-medium italic block mt-2">Inventory Prediction • GST Compliance • Real-time Cloud Analytics</span>
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <button className="group relative bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-indigo-700 transition-all shadow-[0_0_50px_rgba(79,70,229,0.3)] flex items-center gap-3">
                Start Free Trial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-[#020617]" alt="User" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">Trusted by 500+</p>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter italic">Pharmacists</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- STATS BAR --- */}
        <section className="py-12 border-y border-white/5 bg-[#020617]/80 backdrop-blur-xl">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: "Processing Speed", val: "2.4ms" },
                { label: "Data Integrity", val: "99.99%" },
                { label: "Tax Compliance", val: "100%" },
                { label: "Local Support", val: "Rewari" }
              ].map((stat, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className="text-3xl font-black text-indigo-500 group-hover:scale-110 transition-transform">{stat.val}</div>
                  <div className="text-slate-500 text-[10px] uppercase tracking-[0.3em] mt-2 font-bold">{stat.label}</div>
                </div>
              ))}
           </div>
        </section>

        {/* --- BENTO GRID --- */}
        <section id="products" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div className="max-w-xl">
               <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic uppercase">Engineered for Profit.</h2>
               <p className="text-slate-500 text-lg">Stop managing stock. Start managing growth.</p>
             </div>
             <a href="mailto:sahil@zenorx.in" className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
               Contact Dev Team <ArrowRight size={18}/>
             </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Feature 1: Inventory */}
            <motion.div whileHover={{ y: -10 }} className="md:col-span-4 p-12 rounded-[3.5rem] bg-indigo-600 border border-indigo-400 shadow-2xl shadow-indigo-600/20 overflow-hidden relative group">
              <div className="relative z-10">
                <Database size={44} className="mb-8" />
                <h3 className="text-5xl font-black mb-6 leading-tight uppercase italic">Autonomous <br/> Inventory</h3>
                <p className="text-indigo-100 text-xl leading-relaxed max-w-md">Our neural engine tracks batch expiries and demand spikes before they happen. No more stockouts. No more waste.</p>
              </div>
              <div className="absolute right-[-5%] bottom-[-5%] opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Pill size={500} />
              </div>
            </motion.div>

            {/* Feature 2: Analytics */}
            <motion.div whileHover={{ y: -10 }} className="md:col-span-2 p-10 rounded-[3.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-3xl flex flex-col justify-between">
              <div>
                <BarChart3 className="text-indigo-500 mb-8" size={36} />
                <h3 className="text-2xl font-black mb-4">Precision Analytics</h3>
                <p className="text-slate-400 leading-relaxed">Daily revenue heatmaps and SKU performance reports.</p>
              </div>
              <div className="text-indigo-400 font-black text-xs tracking-widest mt-8">ZENORX CORE AI</div>
            </motion.div>

            {/* Feature 3: GST */}
            <motion.div whileHover={{ y: -10 }} className="md:col-span-3 p-10 rounded-[3.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-3xl relative overflow-hidden group">
               <Zap className="text-indigo-500 mb-8" size={36} />
               <h3 className="text-3xl font-black mb-4">Ultra-Fast Billing</h3>
               <p className="text-slate-400">Zero-latency GST invoicing designed for peak Indian retail hours.</p>
               <div className="mt-8 bg-indigo-500/10 p-4 rounded-xl border border-indigo-500/20 font-mono text-[9px] text-indigo-300">
                  {`> INITIALIZING SECURE TRANSACTION... DONE`}
               </div>
            </motion.div>

            {/* Feature 4: Cloud */}
            <motion.div whileHover={{ y: -10 }} className="md:col-span-3 p-10 rounded-[3.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-3xl">
              <ShieldCheck className="text-indigo-500 mb-8" size={36} />
              <h3 className="text-3xl font-black mb-4">Cloud Native</h3>
              <p className="text-slate-400">Your pharmacy in your pocket. Sync multiple stores across Haryana effortlessly.</p>
            </motion.div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <section className="py-40 bg-gradient-to-t from-indigo-950/30 to-transparent">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter italic uppercase">Power Up Your Shop.</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-white text-black px-12 py-6 rounded-2xl font-black text-2xl hover:bg-indigo-600 hover:text-white transition-all">
                Claim Free Trial
              </button>
              <a href="mailto:sahil@zenorx.in" className="border border-white/20 bg-white/5 backdrop-blur-md px-12 py-6 rounded-2xl font-black text-2xl flex items-center justify-center gap-3 hover:bg-white/10">
                <Mail /> sahil@zenorx.in
              </a>
            </div>
            <p className="mt-12 text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px]">Zero Setup Fee • 14 Day Unlimited Trial</p>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-24 border-t border-white/5 px-10 bg-[#020617]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-left">
              <div className="text-3xl font-black mb-6">ZENO<span className="text-indigo-600">RX</span></div>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed italic">The definitive software ecosystem for Indian healthcare retailers. Built for speed, scale, and simplicity.</p>
            </div>
            
            <div className="space-y-4">
               <p className="text-white font-black text-xs tracking-widest uppercase">Connectivity</p>
               <div className="flex flex-col gap-3 text-slate-500 text-sm">
                  <a href="mailto:sahil@zenorx.in" className="hover:text-indigo-500 transition-colors">sahil@zenorx.in</a>
                  <p>Haryana, IN</p>
               </div>
            </div>

            <div className="space-y-4">
               <p className="text-white font-black text-xs tracking-widest uppercase">Branch Identity</p>
               <p className="text-slate-500 text-sm">Dedicated to the pharmacy owners.</p>
            </div>
          </div>
          
          <div className="text-center mt-20 pt-10 border-t border-white/5">
             <div className="text-slate-800 text-[10px] tracking-[1.5em] uppercase font-black">
                ZENORX TECHNOLOGIES © 2026
             </div>
          </div>
        </footer>
      </div>
    </main>
  );
}