console.log("Working2");
var cardsPak = ["01a", "01b", "01c", "01d", "02a", "02b", "02c", "02d", "03a", "03b", "03c", "03d", "04a", "04b", "04c", "04d", "05a", "05b", "05c", "05d", "06a", "06b", "06c", "06d", "07a", "07b", "07c", "07d", "08a", "08b", "08c", "08d", "09a", "09b", "09c", "09d", "10a", "10b", "10c", "10d", "11a", "11b", "11c", "11d", "12a", "12b", "12c", "12d", "13a", "13b", "13c", "13d", "14a", "14b"];
var playerA = [];
var playerB = [];
var playerAready = [];
var playerBready = [];
var playerTemp = [];
var cardValA = 0
var cardValB = 0

console.log(cardsPak);

/*function start new game*/
function newGame() {
    console.log("NG")

    for (let i = cardsPak.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [cardsPak[i], cardsPak[j]] = [cardsPak[j], cardsPak[i]]; // swap elements
    }
    console.log(cardsPak);
    for (i = 0; i < 28; i++) {
        playerA[i] = cardsPak[i];
        playerB[i] = cardsPak[i + 26];

    }
    console.log(playerA);
    console.log(playerB);
    console.log(playerA[0]);
    console.log(playerB[0]);

    /* put cards on the table with qty*/
    var pictA = '<img src="../../pict/cards/' + playerA[0] + '.jpg" alt="" class="figure-img p-1">';
    var pictB = '<img src="../../pict/cards/' + playerB[0] + '.jpg" alt="" class="figure-img p-1">';
    console.log(pictA);
    console.log(pictB);
    document.getElementById("divr5c4").innerHTML = pictA;
    document.getElementById("divr2c4").innerHTML = pictB;

    var pictA1 = '<img src="../../pict/cards/back.jpg" alt="" class="figure-img p-1">';
    var pictB1 = '<img src="../../pict/cards/back.jpg" alt="" class="figure-img p-1">';
    console.log(pictA1);
    console.log(pictB1);
    document.getElementById("divr5c3").innerHTML = pictA1;
    document.getElementById("divr2c5").innerHTML = pictB1;

    console.log(playerA.length);
    console.log(playerB.length);
    document.getElementById("divr2c6").innerHTML = "Card left " + playerA.length;
    document.getElementById("divr5c2").innerHTML = "Card left " + playerB.length;

    cardsValA()
    cardsValB()

    /* 1 cond if war*/
    if (cardValA == cardValB) {
        console.log("war");
        document.getElementById("divr1c1").innerHTML = "WAR!!!";
        warGame();
    } else {
        console.log("Not war");
        /* 2 cond if A>B*/
        if (cardValA > cardValB) {
            console.log("A win");
            aWinRound();
            playrAwin();
        } else {
            console.log("B win");
            bWinRound();
            playrBwin();
        }
    }



}

/* func for information on top*/
function aWinRound() {
    console.log("A win");
    document.getElementById("divr1c1").innerHTML = "";
    setTimeout(function () {
        document.getElementById("divr1c1").innerHTML = "You win the round";
    }, 1000);
};


function bWinRound() {
    console.log("B win");
    document.getElementById("divr1c1").innerHTML = "";
    setTimeout(function () {
        document.getElementById("divr1c1").innerHTML = "Computer win the round";
    }, 1000);
};


function warGameRound() {
    console.log("war");
    document.getElementById("divr1c1").innerHTML = "";
    setTimeout(function () {
        document.getElementById("divr1c1").innerHTML = "WAR WAR WAR";
        warGame();
    }, 1000);
};
function aWinGame() {
    console.log("a win game");
    document.getElementById("divr1c1").innerHTML = "";
    setTimeout(function () {
        document.getElementById("divr1c1").innerHTML = "You win the GAME!!!";
    }, 1000);
};
function aWinGame() {
    console.log("b win game");
    document.getElementById("divr1c1").innerHTML = "";
    setTimeout(function () {
        document.getElementById("divr1c1").innerHTML = "Computer win the GAME!!!";
    }, 1000);
};



/*function calc the value of cards a+b*/
function cardsValA() {
    cardValA = playerA[0].substring(0, 2);
    cardValA = Number(cardValA);
    console.log(cardValA);
}

function cardsValB() {
    cardValB = playerB[0].substring(0, 2);
    cardValB = Number(cardValB);
    console.log(cardValB);
}


/*function if A wins round*/

function playrAwin() {
    playerAready.push(playerA[0]);
    playerAready.push(playerB[0]);
    playerA.shift();
    playerB.shift();
    /* sign A win*/
}

/*function if B wins round*/
function playrBwin() {
    playerBready.push(playerA[0]);
    playerBready.push(playerB[0]);
    playerA.shift();
    playerB.shift();
    /* sign A win*/
}

