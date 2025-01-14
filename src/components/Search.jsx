import { useState, useContext, useEffect } from "react";
import { MovieContext } from "../Context/MovieContext";


function Search() {
    const { search } = useContext(MovieContext);

    const [searchValue, setSearchValue] = useState("");

    // togliere useEffect se vuoi usare il button
    useEffect(() => {

        if (searchValue.trim()) {

            search(searchValue);
        } else {
            search("");
        }
    }, [searchValue])


    return (

        <>
            <input
                type="text"
                name="search"
                value={searchValue}
                onChange={e => { setSearchValue(e.target.value) }}
                placeholder="Scrivi..."
                className=" p-1 rounded-md"
            />
            {/* <button className=" px-1 bg-red-500" onClick={() => search(searchValue)}>Cerca</button> */}
        </>
    );
}

export default Search;