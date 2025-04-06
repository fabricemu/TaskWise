import React, {useState, useEffect} from "react";
import {Home, TaskAlt, ViewList, Settings, PowerSettingsNew, AccountCircle} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {fadeIn, popUp} from "../variants.tsx";
import Index from "./Index.tsx";
import AddTask from "./AddTask.tsx";
import ViewTasks from "./ViewTasks.tsx";
import Account from "./Account.tsx";
import ProtectedRoute from "../services/ProtectedRoute.tsx";

const Dashboard: React.FC = () => {
    const [currentPage, setCurrentPage] = useState("Home");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState('Home');
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavigation = (page) => {
        setCurrentPage(page);
        setActiveComponent(page);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const isActive = (page) => currentPage === page;

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <ProtectedRoute>
            <div className="flex h-screen">
                {/* Sidebar */}
                <motion.aside
                    key={isSidebarOpen ? 'open' : 'closed'}
                    variants={popUp('right', 0.3)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className={`fixed left-0 top-0 h-full w-64 bg-gray-200 p-6 md:block z-2 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                    <div className="flex items-center gap-1 font-bold text-emerald-800">
                        <TaskAlt/> TaskWise
                    </div>
                    <ul className="flex flex-col h-full py-5 gap-2 text-sm">
                        <li>
                            <a href="#" onClick={() => handleNavigation("Home")}
                               className={`flex items-center gap-2 py-2 pl-2 pr-4 rounded transition-all duration-300 border-l-4 ${isActive("Home") ? 'border-emerald-800 bg-emerald-800/25' : 'hover:bg-emerald-800/25 border-transparent '}`}>
                                <Home className='text-emerald-800'/> Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => handleNavigation("Tasks")}
                                className={`flex items-center gap-2 py-2 pl-2 pr-4 rounded transition-all duration-300 border-l-4 ${isActive("Tasks") ? 'border-emerald-800 bg-emerald-800/25' : 'hover:bg-emerald-800/25 border-transparent '}`}
                            >
                                <ViewList className='text-emerald-800'/>View Tasks
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleNavigation("Account")}
                               className={`flex items-center gap-2 py-2 pl-2 pr-4 rounded transition-all duration-300 border-l-4 ${isActive("Account") ? 'border-emerald-800 bg-emerald-800/25' : 'hover:bg-emerald-800/25 border-transparent '}`}>
                                <AccountCircle className='text-emerald-800'/> Account
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleNavigation("Settings")}
                               className={`flex items-center gap-2 py-2 pl-2 pr-4 rounded transition-all duration-300 border-l-4 ${isActive("Settings") ? 'border-emerald-800 bg-emerald-800/25' : 'hover:bg-emerald-800/25 border-transparent '}`}>
                                <Settings className='text-emerald-800'/> Settings
                            </a>
                        </li>
                        <li className="mt-auto">
                            <a href="#" onClick={handleLogout}
                               className="py-2 px-4 flex items-center font-semibold gap-2 hover:bg-emerald-800/25 rounded transition-all duration-300">
                                <PowerSettingsNew className='text-emerald-800'/>Sign out
                            </a>
                        </li>
                    </ul>
                </motion.aside>

                {/* Main Content */}
                <main className="flex-1 md:ml-64 overflow-y-auto px-6">
                    <div className="flex justify-between sticky top-0 py-5 px-4 bg-gray-100">
                        <nav className="text-gray-600">
                            <h2 className="text-2xl font-semibold text-emerald-800">{currentPage}</h2>
                        </nav>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                            onClick={toggleSidebar} className="md:hidden bg-emerald-800 text-stone-200 px-3 py-2 rounded">
                            ☰
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeComponent === "AddTask" && <AddTask/>}
                    </div>
                    <motion.div
                        key={activeComponent}
                        variants={popUp('up', 0.3)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="rounded">
                        {activeComponent === "Tasks" && <ViewTasks/>}
                        {activeComponent === "Home" && <Index/>}
                        {activeComponent === "Account" && <Account/>}
                    </motion.div>
                </main>
            </div>
        </ProtectedRoute>
    );
};

export default Dashboard;