/* func checking the stock and adding new card*/
function addCardA() {
    if (playerA.length > 0) {
        document.getElementById("divr2c4").innerHTML = playerA[0];
        cardsValA();
    } else {
        if (playerAready.length > 0) {
            console.log("shuffel");
            shuffelA();
            document.getElementById("divr2c4").innerHTML = playerA[0];
            cardsValA();
        } else {
            document.getElementById("divr1c1").innerHTML = "Computer win the game";
        }
    };
}

function addCardB() {
    if (playerB.length > 0) {
        document.getElementById("divr5c4").innerHTML = playerB[0];
        cardsValB();
    } else {
        if (playerBready.length > 0) {
            console.log("shuffel");
            shuffelB();
            document.getElementById("divr5c4").innerHTML = playerB[0];
            cardsValB();
        } else {
            document.getElementById("divr1c1").innerHTML = "You win the game";
        }
    };
}

/* func shuffel cards*/
function shuffelA() {
    for (i = 0; i < playerAready.length; i++) {
        playerA[i] = playerAready[i];
        console.log(playerA);
    }
    
    console.log(playerAready);
    playerAready = [];
    console.log(playerAready);  
}
function shuffelB() {
    for (i = 0; i < playerBready.length; i++) {
        playerB[i] = playerBready[i];
        console.log(playerB);
    }
    
    console.log(playerBready);
    playerBready = [];
    console.log(playerBready);
}


function nextMove() {

    /* 3 cond if A has cards*/
    addCardA();
    addCardB();
    var pictA = '<img src="../../pict/cards/' + playerA[0] + '.jpg" alt="" class="figure-img p-1">';
    var pictB = '<img src="../../pict/cards/' + playerB[0] + '.jpg" alt="" class="figure-img p-1">';
    console.log(pictA);
    console.log(pictB);
    document.getElementById("divr5c4").innerHTML = pictA;
    document.getElementById("divr2c4").innerHTML = pictB;

    var pictA1 = '<img src="../../pict/cards/back.jpg" alt="" class="figure-img p-1">';
    var pictB1 = '<img src="../../pict/cards/back.jpg" alt="" class="figure-img p-1">';
    console.log(pictA1);
    console.log(pictB1);
    document.getElementById("divr5c5").innerHTML = pictA1;
    document.getElementById("divr2c3").innerHTML = pictB1;

    document.getElementById("divr5c6").innerHTML = "Card Add " + playerAready.length;
    document.getElementById("divr2c2").innerHTML = "Card Add " + playerBready.length;

    console.log(playerA);
    console.log(playerB);
    console.log(playerAready);
    console.log(playerBready);

    console.log(playerA.length);
    console.log(playerB.length);
    document.getElementById("divr2c6").innerHTML = "Card left " + playerA.length;
    document.getElementById("divr5c2").innerHTML = "Card left " + playerB.length;

    cardsValA()
    cardsValB()

    /* 1 cond if war*/
    if (cardValA == cardValB) {
        console.log("war");
        document.getElementById("divr1c1").innerHTML = "WAR!!!";
        warGame();
    } else {
        console.log("Not war");
        /* 2 cond if A>B*/
        if (cardValA > cardValB) {
            console.log("A win");
            aWinRound();
            playrAwin();
        } else {
            console.log("B win");
            bWinRound();
            playrBwin();
        }
    }


};

function warGame() {
    var pictA1 = '<img src="../../pict/cards/back.jpg" alt="" class="figure-img p-1">';
    var pictB1 = '<img src="../../pict/cards/back.jpg" alt="" class="figure-img p-1">';
    /*round1*/
    addCardA();
    addCardB();
    setTimeout(function () {
        document.getElementById("divr5c5").innerHTML = pictA1;
        document.getElementById("divr2c3").innerHTML = pictB1;
    }, 1000);
    playerTemp.push(playerA[0]);
    playerTemp.push(playerB[0]);
    playerA.shift();
    playerB.shift();

    /*round1*/
    addCardA();
    addCardB();
    setTimeout(function () {
        document.getElementById("divr5c5").innerHTML = pictA1;
        document.getElementById("divr2c3").innerHTML = pictB1;
    }, 1000);
    playerTemp.push(playerA[0]);
    playerTemp.push(playerB[0]);
    playerA.shift();
    playerB.shift();

    /*round1*/
    addCardA();
    addCardB();
    setTimeout(function () {
        document.getElementById("divr5c5").innerHTML = pictA1;
        document.getElementById("divr2c3").innerHTML = pictB1;
    }, 1000);
    
    cardsValA();
    cardsValB();

    playerTemp.push(playerA[0]);
    playerTemp.push(playerB[0]);
    playerA.shift();
    playerB.shift();

    if (cardsValA == cardsValA) {
        
        console.log("war")
    } else {
        if (cardsValA > cardsValA) {
            for (i = 0; i < 6; i++) {
                playerA.push(playerTemp[i]);
                playerTemp = [];
            }
            aWinRound();
        } else {
            for (i = 0; i < 6; i++) {
                playerB.push(playerTemp[i]);
                playerTemp = [];
            }
            bWinRound();
        };
    };
}

