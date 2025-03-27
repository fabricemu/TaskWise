import {Home, Search, Person, TaskAlt, Replay} from "@mui/icons-material";
import {Link, Route, Routes} from "react-router-dom";
// import HomePage from "./HomePage.tsx";
import Signup from "./Signup.tsx";

function Header(props) {
    return (
        <>
            <header className="bg-green-900 text-gray-300 p-4 shadow-md">
                <div className='flex items-center justify-between max-w-4xl mx-auto'>
                    <h1 className="text-center text-2xl font-bold flex items-center justify-center gap-2"><TaskAlt
                        fontSize='large'/>TaskWise</h1>
                    <nav className="text-white p-4">
                        <div className="container mx-auto flex justify-between gap-4">
                            <Link to="/" className="text-lg hover:text-gray-300 flex items-center justify-center gap-1">
                                <Replay
                        fontSize='medium'/>Home
                            </Link>
                            <Link to="/signup" className="text-lg hover:text-gray-300 flex items-center justify-center gap-1">
                                <Person
                        fontSize='medium'/>Signup
                            </Link>
                        </div>
                    </nav>
                </div>

            </header>
            {/* Navigation Links */}


        </>
    )
}

export default Header