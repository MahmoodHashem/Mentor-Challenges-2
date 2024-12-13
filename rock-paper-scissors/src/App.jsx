import GameLayout from './components/layout/GameLayout'
import GamePentagon from './components/GamePentagon'
import GamePlay from './components/GamePlay'
import { useGameState } from './hooks/useGameState'

function App() {
  const { 
    score, 
    userChoice, 
    houseChoice, 
    result, 
    isPlaying,
    makeChoice, 
    resetGame 
  } = useGameState()

  return (
    <GameLayout score={score}>
      {!isPlaying ? (
        <GamePentagon onChoice={makeChoice} />
      ) : (
        <GamePlay 
          userChoice={userChoice}
          houseChoice={houseChoice}
          result={result}
          onPlayAgain={resetGame}
        />
      )}
    </GameLayout>
  )
}

export default App
