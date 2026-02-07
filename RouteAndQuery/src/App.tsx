import './App.css'
import { Route, Routes, useNavigate} from "react-router-dom";
import Blog from "./pages/Blog.tsx";
import {useState} from "react";
import type {IUser} from "./shared/interfaces/user.interface.ts";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import ProtectedRoute from "./guards/ProtectedRoute.tsx";
import Another from "./components/Another.tsx";

function App() {

    const navigate = useNavigate();

    const [user, setUser] = useState<IUser | null>(null)

    const handleLogin = () => {
        setUser({ name: 'Asilbek', id: '12345', roles: ['admin'] })
    }

    const handleLogout = () => {
        setUser(null)
    }

    const handleNavigation = () => {
        navigate("/another-route");
    }

    return (
           <>
               { user ? <button onClick={handleLogout}>Logout</button> : <button onClick={handleLogin}>Login</button>}
               <button onClick={handleNavigation}>Another Route</button>
               <Routes>
                   <Route path="/" element={<Navbar />}>
                       <Route path="/" element={<Home />} />
                       <Route path="/about" element={<About />} />
                       <Route path="/admin" element={
                           <ProtectedRoute isAllowed={Boolean(user?.roles.includes('admin'))}><h1>Admin</h1></ProtectedRoute>
                       } />
                       <Route element={<ProtectedRoute isAllowed={Boolean(user)}/> }>
                           <Route path="/contact" element={<Contact />} />
                           <Route path={"/blog/:slug"} element={ <Blog />}/>
                       </Route>
                       <Route path={'/another-route'} element={<Another />}/>
                   </Route>
               </Routes>
           </>
    )
}

export default App
