import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blog from "./pages/Blog.tsx";
import RootLayout from "./components/RootLayout.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route path={"/angular"}/>
                    <Route path="/blog/:blogId" element={<Blog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
