import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "../assets/Logo-Regular-Crowd-removebg-preview.png";

export function Titulo({ tipo = "imagen", texto = "Regular Crowd" }) {
    const { scrollY } = useScroll();

    // Escala de 1 a 0.5 entre scroll 0 y 500px
    const scale = useTransform(scrollY, [0, 500], [1, 0.5]);

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-b from-gray-900 to-black">
            {tipo === "imagen" ? (
                <motion.img
                    style={{ scale }}
                    src={Logo}
                    className="w-2/5"
                    alt="Regular Crowd Logo"
                />
            ) : (
                <motion.h1
                    style={{ scale }}
                    className="text-white text-6xl font-bold font-dirty"
                >
                    {texto}
                </motion.h1>
            )}
        </div>
    );
}
