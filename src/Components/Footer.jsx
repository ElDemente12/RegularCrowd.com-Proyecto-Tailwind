import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="bg-black text-white py-8 px-6 border-t border-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-gray-400 mb-2">
                    © {currentYear} <span className="text-yellow-500 font-bold">Regular Crowd</span>. Todos los derechos reservados.
                </p>
                <p className="text-sm text-gray-500">
                    Diseñado y desarrollado por Esteban Linares Abad
                </p>
            </div>
        </motion.footer>
    );
}
