import { motion } from 'motion/react'
import ChoiceButton from './ChoiceButton'
import { CHOICES, BUTTON_POSITIONS } from '../services/gameService'

const GamePentagon = ({ onChoice }) => {
  return (
    <motion.div 
      key="pentagon"
      className="relative mx-auto mt-16 max-w-80 sm:max-w-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img src="/bg-pentagon.svg" alt="pentagon" className="mx-auto" />
      <div className="absolute inset-0">
        {CHOICES.map((choice) => (
          <ChoiceButton 
            key={choice}
            type={choice}
            position={BUTTON_POSITIONS[choice]}
            onClick={() => onChoice(choice)}
            layoutId={choice}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default GamePentagon
