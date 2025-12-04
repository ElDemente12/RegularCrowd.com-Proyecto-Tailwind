import { Titulo } from '../Components/Titulo.jsx';
import { Content } from '../Components/Content.jsx';
import Foto from '../assets/Carrousel3.jpg';

export function Home() {
    return (
        <>
            <Titulo />
            <Content
                Title="Next Tour Date!"
                Text="6th of December 2025"
                Foto={Foto}
                className="bg-gradient-to-b from-black to-gray-900"
                buttonLink="https://garajebeatclub.compralaentrada.com/eventos/18101/19124"
            />
        </>
    );
}
