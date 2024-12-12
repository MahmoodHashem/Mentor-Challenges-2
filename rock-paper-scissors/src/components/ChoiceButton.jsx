import { motion } from "motion/react"

const ChoiceButton = ({ type, position = 'static', onClick, animate  }) => {
    const gradientMap = {
      scissors:  'bg-scissors-gradient hover:outline-scissors',
      paper: 'bg-paper-gradient hover:outline-paper',
      rock: 'bg-rock-gradient hover:outline-rock',
      lizard: 'bg-lizard-gradient hover:outline-lizard',
      spock: 'bg-spock-gradient hover:outline-spock',
    }
  
    return (
      <motion.button 
      onClick={onClick}
      layout
      initial={animate ? { scale: 1 } : false}
      animate={animate ? { x: 0, y: 0, scale: 1 } : false}
      transition={{ type: "spring", duration: 0.5 }}
      className={`${position === "static" ? "" : "absolute"} ${position} `}>
        <div className={`rounded-full ${gradientMap[type]} p-3 sm:p-4 
         shadow-[inset_0_-3px_rgba(0,0,0,0.2)]
        focus-visible:scale-110
        ${position === 'static' ? "" : "focus-visible:outline-dotted  md:hover:outline-dotted hover:scale-110"} 
        focus-visible:outline-offset-[6px]
        hover:outline-[6px]
        hover:outline-offset-[6px] transition-[transform, outline] ease-in duration-[50ms,200ms]
        `}>
          <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white shadow-[inset_0_6px_rgba(0,0,0,0.2)]">
            <img src={`/icon-${type}.svg`}  alt={type} className="w-10 sm:w-auto aspect-square" />
          </div>
        </div>
      </motion.button>
    )
  }
  
  export default ChoiceButton
  