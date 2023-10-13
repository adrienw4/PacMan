// const pacman = document.querySelector(".pacman");
// const grid = document.querySelector(".grid");
// const startButton = document.querySelector("#start-button");
// const cellSize = 100 / 64; // Taille d'une cellule en pourcentage
// const pacmanSize = 3 * cellSize; // Taille de Pac-Man en pourcentage
// const animationDuration = 0.07; // Durée de l'animation en secondes
// let direction = "right";
// let isMoving = false;

// startButton.addEventListener("click", () => {
//   pacman.style.gridColumn = "1";
//   pacman.style.gridRow = "1";
//   startButton.disabled = true;
//   isMoving = true;
//   movePacman();
// });

// document.addEventListener("keydown", (event) => {
//   if (!isMoving) return;
//   if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
//     direction = "up";
//   } else if (
//     event.key === "ArrowDown" ||
//     event.key === "s" ||
//     event.key === "S"
//   ) {
//     direction = "down";
//   } else if (
//     event.key === "ArrowLeft" ||
//     event.key === "a" ||
//     event.key === "A"
//   ) {
//     direction = "left";
//   } else if (
//     event.key === "ArrowRight" ||
//     event.key === "d" ||
//     event.key === "D"
//   ) {
//     direction = "right";
//   }
// });

// function movePacman() {
//   if (!isMoving) return;

//   let currentCol = parseInt(pacman.style.gridColumn);
//   let currentRow = parseInt(pacman.style.gridRow);

//   switch (direction) {
//     case "up":
//       currentRow = Math.max(currentRow - 1, 1);
//       break;
//     case "down":
//       currentRow = Math.min(currentRow + 1, 64);
//       break;
//     case "left":
//       currentCol = Math.max(currentCol - 1, 1);
//       break;
//     case "right":
//       currentCol = Math.min(currentCol + 1, 64);
//       break;
//   }

//   pacman.style.gridColumn = currentCol;
//   pacman.style.gridRow = currentRow;

//   // Gérer les collisions avec les murs et la bordure extérieure (vous pouvez ajouter votre propre logique ici)

//   setTimeout(movePacman, animationDuration * 1000);
// }
