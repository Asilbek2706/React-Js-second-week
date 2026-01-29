import './App.css'
// import PackingList from "./components/PackingList.tsx";
import Weather from "./components/Weather.tsx";
import Notification from "./components/Notification.tsx";
import UserStatus from "./components/UserStatus.tsx";

function App() {
 return (
     <>
        {/*<PackingList />*/}
         <Weather />
         <Notification />
         <UserStatus />
     </>
 )
}

export default App
