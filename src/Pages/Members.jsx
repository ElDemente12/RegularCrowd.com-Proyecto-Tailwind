import { Titulo } from "../Components/Titulo";
import { Content } from "../Components/Content";
import Foto from '../assets/ElEsteban.jpg';
import Foto2 from '../assets/ElPato.jpg';
import Foto3 from '../assets/ElPepe.jpg';
import Foto4 from '../assets/Ernesto.jpg';

export function Members() {
    return (
        <>
            <Titulo tipo="texto" texto="Members" />
            <div>
                <Content Foto={Foto} Title="Esteban" Text="Bajista">
                    <p className="text-xl font-extralight">En la sección rítmica, tenemos a uno de los fundadores de la banda.
                        Se podria decir que es el tercer guitarrista de la banda, aunque toque el bajo sus melodías
                        se sienten como una tercera guitarra, aportando así nuevas sensaciones a la banda.</p>
                </Content>
                <Content Foto={Foto2} Title="Adrián A.K.A Pato" Text="Cantante y segundo guitarra">
                    <p className="text-xl font-extralight">Adrián es el primer miembro oficial unido a la banda, amigo de sus amigos comenzó en la banda
                        convirtiéndose en uno de los miembros más importantes de la banda.
                        Toda su energía y talento han sido fundamentales para el inicio de la banda, aportando su talento
                        y vibras nuevas a sus melodías.</p>
                </Content>
                <Content Foto={Foto3} Title="Pepe" Text="Guitarra y coros">
                    <p className="text-xl font-extralight">Como guitarrista, Pepe es otro de los fundadores de la banda. Con claras influencias
                        su guitarra no se queda corta a la de incontables artistas famosos y triunfadores.
                        Añadiendolo a la lista de esos famosos triunfadores, él es uno de los mejores compositores
                        y guitarristas de la escena.
                    </p>
                </Content>
                <Content Foto={Foto4} Title="Ernesto" Text="Batería">
                    <p className="text-xl font-extralight">Ernesto es el último miembro incluido en la banda,
                        el y Esteban se encargan de la sección rítmica, los baíles, la energía y la emoción.
                        Podemos encontrar en Ernesto una gran diferencia de edad entre él y el resto de la banda,
                        pero eso no ha sido un problema, ya que ha demostrado ser un gran músico y un gran compañero, aparte
                        de conseguir gran adaptación a la banda. Que su edad no os engañe
                    </p>
                </Content>
            </div>
        </>
    );
}
