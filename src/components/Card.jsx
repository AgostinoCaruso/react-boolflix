import Star from "./Star";

function Card({ movie }) {

    const prova= ()=>{
        console.log(movie.map((item)=>item.title));
        console.log(movie.map((item)=>item.vote_average));
    }
    if(movie)
        prova();
    return (
        <>
            {movie.map((item) => (
                <div key={item.id} className="text-center ">
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={`${item.title}`} className="rounded-md" />
                    </div>
                    <div className="overlayCard">
                        <h2>Titolo:{item.title}</h2>
                        <p>Voto:  <Star num ={ item.vote_average ? item.vote_average/2 : 0} /></p>
                        <p className=" descriptionCard">Riassunto: {item.overview}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;