import { motion } from 'motion/react'
import ChoiceButton from './ChoiceButton'
import RandomChoice from './RandomChoice'

const GamePlay = ({ userChoice, houseChoice, result, onPlayAgain }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`mt-16 mx-auto max-w-4xl grid grid-cols-2 ${result ? "sm:grid-cols-6" : "sm:grid-cols-4" } gap-8`}
    >
      <motion.div 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="text-center sm:col-span-2"
      >
        <div className="mb-4 sm:mb-8">
          <ChoiceButton type={userChoice} position="static" animate={true} />
        </div>
        <p className="sm:text-lg tracking-widest">YOU PICKED</p>
      </motion.div>

      {result && (
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="col-start-1 row-start-2 sm:row-start-auto  col-end-3 sm:col-span-2   text-center"
        >
          <h2 className="mb-2  text-4xl sm:text-5xl font-bold uppercase">{result}</h2>
          <button 
            onClick={onPlayAgain}
            className="rounded bg-white px-10 sm:px-14 py-3 text-dark-text hover:text-red-500"
          >
            PLAY AGAIN
          </button>
        </motion.div>
      )}

      <motion.div 
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="text-center  sm:col-span-2"
      >
        <div className="mb-4  sm:mb-8">
        
          {houseChoice ? (
            <ChoiceButton type={houseChoice} position="static" animate={true} />
          ) : (
            
              <RandomChoice />
           
          )}

        </div>
        <p
        
        className="sm:text-lg tracking-widest transition-all">THE HOUSE PICKED</p>
      </motion.div>
    </motion.div>
  )
}

export default GamePlay
