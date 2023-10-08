//select all Elements that we will use 
let containerPlayers = document.querySelector(".playerDiv")
//Select all images

const firstDice = document.querySelector(".image1Div")//hold the first dice div (image)
const secondDice = document.querySelector(".image2Div")//hold the second dice div(image)
const gameStatusImg = document.querySelector(".dealerImg")//hold the game status image

//Select all buttons
const newGameBtn = document.querySelector(".btn1")//hold the new game button
let rollDiceBtn = document.querySelector(".btn2")//hold the roll dice button
let holdBtn = document.querySelector(".btn3")//hold the hold button

//Select score display for each player
let player1Score = document.querySelector(".player1Score")//first player's score
let player2Score = document.querySelector(".player2Score")//second player's score

//current score
let current1Score = document.querySelector(".current1Score")//current score for player 1
let current2Score = document.querySelector(".current2Score")//current score for player 2
let changeCurrent1ToWinner = document.querySelector(".changeCurrent1ToWinner")
let changeCurrent2ToWinner = document.querySelector(".changeCurrent2ToWinner")

//Select two player
let player1Color = document.querySelector(".player1Div")//hold player 1
let player2Color = document.querySelector(".player2Div")//hold player 2
let result1 = document.querySelector(".result1")
let result2 = document.querySelector(".result2")

//select input value
let value1 = document.querySelector(".value")

function getVal() {
    let val = document.querySelector('.value').value;
    console.log(`val = ${val}`);
  }





//declare variables
let score_1 = 0 //for score
let score_2 = 0

let current1 = 0;//for current score
let current2 = 0;

let player1 = true
let player2 = true


let win1 = 0
let win2 = 0








//roll button
rollDiceBtn.addEventListener("click", function (e) {


    let firstDrop = 0;
    let secondDrop = 0;


    gameStatusImg.style.backgroundImage = "url('./images/dellear.webp')"
    const rand1 = Math.ceil(Math.random() * 6)
    const rand2 = Math.ceil(Math.random() * 6)


    switch (rand1) {
        case 1:
            firstDice.style.backgroundImage = "url('./images/dice1.png')"
            if (player1 == true) {
                score_1 += 1

            } else {
                score_2 += 1


            }

            break;
        case 2:
            firstDice.style.backgroundImage = "url('./images/dice2.png')"
            if (player1 == true) {
                score_1 += 2

            } else {
                score_2 += 2
            }
            break;
        case 3:
            firstDice.style.backgroundImage = "url('./images/dice3.png')"
            if (player1 == true) {
                score_1 += 3
            } else {
                score_2 += 3
            }
            break;
        case 4:
            firstDice.style.backgroundImage = "url('./images/dice4.png')"
            if (player1 == true) {
                score_1 += 4
            } else {
                score_2 += 4
            }
            break;
        case 5:
            firstDice.style.backgroundImage = "url('./images/dice5.png')"
            if (player1 == true) {
                score_1 += 5
            } else {
                score_2 += 5
            }
            break;
        case 6:
            firstDice.style.backgroundImage = "url('./images/dice6.png')"

            if (player1 == true) {
                score_1 += 6
                firstDrop += 6;
            } else {
                score_2 += 6
                firstDrop += 6;
            }
            break;

        default:
            console.log(`Sorry, we are out of ${rand1}.`);
    }


    switch (rand2) {
        case 1:
            secondDice.style.backgroundImage = "url('./images/dice1.png')"
            if (player1 == true) {
                score_1 += 1
            } else {
                score_2 += 1
            }
            break;
        case 2:
            secondDice.style.backgroundImage = "url('./images/dice2.png')"
            if (player1 == true) {
                score_1 += 2
            } else {
                score_2 += 2
            }
            break;
        case 3:
            secondDice.style.backgroundImage = "url('./images/dice3.png')"
            if (player1 == true) {
                score_1 += 3
            } else {
                score_2 += 3
            }
            break;
        case 4:
            secondDice.style.backgroundImage = "url('./images/dice4.png')"
            if (player1 == true) {
                score_1 += 4
            } else {
                score_2 += 4
            }
            break;
        case 5:
            secondDice.style.backgroundImage = "url('./images/dice5.png')"
            if (player1 == true) {
                score_1 += 5
            } else {
                score_2 += 5
            }
            break;
        case 6:
            secondDice.style.backgroundImage = "url('./images/dice6.png')"
            if (player1 == true) {
                score_1 += 6
                secondDrop += 6;
            } else {
                score_2 += 6
                secondDrop += 6;
            }
            break;

        default:
            console.log(`Sorry, we are out of ${rand1}.`);
    }

    // console.log(`score 1 = ${score_1}`)



    // if (firstDrop === 6 && secondDrop === 6) {
    //     score_1 = 0;
    //     score_2 = 0;
    //     // player1Score.innerText = score_1
    //     // player1Score.innerText = score_2
    //     alert(`OOPS, you get double six `)
    //     gameStatusImg.style.backgroundImage = "url('./images/sixdice.jpeg')"
    // }

    current1Score.innerText = score_1
    current2Score.innerText = score_2



})

