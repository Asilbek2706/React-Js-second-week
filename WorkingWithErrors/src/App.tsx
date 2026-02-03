import './App.css'
import {useState} from "react";
import Layout from "./components/Layout.tsx";
import Video from "./components/Video.tsx";
import { UserContext } from "./contexts/UserContext";
import ErrorBoundary from "./components/ErrorBoundary";

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
       <ErrorBoundary>
           <UserContext.Provider value={context}>
               <button onClick={handleUsernameChange}>Change username</button>
               <Layout>
                   <Video />
               </Layout>
           </UserContext.Provider>
       </ErrorBoundary>
    )
}

export default App
