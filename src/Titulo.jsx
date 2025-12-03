import { motion, useScroll, useTransform } from "framer-motion";

export function Titulo() {
    const { scrollY } = useScroll();

    // Escala de 1 a 0.5 entre scroll 0 y 300px
    const scale = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <div
            className="h-screen flex justify-center items-center bg-gradient-to-b from-black to-gray-700">
            <motion.h1 style={{ scale }} className="text-white text-9xl font-bold">Regular Crowd</motion.h1>
        </div>
    );
}
