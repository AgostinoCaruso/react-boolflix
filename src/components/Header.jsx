import { useState, useEffect } from "react";

import Dropdown from "./Dropdown";
import Search from "./Search";

function Header() {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const numColor = 50;
    // Modifica del colore in base alla posizione dello scroll
    const headerColor = `rgb(${Math.min(numColor, numColor - scrollPos / 2)}, ${Math.min(numColor, numColor - scrollPos / 2)}, ${Math.min(numColor, numColor - scrollPos / 2)})`;
    return (
        <header className="py-5 px-20 flex justify-between" style={{ backgroundColor: headerColor, transition: "background-color 0.3s ease" }}>
            <h1 className="text-red-700 text-3xl">Boolflix</h1>
            <section className="flex items-center gap-5">
                <Dropdown />
                <div className="flex">
                    <Search />
                </div>
            </section>
        </header>
    );
}

export default Header;