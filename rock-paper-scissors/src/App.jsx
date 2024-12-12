import { useState, useEffect } from 'react'
import RulesModal from './components/RulesModal'
import ChoiceButton from './components/ChoiceButton'
import GamePlay from './components/GamePlay'
import { motion, AnimatePresence } from 'motion/react'
import { playSound } from './utils/sound'



function App() {
  const [score, setScore] = useState(0)
  const [isRulesOpen, setIsRulesOpen] = useState(false)
  const [userChoice, setUserChoice] = useState(null)
  const [houseChoice, setHouseChoice] = useState(null)
  const [result, setResult] = useState(null)



  const gameButtons = [
    { type: 'scissors', position: 'left-1/2 -top-10 -translate-x-1/2 transform' },
    { type: 'spock', position: '-left-4 top-12 sm:left-24 sm:top-16' },
    { type: 'paper', position: '-right-4 top-10 sm:right-24 sm:top-16' },
    { type: 'lizard', position: '-bottom-9 left-5 sm:-bottom-8 sm:left-1/4' },
    { type: 'rock', position: '-bottom-9 right-5 sm:-bottom-8 sm:right-1/4' }
  ]



  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  const rules = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock']
  }

  const handleChoice = (choice) => {
  playSound('click')
  setUserChoice(choice)
}

  const determineWinner = (user, house) => {
    if (user === house) {
      playSound('draw')
      return 'DRAW'
    } 
    if (rules[user].includes(house)) {
      playSound('win')
      setScore(prev => prev + 1)
      return 'YOU WIN'
    }
  
  playSound('lose')
    setScore(prev => Math.max(0, prev - 1))
    return 'YOU LOSE'
  }

  useEffect(() => {
    if (userChoice) {
      setTimeout(() => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setHouseChoice(randomChoice)
      }, 1000)
    }
  }, [userChoice])

  useEffect(() => {
    if (userChoice && houseChoice) {
      setTimeout(() => {
        setResult(determineWinner(userChoice, houseChoice))
      }, 500)
    }
  }, [houseChoice])

  const handlePlayAgain = () => {
    setHouseChoice(null)
    setResult(null)
    setUserChoice(null)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-radial-gradient font-barlow text-white">
      {/* Header with Score */}
      <header className="mx-auto max-w-2xl p-8">
        <div className="flex items-center justify-between rounded-lg border-2 border-header-outline p-4">
          <div className="flex flex-col">
            <img src="/logo-bonus.svg" alt="Rock Paper Scissors Logo" className="h-20" />
          </div>
          <div className="rounded-lg bg-white p-4 text-center">
            <p className="text-score-text text-sm tracking-widest">SCORE</p>
            <p className="text-dark-text text-5xl font-bold">{score}</p>
          </div>
        </div>
      </header>

      {/* Game Area */}
      
      {!userChoice ? (
        <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative mx-auto mt-16 max-w-80 sm:max-w-2xl ">
          <img src="/bg-pentagon.svg" alt="" className="mx-auto w-72 sm:w-auto" />
          <div className="absolute inset-0">
          <AnimatePresence>
           {gameButtons.map((button) => (
              <ChoiceButton 
                key={button.type}
                {...button}
                onClick={() => handleChoice(button.type)}
                animate={false}
                />
            ))}
           </AnimatePresence>
          </div>
        </motion.div>
      ) : (
        <GamePlay 
          userChoice={userChoice}
          houseChoice={houseChoice}
          result={result}
          onPlayAgain={handlePlayAgain}
          animate={true}
        />
      )}

      {/* Rules Button */}
      <div className="fixed bottom-8 left-1/2  -translate-x-1/2 sm:left-[90%]">
        <button className="rounded-lg border-2 border-white px-10 py-2 tracking-widest"
          onClick={() => setIsRulesOpen(true)}
        >

          RULES
        </button>
      </div>
      <RulesModal
        isOpen={isRulesOpen}
        onClose={() => setIsRulesOpen(false)}
      />
    </main>
  )
}

export default App
