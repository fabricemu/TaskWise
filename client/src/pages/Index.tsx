import React, {useEffect, useState} from "react";
import {getTasks} from "../services/apiService.tsx";
import {KeyboardArrowRight} from "@mui/icons-material";
import {motion} from "framer-motion";
import {hoverListEffect} from "../variants.tsx";

const Index = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const userId = localStorage.getItem('userId'); // Fetch user ID from local storage
            if (!userId) {
                console.error("User ID not found in local storage");
                return;
            }
            const tasksData = await getTasks(userId); // Use the dynamic user ID
            setTasks(tasksData);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const taskStats = {
        total: tasks.length,
        completed: tasks.filter(task => task.status === 'completed').length,
        inProgress: tasks.filter(task => task.status === 'in-progress').length,
        pending: tasks.filter(task => task.status === 'pending').length,
    };
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4 mt-2 mb-2">
                <div className="bg-gray-200 p-4 rounded shadow hover:bg-emerald-800/50 transition duration-300">
                    <h3 className="text-md font-semibold">Total Tasks</h3>
                    <p className="text-xl">{taskStats.total}</p>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow hover:bg-emerald-800/50 transition duration-300">
                    <h3 className="text-xl font-semibold">Completed</h3>
                    <p className="text-xl">{taskStats.completed}</p>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow hover:bg-emerald-800/50 transition duration-300">
                    <h3 className="text-xl font-semibold">In Progress</h3>
                    <p className="text-xl">{taskStats.inProgress}</p>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow hover:bg-emerald-800/50 transition duration-300">
                    <h3 className="text-xl font-semibold">Pending</h3>
                    <p className="text-xl">{taskStats.pending}</p>
                </div>
            </div>
            <div className="mt-4  rounded">
                <h4 className="text-md font-semibold text-emerald-800 mb-2">Completed</h4>
                <ul>
                    {tasks.filter(task => task.status === 'completed').map((task, index) => (
                        <motion.li
                            key={index}
                            variants={hoverListEffect()}
                            initial='hidden'
                            whileHover='hover'
                            whileTap='tap'
                            animate='show'
                            exit='hidden'
                            className="text-gray-700 flex justify-between items-center bg-white p-4 rounded shadow-md mb-2">{task.title}
                            <span
                                className='font-bold'><KeyboardArrowRight/></span></motion.li>
                    ))}
                </ul>
            </div>

            <div className="mt-6  rounded">
                <h4 className="text-md font-semibold text-emerald-800 mb-2">Pending</h4>
                <ul>
                    {tasks.filter(task => task.status === 'pending').map((task, index) => (
                        <li key={index}
                            className="text-gray-700 flex justify-between items-center  bg-white p-4 rounded shadow-md mb-2">{task.title}
                            <span
                                className='font-bold'><KeyboardArrowRight/></span></li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default Index;
