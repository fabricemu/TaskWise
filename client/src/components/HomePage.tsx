import {
    TipsAndUpdates,
    Bolt,
    LowPriority,
    Workspaces,
    WifiOff,
    TaskAlt,
    AccountCircleOutlined
} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {fadeIn} from "../variants.tsx";

const HomePage = () => {
    return (
        <>

            <div className="flex static text-sm h-screen items-center justify-center bg-emerald-200/10 ">
                <div
                    className="relative w-[80%] min-h-[400px] bg-white rounded-lg shadow-xl shadow-emerald-700/25 p-10 overflow-hidden z-10">
                    <div className="flex justify-between relative z-20">
                        <div className="flex items-center gap-1 font-bold"><TaskAlt/>TaskWise</div>
                        <Link to='/login'>
                            <motion.button
                                variants={fadeIn('left', 0.6)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                whileHover={{scale: 1.1, cursor:'pointer'}}
                                whileTap={{scale: 0.95}}
                                whileDrag={{scale: 0.9, rotate: 10}}
                                drag
                                className='bg-emerald-800 py-1 px-3 text-[10px] font-semibold rounded-3xl text-stone-200 flex gap-1 items-center'>
                                <AccountCircleOutlined fontSize='small'/><span
                                className='hidden md:block'>Account</span>
                            </motion.button>
                        </Link>
                    </div>
                    <h2 className="text-xl text-gray-700 font-bold mb-4 text-center">Welcome to TaskWise
                        Application</h2>
                    <h1 className='font-medium mb-5'>TaskWise is a web-based task management system designed to help
                        users organize, track, and
                        manage their personal or team tasks effectively. </h1>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-800 font-bold my-5 overflow-hidden">
                        <motion.div
                            variants={fadeIn('down', 0.2)}
                            initial='hidden'
                            animate='show'
                            className="bg-gray-100 hover:bg-emerald-50 flex flex-col items-center gap-3 p-4 rounded-lg shadow">
                            <i className="bg-emerald-950 shadow-lg shadow-emerald-950/50  rounded-full p-2 text-white">
                                <Bolt className="w-6 h-6" fontSize='large'/>
                            </i>
                            <span>Real-time progress tracking</span>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            animate='show'
                            className="bg-gray-100 hover:bg-emerald-50 flex flex-col items-center gap-3 p-4 rounded-lg shadow">
                            <i className="bg-emerald-950 shadow-lg shadow-emerald-950/50 rounded-full p-2 text-white">
                                <LowPriority className="w-6 h-6" fontSize='large'/>
                            </i>
                            <span>Intuitive task management</span>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('down', 0.4)}
                            initial='hidden'
                            animate='show'
                            className="bg-gray-100 hover:bg-emerald-50 flex flex-col items-center gap-3 p-4 rounded-lg shadow">
                            <i className="bg-emerald-950 shadow-lg shadow-emerald-950/50 rounded-full p-2 text-white">
                                <Workspaces className="w-6 h-6" fontSize='large'/>
                            </i>
                            <span>Seamless collaboration</span>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('down', 0.5)}
                            initial='hidden'
                            animate='show'
                            className="bg-gray-100 hover:bg-emerald-50 flex flex-col items-center gap-3 p-4 rounded-lg shadow">
                            <i className="bg-emerald-950 shadow-lg shadow-emerald-950/50 rounded-full p-2 text-white">
                                <WifiOff className="w-6 h-6" fontSize='large'/>
                            </i>
                            <span>Offline access and cloud connectivity</span>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        animate='show'
                        className="text-gray-700 p-4 bg-emerald-50 rounded flex items-center gap-3">
                        <TipsAndUpdates fontSize='medium' className='text-yellow-700'/>
                        <p className='text-sm'><span className="font-medium"> Achieve your goals</span> wherever
                            you are, with a
                            responsive
                            and user-friendly design built for modern productivity.</p>

                    </motion.div>
                    <p className="text-gray-700 my-4">
                        Organize your tasks, track your progress, and get things done!
                    </p>
                    <Link to='/signup'>
                        <motion.button
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            animate='show'
                            whileHover={{scale: 1.1, cursor:'pointer'}}
                            whileTap={{scale: 0.95}}
                            whileDrag={{scale: 0.9, rotate: 10}}
                            drag
                            className='px-3 py-2 mt-2 bg-emerald-900 hover:bg-emerald-700 text-white rounded'>
                            Get started
                        </motion.button>
                    </Link>

                </div>
                <div className="absolute size-96 top-0 left-0  z-1 ">
                    <div className='absolute -left-[50%] size-full bg-emerald-700/20 -top-[50%] rounded-full'></div>
                    <div className='absolute -left-[50%] size-[125%] bg-emerald-700/20 -top-[50%] rounded-full'></div>
                    <div className='relative -left-[50%] size-[150%] bg-emerald-700/20 -top-[50%] rounded-full'></div>
                </div>

            </div>

        </>
    )
}
export default HomePage