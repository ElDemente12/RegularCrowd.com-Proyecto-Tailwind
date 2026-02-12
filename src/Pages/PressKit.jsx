import { Titulo } from "../Components/Titulo";
import { PressCard } from "../Components/PressCard";
import { Form } from "../Components/Form";
import Logo from "../assets/Logo-Regular-Crowd-removebg-preview.png";
import LogoYeseria from "../assets/layeseria_logo.png";
import LogoJardin from "../assets/jardinsecreto.png";
import Carrousel1 from "../assets/Carrousel1.jpg";
import Carrousel2 from "../assets/Carrousel2.jpg";
import Carrousel3 from "../assets/Carrousel3.jpg";
import ElEsteban from "../assets/ElEsteban.jpg";
import ElPato from "../assets/ElPato.jpg";
import ElPepe from "../assets/ElPepe.jpg";
import Ernesto from "../assets/Ernesto.jpg";

export function PressKit() {
    const bandPhotos = [
        { src: Carrousel1, title: "Live Concert 1", name: "RegularCrowd-Live1.jpg" },
        { src: Carrousel2, title: "Live Concert 2", name: "RegularCrowd-Live2.jpg" },
        { src: Carrousel3, title: "Live Concert 3", name: "RegularCrowd-Live3.jpg" },
    ];

    const members = [
        { src: ElEsteban, title: "Esteban", name: "Esteban-RegularCrowd.jpg" },
        { src: ElPato, title: "Pato", name: "Pato-RegularCrowd.jpg" },
        { src: ElPepe, title: "Pepe", name: "Pepe-RegularCrowd.jpg" },
        { src: Ernesto, title: "Ernesto", name: "Ernesto-RegularCrowd.jpg" },
    ];

    const logos = [
        { src: Logo, title: "Official Logo", name: "RegularCrowd-Logo.png" },
        { src: LogoYeseria, title: "La Yesería", name: "LaYeseria-Logo.png" },
        { src: LogoJardin, title: "Jardín Secreto", name: "JardinSecreto-Logo.png" },
    ];

    return (
        <>
            <Titulo tipo="texto" texto="Press Kit" />

            <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-12 lg:px-32">

                {/* Intro Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl mb-6 text-yellow-500 font-dirty">Material Promocional</h2>
                    <p className="text-xl font-light text-gray-300">
                        Aquí encontrarás todos los recursos oficiales de Regular Crowd.
                        Imágenes en alta resolución perfectas para prensa, carteles y promoción.
                        Haz clic en la imagen o usa el botón para descargar.
                    </p>
                </div>

                {/* Section: Logos */}
                <section className="mb-20">
                    <h3 className="text-3xl font-bold mb-8 border-l-4 border-yellow-500 pl-4">Logos Oficiales</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {logos.map((item, index) => (
                            <PressCard key={index} src={item.src} title={item.title} downloadName={item.name} />
                        ))}
                    </div>
                </section>

                {/* Section: Band Photos */}
                <section className="mb-20">
                    <h3 className="text-3xl font-bold mb-8 border-l-4 border-purple-500 pl-4">Fotos de Banda</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {bandPhotos.map((item, index) => (
                            <PressCard key={index} src={item.src} title={item.title} downloadName={item.name} />
                        ))}
                    </div>
                </section>

                {/* Section: Members */}
                <section className="mb-20">
                    <h3 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Integrantes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {members.map((item, index) => (
                            <PressCard key={index} src={item.src} title={item.title} downloadName={item.name} />
                        ))}
                    </div>
                </section>

                {/* Video Section */}
                <section className="max-w-4xl mx-auto text-center mb-20">
                    <h3 className="text-3xl font-bold mb-8 text-yellow-500">Videoclip Destacado</h3>
                    <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-2xl border-2 border-gray-800">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/wiEWob5OPaQ"
                            title="Regular Crowd - Videoclip"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="max-w-4xl mx-auto">
                    <Form />
                </section>

            </div>
        </>
    );
}
