//starting the game
//comentariu
function startGame() {
  let messagesElement = document.getElementById("messages");
  messagesElement!.innerText = "welcome to this game";
}

document.getElementById("startGame")!.addEventListener("click", startGame);
