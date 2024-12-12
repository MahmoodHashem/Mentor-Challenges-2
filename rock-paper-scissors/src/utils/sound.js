const sounds = {
    click: new Audio('/sounds/click.mp3'),
    win: new Audio('/sounds/win.mp3'),
    lose: new Audio('/sounds/lose.mp3'),
    draw: new Audio('/sounds/draw.mp3'),
    housePick: new Audio('/sounds/house-pick.mp3')
  }
  
  export const playSound = (soundName) => {
    sounds[soundName].currentTime = 0
    sounds[soundName].play()
  }
  