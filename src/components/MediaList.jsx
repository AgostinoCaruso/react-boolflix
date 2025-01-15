import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";

import Card from "./Card";

function MediaList() {
    const { movie, series, popular, topRated, isSearching } = useContext(MovieContext);

    return (
        <>
            {isSearching == true ? (
                <>
                    <div className="my-14">
                        <Card title={"Movie"} media={movie} />
                    </div>
                    <div className="my-14">
                        <Card title={"Serie"} media={series} />
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-5xl my-14">Inizia a cercare qualcosa... oppure guarda tra i consigliati</h2>
                    <Card title={"Popolari"} media={popular} />
                    <Card title={"I più votati"} media={topRated} />
                </>
            )}
        </>
    );
}

export default MediaList;