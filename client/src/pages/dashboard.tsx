import {useState, useEffect} from "react";
import {getTasks, createTask, updateTask, deleteTask} from "../services/apiService.tsx"; // Backend API calls
import {useNavigate} from "react-router-dom";
import {isPrototypeOf} from "globals";
import {SettingsPower} from "@mui/icons-material";

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [formData, setFormData] = useState({title: "", description: "", status: "pending"});
    const [editTaskId, setEditTaskId] = useState(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate()
    // Fetch tasks on component mount
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
                await createTask({...formData, user_id: 1});
                setMessage("Task added successfully!");
            }
            setFormData({title: "", description: "", status: "pending"});
            setEditTaskId(null);
            fetchTasks(); // Refresh the task list
        } catch (error) {
            setMessage("Error saving task");
        }
    };

    const handleEditTask = (task) => {
        setFormData({title: task.title, description: task.description, status: task.status});
        setEditTaskId(task.id);
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await deleteTask(taskId);
            setMessage("Task removed successfully!");
            fetchTasks(); // Refresh the task list
        } catch (error) {
            setMessage("Error deleting task");
        }
    };

    const handleSort = (field) => {
        const sortedTasks = [...tasks].sort((a, b) => (a[field] > b[field] ? 1 : -1));
        setTasks(sortedTasks);
    };
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove JWT from localStorage
        navigate("/login"); // Redirect to login page
    };
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="bg-green-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Task Manager</h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-700 text-white rounded hover:bg-red-800 p-1"
                >
                    <SettingsPower fontSize='large'/>
                </button>
                <button
                    onClick={() => setEditTaskId(null)}
                    className="bg-white text-green-800 px-4 py-2 rounded hover:bg-gray-200"
                >
                    Add Task
                </button>
            </header>

            <main className="mt-4">
                {/* Add/Edit Task Form */}
                <div className="bg-white rounded shadow p-4 mb-6">
                    <h2 className="text-xl font-semibold mb-4">{editTaskId ? "Edit Task" : "Add Task"}</h2>
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
                            className="bg-green-900 text-white py-2 px-4 rounded hover:bg-green-700"
                        >
                            {editTaskId ? "Update Task" : "Add Task"}
                        </button>
                    </form>
                </div>

                {/* Task Table */}
                <div className="bg-white rounded shadow p-4">
                    <h2 className="text-xl font-semibold mb-4">My Tasks</h2>
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => handleSort("title")}
                            className="text-green-600 hover:underline mr-4"
                        >
                            Sort by Title
                        </button>
                        <button
                            onClick={() => handleSort("status")}
                            className="text-green-600 hover:underline"
                        >
                            Sort by Status
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300">
                            <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Task</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tasks.map((task) => (
                                <tr key={task.id}>
                                    <td className="border border-gray-300 px-4 py-2">{task.title}</td>
                                    <td
                                        className={`border border-gray-300 px-4 py-2 ${
                                            task.status === "completed"
                                                ? "text-green-600"
                                                : task.status === "in-progress"
                                                    ? "text-yellow-600"
                                                    : "text-red-600"
                                        }`}
                                    >
                                        {task.status}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            onClick={() => handleEditTask(task)}
                                            className="text-green-600 hover:underline mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteTask(task.id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* Notification */}
            {message && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded">
                    {message}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
