//Select button start game

const windowBtn = document.querySelector(".btn1")
let startAudio = new Audio("./Audio/gameStart.mp3");


windowBtn.addEventListener("click", function(e){
    startAudio.play();
    window.location.href = "./main.html";
})