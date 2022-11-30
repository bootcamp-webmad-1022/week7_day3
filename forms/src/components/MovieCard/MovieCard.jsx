const MovieCard = ({ _id, director, title, hasOscars, IMDBRating, deleteMovie }) => {

    return (
        <div className="MovieCard">
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Rating: {IMDBRating}</p>
            {hasOscars ? <p>Sí tuvo Oscar 🍆</p> : <p>No tuvo Oscar 💩</p>}
            <button onClick={() => deleteMovie(_id)}>ELIMINAR PELÍCULA</button>
        </div>
    )
}

export default MovieCard