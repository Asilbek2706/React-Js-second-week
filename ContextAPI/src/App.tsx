import './App.css'
import {useState} from "react";
import Layout from "./components/Layout.tsx";
import {UserContext} from "./components/contexts/UserContext.ts";
import Video from "./components/Video.tsx";

function App() {
    const [username, setUsername] = useState("Asilbek");

    const handleUsernameChange = () => {
        setUsername("Ali");
    }

    const context = {
        username: username,
        changeUsername: setUsername,
    }

    return (
        <UserContext.Provider value={context}>
            <button onClick={handleUsernameChange}>Change username</button>
            <Layout/>
            <Video />
        </UserContext.Provider>
    )
}

export default App
