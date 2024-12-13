import { useState, useEffect, useCallback } from 'react'
import { determineWinner, getRandomChoice } from '../services/gameService'
import { playSound } from '../utils/sound'

export const useGameState = () => {
  const [score, setScore] = useState(() => parseInt(localStorage.getItem('gameScore')) || 0)
  const [userChoice, setUserChoice] = useState(null)
  const [houseChoice, setHouseChoice] = useState(null)
  const [result, setResult] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    localStorage.setItem('gameScore', score.toString())
  }, [score])

  const updateScore = useCallback((gameResult) => {
    if (gameResult === 'WIN') setScore(prev => prev + 1)
    if (gameResult === 'LOSE') setScore(prev => Math.max(0, prev - 1))
  }, [])

  const makeChoice = useCallback((choice) => {
    setIsPlaying(true)
    playSound('click')
    setUserChoice(choice)

    setTimeout(() => {
      const computerChoice = getRandomChoice()
      setHouseChoice(computerChoice)
      playSound('housePick')

      setTimeout(() => {
        const gameResult = determineWinner(choice, computerChoice)
        setResult(gameResult)
        playSound(gameResult.toLowerCase())
        updateScore(gameResult)
      }, 500)
    }, 1000)
  }, [updateScore])

  const resetGame = useCallback(() => {
    setUserChoice(null)
    setHouseChoice(null)
    setResult(null)
    setIsPlaying(false)
  }, [])

  return {
    score,
    userChoice,
    houseChoice,
    result,
    isPlaying,
    makeChoice,
    resetGame
  }
}
