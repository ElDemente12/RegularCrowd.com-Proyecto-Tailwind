import Foto from "./assets/DSC_0030.jpg";

export function Content() {
    return (
        <div className="flex items-center justify-start px-10 h-full mb-10 pb-52 pt-16 pl-64">
            <img
                src={Foto}
                alt="Regular Crowd imagenes"
                className="w-5/12 rounded-lg border-2 p-2 bg-slate-300 hover:scale-110 transition duration-300"
            />
            <div className="ml-48">
                <h1 className="text-4xl font-bold">Next Tour Date!</h1>
                <p className="">6th of December 2025</p>
                <button className="block mt-10 bg-white text-black p-2 rounded-full hover:bg-gray-200 hover:scale-110 transition duration-300">Buy Tickets</button>
            </div>
        </div>
    );
}
