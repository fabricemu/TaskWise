import './index.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage.tsx";
import Signup from "./components/Signup.tsx";
import Login from "./components/Login.tsx";
import Dashboard from "./pages/dashboard.tsx";
import ProtectedRoute from "./services/ProtectedRoute.tsx";
import {JSX} from "react";
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.tsx");
}

const App: () => JSX.Element = () => {
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
