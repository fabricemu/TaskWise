const tasks = [
    {id: 1, title: "Finish API Integration", status: "in-progress"},
    {id: 2, title: "Design Home Page", status: "completed"},
    {id: 3, title: "Write Documentation", status: "pending"},
];

const Dashboard = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>
            <ul className="space-y-3">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={`p-4 rounded shadow-md ${
                            task.status === "completed"
                                ? "bg-green-100 border-l-4 border-green-500"
                                : task.status === "in-progress"
                                    ? "bg-yellow-100 border-l-4 border-yellow-500"
                                    : "bg-red-100 border-l-4 border-red-500"
                        }`}
                    >
                        <div className="flex justify-between items-center">
                            <span className="font-medium">{task.title}</span>
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
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
