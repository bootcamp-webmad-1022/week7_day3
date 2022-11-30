import { useState } from "react";

const FilterMovies = ({ filterMovies }) => {

    const [firstLetter, setFirstLetter] = useState("All")

    const handleSelect = e => {
        setFirstLetter(e.target.value)
        filterMovies(e.target.value)
    }

    return (
        <div className="FilterMovies">
            <label>Show movies by first letter:</label>
            <select onChange={handleSelect} value={firstLetter} >
                <option value="All">All</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="T">T</option>
                <option value="S">S</option>
            </select>
        </div>
    )
}

export default FilterMovies