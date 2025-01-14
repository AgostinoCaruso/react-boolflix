import { createContext, useEffect, useState } from "react";
export const MovieContext = createContext();

import axios from "axios";
//axios CONST
const mykey = "9885bb25e8bfb72e3ac883357b3f255a";
const apiUrl = "https://api.themoviedb.org/3";

export const MovieProvider = ({ children }) => {

    const [movie, setMovie] = useState([]);
    const [series, setSeries] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const fetchApi = async (query, entity) => {

        try {
            const res = await axios.get(`${apiUrl}/search/${entity}`, {
                params: { language: "it-IT", query, api_key: mykey },
            });
            entity == "movie" ? setMovie(res.data.results) : setSeries(res.data.results);
            console.log(res.data.results);
        } catch (e) {

            console.error(e);

        } finally {
            //do smth
        }
    };

    const search = async (query) =>{

        query = query.trim();
        if(query){
            fetchApi(query, "movie");
            fetchApi(query, "tv");
            setIsSearching(true);
        }else{
            setMovie([]);
            setSeries([]);
            setIsSearching(false);
        }
    };


    const contextValue = { movie, setMovie, series, setSeries, search, fetchApi };

    return (

        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    )
};