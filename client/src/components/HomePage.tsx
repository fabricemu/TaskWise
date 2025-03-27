import {TipsAndUpdates,Bolt,LowPriority, Workspaces,WifiOff} from "@mui/icons-material";
import Footer from "./Footer.tsx";
import Header from "./header.tsx";

const HomePage = () => {
    return (
        <>

            <Header/>
            <main className="flex-grow p-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl text-gray-700 font-bold mb-4 text-center">Welcome to TaskWise Application</h2>

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-800 font-bold mb-4">
                        <div className="bg-gray-100 flex flex-col items-center gap-3 p-4 rounded-lg shadow">
                            <i className="bg-green-950 rounded-full p-2 text-white">
                                <Bolt className="w-6 h-6"/>
                            </i>
                            <span>Real-time progress tracking</span>
                        </div>

                        <div className="bg-gray-100 flex flex-col items-center gap-3 p-4 rounded-lg shadow">
                            <i className="bg-green-950 rounded-full p-2 text-white">
                                <LowPriority className="w-6 h-6"/>
                            </i>
                            <span>Intuitive task management</span>
                        </div>

                        <div className="bg-gray-100 flex flex-col items-center gap-3 p-4 rounded-lg shadow">
                            <i className="bg-green-950 rounded-full p-2 text-white">
                                <Workspaces className="w-6 h-6"/>
                            </i>
                            <span>Seamless collaboration</span>
                        </div>

                        <div className="bg-gray-100 flex flex-col items-center gap-3 p-4 rounded-lg shadow">
                            <i className="bg-green-950 rounded-full p-2 text-white">
                                <WifiOff className="w-6 h-6"/>
                            </i>
                            <span>Offline access and cloud connectivity</span>
                        </div>
                    </div>

                    <p className="text-gray-700 p-3 bg-green-50 rounded">
                        <span className="font-medium"><TipsAndUpdates fontSize='medium' className='text-yellow-700'/> Achieve your goals</span> wherever
                        you are, with a
                        responsive
                        and user-friendly design built for modern productivity.
                    </p>
                    <p className="text-gray-700 my-4">
                        Organize your tasks, track your progress, and get things done!
                    </p>
                    <button
                        className='px-3 py-2 mt-2 bg-green-900 hover:bg-green-700 text-white rounded'>
                        Get started
                    </button>

                </div>
            </main>
            <Footer/>

        </>
    )
}
export default HomePage