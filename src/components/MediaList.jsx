import { useContext, useEffect } from "react";
import { MovieContext } from "../Context/MovieContext";

import Card from "./Card";

function MediaList() {
    const { movie } = useContext(MovieContext);

    return (
        <>
            {movie.length > 1 ? (
                <>
                    <h2 className="text-5xl">Movie</h2>
                    <div className="grid grid-cols-3 gap-3">
                        <Card media={movie} />
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-5xl my-14">Inizia a cercare qualcosa...</h2>
                </>
            )}
        </>
    );
}

export default MediaList;