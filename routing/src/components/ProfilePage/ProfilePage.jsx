import { Navigate } from "react-router-dom";

function ProfilePage() {

    const loggedUser = undefined
    // const loggedUser = { name: 'Chorlito' }

    if (!loggedUser) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Binevenid@, {loggedUser.name}</p>
        </div>
    );
}

export default ProfilePage;