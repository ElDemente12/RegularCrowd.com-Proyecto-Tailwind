import { Content } from "../Components/Content";
import { Titulo } from "../Components/Titulo";
import { motion } from "framer-motion";
import Foto from "../assets/layeseria_logo.png";
import Foto2 from "../assets/jardinsecreto.png";
import Foto3 from "../assets/images.png";

export function News() {
    return (
        <>
            <Titulo tipo="texto" texto="News" />
            <div>
                <Content
                    Title="Nuevo EP lanzado"
                    Text="FIUMa!"
                    className="bg-gradient-to-b from-black via-gray-900 to-black"
                    pitch="El nuevo EP de Regular Crowd, 'FIUM!', está disponible en todas las plataformas digitales. 
                    Este álbum de estudio consta de cuatro canciones que exploran temas como la libertad, la autenticidad y la vida diaria. 
                    El álbum fue grabado en la ciudad de Córdoba, Argentina, y producido por el famoso productor, Marco de mirador."
                >
                    <iframe
                        alt="Regular Crowd - LAS PIEDRAS"
                        data-testid="embed-iframe"
                        style={{ borderRadius: "12px" }}
                        src="https://open.spotify.com/embed/track/1xeT60j2mHAv5rMwgsrhl5?utm_source=generator"
                        width="100%"
                        height="352"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Spotify Player"
                    ></iframe>
                </Content>
                <Content Foto={Foto} Title="13 de Marzo" Text="Yeseria">
                    <p className="text-xl font-extralight">Concierto más cercano, presentando nuestro nuevo EP 'FIUM!', ciudad de Murcia</p><br></br>
                    <motion.a
                        href="https://www.murcialive.es/la-yeseria/"
                        target="_blank"
                        className="inline-block text-white font-bold relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-white after:transition-[width] after:duration-500 after:ease-in-out after:w-0 hover:after:w-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        La Yesería web
                    </motion.a>
                </Content>
                <Content Foto={Foto2} Title="28 de Marzo" Text="Jardín secreto">
                    <p className="text-xl font-extralight">Una gran oportunidad que no podemos desperdiciar, uno de los eventos más famosos de la Región</p><br></br>
                    <motion.a
                        href="https://jardinsecretofest.com/"
                        target="_blank"
                        className="inline-block text-white font-bold relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-white after:transition-[width] after:duration-500 after:ease-in-out after:w-0 hover:after:w-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Jardín secreto web
                    </motion.a>
                </Content>
                <Content Foto={Foto3} Title="28 de Marzo" Text="Sala Spectrum">
                    <p className="text-xl font-extralight">Segundo festival en el que participaremos, contamos con nuestros queridos amigos madrileños 'Carajo Baby' y 'Anastasia General'</p><br></br>
                    <motion.a
                        href="https://www.salaspectrum.com/"
                        target="_blank"
                        className="inline-block text-white font-bold relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-white after:transition-[width] after:duration-500 after:ease-in-out after:w-0 hover:after:w-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Sala Spectrum web
                    </motion.a>
                </Content>
            </div>
        </>
    );
}