//hold button
holdBtn.addEventListener("click", function (e) {
    // console.log(`player1 = ${player1}`)

    colorStylingChange();
    if (player1 == true) {
        let newCurrent1;
        console.log(score_1)
        current1 += score_1
        newCurrent1 = current1
        player1Score.innerText = newCurrent1


        // console.log(`new = ${newCurrent1}`)

        checkWinner1(newCurrent1)
        score_1 = 0;
      
        current1Score.innerText = score_1



    } else {
        let newCurrent2;
        console.log(score_2)
        current2 += score_2
        newCurrent2 = current2
        player2Score.innerText = newCurrent2



        console.log(`new = ${newCurrent2}`)
        checkWinner2(newCurrent2)
        score_2 = 0;
        current2Score.innerText = score_2

    }
    activePlayer();


})

//for reset 
newGameBtn.addEventListener("click", function (e) {
    
    location.reload()
   

})


//player turn (active player)
function activePlayer() {
    if (player1 == true) {
        player1 = false


    } else
        player1 = true
}


function colorStylingChange() {
    if (player1 == true) {
        player1Color.style.backgroundColor = "rgba(39, 22, 22, 0.356)"
        player2Color.style.backgroundColor = "rgba(64, 55, 55, 0.356)"
    } else {
        player1Color.style.backgroundColor = "rgba(49, 34, 34, 0.523)	"
        player2Color.style.backgroundColor = "rgba(39, 22, 22, 0.356)"
    }


}

console.log(`player1score = ${current1}`)
console.log(`player1score = ${player1Score}`)
console.log(`player1score = ${current1Score}`)
console.log(`player1score = ${score_1}`)




function checkWinner1(newCurrent1) {

    if (newCurrent1 > 100) {
        console.log(`newCurrent1 = ${newCurrent1}`)

        // player1Score.innerText = newCurrent1

  
        // containerPlayers.style.backgroundColor = "red"
        changeCurrent2ToWinner.innerText = "YOU WIN :)"
        gameStatusImg.style.backgroundImage = "url('./images/winnerGif1.gif')"
        // disableButtonClick()
        
      
        
        win2++;
        // result2.textContent = `Player 2 ---> ${win2}`
        player1Color.style.backgroundColor = "rgba(39, 22, 22, 0.356)"
        player2Color.style.backgroundColor = "rgba(64, 55, 55, 0.356)"
        document.querySelector('.btn3').disabled = true;
        document.querySelector('.btn2').disabled = true;
        
        return newCurrent1

    }

}

function checkWinner2(newCurrent2) {

    if (newCurrent2 > 100) {
       
        win1++;
       
        // result1.textContent = `Player 1 ---> ${win1}`
        changeCurrent1ToWinner.innerText = "COMPUTER WON"
        gameStatusImg.style.backgroundImage = "url('./images/lose.gif')"
        player1Color.style.backgroundColor = "rgba(49, 34, 34, 0.523)	"
        player2Color.style.backgroundColor = "rgba(39, 22, 22, 0.356)"
        document.querySelector('.btn3').disabled = true;
        document.querySelector('.btn2').disabled = true;
        // disableButtonClick()

       

        return newCurrent2;

    }

}




