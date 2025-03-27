import './styles/tailwindcss.css'
import HomePage from "./components/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import Signup from "./components/Signup.tsx";
function App() {
    return (
        <>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </>
    )
}

export default App
