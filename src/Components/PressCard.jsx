import { motion } from "framer-motion";

export function PressCard({ src, title, downloadName }) {
    return (
        <motion.div
            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <img
                src={src}
                alt={title}
                className="w-full h-full object-cover aspect-square"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                <h3 className="text-white text-xl font-bold tracking-wider text-center px-2">{title}</h3>
                <a
                    href={src}
                    download={downloadName || "RegularCrowd-Asset"}
                    className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl"
                >
                    Descargar
                </a>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 rounded-xl pointer-events-none transition-colors duration-300" />
        </motion.div>
    );
}
