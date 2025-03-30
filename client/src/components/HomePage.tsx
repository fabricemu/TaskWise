import {TipsAndUpdates, Bolt, LowPriority, Workspaces, WifiOff} from "@mui/icons-material";
import Footer from "./Footer.tsx";
import Header from "./header.tsx";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <>

            <Header/>
            <main className="flex-grow p-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
                    <h2 className="text-2xl text-gray-700 font-bold mb-4 text-center">Welcome to TaskWise
                        Application</h2>
                    <h1 className='font-medium mb-5'>TaskWise is a web-based task management system designed to help users organize, track, and
                        manage their personal or team tasks effectively. </h1>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-800 font-bold my-5">
                        <div className="bg-gray-100 hover:bg-emerald-50 flex flex-col items-center gap-3 p-4 rounded-lg shadow">
                            <i className="bg-emerald-950 shadow-lg shadow-emerald-950/50  rounded-full p-2 text-white">
                                <Bolt className="w-6 h-6" fontSize='large'/>
                            </i>
                            <span>Real-time progress tracking</span>
                        </div>

                        <div className="bg-gray-100 hover:bg-emerald-50 flex flex-col items-center gap-3 p-4 rounded-lg shadow">
                            <i className="bg-emerald-950 shadow-lg shadow-emerald-950/50 rounded-full p-2 text-white">
                                <LowPriority className="w-6 h-6" fontSize='large'/>
                            </i>
                            <span>Intuitive task management</span>
                        </div>

                        <div className="bg-gray-100 hover:bg-emerald-50 flex flex-col items-center gap-3 p-4 rounded-lg shadow">
                            <i className="bg-emerald-950 shadow-lg shadow-emerald-950/50 rounded-full p-2 text-white">
                                <Workspaces className="w-6 h-6" fontSize='large'/>
                            </i>
                            <span>Seamless collaboration</span>
                        </div>

                        <div className="bg-gray-100 hover:bg-emerald-50 flex flex-col items-center gap-3 p-4 rounded-lg shadow">
                            <i className="bg-emerald-950 shadow-lg shadow-emerald-950/50 rounded-full p-2 text-white">
                                <WifiOff className="w-6 h-6" fontSize='large'/>
                            </i>
                            <span>Offline access and cloud connectivity</span>
                        </div>
                    </div>

                    <div className="text-gray-700 p-4 bg-emerald-50 rounded flex items-center gap-3">
                        <TipsAndUpdates fontSize='medium' className='text-yellow-700'/>
                        <p className='text-sm'><span className="font-medium"> Achieve your goals</span> wherever
                        you are, with a
                        responsive
                        and user-friendly design built for modern productivity.</p>

                    </div>
                    <p className="text-gray-700 my-4">
                        Organize your tasks, track your progress, and get things done!
                    </p>
                    <Link to='/signup'>
                        <button
                            className='px-3 py-2 mt-2 bg-emerald-900 hover:bg-emerald-700 text-white rounded'>
                            Get started
                        </button>
                    </Link>


                </div>
            </main>
            <Footer/>

        </>
    )
}
export default HomePage