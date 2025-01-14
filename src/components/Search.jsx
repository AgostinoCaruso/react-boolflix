import { useState, useContext } from "react";
import { MovieContext } from "../Context/MovieContext";


function Search() {
    const { search } = useContext(MovieContext);
    
    const [searchValue, setSearchValue] = useState("");

    const onEnterSearch = (e) =>{
        if(!searchValue) search("");
        if(e.code == "Enter") search(searchValue);
    }
    return (

        <>
            <input
                type="text"
                name="search"
                value={searchValue}
                onChange={e => { setSearchValue(e.target.value) }}
                placeholder="Scrivi..."
                className=" p-1"
            />
            <button className=" px-1 bg-red-500" onClick={() => search(searchValue)}>Cerca</button>
        </>
    );
}

export default Search;