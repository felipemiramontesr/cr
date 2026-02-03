import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import cruzRojaLogo from '../assets/cruz-roja.svg';
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
        className="absolute top-0 -right-7 md:-right-10 w-40 md:w-60 h-auto opacity-10 pointer-events-none brightness-0 invert"
      />

      {/* Heart Watermark */}
      <Heart className="absolute bottom-4 left-4 w-6 h-6 md:w-8 md:h-8 text-white fill-white opacity-10 pointer-events-none" />

      {children}
    </motion.div>
  );
};
