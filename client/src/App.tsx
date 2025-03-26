import {useState} from 'react'
import './styles/tailwindcss.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="container">
                <div className="min-h-screen w-screen bg-gray-100 flex flex-col">
                    {/* Header */}
                    <header className="bg-blue-900 text-gray-350 py-4 shadow-md">
                        <h1 className="text-center text-2xl font-bold">TaskWise</h1>
                    </header>

                    {/* Main Content */}
                    <main className="flex-grow p-4">
                        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl text-gray-700 font-semibold mb-4">Welcome to TaskWise</h2>
                            <p className="text-gray-700">
                                Organize your tasks, track your progress, and get things done!
                            </p>
                        </div>
                    </main>

                    {/* Footer */}
                    <footer className="bg-gray-800 text-white text-center py-2">
                        <p className="text-sm">&copy; 2025 TaskWise. All rights reserved.</p>
                    </footer>
                </div>
            </div>

        </>
    )
}

export default App
