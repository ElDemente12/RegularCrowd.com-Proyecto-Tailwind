import { Titulo } from "../Components/Titulo";
import { Content } from "../Components/Content";

export function Discography() {
    return (
        <>
            <Titulo tipo="texto" texto="Discography" />
            <div className="w-full">
                <Content
                    Title="Welcome to..."
                    Text="'EN PAZ'"
                    className="bg-gradient-to-b from-black via-gray-900 to-black"
                    pitch="Una canción introspectiva que explora la búsqueda de paz interior en medio del caos. 
                    Con melodías envolventes y letras profundas. En paz es el favorito de nuestros fans, cada vez que en directo suena
                    las salas retumban, nosotros no tenemos miedo al éxito, solo a la música."
                >
                    <iframe
                        alt="Regular Crowd - En Paz"
                        data-testid="embed-iframe"
                        style={{ borderRadius: "12px" }}
                        src="https://open.spotify.com/embed/track/2sRLxCVnIJtP83ppUIblVl?utm_source=generator"
                        width="100%"
                        height="352"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Spotify Player"
                    ></iframe>
                </Content>
            </div>
            <div className="w-full">
                <Content
                    Title="Welcome to..."
                    Text="'YA NO PUEDO VIVIR DE OTRA MANERA'"
                    className="lg:flex lg:justify-end lg:pr-64 bg-gradient-to-b from-black via-gray-900 to-black"
                    pitch="Un himno de liberación y autenticidad. 
                    Esta canción captura la esencia de vivir sin máscaras, con un ritmo potente que te hará sentir cada palabra. 
                    Uno de nuestros singles favoritos, el cual será el primer single de nuestro nuevo EP, titulado 'FIUUUUM!'"
                    reverse={true}
                >
                    <iframe
                        alt="Regular Crowd - Ya No Puedo Vivir De Otra Manera"
                        data-testid="embed-iframe"
                        style={{ borderRadius: "12px" }}
                        src="https://open.spotify.com/embed/track/6uFpmMB884UsHsdl6Ij7Jw?utm_source=generator"
                        width="100%"
                        height="352"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Spotify Player"
                    ></iframe>
                </Content >
            </div >
            <div className="w-full">
                <Content
                    Title="Welcome to..."
                    Text="'Spaceman'"
                    className="bg-gradient-to-b from-black via-gray-900 to-black"
                    pitch="Un viaje cósmico a través del sonido. 
                    'Spaceman' combina elementos de rock alternativo con atmósferas espaciales que te transportarán a otra dimensión.
                    Siendo este nuestro primer single como banda emergente, teniendo la máxima cantidad de escuchas de un producto
                    tan definido"
                >
                    <iframe
                        alt="Regular Crowd - Spaceman"
                        data-testid="embed-iframe"
                        style={{ borderRadius: "12px" }}
                        src="https://open.spotify.com/embed/track/36f0ZKycavhOXoPPgmOZeP?utm_source=generator"
                        width="100%"
                        height="352"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Regular Crowd - Spaceman"
                    ></iframe>
                </Content>
            </div>
            <div className="w-full">
                <Content
                    Title="Welcome to..."
                    Text="'Regular Days'"
                    className="lg:flex lg:justify-end lg:pr-64 bg-gradient-to-b from-black via-gray-900 to-black"
                    pitch="Una reflexión sobre la belleza de lo cotidiano. 
                    Con un estilo cañero y letras que resuenan con la vida diaria,
                    esta canción hace que descubras lo que sentimos como banda al pasar el día a día. Con esta canción lo que queremos
                     es que sientas como nosotros nos sentimos y compartas toda nuestra emoción"
                    reverse={true}
                >
                    <iframe
                        alt="Regular Crowd - Regular Days"
                        data-testid="embed-iframe"
                        style={{ borderRadius: "12px" }}
                        src="https://open.spotify.com/embed/track/3QnrbWYlGolTJrthgmilK9?utm_source=generator"
                        width="100%"
                        height="352"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Regular Crowd - Regular Days"
                    ></iframe>
                </Content>
            </div>
        </>
    );
}