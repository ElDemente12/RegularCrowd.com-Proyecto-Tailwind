import { motion } from "framer-motion";
import Discos from "../assets/Discos.jpg";
import Puas from "../assets/puas.png";
import Calzoncillos from "../assets/Calzoncillos.png";
import Camisetas from "../assets/Camisetas.png";

const items = [
    { id: 1, title: "Discos", image: Discos, price: "Desde 15€" },
    { id: 2, title: "Púas", image: Puas, price: "Pack 5€" },
    { id: 3, title: "Calzoncillos", image: Calzoncillos, price: "12€" },
    { id: 4, title: "Camisetas", image: Camisetas, price: "20€" },
];

export function ShopGrid() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-2xl shadow-purple-900/20 ring-1 ring-white/10"
                    >
                        {/* Background Image with Zoom Effect */}
                        <div className="aspect-[4/3] overflow-hidden">
                            <motion.img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />
                        </div>

                        {/* Dark Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                            <motion.h3
                                className="text-3xl text-white mb-2 font-dirty tracking-wide"
                            >
                                {item.title}
                            </motion.h3>
                            <div className="flex items-center justify-between opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                <span className="text-purple-400 font-bold text-xl">{item.price}</span>
                                <button className="px-4 py-2 bg-white text-black font-bold rounded-full hover:bg-purple-400 hover:text-white transition-colors">
                                    Ver más
                                </button>
                            </div>
                        </div>

                        {/* Border Glow Effect on Hover */}
                        <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-purple-400/50 rounded-2xl pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
