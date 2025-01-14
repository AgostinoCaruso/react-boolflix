
function Card({ media }) {


    return (
        <>
            {media.map((item) => (
                <div key={item.id} className=" bg-zinc-500 text-center">
                    <h2>{item.title}</h2>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                    </div>
                    <p>Rating: {item.vote_average}</p>
                    <p>Votes: {item.vote_count}</p>
                </div>
            ))}
        </>
    );
}

export default Card;