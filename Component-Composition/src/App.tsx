
import './App.css'
import Modal from "./components/Modal.tsx";
// import Layout from "./components/Layout.tsx";
// import Carousel from "./components/Carousel.tsx";
// import Pricing from "./components/Pricing.tsx";
// import Video from "./components/Video.tsx";

function App() {
    return (
        <div>
            {/*<Layout>*/}
            {/*    <Carousel />*/}
            {/*    <Video />*/}
            {/*    <Pricing />*/}
            {/*</Layout>*/}

            <Modal>
                <h2>Ogohlantirish!</h2>
                <p>Haqiqatdan ham o'chirmoqchimisiz?</p>
                <button>Ha</button>
                <button>Yo'q</button>
            </Modal>
            <Modal>
                <h1>Asilbek mening ismim</h1>
            </Modal>
            <Modal>
                <h1>How are you</h1>
            </Modal>
        </div>
    )
}

export default App
