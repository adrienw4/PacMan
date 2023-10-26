
document.addEventListener("DOMContentLoaded", function () {
    const pacman = document.querySelector(".pacman");
    const grid = document.querySelector(".grid");
    const scoreDisplay = document.getElementById("score");
    const cells = document.querySelectorAll(".cell")
    let pacmanPosition = 213; // Position initiale de Pac-Man
    let score = 0;
  
    // Ajouter Pac-Man à sa position initiale
    cells[pacmanPosition].classList.add("pacman");
  
    // Écouter les touches du clavier pour déplacer Pac-Man
    document.addEventListener("keydown", function (event) {
      // Supprimer Pac-Man de sa position actuelle
      cells[pacmanPosition].classList.remove("pacman")
  
      // Mettre à jour la position de Pac-Man
      switch (event.key) {
        case "ArrowUp":
          if (pacmanPosition >= 30) pacmanPosition -= 30;
          break;
        case "ArrowDown":
          if (pacmanPosition < 570) pacmanPosition += 30;
          break;
        case "ArrowLeft":
          if (pacmanPosition % 30 !== 0) pacmanPosition -= 1;
          break;
        case "ArrowRight":
          if (pacmanPosition % 30 !== 29) pacmanPosition += 1;
          break;
      }
  
      // Ajouter Pac-Man à sa nouvelle position
      cells[pacmanPosition].classList.add("pacman");
  
      // Vérifier si Pac-Man mange un point
      if (cells[pacmanPosition].classList.contains("point")) {
        cells[pacmanPosition].classList.remove("point");
        score += 10;
        scoreDisplay.textContent = score;
      }
    });
  });
  
  
  