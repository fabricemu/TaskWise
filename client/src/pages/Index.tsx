import React, {useEffect, useState} from "react";
import {getTasks} from "../services/apiService.tsx";


const Index = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const tasksData = await getTasks(1); // Assuming user ID = 1
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
            <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4 shadow-md p-4 mt-4">
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
                        <li key={index} className="text-gray-700 flex justify-between  bg-white p-4 rounded shadow-md mb-4">{task.title} <span
                            className='font-bold'>&gt;</span></li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default Index;

