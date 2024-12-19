import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './presentation/pages/Home'
import Detail from './presentation/pages/Detail'


import { useState, useEffect } from 'react'
import Header from './presentation/components/main/Header'

function App() {

  const [language, setLanguage] = useState('en')
  const [darkMode, setDarkMode] = useState(() => {
    // Check system preference on initial load
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true
    }
    return false
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => setDarkMode(e.matches)
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])



  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])


  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage} />
        <main className="py-12">
          <Routes>
          <Route path="/" element={<Home language={language} />} />
            <Route path="/country/:countryName" element={<Detail language={language} />} />
           </Routes>
        </main>
      </div >
    </BrowserRouter >
  )
}

export default App
