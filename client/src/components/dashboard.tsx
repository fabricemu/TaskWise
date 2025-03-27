import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks } from "../services/apiService"; // API function to fetch tasks

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if not authenticated
    } else {
      fetchTasks();
    }
  }, [navigate]);

  const fetchTasks = async () => {
    try {
      const tasksData = await getTasks(1); // Fetch tasks for user with ID 1 (example)
      setTasks(tasksData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Dashboard</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="p-4 bg-gray-100 rounded shadow flex justify-between items-center"
            >
              <span className="text-lg">{task.title}</span>
              <span
                className={`text-sm font-bold ${
                  task.status === "completed"
                    ? "text-green-600"
                    : task.status === "in-progress"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {task.status.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
