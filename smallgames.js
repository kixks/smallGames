//Rock Paper Scissor
//================================================================================================================
let player;
let winner;

document.getElementById("rock").onclick = function () {
    let computer = compute();
    player = "Rock";
    document.getElementById("playerImage").src = "/SmallGames/Images/rock.jpg";

    document.getElementById("playerPick").textContent = `Player Choose: ${player}`;
    document.getElementById("computerPick").textContent = `Computer Choose: ${computer}`;
    if(computer=="Rock"){
        winner = "Tie";
        document.getElementById("computerImage").src = "/SmallGames/Images/rockComp.jpg";
    }
    if(computer=="Paper"){
        winner = "Computer Win";
        document.getElementById("computerImage").src = "/SmallGames/Images/paperComp.jpeg";
    }
    if(computer=="Scissor"){
        winner = "Player Win";
        document.getElementById("computerImage").src = "/SmallGames/Images/scissorComp.jpg";
    }
    document.getElementById("winner").textContent = `${winner}!`
}
document.getElementById("paper").onclick = function () {
    let computer = compute();
    player = "Paper";
    document.getElementById("playerImage").src = "/SmallGames/Images/paper.jpeg";

    document.getElementById("playerPick").textContent = `Player Choose: ${player}`;
    document.getElementById("computerPick").textContent = `Computer Choose: ${computer}`;
    if(computer=="Rock"){
        winner = "Player Win";
        document.getElementById("computerImage").src = "/SmallGames/Images/rockComp.jpg";
    }
    if(computer=="Paper"){
        winner = "Tie";
        document.getElementById("computerImage").src = "/SmallGames/Images/paperComp.jpeg";
    }
    if(computer=="Scissor"){
        winner = "Computer Win";
        document.getElementById("computerImage").src = "/SmallGames/Images/scissorComp.jpg";
    }
    document.getElementById("winner").textContent = `${winner}!`
}
document.getElementById("scissor").onclick = function () {
    let computer = compute();
    player = "Scissor";
    document.getElementById("playerImage").src = "/SmallGames/Images/scissor.jpg";

    document.getElementById("playerPick").textContent = `Player Choose: ${player}`;
    document.getElementById("computerPick").textContent = `Computer Choose: ${computer}`;
    if(computer=="Rock"){
        winner = "Computer Win";
        document.getElementById("computerImage").src = "/SmallGames/Images/rockComp.jpg";
    }
    if(computer=="Paper"){
        winner = "Player Win";
        document.getElementById("computerImage").src = "/SmallGames/Images/paperComp.jpeg";
    }
    if(computer=="Scissor"){
        winner = "Tie";
        document.getElementById("computerImage").src = "/SmallGames/Images/scissorComp.jpg";
    }
    document.getElementById("winner").textContent = `${winner}!`
}

function compute() {
    let compChoose;
    let rand = Math.floor(Math.random() * 3) + 1;
    if(rand==1){compChoose="Rock";}
    if(rand==2){compChoose="Paper";}
    if(rand==3){compChoose="Scissor";}
    return compChoose;
}
//================================================================================================================