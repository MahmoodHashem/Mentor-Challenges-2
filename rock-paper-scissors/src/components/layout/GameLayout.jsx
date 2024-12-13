import { motion, AnimatePresence, LayoutGroup } from 'motion/react'
import Header from '../Header'
import RulesModal from '../RulesModal'
import { useState } from 'react'

const GameLayout = ({ children, score }) => {
  const [isRulesOpen, setIsRulesOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-radial-gradient font-barlow text-white">
      <div className="mx-auto max-w-2xl px-4">
        <Header score={score} />
        
        <LayoutGroup>
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </LayoutGroup>

        <button
         
          onClick={() => setIsRulesOpen(true)}
          className="fixed bottom-8 left-1/2  -translate-x-1/2 sm:left-[90%]  rounded-lg border-2 border-white px-10 py-2 tracking-widest"
        >
          RULES
        </button>

        <RulesModal 
          isOpen={isRulesOpen} 
          onClose={() => setIsRulesOpen(false)} 
        />
      </div>
    </main>
  )
}

export default GameLayout
