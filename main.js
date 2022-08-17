document.querySelector('.userChoice');
const playerButton = document.querySelector('.playerChoice')
const buttonChoice = document.querySelectorAll('.btn-choice')
const userChoice = document.querySelector('.userChoice');
const compScoreTxt = document.querySelector('#compScore');
const userScoreTxt = document.querySelector('#userScore');
const roundWinner = document.querySelector('#roundWinner');
const btnReset = document.querySelector('.reset')
const btnHidden = document.querySelector('.hidden')
const choices = ["agua", "fogo", "planta"];
var compScore = 0
var userScore = 0





getPlayerChoice();


function getPlayerChoice() {

    for (btn of buttonChoice) {
        btn.addEventListener('click', (e) => {
            let playerChoice = e.currentTarget.id;
            let compChoice = getComputerChoice();
            userChoice.innerHTML = `<img src='tipos/${e.currentTarget.id}.png 'class='mark'>`;
            playRound(playerChoice, compChoice);
            compScoreTxt.innerHTML = `${compScore}`;
            userScoreTxt.innerHTML = `${userScore}`;
            roundCount(userScore, compScore);
            console.log('Player Score ' + userScore + ' Compu Score' + compScore);



        })
    }





}

function roundCount(player, comp) {


    if (player === 5) {

        roundWinner.textContent = ("Você ganhou");

        toggleHide()

    } else if (comp === 5) {

        roundWinner.textContent = ("Você perdeu");
        toggleHide()

    } else if (player === 5 || comp === 5) {
       
        roundWinner.textContent = ("Sem Eficácia")
        toggleHide()

    }
}

function getComputerChoice() {
    const comp = choices[Math.floor(Math.random() * choices.length)];
    return comp;
}




function playRound(user, comp) {

    console.log(comp, user)

    const showCompChoice = document.querySelector('.compChoice').innerHTML = `<img src='tipos/${comp}.png'class='mark'>`;

    if (comp === user) {
        userScore++;
        compScore++;
        roundWinner.textContent = 'Sem Eficácia';

        showCompChoice
        return 'Tie';
    }
    else if (
        (comp === 'fogo' && user === 'agua') ||
        (comp === 'agua' && user === 'planta') ||
        (comp === 'planta' && user === 'fogo')) {
        showCompChoice;
        compScore++;
        roundWinner.textContent = "Vitória do Mago";

        return "computer";
    }
    else {
        userScore++;
        roundWinner.textContent = 'Vitóra do Explorador';

        return 'player';
    }

}

function toggleHide() {

    playerButton.classList.toggle('hide');
    btnReset.classList.toggle('hide');
   

}

function resetGame() {

    toggleHide()
    userScore = 0
    compScore = 0

    userScoreTxt.textContent = '0'
    compScoreTxt.textContent = '0'
   
 
 }


btnReset.addEventListener('click', resetGame)