import { useState } from "react";

const AddMovie = ({ addNewMovie }) => {

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [IMDBRating, setIMDBRating] = useState(5);
    const [hasOscars, setHasOscars] = useState(true);


    const handleTitleInput = e => {
        setTitle(e.target.value)
    }

    const handleOscarsInput = e => {
        setHasOscars(e.target.checked)
    }

    const handleRatingInput = e => {
        setIMDBRating(e.target.value)
    }

    const handleDirectorInput = e => {
        setDirector(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        const movie = { title, director, IMDBRating, hasOscars }
        addNewMovie(movie)

        setDirector('')
        setTitle('')
        setIMDBRating(5)
        setHasOscars(false)
    }

    return (

        <section>

            <h1>Crear película</h1>

            <form onSubmit={handleFormSubmit}>

                <label>Título:</label>
                <input type="text" value={title} onChange={handleTitleInput} />

                <br /><br />

                <label>Director:</label>
                <input type="text" value={director} onChange={handleDirectorInput} />

                <br /><br />

                <label>Puntuación:</label>
                <input type="text" value={IMDBRating} onChange={handleRatingInput} />

                <br /><br />

                <label>¿Tuvo Oscars?</label>
                <input type="checkbox" checked={hasOscars} onChange={handleOscarsInput} />

                <br /><br />

                <input type="submit" value="Crear película" />

            </form>

        </section>
    )
}


export default AddMovie