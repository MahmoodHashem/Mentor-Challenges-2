import { useState } from 'react'
import RulesModal from './components/RulesModal'
import GameButton from './components/GameButton'
function App() {
  const [score, setScore] = useState(0)
  const [isRulesOpen, setIsRulesOpen] = useState(false)


  const gameButtons = [
    { type: 'scissors', position: 'left-1/2 -top-10 -translate-x-1/2 transform' },
    { type: 'spock', position: 'left-6 top-10 sm:left-24 sm:top-16' },
    { type: 'paper', position: 'right-6 top-10 sm:right-24 sm:top-16' },
    { type: 'lizard', position: '-bottom-4 left-12 sm:-bottom-8 sm:left-1/4' },
    { type: 'rock', position: '-bottom-4 right-12 sm:-bottom-8 sm:right-1/4' }
  ]

  return (
    <main className="min-h-screen bg-radial-gradient font-barlow text-white">
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
      <div className="relative mx-auto mt-16 max-w-80 sm:max-w-2xl">
        {/* Pentagon Background */}
        <img src="/bg-pentagon.svg" alt="" className="mx-auto w-60 sm:w-auto" />

        {/* Game Buttons */}
        <div className="absolute inset-0">
          {gameButtons.map((button) => (
            <GameButton
              key={button.type}
              type={button.type}
              position={button.position}
            />
          ))}
        </div>
      </div>

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
