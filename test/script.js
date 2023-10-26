document.addEventListener('DOMContentLoaded', () => {

    const scoreDisplay = document.getElementById('score')
    const width = 28
    let score = 0
    const grid = document.querySelector('.grid')
    const pacMan =document.querySelector('pac-man')
  
    //move pacman
    function pacMan (e)
      switch(e.keyCode) {
        case 37:
          if(
            pacmanCurrentIndex % width !== 0 &&
            !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')
            )
          pacmanCurrentIndex -= 1
          if (squares[pacmanCurrentIndex -1] === squares[363]) {
            pacmanCurrentIndex = 391
          }
          break
        case 38:
          if(
            pacmanCurrentIndex - width >= 0 &&
            !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')
            ) 
          pacmanCurrentIndex -= width
          break
        case 39:
          if(
            pacmanCurrentIndex % width < width - 1 &&
            !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
          )
          pacmanCurrentIndex += 1
          if (squares[pacmanCurrentIndex +1] === squares[392]) {
            pacmanCurrentIndex = 364
          }
          break
        case 40:
          if (
            pacmanCurrentIndex + width < width * width &&
            !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')
          )
          pacmanCurrentIndex += width
          break
      }
    document.addEventListener('keyup', movePacman)
  
   