
import './App.css'
import Layout from "./components/Layout.tsx";
import Carousel from "./components/Carousel.tsx";
import Pricing from "./components/Pricing.tsx";
import Video from "./components/Video.tsx";

function App() {
    return (
        <div>
            <Layout>
                <Carousel />
                <Video />
                <Pricing />
            </Layout>
        </div>
    )
}

export default App
