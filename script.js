console.log("Welcome to Tic Tac Toe");

// Initialize variables
let turn = "X"; // Initialize the turn
let gameover = false; // Initialize game state

// Function to change turns
const changeTurn = () => {
    return turn === "X" ? "O" : "X"; // Switch turns between X and O
};

// Function to check for a tie
const checktie = () => {
    let x = 0; // Initialize count of filled boxes
    let boxtexts = document.querySelectorAll(".boxtext"); // Select all box texts

    boxtexts.forEach(boxtext => {
        if (boxtext.innerText !== '') {
            x += 1; // Count filled boxes
        }
    });

    if (x == 9) {
        document.querySelector('.info').style.color ="red";
        document.querySelector(".info").innerHTML = "Game Tie"; // Display tie message
    }
};

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext"); // Select all box texts
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(e => {
        if (
            (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")
        ) {
            document.querySelector('.info').style.color ="red";
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"; // Display winner
            gameover = true; // Set game state to over
        }
    });
};

// Event listeners for each box
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;

                // Check if the turn is "X" before applying red color
                if (turn === "X") {
                    boxtext.style.color = "red"; // Apply red color
                }
            }
        }
        checktie();
    });
});


// Reset button event listener
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""; // Clear box texts
        gameover = false; // Reset game state
        turn = "X"; // Reset turn to X
        document.querySelector('.info').style.color ="black";
        document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn; // Display next turn
    });
});
