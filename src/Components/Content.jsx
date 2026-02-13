import { motion } from "framer-motion";

export function Content({ Foto, Title, Text, children, className = "", buttonLink, pitch, reverse = false }) {
    return (
        <motion.div
            className={`min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-32 py-10 lg:py-0 gap-10 lg:gap-20 ${className}`}
            initial={{ opacity: 0, x: reverse ? -10 : 10, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {Foto && (
                <img
                    src={Foto}
                    alt="Regular Crowd imagenes"
                    className="w-auto max-h-[550px] lg:max-h-[650px] object-contain rounded-lg border-2 p-2 bg-slate-300 hover:scale-110 transition duration-300 shadow-xl"
                />
            )}
            <div className={`w-full lg:w-1/2 flex flex-col justify-center ${!Foto ? "lg:w-full text-center" : ""}`}>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">{Title}</h1>
                <p className="text-lg lg:text-xl font-extralight leading-relaxed">{Text}</p>
                {children ? (
                    <div className={`mt-8 flex flex-col lg:flex-row gap-8 items-start ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-full lg:w-auto lg:min-w-[400px]">
                            {children}
                        </div>
                        {pitch && (
                            <div className="flex-1 text-gray-300 leading-relaxed mt-4 lg:mt-0">
                                <p className="text-xl lg:text-2xl italic">{pitch}</p>
                            </div>
                        )}
                    </div>
                ) : (
                    buttonLink && (
                        <div className="mt-8">
                            <a
                                href={buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:scale-105 transition duration-300 shadow-lg"
                            >
                                Buy Tickets
                            </a>
                        </div>
                    )
                )}
            </div>
        </motion.div>
    );
}
