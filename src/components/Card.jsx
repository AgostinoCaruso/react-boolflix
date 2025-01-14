import Star from "./Star";
import { useState } from "react";

function Card({ movie }) {
    const [hoveredIndex, setHoveredIndex] = useState(null); 

    return (
        <>
            {movie.map((item, index) => (
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
                            className={`rounded-md transform transition-all duration-300 
                                ${hoveredIndex === index ? "scale-110 z-60 " : "transition-all duration-300 scale-100 z-0"}`}  
                        />
                    </div>

                    <div
                        className={`p-3 absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white 
                            transition-all duration-300 
                            ${hoveredIndex === index ? "opacity-100 scale-110 cursor-pointer" : "transition-all duration-300 scale-100 opacity-0 z-0"}`}
                    >
                        <div className="flex flex-col justify-center items-center h-full">
                            <h2 className="text-xl font-bold">{item.title}</h2>
                            <p>Voto: <Star num={item.vote_average / 2} /></p>
                            <p className="descriptionCard px-4">{item.overview}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;
