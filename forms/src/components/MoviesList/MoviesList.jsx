import { useState } from "react"
import { moviesArray } from "../../fakeApi"
import AddMovie from "../AddMovie/AddMovie"
import MovieCard from "../MovieCard/MovieCard"
import FilterMovies from "../MoviesFilter/MoviesFilter"

const MoviesList = () => {

    const [moviesData, setMoviesData] = useState(moviesArray)
    const [movies, setMovies] = useState(moviesArray)

    const removeMovie = idToDelete => {
        const filteredMovies = movies.filter(elm => elm._id != idToDelete)
        setMovies(filteredMovies)
    }

    const addNewMovie = newMovie => {
        const moviesCopy = [...movies, newMovie]
        setMovies(moviesCopy)

        const moviesDataCopy = [...moviesData, newMovie]
        setMoviesData(moviesDataCopy)
    }

    const filterMovies = initialString => {
        if (initialString === 'All') {
            setMovies(moviesData)
        } else {
            const filteredMovies = moviesData.filter(elm => elm.title.startsWith(initialString))
            setMovies(filteredMovies)
        }
    }


    return (
        <section>
            <h2>Listado de películas</h2>

            <hr />

            <FilterMovies filterMovies={filterMovies} />

            <hr />

            {movies.map(elm => {
                return <MovieCard key={elm._id} {...elm} deleteMovie={removeMovie} />
            })}

            <hr />

            <AddMovie addNewMovie={addNewMovie} />
        </section>
    )
}

export default MoviesList