import {useState} from "react";
import {signup} from "../services/apiService";
import Header from "./header.tsx";
import Footer from "./Footer.tsx";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            setMessage(
                'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.'
            );
            return;
        }

        try {
            const response = await signup(formData);
            setMessage('Signup successful!');
        } catch (error) {
            setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
        }
    };


    return (
        <>
            <Header/>
            <div className="flex-grow p-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-2xl font-bold mb-4">Signup</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded ${
                                formData.password.length >= 8 ? 'border-green-500' : 'border-red-500'
                            }`}
                            required
                        />
                        <p className="text-sm text-gray-600">
                            Password must be at least 8 characters, include uppercase, lowercase, number, and special
                            character.
                        </p>
                        <button
                            type="submit"
                            className="bg-green-900 text-white py-2 px-4 rounded hover:bg-green-700"
                        >
                            Submit
                        </button>
                    </form>
                    {message && <p className="mt-4 text-red-500 font-bold">{message}</p>}
                </div>
            </div>
            <Footer/>
        </>

    );
};

export default Signup;
