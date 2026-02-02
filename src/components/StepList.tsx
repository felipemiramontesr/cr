import { motion } from 'framer-motion';
import { MapPin, User, CreditCard } from 'lucide-react';

const steps = [
    {
        icon: MapPin,
        title: "Sitio Web Nacional",
        description: "Serás redirigido al portal oficial, pero primero verás un selector de estados.",
        highlight: true
    },
    {
        icon: MapPin,
        title: "Selecciona: ZACATECAS",
        description: "Es CRUCIAL seleccionar 'Zacatecas' en el lista de estados para que tu donativo llegue a nosotros.",
        highlight: true,
        color: "text-red-500"
    },
    {
        icon: User,
        title: "Datos Personales",
        description: "Llena tus datos de contacto básicos en el formulario seguro."
    },
    {
        icon: CreditCard,
        title: "Método de Pago",
        description: "Elige tarjeta de crédito/débito o PayPal para finalizar."
    }
];

export const StepList = () => {
    return (
        <div className="space-y-6 my-8">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-start gap-4"
                >
                    <div className={`p-2 rounded-xl bg-white/20 shadow-sm ${step.color || 'text-slate-800 dark:text-white'}`}>
                        <step.icon size={24} />
                    </div>
                    <div>
                        <h3 className={`font-bold text-lg leading-tight ${step.color || 'text-slate-900 dark:text-gray-100'}`}>
                            {step.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-gray-300 leading-snug mt-1">
                            {step.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
