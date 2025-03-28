import { Person, TaskAlt, Replay } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-green-900 text-gray-300 p-4 shadow-md">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
                <h1 className="text-center text-2xl font-bold flex items-center justify-center gap-2">
                    <TaskAlt fontSize="large" />
                    TaskWise
                </h1>
                <nav className="text-white p-4">
                    <div className="container mx-auto font-bold flex justify-between gap-4 text-sm uppercase">
                        <Link to="/" className="hover:text-gray-300 flex items-center justify-center gap-1">
                            <Replay fontSize="small" />
                            Home
                        </Link>
                        <Link to="/login" className="hover:text-gray-300 flex items-center justify-center gap-1">
                            <Person fontSize="small" />
                            Account
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
