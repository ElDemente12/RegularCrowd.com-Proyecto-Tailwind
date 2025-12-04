import { Link, useLocation } from "react-router-dom";

export function Header() {
    const location = useLocation();

    const links = [
        { name: "Home", path: "/" },
        { name: "Discography", path: "/discography" },
        { name: "Members", path: "/members" },
        { name: "News", path: "/news" },
        { name: "Shop", path: "/shop" },
        { name: "Press kit", path: "/press-kit" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 flex justify-center z-50 backdrop-blur-md mix-blend-screen">
            <ul className="flex gap-10 p-4 text-white">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                            to={link.path}
                            className={`
                relative
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
