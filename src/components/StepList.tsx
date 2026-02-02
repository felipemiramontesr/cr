import { motion } from 'framer-motion';
import { MapPin, User, CreditCard } from 'lucide-react';

const steps = [
    {
        icon: MapPin,
        title: "A continuación:",
        description: "Serás redirigido al portal oficial, donde verás un selector.",
        highlight: true
    },
    {
        icon: MapPin,
        title: "Selecciona: ZACATECAS",
        description: "Es CRUCIAL seleccionar ZACATECAS.",
        highlight: true,
        color: "text-red-700"
    },
    {
        icon: User,
        title: "Datos Personales",
        description: "Llena tus datos de contacto básicos en el formulario seguro."
    },
    {
        icon: CreditCard,
        title: "Método de Pago",
        description: "Elige el metodo de pago de tu preferencia."
    }
];

export const StepList = () => {
    return (
        <div className="flex flex-col justify-evenly h-full gap-[1vh] min-h-0 py-[1vh] md:py-4">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-center gap-[1.5vh] group min-h-0"
                >
                    <div className={`p-[1vh] rounded-xl bg-white/40 shadow-sm shrink-0 ${step.color || 'text-black dark:text-white'}`}>
                        <step.icon className="w-[clamp(1.2rem,3vh,1.8rem)] h-[clamp(1.2rem,3vh,1.8rem)]" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className={`font-black leading-none ${step.color || 'text-black dark:text-gray-100'} text-[clamp(1rem,2.5vh,1.5rem)]`}>
                            {step.title}
                        </h3>
                        <p className="text-slate-900 dark:text-gray-200 font-bold leading-tight mt-[0.5vh] line-clamp-2 text-[clamp(0.85rem,2vh,1.1rem)]">
                            {step.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
