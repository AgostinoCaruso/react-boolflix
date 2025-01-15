import Star from "./Star";
import Flag from "./Flag";

import { useState } from "react";


function Card({ title, media }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <>
            <h2 className="text-5xl my-5">{title}</h2>
            <div className="grid grid-cols-5 gap-3 my-14">

                {media.length >= 1
                    ?
                    media.map((item, index) => (
                        <div
                            key={item.id}
                            className="text-center relative "
                            onMouseOver={() => setHoveredIndex(index)}
                            onMouseOut={() => setHoveredIndex(null)}
                        >
                            <div>
                                <img
                                    src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                                    alt={`${item.title}`}
                                    className={`rounded-md  transition-all duration-300
                                ${hoveredIndex === index ? " scale-110 z-60 " : " scale-100 z-0"}`}
                                />
                            </div>

                            <div
                                className={`p-3 absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white transition-all duration-300
                            ${hoveredIndex === index ? " opacity-100 scale-110 cursor-pointer" : " scale-100 opacity-0 z-0"}`}
                            >
                                <div className="flex flex-col justify-center items-center h-full">
                                    <h2 className="text-xl font-bold"> {item.title || item.name}</h2>
                                    {item.title == item.original_title
                                        ? ""
                                        : <h2 className="text-xl font-bold">{item.original_title || item.original_name}</h2>
                                    }
                                    <p className="font-bold">Voto: <Star num={item.vote_average / 2} /></p>
                                    <p className="descriptionCard px-4">{item.overview}</p>
                                    <Flag lang={item.original_language} size={" h-10"}/>
                                </div>
                            </div>
                        </div>
                    ))

                    :
                    <h2 className="text-5xl my-14 text-nowrap">Non ci sono cose da vedere qui...</h2>
                }
            </div>
        </>
    );
}

export default Card;
