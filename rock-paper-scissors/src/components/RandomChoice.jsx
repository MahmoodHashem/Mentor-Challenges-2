import { useEffect, useState } from "react"

const RandomChoice = () => {

    const [index, setIndex] = useState(0)

    const gradientMap = [
        'bg-scissors-gradient ',
        'bg-paper-gradient ',
        'bg-rock-gradient ',
        'bg-lizard-gradient',
        'bg-spock-gradient',
    ]

    const gameButtons = [
        'scissors',
        'paper', 
        'rock',
        'lizard',
        'spock',
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % 5)
        }, 100)
    
        return () => clearInterval(interval)

    }, [])


    return (
        <div className={`rounded-full mx-auto w-[104px] sm:w-auto sm:h-32 aspect-square ${gradientMap[index]} p-3 sm:p-4 
        
       `}>
          <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white shadow-[inset_0_6px_rgba(0,0,0,0.2)]">
            <img src={`/icon-${gameButtons[index]}.svg`}  alt={gameButtons[index]} className="w-10 sm:w-auto aspect-square" />
          </div>
        </div>
    )
}

export default RandomChoice
