//Select button start game

const windowBtn = document.querySelector(".btnStart")
let startAudio = new Audio("./Audio/gameStart.mp3");


 windowBtn.addEventListener("click", function(e){
    startAudio.play();
    setTimeout(function() {
        
    window.location.href = "./main.html";
    }, 4000)
   
})

setTimeout(startFunction,10000);

function getVal() {
    let val = document.querySelector('input').value;
    console.log(val);
    localStorage.setItem("newValuem", val);

    localStorage.getItem("newValuem");
   
  }

  


  