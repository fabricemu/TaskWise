import { useState } from 'react'
import './styles/tailwindcss.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className="w-screen bg-gray-900">
              <h1 className="text-4xl font-bold text-white">Hello, Tailwind CSS!</h1>
          </div>
      </>
  )
}

export default App
