import { motion } from 'framer-motion'

const Header = ({ score }) => {
  return (
    <header className="pt-8">
      <motion.div 
        className="flex items-center justify-between rounded-lg border-2 border-header-outline p-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col">
          <img src="/logo-bonus.svg" alt="Rock Paper Scissors Logo" className="h-20" />
        </div>
        
        <motion.div 
          className="rounded-lg bg-white p-4 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-score-text text-sm tracking-widest">SCORE</span>
          <motion.p 
            key={score}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-dark-text text-5xl font-bold"
          >
            {score}
          </motion.p>
        </motion.div>
      </motion.div>
    </header>
  )
}

export default Header
