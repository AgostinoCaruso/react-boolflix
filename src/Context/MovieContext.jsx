import { createContext, useEffect, useState } from "react";
export const MovieContext = createContext();

import axios from "axios";
//axios CONST
const mykey = "9885bb25e8bfb72e3ac883357b3f255a";
const apiUrl = "https://api.themoviedb.org/3";

export const MovieProvider = ({ children }) => {

    const [movie, setMovie] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);

    const [series, setSeries] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const fetchApiMovie = async (query, entity) => {

        try {
            const res = await axios.get(`${apiUrl}/search/${entity}`, {
                params: { language: "it-IT", query, api_key: mykey },
            });
            entity == "movie" ? setMovie(res.data.results) : setSeries(res.data.results);
        } catch (e) {

            console.error(e);

        } finally {
            //do smth
        }
    };

    const fetchApiPopular = async (query) => {

        try {
            const res = await axios.get(`${apiUrl}/movie/popular`, {
                params: { language: "it-IT", query, api_key: mykey },
            });
            setPopular(res.data.results.slice(0, 5));
        } catch (e) {

            console.error(e);

        } finally {
            //do smth
        }
    };

    const fetchApiTopRated = async (query) => {

        try {
            const res = await axios.get(`${apiUrl}/movie/top_rated`, {
                params: { language: "it-IT", query, api_key: mykey },
            });
            setTopRated(res.data.results.slice(0, 5));
        } catch (e) {

            console.error(e);

        } finally {
            //do smth
        }
    };

    const search = async (query) => {

        query = query.trim();
        if (query) {
            fetchApiMovie(query, "movie");
            fetchApiMovie(query, "tv");
            //svuoto popular & rated
            setPopular([]);
            setTopRated([]);
            setIsSearching(true);
        } else {
            setMovie([]);
            setSeries([]);
            //qui popolo l'array con chiamate api
            fetchApiPopular();
            fetchApiTopRated();
            setIsSearching(false);
        }
    };


    const contextValue = { movie, setMovie, series, setSeries, search, fetchApiMovie, popular, fetchApiPopular, topRated, fetchApiTopRated };

    return (

        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    )
};