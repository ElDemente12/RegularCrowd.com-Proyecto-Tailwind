import { Titulo } from "../Components/Titulo";
import { Content } from "../Components/Content";
import { Carousel } from "../Components/Carousel";
import Logo from "../assets/Logo-Regular-Crowd-removebg-preview.png";
import Carrousel1 from "../assets/Carrousel1.jpg";
import Carrousel2 from "../assets/Carrousel2.jpg";
import Carrousel3 from "../assets/Carrousel3.jpg";

export function PressKit() {
    return (
        <>
            <Titulo tipo="texto" texto="Press Kit" />
            <div>
                <div className="from-black via-gray-900 to-black">
                    <Content Foto={Logo} Title="Nosotros somos: " Text='Regular Crowd' className="bg-gradient-to-b from-black via-gray-900 to-black">
                        <p>Para descargar cualquier imagen de la página, de click en la imagen</p>
                    </Content>
                </div>
                <div>
                    <Carousel images={[Carrousel1, Carrousel2, Carrousel3]} />
                </div>
                <div>
                    <Content Title="Listado de conciertos" className="bg-gradient-to-b from-black via-gray-900 to-black"
                        pitch="Tenemos gran repertorio de conciertos donde hemos tocado, muchos cárteles con más renombre de murcia
                        emergente.">
                        <div>
                            <ul className="flex flex-col gap-2 list-disc">
                                <li className="text-yellow-400 text-2xl ml-10">Festival de Vistalegre</li>
                                <li className="text-amber-400 text-2xl ml-10">Festival de Umurgentes</li>
                                <li className="text-amber-400 text-2xl ml-10">Festival Ruido Subterráneo</li>
                                <li className="text-amber-400 text-2xl ml-10">Sala Revolver</li>
                                <li className="text-amber-400 text-2xl ml-10">Sala Garaje</li>
                                <li className="text-amber-400 text-2xl ml-10">Sala Kadabra</li>
                            </ul>
                            <p className="text-xl font-extralight mt-5 text-amber-400">Entre otros...</p>
                        </div>
                    </Content>
                </div>
                <div>
                    <Content
                        className="flex justify-center text-center bg-gradient-to-b from-black via-gray-900 to-black"
                        Text="Nuestro primer VideoClip del Single 'Ya No Puedo Vivir De Otra Manera'"
                    >
                        <iframe
                            className="ml-12    "
                            alt="Regular Crowd - Ya No Puedo Vivir De Otra Manera"
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://www.youtube.com/embed/wiEWob5OPaQ"
                            width="100%"
                            height="352vh"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title="Spotify Player"
                        ></iframe>
                    </Content >
                </div>
            </div>
        </>
    );
}
