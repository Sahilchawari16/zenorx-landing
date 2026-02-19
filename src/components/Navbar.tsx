"use client";
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 backdrop-blur-md bg-[#020617]/50"
    >
      <div className="text-2xl font-bold text-white tracking-tighter">
        Zeno<span className="text-indigo-500">Rx</span>
      </div>
      <div className="hidden md:flex gap-8 text-slate-300 text-sm font-medium">
        <a href="#" className="hover:text-white transition-colors">Products</a>
        <a href="#" className="hover:text-white transition-colors">Solutions</a>
        <a href="#" className="hover:text-white transition-colors">About</a>
      </div>
      <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-500 hover:text-white transition-all">
        Contact Sales
      </button>
    </motion.nav>
  );
}