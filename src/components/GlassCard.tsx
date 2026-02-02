import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

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
        max-w-md w-full mx-auto
        ${className}
      `}
        >
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

            {children}
        </motion.div>
    );
};
