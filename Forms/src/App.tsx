
import './App.css'
import ProfileSettings from "./components/ProfileSettings.tsx";
import {type ChangeEvent, useState} from "react";
// import OrderPizza from "./components/OrderPizza.tsx";
// import Form from "./components/Form.tsx";
// import SignUp from "./components/SignUp.tsx";
// import Todo from "./components/ToDo.tsx";

function App() {
    const [isOn, setIsOn] = useState(false);

    const handleChange = (e: ChangeEvent) => {
        setIsOn(!isOn)
    }

    const [number, setNumber] = useState(false);
    const handleButtonClick = () => {
        setNumber(!number)
    }

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                { isOn ? <h1 style={{ color: 'orange' }}>Chiroq yondi 💡</h1> : <h1 style={{ color: 'gray' }}>Chiroq o'chdi 🌑</h1> }
            </div>

            <button onClick={handleChange}>{isOn ? "O'chirish" : "Yoqish"}</button>

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                { number ? 'bir' : 'nol' }
            </div>
            <button onClick={handleButtonClick}>
                {number ? 1 : 0}
            </button>
            {/*<Form />*/}
            {/*<SignUp />*/}
            {/*<Todo />*/}
            {/*<OrderPizza />*/}
            <ProfileSettings />
        </>
    )
}

export default App
