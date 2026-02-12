import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "Discography", path: "/discography" },
        { name: "Members", path: "/members" },
        { name: "News", path: "/news" },
        { name: "Shop", path: "/shop" },
        { name: "Press kit", path: "/press-kit" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md mix-blend-screen bg-black/50 lg:bg-transparent">
            <div className="flex justify-between items-center p-4 lg:justify-center">
                {/* Mobile Hamburger Button */}
                <button
                    className="lg:hidden text-white text-3xl focus:outline-none ml-auto"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Navigation Links */}
            <ul className={`
                flex flex-col lg:flex-row gap-10 p-4 text-white
                fixed lg:static top-[60px] left-0 w-full lg:w-auto h-screen lg:h-auto
                bg-black/90 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none
                transition-all duration-300 ease-in-out z-40
                ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100"}
                items-center justify-start pt-20 lg:pt-0 lg:items-center lg:justify-center
            `}>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                            className={`
                                relative text-2xl lg:text-base font-bold lg:font-normal
                                after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-white
                                after:transition-[width] after:duration-500 after:ease-in-out
                                ${location.pathname === link.path ? "after:w-full" : "after:w-0"}
                                hover:after:w-full
                            `}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    );
}
