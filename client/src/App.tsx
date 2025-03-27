import './styles/tailwindcss.css'
import HomePage from "./components/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import Signup from "./components/Signup.tsx";

function App() {
    return (
        <>


            <div className="container">
                <div className="min-h-screen w-screen bg-gray-100 flex flex-col">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                    </Routes>
                </div>
            </div>


        </>
    )
}

export default App
