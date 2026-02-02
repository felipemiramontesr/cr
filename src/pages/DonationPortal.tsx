import { GlassCard } from '../components/GlassCard';
import { StepList } from '../components/StepList';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const DonationPortal = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 -z-20" />

            {/* Animated Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px] -z-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10"
            />

            {/* Main Content */}
            <GlassCard className="w-full max-w-lg border-t border-white/30">
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center justify-center p-3 bg-red-600 rounded-full shadow-lg shadow-red-600/30 mb-4"
                    >
                        <Heart className="text-white fill-white" size={32} />
                    </motion.div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-white">
                        Cruz Roja Mexicana
                    </h1>
                    <p className="text-slate-400 font-medium tracking-widest uppercase text-sm mt-1">
                        Delegación Zacatecas
                    </p>
                </div>

                <div className="text-left">
                    <p className="text-slate-300 text-sm mb-2 font-medium">
                        Sigue estos pasos para tu donativo:
                    </p>
                    <StepList />
                </div>

                <motion.a
                    href="https://www.cruzrojamexicana.org.mx/donacion/266"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/50 transition-all text-lg tracking-wide border border-white/10"
                >
                    Ir a Donar
                </motion.a>

                <p className="text-xs text-center text-slate-500 mt-6">
                    Tu donativo salva vidas. Gracias por ayudar.
                </p>
            </GlassCard>
        </div>
    );
};
