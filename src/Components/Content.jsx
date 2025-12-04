import { motion } from "framer-motion";

export function Content({ Foto, Title, Text, children, className = "", buttonLink, pitch, reverse = false }) {
    return (
        <motion.div
            className={`h-screen flex items-center justify-start px-10 pl-64 pr-64 ${className}`}
            initial={{ opacity: 0, x: reverse ? -10 : 10, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {Foto && (
                <img
                    src={Foto}
                    alt="Regular Crowd imagenes"
                    className="w-5/12 rounded-lg border-2 p-2 bg-slate-300 hover:scale-110 transition duration-300"
                />
            )}
            <div className={`${Foto ? "ml-48" : ""}`}>
                <h1 className="text-4xl font-bold">{Title}</h1>
                <p className="text-xl font-extralight">{Text}</p>
                {children ? (
                    <div className={`mt-10 flex gap-8 items-start ${reverse ? 'flex-row-reverse' : ''}`}>
                        <div className="flex-shrink-0" style={{ width: "500px" }}>
                            {children}
                        </div>
                        {pitch && (
                            <div className="flex-1 text-gray-300 leading-relaxed">
                                <p className="text-2xl">{pitch}</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <a
                        href={buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-10 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 hover:scale-110 transition duration-300"
                    >
                        Buy Tickets
                    </a>
                )}
            </div>
        </motion.div>
    );
}
