import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './widget/main/main'
import TopNavigation from './widget/nav/top'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full flex flex-col bg-slate-0">
      <TopNavigation />
      <h1>Vite ++++ React</h1>
      <MainPage />
    </div>
  )
}

export default App
