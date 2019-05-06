console.log("Working");
/*Player A- Comp, Player B- you*/

/*array for full pack*/
var cardsPak = ["01a", "01b", "01c", "01d", "02a", "02b", "02c", "02d", "03a", "03b", "03c", "03d", "04a", "04b", "04c", "04d", "05a", "05b", "05c", "05d", "06a", "06b", "06c", "06d", "07a", "07b", "07c", "07d", "08a", "08b", "08c", "08d", "09a", "09b", "09c", "09d", "10a", "10b", "10c", "10d", "11a", "11b", "11c", "11d", "12a", "12b", "12c", "12d", "13a", "13b", "13c", "13d"];

/*array for round*/
var playerA = [];
var playerB = [];

/*array for value*/
var playerAval = [];
var playerBval = [];

/*array temp*/
var playerTemp = [];

/*value of card*/
var newCardValue = 0


console.log(cardsPak);

/*function start new game*/
function newGame() {
    console.log("NG")
    playerA = [];
    playerB = []
    playerAval = [];
    playerBval = [];
    pictPlaceB=3
    indexA=0
    indexB=0
    document.getElementById("eler4c1").innerHTML = "";
    document.getElementById("eler4c2").innerHTML = "";
    document.getElementById("eler4c3").innerHTML = "";
    document.getElementById("eler4c4").innerHTML = "";
    document.getElementById("eler4c5").innerHTML = "";
    document.getElementById("eler2c1").innerHTML = "";
    document.getElementById("eler2c2").innerHTML = "";
    document.getElementById("eler2c3").innerHTML = "";
    document.getElementById("eler2c4").innerHTML = "";
    document.getElementById("eler2c5").innerHTML = "";
    document.getElementById("eler4c6h1").innerHTML = "";
    document.getElementById("eler2c6h1").innerHTML = "";
    

    for (let i = cardsPak.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [cardsPak[i], cardsPak[j]] = [cardsPak[j], cardsPak[i]]; // swap elements
    }
    console.log(cardsPak);

    /*2 card for comp*/
    playerA.unshift(cardsPak[0]);
    cardsPak.shift();
    cardsValA();
    console.log(newCardValue);
    playerAval.unshift(newCardValue);
    var pictA1 = '<img src="../../pict/cards/back.jpg" alt="" class="figure-img p-1">';
    document.getElementById("eler2c1").innerHTML = pictA1;

    playerA.unshift(cardsPak[0]);
    cardsPak.shift();
    cardsValA();
    console.log(newCardValue);
    playerAval.unshift(newCardValue);
    var pictA2 = '<img src="../../pict/cards/' + playerA[0] + '.jpg" alt="" class="figure-img p-1">';
    document.getElementById("eler2c2").innerHTML = pictA2;

    /*2 card for comp*/
    playerB.unshift(cardsPak[0]);
    cardsPak.shift();
    cardsValB();
    console.log(newCardValue);
    playerBval.unshift(newCardValue);
    var pictB1 = '<img src="../../pict/cards/' + playerB[0] + '.jpg" alt="" class="figure-img p-1">';
    document.getElementById("eler4c1").innerHTML = pictB1;

    playerB.unshift(cardsPak[0]);
    cardsPak.shift();
    cardsValB();
    console.log(newCardValue);
    playerBval.unshift(newCardValue);
    var pictB2 = '<img src="../../pict/cards/' + playerB[0] + '.jpg" alt="" class="figure-img p-1">';
    document.getElementById("eler4c2").innerHTML = pictB2;

    console.log(cardsPak);
    console.log(playerA);
    console.log(playerAval);
    console.log(playerB);
    console.log(playerBval);

    BMove();
    pacValueB()
    playerBscore()
};

function cardsValA() {
    newCardValue = playerA[0].substring(0, 2);
    newCardValue = Number(newCardValue);
    if (newCardValue > 10) {
        newCardValue = 10
    } else {
        if(newCardValue==1){
            if(indexA==0){
                newCardValue=11
                indexA=1
            }else{
                newCardValue=newCardValue
            };
        }else{
            newCardValue=newCardValue
        };
    };
    console.log(newCardValue);
};

function cardsValB() {
    newCardValue = playerB[0].substring(0, 2);
    newCardValue = Number(newCardValue);
    if (newCardValue > 10) {
        newCardValue = 10
    } else {
        if(newCardValue==1){
            if(indexB==0){
                newCardValue=11
                indexB=1
            }else{
                newCardValue=newCardValue
            };
        }else{
            newCardValue=newCardValue
        };
    };
    console.log(newCardValue);
};

/*notifications*/

function BMove() {
    console.log("B Move");
    document.getElementById("eler1c2").innerHTML = "";
    setTimeout(function () {
        document.getElementById("eler1c2").innerHTML = "Player move";
    }, 1000);
};

