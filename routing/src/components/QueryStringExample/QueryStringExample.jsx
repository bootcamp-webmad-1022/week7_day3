import { useSearchParams } from "react-router-dom";

function QueryStringExample() {

    const [searchParams, setSearchParams] = useSearchParams()

    const name = searchParams.get("name");
    const color = searchParams.get("color");

    return (
        <div>
            <h1>Strings!</h1>
            <hr />
            <p>Su nombre de {name} y es de color {color}</p>
        </div>
    );
}

export default QueryStringExample