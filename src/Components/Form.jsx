import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Form() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate API call
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <motion.div
            className="w-full max-w-2xl mx-auto p-8 rounded-2xl bg-black/60 backdrop-blur-md border border-gray-800 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Background Glow Effect */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-3xl font-bold text-white mb-6 text-center">Contáctanos</h3>

            <AnimatePresence mode="wait">
                {submitted ? (
                    <motion.div
                        key="success"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="text-center py-12"
                    >
                        <div className="text-5xl mb-4">✨</div>
                        <h4 className="text-2xl font-bold text-yellow-500 mb-2">¡Mensaje Enviado!</h4>
                        <p className="text-gray-300">Gracias por escribirnos. Te responderemos pronto (es broma, esto es una demo).</p>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Nombre</label>
                                <input
                                    type="text"
                                    required
                                    className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder-gray-600"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder-gray-600"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Asunto</label>
                            <input
                                type="text"
                                required
                                className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder-gray-600"
                                placeholder="Contratación, Prensa, Saludos..."
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Mensaje</label>
                            <textarea
                                rows="4"
                                required
                                className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder-gray-600 resize-none"
                                placeholder="Escribe tu mensaje aquí..."
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="mt-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-yellow-500/20 transition-all uppercase tracking-wide"
                        >
                            Enviar Mensaje
                        </motion.button>
                    </motion.form>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
