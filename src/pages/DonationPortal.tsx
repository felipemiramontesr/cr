import { GlassCard } from '../components/GlassCard';
import { StepList } from '../components/StepList';
import { motion } from 'framer-motion';
import cruzRojaLogo from '../assets/cruz-roja.svg';
import { Heart } from 'lucide-react';

export const DonationPortal = () => {
  return (
    <div className="fixed inset-0 h-[100dvh] w-screen p-[20px] md:relative md:h-screen md:flex md:items-center md:justify-center overflow-hidden flex flex-col">
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
      <GlassCard className="w-full h-full md:h-auto md:max-h-[85vh] md:max-w-2xl md:aspect-[3/4] border-t border-white/30 flex flex-col p-4 md:p-12 md:rounded-3xl shadow-2xl">
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* Header: Pegado Arriba */}
          <div className="text-center shrink-0 mb-1 md:mb-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center justify-center mb-[1vh]"
            >
              <img
                src={cruzRojaLogo}
                alt="Logo Cruz Roja Mexicana"
                className="h-[8vh] w-auto object-contain drop-shadow-lg"
              />
            </motion.div>
            <h1 className="font-bold text-red-700 text-[clamp(1.5rem,4vh,2.5rem)] leading-tight">
              Cruz Roja Mexicana
            </h1>
            <p className="text-slate-900 font-bold tracking-widest uppercase mt-[0.5vh] text-[clamp(0.75rem,1.5vh,1rem)]">
              Delegación Zacatecas
            </p>
          </div>

          {/* Body: Ocupa todo el espacio central disponible */}
          <div className="flex-1 flex flex-col justify-between min-h-0 my-[1vh]">
            <p className="text-slate-900 font-bold text-center shrink-0 text-[clamp(0.9rem,2vh,1.1rem)]">
              Sigue estos pasos para tu donativo:
            </p>

            {/* La lista crecerá lo que necesite */}
            <div className="flex-1 flex flex-col min-h-0">
              <StepList />
            </div>
          </div>

          {/* Footer: Pegado Abajo */}
          <div className="shrink-0 mt-[1vh]">
            <motion.a
              href="https://www.cruzrojamexicana.org.mx/donar/donativo?causaId=1"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center w-full text-center bg-gradient-to-r from-red-700 to-red-800 text-white font-bold rounded-xl shadow-lg shadow-red-900/50 transition-all tracking-wide border border-white/10 py-[clamp(0.75rem,2vh,1.5rem)] text-[clamp(1rem,2.2vh,1.5rem)] active:scale-95 cursor-pointer gap-3"
            >
              <Heart className="fill-white text-white w-[clamp(1.2rem,2.5vh,1.8rem)] h-[clamp(1.2rem,2.5vh,1.8rem)]" />
              Ir a Donar
            </motion.a>

            <p className="text-center text-slate-800 font-bold mt-[1.5vh] text-[clamp(0.7rem,1.5vh,0.9rem)]">
              Tu donativo salva vidas. Gracias por ayudar.
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
