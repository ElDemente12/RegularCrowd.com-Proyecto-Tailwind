export function Header() {
    const currentPage = "Home"; // estado de la página actual
    const links = ["Home", "Discography", "Members", "News", "Shop", "Contact"];

    return (
        <header className="fixed top-0 left-0 right-0 flex justify-center z-50 backdrop-blur-md mix-blend-screen">
            <ul className="flex gap-10 p-4 text-white">
                {links.map((link) => (
                    <li key={link}>
                        <a
                            href="#"
                            className={`
                relative
                after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-white
                after:transition-[width] after:duration-500 after:ease-in-out
                ${currentPage === link ? "after:w-full" : "after:w-0"}
                hover:after:w-full
              `}
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
}
