import React, {useState} from "react";
import {Home, TaskAlt, ViewList, Settings, PowerSettingsNew, AccountCircle} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {fadeIn, popUp} from "../variants.tsx";
import Index from "./Index.tsx";
import AddTask from "./AddTask.tsx";
import ViewTasks from "./ViewTasks.tsx";
import Account from "./Account.tsx";

const Dashboard: React.FC = () => {
    const [currentPage, setCurrentPage] = useState("Home");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState('Home')
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavigation = (page) => {
        setCurrentPage(page);
        setActiveComponent(page);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <motion.aside
                variants={fadeIn('right', 0.1)}
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
                           className="flex items-center gap-2 py-2 px-4 hover:bg-gray-700 rounded">
                            <Home/> Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => handleNavigation("Tasks")}
                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-700 rounded"
                        >
                            <ViewList/>View Tasks
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => handleNavigation("Settings")}
                           className="flex items-center gap-2 py-2 px-4 hover:bg-gray-700 rounded">
                            <Settings/> Settings
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => handleNavigation("Account")}
                           className="flex items-center gap-2 py-2 px-4 hover:bg-gray-700 rounded">
                            <AccountCircle/> Account
                        </a>
                    </li>
                    <li className="mt-auto">
                        <Link to='/'>
                            <a href="#"
                               className="py-2 px-4 flex items-center font-semibold gap-2 hover:bg-gray-700 rounded">
                                <PowerSettingsNew/>Sign out
                            </a>
                        </Link>

                    </li>
                </ul>
            </motion.aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 overflow-y-auto px-6">
                <div className="flex justify-between sticky top-0 py-5 px-4">
                    <nav className="text-gray-600">
                        <h2 className="text-2xl font-semibold">{currentPage}</h2>
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
                    className="bg-white p-4 shadow rounded">
                    {activeComponent === "Tasks" && <ViewTasks/>}
                    {activeComponent === "Home" && <Index/>}
                    {activeComponent === "Account" && <Account/>}
                </motion.div>
            </main>
        </div>
    );
};

export default Dashboard;
