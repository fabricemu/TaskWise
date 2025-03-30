import {TaskAlt, AccountCircleOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-emerald-900 text-gray-300 p-4 shadow-md sticky top-0">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
                <Link to='/'>
                    <h1 className="text-center text-2xl font-bold flex items-center justify-center gap-2">
                        <TaskAlt fontSize="large"/>TaskWise
                    </h1>
                </Link>
                <nav className="text-white p-4">
                    <Link to="/login" className="hover:text-gray-300 font-bold flex items-center justify-center gap-1">
                        <AccountCircleOutlined fontSize="medium"/>
                        USER
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
