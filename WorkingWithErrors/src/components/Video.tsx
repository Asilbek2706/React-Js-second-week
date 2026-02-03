import {useContext} from "react";
import {UserContext} from "../contexts/UserContext.ts";

const Video = () => {

    const { username, changeUsername } = useContext(UserContext)

    const handleResetUserName = () => {
        changeUsername('')
    }

    return (
        <div style={{
            backgroundColor: "lightgray",
            padding: "10px",
            textAlign: "center",
            color: "black",
        }}>
            <h1>Video</h1>
            <input value={username} onChange={(e) => changeUsername(e.target.value)} />
            <button onClick={handleResetUserName}>Reset</button>
        </div>
    )
}

export default Video