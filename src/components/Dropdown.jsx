import { useState } from "react";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {

        setIsOpen(!isOpen);
    };

    return (

        <div className="relative inline-block ">
            <button
                onClick={toggleDropdown}
                className=" text-white"
            >
                Categorie
            </button>

            {isOpen && (
                <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <div className="py-1">
                        <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            Opzione 1
                        </span>
                        <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            Opzione 2
                        </span>
                        <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            Opzione 3
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;