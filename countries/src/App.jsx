import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'

import { useState } from 'react'

function App() {

  const [language, setLanguage] = useState('en')


  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <header className="bg-elements-light dark:bg-elements-dark shadow-md">
          
          <div className="container mx-auto py-6 px-4 flex justify-between items-center">
            
            <h1 className="font-extrabold text-xl">Where in the world?</h1>
            <button onClick={() => setLanguage(l => l === 'en' ? 'fa' : 'en')}>
              {language === 'en' ? 'فارسی' : 'English'}
            </button>
          </div>
        </header>
        <main className="py-12">
          <Routes>
            <Route path="/" element={<CountryList language={language} />} />
            <Route path="/country/:countryName" element={<CountryDetail language={language} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
