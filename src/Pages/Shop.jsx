import { Titulo } from "../Components/Titulo";
import { ShopGrid } from "../Components/ShopGrid";

export function Shop() {
    return (
        <>
            <Titulo tipo="texto" texto="Shop" />
            <div className="bg-black min-h-screen">
                <ShopGrid />
            </div>
        </>
    );
}
