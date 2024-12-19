import {motion} from 'motion/react'

const Header = ({darkMode, setDarkMode, language, setLanguage}) => {
  return (
    <header className="bg-elements-light dark:bg-elements-dark shadow-md">

    <div className="container mx-auto py-6 px-4 flex justify-between items-center">
      <h1 className="hidden font-extrabold text-text-light dark:text-text-dark text-xl">Where in the world?</h1>
      <div className="flex items-center justify-between w-full gap-8">
        <motion.button 
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}              
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 text-text-light dark:text-text-dark hover:opacity-75 transition-opacity"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </motion.button>
        <button
          onClick={() => setLanguage(l => l === 'en' ? 'fa' : 'en')}
          className="text-text-light dark:text-text-dark hover:opacity-75 transition-opacity font-semibold"
        >
          {language === 'en' ? 'فارسی' : 'English'}
        </button>
      </div>
    </div>
  </header>
  )
}

export default Header
