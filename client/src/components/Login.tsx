import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {login} from "../services/apiService";
import Header from "./header.tsx";
import Footer from "./Footer.tsx"; // API function for login

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData); // Call API to log in
            localStorage.setItem("token", response.token); // Save JWT token
            setMessage("Login successful! Redirecting...");
            setTimeout(() => {
                navigate("/dashboard"); // Navigate to Dashboard
            }, 2000);
        } catch (error) {
            setMessage(error.response?.data?.error || "Invalid credentials. Try again!");
        }
    };

    return (
        <>
            <Header/>
            <div className="flex-grow p-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-2xl font-bold text-green-600 mb-4 text-center">Login</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
                        >
                            Login
                        </button>
                    </form>
                    {message && <p className="mt-4 text-red-500 text-center">{message}</p>}

                    <p className="mt-4 text-center text-gray-700">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-green-500 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
            <Footer/>
        </>

    );
};

export default Login;
