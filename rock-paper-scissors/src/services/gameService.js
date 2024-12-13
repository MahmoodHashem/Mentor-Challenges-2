export const CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock']


export const BUTTON_POSITIONS = {
  scissors: 'left-1/2 -top-10 -translate-x-1/2 transform',
  spock: '-left-4 top-12 sm:left-24 sm:top-16',
  paper: '-right-4 top-10 sm:right-24 sm:top-16',
  lizard: '-bottom-9 left-5 sm:-bottom-8 sm:left-1/4',
  rock: '-bottom-9 right-5 sm:-bottom-8 sm:right-1/4'
}

export const RULES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['scissors', 'rock']
}

export const determineWinner = (userChoice, houseChoice) => {
  if (userChoice === houseChoice) return 'DRAW'
  return RULES[userChoice].includes(houseChoice) ? 'WIN' : 'LOSE'
}

export const getRandomChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)]