function compWin() {
    console.log("Comp Win");
    document.getElementById("eler1c2").innerHTML = "";
    setTimeout(function () {
        document.getElementById("eler1c2").innerHTML = "Computer Wins Round";
    }, 1000);
};

function playerWin() {
    console.log("Comp Win");
    document.getElementById("eler1c2").innerHTML = "";
    setTimeout(function () {
        document.getElementById("eler1c2").innerHTML = "Player Wins Round";
    }, 1000);
};

function playerNext() {
    console.log("Next?");
    document.getElementById("eler1c2").innerHTML = "";
    setTimeout(function () {
        document.getElementById("eler1c2").innerHTML = "Next???";
    }, 1000);
};






function playerBscore() {
    console.log("B score");
    document.getElementById("eler4c6h1").innerHTML = "";
    document.getElementById("eler4c6h1").innerHTML = "Score " + sumB;
}
function playerascore() {
    console.log("A score");
    document.getElementById("eler2c6h1").innerHTML = "";
    document.getElementById("eler2c6h1").innerHTML = "Score " + sumA;
}


function stop() {
    var pictA1 = '<img src="../../pict/cards/' + playerA[1] + '.jpg" alt="" class="figure-img p-1">';
    document.getElementById("eler2c1").innerHTML = pictA1;

    pacValueA();
    pacValueB();

    

    if (sumA < sumB) {
        playerA.unshift(cardsPak[0]);
        cardsPak.shift();
        cardsValA();
        playerAval.unshift(newCardValue);
        var pictA1 = '<img src="../../pict/cards/' + playerA[0] + '.jpg" alt="" class="figure-img p-1">';
        document.getElementById("eler2c3").innerHTML = pictA1;
        pacValueA();
        pacValueB();
        if (sumA > 21) {
            playerWin();
            console.log("Player Win");
        } else {
            console.log("New round");
            if (sumA < sumB) {
                playerA.unshift(cardsPak[0]);
                cardsPak.shift();
                cardsValA();
                playerAval.unshift(newCardValue);
                var pictA1 = '<img src="../../pict/cards/' + playerA[0] + '.jpg" alt="" class="figure-img p-1">';
                document.getElementById("eler2c4").innerHTML = pictA1;
                pacValueA();
                pacValueB();
                if (sumA > 21) {
                    playerascore();
                    playerWin();
                    console.log("Player Win");
                } else {
                    playerascore();
                    console.log("New round");
                    if (sumA < sumB) {
                        playerA.unshift(cardsPak[0]);
                        cardsPak.shift();
                        cardsValA();
                        playerAval.unshift(newCardValue);
                        var pictA1 = '<img src="../../pict/cards/' + playerA[0] + '.jpg" alt="" class="figure-img p-1">';
                        document.getElementById("eler2c5").innerHTML = pictA1;
                        pacValueA();
                        pacValueB();
                        if (sumA > 21) {
                            playerascore();
                            playerWin();
                            console.log("Player Win");
                        } else {
                            playerascore();
                            compWin();
                            console.log("Comp win");
                        };
                    } else {
                        playerascore();
                        compWin();
                        console.log("Comp win");
                    };
                };
            } else {
                playerascore();
                compWin();
                console.log("Comp win");
            };
        }
    } else {
        playerascore();
        console.log("Comp Win");
    };
}

function nextMove() {
    console.log("pictPlaceB "+pictPlaceB);
    playerB.unshift(cardsPak[0]);
    cardsPak.shift();
    cardsValB();
    playerBval.unshift(newCardValue);
    var pictB1 = '<img src="../../pict/cards/' + playerB[0] + '.jpg" alt="" class="figure-img p-1">';
    if(pictPlaceB==3){
        document.getElementById("eler4c3").innerHTML = pictB1;
    }else{
        if(pictPlaceB==4){
            document.getElementById("eler4c4").innerHTML = pictB1;
        }else{
            document.getElementById("eler4c5").innerHTML = pictB1;
        };
    };
    pacValueA();
    pacValueB();
    pictPlaceB=pictPlaceB+1;
    if(sumB>21){
        playerBscore();
        compWin();
        console.log("Comp Win");
    }else{
        if(sumB>sumA){
            playerBscore();
            playerNext();
            console.log("Player Win");
        }else{
            playerBscore();
            console.log("Next?");
        };
    };

}

function pacValueA() {
    sumA = 0;
    for (i = 0; i < playerAval.length; i++) {
        sumA += Number(playerAval[i])
    };
    console.log(sumA);
};

function pacValueB() {
    sumB = 0;
    for (i = 0; i < playerBval.length; i++) {
        sumB += Number(playerBval[i])
    };
    console.log(sumB);
};
























