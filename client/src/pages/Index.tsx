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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gray-100 p-4 rounded shadow hover:bg-emerald-200 transition duration-300">
                    <h3 className="text-md font-semibold">Total Tasks</h3>
                    <p className="text-xl">{taskStats.total}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow hover:bg-emerald-200 transition duration-300">
                    <h3 className="text-xl font-semibold">Completed</h3>
                    <p className="text-xl">{taskStats.completed}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow hover:bg-emerald-200 transition duration-300">
                    <h3 className="text-xl font-semibold">In Progress</h3>
                    <p className="text-xl">{taskStats.inProgress}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow hover:bg-emerald-200 transition duration-300">
                    <h3 className="text-xl font-semibold">Pending</h3>
                    <p className="text-xl">{taskStats.pending}</p>
                </div>
            </div>
        </>
    )
};

export default Index;

