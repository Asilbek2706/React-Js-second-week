import {useContext} from "react";
import {UserContext} from "../contexts/UserContext.ts";

const Profile = () => {
    const { username } = useContext(UserContext);
    return (
        <div className={"profile-container"}>
            <h1>Welcome, {username}</h1>
        </div>
    )
}

export default Profile