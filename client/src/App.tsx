import './styles/tailwindcss.css'
import HomePage from "./components/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import Signup from "./components/Signup.tsx";
import Login from "./components/Login.tsx";
import Dashboard from "./components/dashboard.tsx";
import ProtectedRoute from "./services/ProtectedRoute.tsx";
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.tsx");
}

function App() {
    return (
        <>


            <div className="container">
                <div className="min-h-screen w-screen bg-gray-100 flex flex-col">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    </Routes>
                </div>
            </div>


        </>
    )
}

export default App
