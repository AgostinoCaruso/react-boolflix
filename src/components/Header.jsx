
import Dropdown from "./Dropdown";
import Search from "./Search";

function Header() {

    return (
        <header className=" bg-zinc-950 p-3 flex justify-between">
            <h1 className=" text-red-700 text-3xl">Boolflix</h1>
            <section className=" flex items-center gap-5">
                <Dropdown />
                <div className="flex">
                    <Search />
                </div>
            </section>
        </header>
    );
}

export default Header;