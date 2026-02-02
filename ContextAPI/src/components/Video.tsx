import {useContext} from "react";
import {UserContext} from "./contexts/UserContext.ts";

const Video = () => {

    const { username, changeUsername } = useContext(UserContext)

    return (
        <div style={{
            backgroundColor: "lightgray",
            padding: "10px",
            textAlign: "center",
            color: "black",
        }}>
            <h1>Video</h1>
            <input value={username} onChange={(e) => changeUsername(e.target.value)} />
        </div>
    )
}

export default Video