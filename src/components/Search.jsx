
function Search(){

    return(

        <>
            <input 
            type="text"
            name="search"
            value={""}
            placeholder="Scrivi..."
            className=" p-1"
            />
            <button className=" px-1 bg-red-500">Cerca</button>
        </>
    );
}

export default Search;