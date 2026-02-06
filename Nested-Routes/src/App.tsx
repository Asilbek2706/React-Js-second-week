import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/profile'} element={<Profile />}>
                    <Route index element={<h1>Please select options</h1>}/>
                    <Route path={'details'} element={<h1>Profile Details</h1>}/>
                    <Route path={'settings'} element={<h1>Profile Settings</h1>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
