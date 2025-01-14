import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";

import Card from "./Card";

function MediaList() {
    const { movie, popular, topRated} = useContext(MovieContext);

    return (
        <>
            {movie.length > 1 ? (
                <>
                    <h2 className="text-5xl my-14">Movie</h2>
                    <div className="grid grid-cols-5 gap-3">
                        <Card movie={movie} />
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-5xl my-14">Inizia a cercare qualcosa... oppure guarda tra i consigliati</h2>
                    <h2 className="text-5xl">Populari</h2>
                    <div className="grid grid-cols-5 gap-3 py-5">
                        <Card movie={popular} />
                    </div>
                    <h2 className="text-5xl">I più votati</h2>
                    <div className="grid grid-cols-5 gap-3 py-5">
                        <Card movie={topRated} />
                    </div>
                </>
            )}
        </>
    );
}

export default MediaList;