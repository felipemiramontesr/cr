import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import cruzRojaLogo from '../assets/cruz-roja-transparent.svg';
import { Heart } from 'lucide-react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = '' }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        relative overflow-hidden
        bg-white/10 dark:bg-black/20
        backdrop-blur-xl
        border border-white/20
        shadow-2xl shadow-black/10
        rounded-2xl
        p-6 md:p-8
        ${className}
      `}
    >
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

      {/* Watermark */}
      <img
        src={cruzRojaLogo}
        alt=""
        className="absolute -top-3 -right-12 md:-top-5 md:-right-20 w-56 md:w-80 h-auto opacity-10 pointer-events-none brightness-0 invert"
      />

      {/* Heart Watermark (Desktop Only) */}
      <Heart className="hidden md:block absolute bottom-5 left-4 w-8 h-8 text-white fill-white opacity-10 pointer-events-none" />

      {children}
    </motion.div>
  );
};
