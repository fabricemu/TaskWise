import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {login} from "../services/apiService";
import task from '../assets/task.png'
import {TaskAlt, House, ExitToApp} from "@mui/icons-material"; // API function for login
import {motion} from "framer-motion";
import {fadeIn, dotVariants} from '../variants.tsx'

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
    const dotVariants = {
            pulse: {
                scale: [1, 1.5, 1],
                transition: {
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            }
        }

    return (
        <>
            <div className="relative flex text-sm h-screen items-center justify-center bg-emerald-200/10 ">
                <div
                    className="relative w-[80%] h-[400px] xl:min-h-[600px] bg-white rounded-lg shadow-xl shadow-emerald-700/25 p-10 overflow-hidden z-10">

                    <div className="relative md:flex md:gap-3 items-center justify-between z-5 text-[12px]">
                        <motion.div
                            variants={fadeIn("up", 0.2)} // Apply the variant
                            initial="hidden"
                            animate="show"
                            className='md:w-1/2 md:pr-5'>
                            <div className="flex justify-between relative z-20">
                                <div className="flex items-center gap-1 font-bold"><TaskAlt/>TaskWise</div>
                                <Link to='/'>
                                    <motion.button
                                        variants={fadeIn('left', 0.5)}
                                        initial='hidden'
                                        animate='show'
                                        whileHover={{scale: 1.1, cursor: 'pointer'}}
                                        whileTap={{scale: 0.95}}
                                        whileDrag={{scale: 0.9, rotate: 10}}
                                        drag
                                        className='bg-emerald-800 py-1 px-3 text-[10px] font-semibold rounded-3xl text-stone-200 flex gap-1 items-center'>
                                        <House fontSize='small'/><span className='hidden md:block'>Home</span>
                                    </motion.button>
                                </Link>
                            </div>
                            <motion.h1
                                variants={fadeIn('right', 0.3)}
                                initial='hidden'
                                animate='show'
                                className="text-2xl font-bold text-emerald-800 mb-4 mt-6 text-center">User Login
                            </motion.h1>
                            <form onSubmit={handleSubmit} className="space-y-5">
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
                                <div className="flex justify-between items-center">
                                    <h4 className="text emerald-700">Forget Password?</h4>
                                    <motion.button
                                        variants={fadeIn('up', 0.2)}
                                        initial='hidden'
                                        animate='show'
                                        whileHover={{scale: 1.1, cursor: 'pointer'}}
                                        whileTap={{scale: 0.95}}
                                        whileDrag={{scale: 0.9, rotate: 10}}
                                        drag
                                        type="submit"
                                        className="bg-emerald-900 text-white text-sm py-1 px-4 rounded-2xl hover:bg-emerald-700 flex gap-1 items-center"
                                    ><ExitToApp fontSize='small'/> Login

                                    </motion.button>
                                </div>


                            </form>
                            {message && <p className="mt-4 text-rose-500 text-center">{message} </p>}
                            <p className="mt-4 text-center text-gray-700">
                                Don't have an account?{" "}
                                <Link to="/signup" className="text-emerald-700 font-semibold hover:underline">
                                    Sign up
                                    <span className='relative flex items-center justify-center gap-2'>
                                        <motion.div
                                            variants={dotVariants}
                                            initial='hidden'
                                            animate='pulse'
                                            className='absolute top-0 left-0 w-2 h-2 bg-emerald-700 rounded-full'>
                                        </motion.div>
                                        <motion.div
                                            variants={dotVariants}
                                            initial='hidden'
                                            animate='pulse'
                                            className='absolute top-0 left-0 w-2 h-2 bg-emerald-700 rounded-full'>
                                        </motion.div>
                                        <motion.div
                                            variants={dotVariants}
                                            initial='hidden'
                                            animate='pulse'
                                            className='absolute top-0 left-0 w-2 h-2 bg-emerald-700 rounded-full'>
                                        </motion.div>

                                    </span>
                                </Link>
                            </p>
                        </motion.div>


                    </div>
                    <div className="absolute top-0 overflow-hidden right-0 h-full w-[400px] border-0 hidden md:block">
                        <div className="absolute -right-[50%] size-[150%] rounded-full bg-emerald-700/20"></div>
                        <div className="absolute -right-[50%] size-[130%] rounded-full bg-emerald-700/20"></div>
                        <div className="absolute -right-[50%] size-[100%] rounded-full bg-emerald-700/20"></div>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        animate='show'
                        className='absolute hidden md:flex md:items-center md:justify-center w-1/2 right-0 bottom-0'>
                        <img src={task} alt="" className='object-cover'/>
                    </motion.div>

                </div>
                <div className="absolute size-96 top-0 left-0  z-1 ">
                    <div className='absolute -left-[50%] size-full bg-emerald-700/20 -top-[50%] rounded-full'></div>
                    <div className='absolute -left-[50%] size-[125%] bg-emerald-700/20 -top-[50%] rounded-full'></div>
                    <div className='relative -left-[50%] size-[150%] bg-emerald-700/20 -top-[50%] rounded-full'></div>
                </div>
            </div>
        </>

    )
        ;
};

export default Login;
