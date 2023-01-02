


let user_name = prompt("Enter player 1 name");
let user_name_final = user_name.charAt(0).toUpperCase() + user_name.slice(1);
let user = prompt("Select any one of them \n'Rock, Paper or Scissor'");
let userInput = user.charAt(0).toUpperCase() + user.slice(1);

let cpuI = Math.floor(Math.random() * 3);
let cpu = ["Rock", "Paper", "Scissor"][cpuI]


const match = () => {
    if (cpu === userInput) {
        return "Game Tie"
    }
    else if (cpu === "Rock" && userInput === "Paper") {
        return `${userInput} captured the ${cpu}<br>Congratulations! '${user_name_final}' You won the game `;

    }
    else if (cpu === "Rock" && userInput === "Scissor") {
        return `${cpu} breaked the ${userInput}<br>Sorry! Player 2 Win`
    }
    else if (cpu === "Scissor" && userInput === "Paper") {
        return `${cpu} tear the ${userInput}<br>Sorry! Player 2 Win`
    }
    else if (cpu === "Scissor" && userInput === "Rock") {
        return `${userInput} breaked the ${cpu}<br>Congratulations! '${user_name_final}' You won the game `;

    }
    else if (cpu === "Paper" && userInput === "Rock") {
        return `${cpu} captured the ${userInput}<br>Sorry! Player 2 Win`
    }
    else if (cpu === "Paper" && userInput === "Scissor") {
        return `${userInput} tear the ${cpu}<br>Congratulations! '${user_name_final}' You won the game `;

    }
}
let result = match();
document.getElementById('line1').innerHTML = `Player 2 (Robot) Selects :`;
document.getElementById('sp_1').innerHTML = `${cpu}`;
document.getElementById('line2').innerHTML = `${user_name_final} Selects :`;
document.getElementById('sp_2').innerHTML = `${userInput}`;
document.getElementById('line3').innerHTML = `${result}`;
// document.getElementById('demo').innerHTML = `Player 2 (Robot) Selects: ${cpu} <br> ${user_name_final} Selects: ${userInput} <br>${result}`;

function playyAgain() {
    location.reload();
}
