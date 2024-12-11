const GameButton = ({ type, position }) => {
    const gradientMap = {
      scissors: 'bg-scissors-gradient hover:outline-scissors',
      paper: 'bg-paper-gradient hover:outline-paper',
      rock: 'bg-rock-gradient hover:outline-rock',
      lizard: 'bg-lizard-gradient hover:outline-lizard',
      spock: 'bg-spock-gradient hover:outline-spock',
    }
  
    return (
      <button className={`absolute ${position}`}>
        <div className={`rounded-full ${gradientMap[type]} p-2 sm:p-4 
        focus-visible:scale-110
        focus-visible:outline-dotted 
        focus-visible:outline-offset-[6px]
        md:hover:outline-dotted hover:outline-[6px]
        hover:outline-offset-[6px] transition-[transform,outline] ease-in duration-[50ms,200ms]
        hover:scale-110`}>
          <div className="flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white shadow-[inset_0_6px_rgba(0,0,0,0.2)]">
            <img src={`/icon-${type}.svg`}  alt={type} className="w-10 sm:w-auto aspect-square" />
          </div>
        </div>
      </button>
    )
  }
  
  export default GameButton
  