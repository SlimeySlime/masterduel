import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './widget/main/main'
import TopNavigation from './widget/nav/top'
import { Routes, Route } from 'react-router-dom'
import Card_List from './widget/card/card_list'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-0">
      <TopNavigation />
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/cards' element={<Card_List />}></Route>
      </Routes>
    </div>
  )
}

export default App
