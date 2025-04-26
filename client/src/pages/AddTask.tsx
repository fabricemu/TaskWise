import React, {useState} from "react";
import {createTask, getTasks, updateTask} from "../services/apiService.tsx";

const AddTask = () => {
    const [tasks, setTasks] = useState([]);
    const [formData, setFormData] = useState({title: "", description: "", status: "pending"});
    const [editTaskId, setEditTaskId] = useState(null);
    const [message, setMessage] = useState("");

    const fetchTasks = async () => {
        try {
            const tasksData = await getTasks(1); // Assuming user ID = 1
            setTasks(tasksData);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };
     const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleAddTask = async (e) => {
        e.preventDefault();
        if (!formData.title) {
            setMessage("Task title is required!");
            return;
        }
        try {
            if (editTaskId) {
                // Update task if edit mode
                await updateTask(editTaskId, formData);
                setMessage("Task updated successfully!");
            } else {
                // Create a new task
                await createTask({...formData, userId: 1});
                setMessage("Task added successfully!");
            }
            setFormData({title: "", description: "", status: "pending"});
            setEditTaskId(null);
            fetchTasks(); // Refresh the task list
        } catch (error) {
            setMessage("Error saving task");
        }
    };
    return (
        <>
            {/* Add/Edit Task Form */}
            <div className="bg-white rounded shadow p-4 mb-6">
                <form onSubmit={handleAddTask} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Task Title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Task Description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                    ></textarea>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button
                        type="submit"
                        className="bg-emerald-900 text-white py-2 px-4 rounded hover:bg-emerald-700"
                    >
                        {editTaskId ? "Update Task" : "Add Task"}
                    </button>
                </form>
            </div>
            {message && (
                <div className="fixed bottom-4 right-4 bg-emerald-500 text-white p-4 rounded">
                    {message}
                </div>
            )}

        </>
    )
};

export default AddTask;

