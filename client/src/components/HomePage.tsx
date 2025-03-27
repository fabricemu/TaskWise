import {Visibility} from "@mui/icons-material";
import Footer from "./Footer.tsx";
import Header from "./header.tsx";
const HomePage = () => {
    return (
        <>
            <div className="container">
                <div className="min-h-screen w-screen bg-gray-100 flex flex-col">
                    <Header/>
                    <main className="flex-grow p-4">
                        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl text-gray-700 font-bold mb-4">Welcome to TaskWise</h2>
                            <p className="text-gray-700">
                                Organize your tasks, track your progress, and get things done!
                            </p>
                            <button
                                className='px-3 py-2 mt-2 bg-green-900 hover:bg-green-700 text-white rounded'>
                                Get started
                            </button>

                        </div>
                    </main>
                    <Footer/>
                </div>
            </div>

        </>
    )
}
export default HomePage