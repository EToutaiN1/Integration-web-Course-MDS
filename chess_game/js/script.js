// Loader Animation

let LoaderPage;
let hidePage;

function onLoad() {
    animation.play()
    LoaderPage = setTimeout(showPage, 4800);
    hidePage = setTimeout(hideLoader, 5500);
}

function showPage() {
    document.querySelector(".loader-animation").style.opacity = "0";
    document.querySelector(".blockBg-loader").style.animation = "opacityToZero 500ms 1 ease 500ms";
}

function hideLoader() {
    document.querySelector(".loader-animation").style.display = "none";
    document.querySelector(".loader-wrapper").style.display = "none";
}

let animation = bodymovin.loadAnimation({

    container: document.getElementById('loader-animation'),
    
    path: '../img/loader-chess-game.json',
    
    renderer: 'svg',
    
    loop: false,
    
    autoplay: false,
    
    name: "Loader Animation",
    
});

// Setup Mode Light/dark

let mode = localStorage.getItem("mode");

//Forçage démarrage en mode light
localStorage.setItem("mode","light");
mode = "light"


const Case = document.querySelectorAll('.box');

// Inserting the Images of each pieces
function insertImage() {
    Case.forEach(image => {
        
        if (image.innerText.length !== 0) {
            if (image.innerText == 'RPawn' || image.innerText == 'BPawn') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="../img/${image.innerText}.svg" alt="">`
                image.style.cursor = 'pointer'
            } else {
                image.innerHTML = `${image.innerText} <img class='allimg' src="../img/${image.innerText}.svg" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}

// Inventories of all pieces

let inventory = {
    blue:{
        BPawn: 8,
        BBrook: 2,
        BKnight: 2,
        BBishop: 2,
        BQueen: 1,
        BKing: 1
    },
    red:{
        RPawn: 8,
        RBrook: 2,
        RKnight: 2,
        RBishop: 2,
        RQueen: 1,
        RKing: 1
    }
}

let verifInventory = {
    blue:{
        BPawn: 0,
        BBrook: 0,
        BKnight: 0,
        BBishop: 0,
        BQueen: 0,
        BKing: 0
    },
    red:{
        RPawn: 0,
        RBrook: 0,
        RKnight: 0,
        RBishop: 0,
        RQueen: 0,
        RKing: 0
    }
}

let resetInventory = {
    blue:{
        BPawn: 0,
        BBrook: 0,
        BKnight: 0,
        BBishop: 0,
        BQueen: 0,
        BKing: 0
    },
    red:{
        RPawn: 0,
        RBrook: 0,
        RKnight: 0,
        RBishop: 0,
        RQueen: 0,
        RKing: 0
    }
}

// let counterTakenRed = 0;
// let counterTakenBlue = 0;

const Pieces = document.querySelectorAll('.allimg');
const takenByRed = document.getElementById('red-taken');
const takenByBlue = document.getElementById('blue-taken');

// function to verif which piece has been taken

function verif(color, piece, blockTaken) {

    let vInventory = inventory[`${color}`][`${piece}`];
    let vInventoryVerif = verifInventory[`${color}`][`${piece}`];

    if(vInventory - vInventoryVerif !== 0) {
        if(color == 'red'){
            blockTaken.innerHTML += `<img class='piece-taken allpawn' src="../img/${piece}.svg" alt="" style="transform: scale(0.5);">`
        } else{
            blockTaken.innerHTML += `<img class='piece-taken allpawn' src="../img/${piece}.svg" alt="" style="transform: scale(0.5);">`
        }
    }
    vInventory;
    vInventoryVerif;
}


let piecesRed = Object.keys(inventory.red);
let piecesBlue = Object.keys(inventory.blue);
    

// function to insert the piece leaving

function insertPieceTaken() {
    VerificationPieces()
    console.log(verifInventory);

    if(verifInventory != inventory){
        
        for (let key in piecesRed) {
            verif('red', piecesRed[key], takenByBlue)
            console.log(piecesRed[key]);
        }
        
        for (let key in piecesBlue) {
            verif('blue', piecesBlue[key], takenByRed)
            console.log(piecesBlue[key]);
        }
        
        updateInventory()
        fnResetInventory()
    }
}

// Function to update the inventory of all pieces

function updateInventory() {
        for (let key in piecesRed) {
            inventory.red[piecesRed[key]] = verifInventory.red[piecesRed[key]];
        }
        
        for (let key in piecesBlue) {
            inventory.blue[piecesBlue[key]] = verifInventory.blue[piecesBlue[key]];
        }
}

// Function to reset the inventory at the end of the verification

function fnResetInventory() {
        for (let key in piecesRed) {
            verifInventory.red[piecesRed[key]] = 0;
        }
        
        for (let key in piecesBlue) {
            verifInventory.blue[piecesBlue[key]] = 0;
        }
}

// Function to verify if a piece has been taken in adding it in inventory object

function VerificationPieces(){
    Case.forEach(piece => {
        if(piece.innerText.length !== 0){
            if(Array.from(piece.innerText)[0] == 'R'){
                for (let key in piecesRed) {
                    if (piece.innerText == piecesRed[key]) {
                        verifInventory.red[piecesRed[key]] += 1;
                    }
                }
            }
            if(Array.from(piece.innerText)[0] == 'B'){
                for (let key in piecesBlue) {
                    if (piece.innerText == piecesBlue[key]) {
                        verifInventory.blue[piecesBlue[key]] += 1;
                    }
                }
            }
        }
    })
    console.log(verifInventory);
} 

insertImage()

//Coloring

let greenGradient = 'linear-gradient(110.73deg, rgb(167, 238, 195) 0%, rgb(45, 176, 129) 100.08%)'

let pinkGradient = 'linear-gradient(110.73deg, rgb(220, 127, 194) 0%, rgb(241, 197, 232) 100.08%)'

// Function to color the cases of the chessboard

function coloring(bgColor) {

    Case.forEach(Cases => {
        getId = Cases.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            Cases.style.background = `${bgColor}`
        }
        if (a % 2 !== 0 && mode == 'light') {
            Cases.style.background = '#F2F2F2'
        } else if (a % 2 !== 0 && mode == 'dark') {
            Cases.style.background = '#1C1C1C'

        }
    })
}
coloring('linear-gradient(110.73deg, #9BBCEB 0%, #6D8AB5 100.08%)')

// function to switch the color to white or black of half of the cases of the chessboard 

function switchModeCases() {
    Case.forEach(Cases => {
        getId = Cases.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 !== 0 && mode === "light" ) {
            Cases.style.background = '#F2F2F2'
        } 

        if (a % 2 !== 0 && mode === "dark" ) {
            Cases.style.background = '#1C1C1C'
        } 
    })
}

//function to not remove the same team element

function reddish() {
    Case.forEach(case1 => {
        if (case1.style.background == `${pinkGradient}`) {
            Case.forEach(case2 => {
                if (case2.style.background == `${greenGradient}` && case2.innerText.length !== 0) {
                    greenText = case2.innerText
                    pinkText = case1.innerText

                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()

                    getId = case2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup
            
                    if (a % 2 == 0 && pinkColor == greenColor) {
                        case2.style.background = 'rgb(240, 201, 150)'
                    }
                    if (a % 2 !== 0 && pinkColor == greenColor) {
                        case2.style.background = 'rgb(100, 75, 43)'
                    }
                }
            })
        }
    })
}

let tog = 0;

function add_active_class(btn) {
    btn.classList.add("active");
};

const chessBoard = document.querySelector('.chess-board');

const firstPlayerTime = document.getElementById('firstPlayerTime')
const secondPlayerTime = document.getElementById('secondPlayerTime')

// initialize variable for both player's timer

let default_counterFirstTimer = 900;
let counterFirstTimer = Number(localStorage.getItem('counterFirstTimer'));
let local_counterFirstTimer = localStorage.setItem('counterFirstTimer', counterFirstTimer);

let default_counterSecondTimer = 900;
let counterSecondTimer = Number(localStorage.getItem('counterSecondTimer'));
let local_counterSecondTimer = localStorage.setItem('counterSecondTimer', counterSecondTimer);

let intervalFirstPlayer;
let intervalSecondPlayer;

counterFirstTimer = default_counterFirstTimer
counterSecondTimer = default_counterSecondTimer

// function to activate the first timer

function activateTimerFirst(){
    intervalFirstPlayer = undefined
    // Verify if an interval is already setup to avoid duplication
    let interval_activated = (intervalFirstPlayer != undefined);
    
    if( !interval_activated) {
        intervalFirstPlayer = setInterval(()=>{
            result = parseInt(counterFirstTimer / 60) + ':' + counterFirstTimer % 60;
            firstPlayerTime.innerHTML = result;
            local_counterFirstTimer = localStorage.setItem('counterFirstTimer', counterFirstTimer);
            counterFirstTimer -= 1
            console.log(" =Le résultat de"+ counterFirstTimer+ " est " + result);
            if(counterFirstTimer === 0){
                showPopUp('blue')
                console.log('popup blue');
                clearInterval(intervalFirstPlayer); //Display the final message and clear the timer
                intervalFirstPlayer = undefined;
            }
        },1000);
    }else{
        clearInterval(intervalFirstPlayer); //Display the final message and clear the timer
        intervalFirstPlayer = undefined;
    }
}

// function to activate the second timer

function activateTimerSecond(){
    intervalSecondPlayer = undefined;
    console.log(intervalSecondPlayer);
    let nd_interval_activated = (intervalSecondPlayer != undefined);
    console.log(nd_interval_activated);
    if( !nd_interval_activated) {
        intervalSecondPlayer = setInterval(()=>{
            result = parseInt(counterSecondTimer / 60) + ':' + counterSecondTimer % 60;
            secondPlayerTime.innerHTML = result;
            local_counterSecondTimer = localStorage.setItem('counterSecondTimer', counterSecondTimer);
            counterSecondTimer -= 1
            console.log(" =Le résultat de"+ counterSecondTimer+ " est " + result);
            if(counterSecondTimer === 0){
                showPopUp('red')
                console.log('popup red');
                clearInterval(intervalSecondPlayer); //Display the final message and clear the timer
                intervalSecondPlayer = undefined;
            }
        },1000);
    }else{
        clearInterval(intervalSecondPlayer); //Display the final message and clear the timer
        intervalSecondPlayer = undefined;
    }
}

Case.forEach(item => {
    item.addEventListener('click', function () {

        // To delete the opposite element

        if (item.style.background == `${greenGradient}` && item.innerText.length == 0) {
            tog += 1
        } else if (item.style.background == `${greenGradient}` && item.innerText.length !== 0) {
            Case.forEach(i => {
                if (i.style.background == `${pinkGradient}`) {
                    pinkId = i.id
                    pinkText = i.innerText
                    document.getElementById(pinkId).innerText = '';
                    console.log(document.getElementById(pinkId).innerText);
                    item.innerText = pinkText
                    insertPieceTaken()
                    coloring('linear-gradient(110.73deg, #9BBCEB 0%, #6D8AB5 100.08%)')
                    insertImage()
                    
                    tog+=1
                    
                    // condition to activate or desactivate the timer according to player's turn

                    if(chessBoard.classList.contains('blue')){
                        
                        if (tog % 2 == 0) {
                            console.log(tog);
                            clearInterval(intervalSecondPlayer);
                            activateTimerFirst()
                        }
                        if (tog % 2 !== 0) {
                            console.log(tog);
                            clearInterval(intervalFirstPlayer);
                            activateTimerSecond()
                        }
                    }
                    if(chessBoard.classList.contains('red')){
                        
                        if (tog % 2 !== 0) {
                            console.log(tog);
                            clearInterval(intervalSecondPlayer);
                            activateTimerFirst()
                        }
                        if (tog % 2 == 0) {
                            console.log(tog);
                            clearInterval(intervalFirstPlayer);
                            activateTimerSecond()
                        }
                    }
                }
            })
        }


        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup

        
        // Function to display the available paths for all pieces

        function whosTurn(toggle) {
            
            // PAWN

            if (item.innerText == `${toggle}Pawn`) {
                item.style.background = `${pinkGradient}`

                if (document.getElementById(`b${a}`).classList.contains('active')) {
                    
                    if (tog % 2 == 0 && aup == 700){
                        if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                            document.getElementById(`b${a - 100}`).style.background = `${greenGradient}`
                        }
                        
                        if (document.getElementById(`b${a - 200}`).innerText.length == 0) {
                                document.getElementById(`b${a - 200}`).style.background = `${greenGradient}`
                            }
                        if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                            document.getElementById(`b${a - 100 + 1}`).style.background = `${greenGradient}`
                        }
                        if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                            document.getElementById(`b${a - 100 - 1}`).style.background = `${greenGradient}`
                        }
                    }
                    if (tog % 2 !== 0 && aup == 200){
                        if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                            document.getElementById(`b${a + 100}`).style.background = `${greenGradient}`
                        }
                        if (document.getElementById(`b${a + 200}`).innerText.length == 0) {
                            document.getElementById(`b${a + 200}`).style.background = `${greenGradient}`
                        }
                        console.log('blue first move');
                    
                        if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                            document.getElementById(`b${a + 100 + 1}`).style.background = `${greenGradient}`
                        }
                        if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                            document.getElementById(`b${a + 100 - 1}`).style.background = `${greenGradient}`
                        }
                    }
                }else{
                    console.log('not first move');
                    if (tog % 2 == 0 && aup < 700) {
                        
                        if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                            document.getElementById(`b${a - 100}`).style.background = `${greenGradient}`
                        }
                        
                        if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                            document.getElementById(`b${a - 100 + 1}`).style.background = `${greenGradient}`
                        }
    
                        if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                            document.getElementById(`b${a - 100 - 1}`).style.background = `${greenGradient}`
                        }
                    }
    
                    if (tog % 2 !== 0 && aup > 200) {
                        
                        if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                            document.getElementById(`b${a + 100}`).style.background = `${greenGradient}`
                        }
                        if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                            document.getElementById(`b${a + 100 + 1}`).style.background = `${greenGradient}`
                        }
                        if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                            document.getElementById(`b${a + 100 - 1}`).style.background = `${greenGradient}`
                        }
                    }
                }
            }

            // KING

            if (item.innerText == `${toggle}King`) {
                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.background = `${greenGradient}`
                }
                if (aside > 1) {
                    document.getElementById(`b${a - 1}`).style.background = `${greenGradient}`
                }
                if (aup < 800) {
                    document.getElementById(`b${a + 100}`).style.background = `${greenGradient}`
                }
                if (aup > 100) {
                    document.getElementById(`b${a - 100}`).style.background = `${greenGradient}`
                }
                if (aup > 100 && aside < 8) {
                    document.getElementById(`b${a - 100 + 1}`).style.background = `${greenGradient}`
                }
                if (aup > 100 && aside > 1) {
                    document.getElementById(`b${a - 100 - 1}`).style.background = `${greenGradient}`
                }
                if (aup < 800 && aside < 8) {
                    document.getElementById(`b${a + 100 + 1}`).style.background = `${greenGradient}`
                }
                if (aup < 800 && aside > 1) {
                    document.getElementById(`b${a + 100 - 1}`).style.background = `${greenGradient}`
                }
                item.style.background = `${pinkGradient}`
            }

            // ROOK

            if (item.innerText == `${toggle}Brook`) {
                for (let i = 1; i < 9; i++) {
                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.background = `${greenGradient}`
                    }
                    else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.background = `${greenGradient}`
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.background = `${greenGradient}`
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.background = `${greenGradient}`
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.background = `${greenGradient}`
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.background = `${greenGradient}`
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.background = `${greenGradient}`
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.background = `${greenGradient}`
                        break
                    }
                }
                item.style.background = `${pinkGradient}`
            }

            // BISHOP

            if (item.innerText == `${toggle}Bishop`) {
                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.background = `${greenGradient}`
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.background = `${greenGradient}`
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.background = `${greenGradient}`
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.background = `${greenGradient}`
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.background = `${greenGradient}`
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.background = `${greenGradient}`
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.background = `${greenGradient}`
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.background = `${greenGradient}`
                        break
                    }
                }
                item.style.background = `${pinkGradient}`
            }

            // QUEEN

            if (item.innerText == `${toggle}Queen`) {
                for (let i = 1; i < 9; i++) {
                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.background = `${greenGradient}`
                    }
                    else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.background = `${greenGradient}`
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.background = `${greenGradient}`
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.background = `${greenGradient}`
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.background = `${greenGradient}`
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.background = `${greenGradient}`
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.background = `${greenGradient}`
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.background = `${greenGradient}`
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.background = `${greenGradient}`
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.background = `${greenGradient}`
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.background = `${greenGradient}`
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.background = `${greenGradient}`
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.background = `${greenGradient}`
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.background = `${greenGradient}`
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.background = `${greenGradient}`
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.background = `${greenGradient}`
                        break
                    }
                }
                item.style.background = `${pinkGradient}`
            }

            // KNIGHT

            if (item.innerText == `${toggle}Knight`) {
                if (aside < 7 && aup < 800) {
                    document.getElementById(`b${a + 100 + 2}`).style.background = `${greenGradient}`
                }
                if (aside < 7 && aup > 200) {
                    document.getElementById(`b${a - 100 + 2}`).style.background = `${greenGradient}`
                }
                if (aside < 8 && aup < 700) {
                    document.getElementById(`b${a + 200 + 1}`).style.background = `${greenGradient}`
                }
                if (aside > 1 && aup < 700) {
                    document.getElementById(`b${a + 200 - 1}`).style.background = `${greenGradient}`
                }
                if (aside > 2 && aup < 800) {
                    document.getElementById(`b${a - 2 + 100}`).style.background = `${greenGradient}`
                }
                if (aside > 2 && aup > 100) {
                    document.getElementById(`b${a - 2 - 100}`).style.background = `${greenGradient}`
                }
                if (aside < 8 && aup > 200) {
                    document.getElementById(`b${a - 200 + 1}`).style.background = `${greenGradient}`
                }
                if (aside > 1 && aup > 200) {
                    document.getElementById(`b${a - 200 - 1}`).style.background = `${greenGradient}`
                }
                item.style.background = `${pinkGradient}`
            }
        }
        
        // Toggling the turn according to which pieces we choose
        
        if(chessBoard.classList.contains('blue')){
            
            // console.log("is blue piece");
            if (tog % 2 == 0) {
                document.getElementById('tog').innerText = "Red's Turn"
                whosTurn('R')
            }
            if (tog % 2 !== 0) {
                document.getElementById('tog').innerText = "Blue's Turn"
                whosTurn('B')
            }
        }
        if(chessBoard.classList.contains('red')){
            
            // console.log("is red piece");
            if (tog % 2 !== 0) {
                document.getElementById('tog').innerText = "Red's Turn"
                whosTurn('R')
            }
            if (tog % 2 == 0) {
                document.getElementById('tog').innerText = "Blue's Turn"
                whosTurn('B')
            }
        }
        
        reddish()

        // winning()
        // function to activate when there is checkmate 

        numOfKings = 0

        Case.forEach(win => {
            if (win.innerText == 'RKing' || win.innerText == 'BKing') {
                numOfKings += 1
            }
        })

        if (numOfKings == 1) {
            setTimeout(() => {
                if (tog % 2 !== 0) {
                    showPopUp('red')
                    
                }
                else if (tog % 2 == 0) {
                    showPopUp('blue')
                }
            }, 100)
        }
    })
})

const popUpWrapper = document.querySelector('.popup-wrapper');
const popUpBlock = document.querySelector('.popup-block');
const popUpHeading = document.getElementById('popup-heading');

const checkmateBlueWrapper = document.getElementById('checkmate-blue')
const checkmateRedWrapper = document.getElementById('checkmate-red')

// Initialisation of the checkmate animation

let checkmateBlue = bodymovin.loadAnimation({

    container: document.getElementById('checkmate-blue'),
    
    path: '../img/animation-check-mate-blue.json',
    
    renderer: 'svg',
    
    loop: false,
    
    autoplay: false,
    
    name: "Checkmate blue Animation",
    
});

let checkmateRed = bodymovin.loadAnimation({
    
    container: document.getElementById('checkmate-red'),
    
    path: '../img/animation-check-mate-red.json',
    
    renderer: 'svg',
    
    loop: false,
    
    autoplay: false,
    
    name: "Checkmate red Animation",
});

// function to shop the checkmate's pop-up when a checkmate or a timer is done

function showPopUp(color){
    popUpWrapper.style.display += 'grid';
    popUpWrapper.style.opacity += '1';
    if (color === 'red') {
        console.log(color);
        checkmateBlueWrapper.style.display = 'none'
        checkmateRedWrapper.style.display = 'block'
        checkmateRed.play()
        popUpHeading.innerHTML = 'Congratulations,<br>the Red have won !';
        clearInterval(intervalFirstPlayer);
        clearInterval(intervalSecondPlayer);
    }
    if (color === 'blue') {
        console.log(color);
        checkmateBlueWrapper.style.display = 'block'
        checkmateRedWrapper.style.display = 'none'
        checkmateBlue.play()
        popUpHeading.innerHTML = 'Congratulations,<br>the Blue have won !';
        clearInterval(intervalFirstPlayer);
        clearInterval(intervalSecondPlayer);
    }
}

// Moving the element
Case.forEach(movingCase => {
    movingCase.addEventListener('click', function () {
        if (movingCase.style.background == `${pinkGradient}`) {
            pinkId = movingCase.id
            pinkText = movingCase.innerText

            Case.forEach(movingCase2 => {
                
                movingCase2.addEventListener('click', function () {
                    if (movingCase2.style.background == `${greenGradient}` && movingCase2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = ''
                        movingCase2.innerText = pinkText
                        coloring('linear-gradient(110.73deg, #9BBCEB 0%, #6D8AB5 100.08%)')
                        insertImage()

                        // condition to activate or desactivate the timer according to player's turn

                        if(chessBoard.classList.contains('blue')){
                        
                            if (tog % 2 == 0) {
                                console.log(tog);
                                clearInterval(intervalSecondPlayer);
                                activateTimerFirst()
                            }
                            if (tog % 2 !== 0) {
                                console.log(tog);
                                clearInterval(intervalFirstPlayer);
                                activateTimerSecond()
                            }
                        }
                        if(chessBoard.classList.contains('red')){
                            
                            if (tog % 2 !== 0) {
                                console.log(tog);
                                clearInterval(intervalSecondPlayer);
                                activateTimerFirst()
                            }
                            if (tog % 2 == 0) {
                                console.log(tog);
                                clearInterval(intervalFirstPlayer);
                                activateTimerSecond()
                            }
                        }
                    }
                })
            })
        }
    })
})

// Prvents from selecting multiple elements
z = 0
Case.forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.background !== `${greenGradient}`) {
            coloring('linear-gradient(110.73deg, #9BBCEB 0%, #6D8AB5 100.08%)')
        }
    })
})

const btnToggleColor = document.getElementById('toggle-chessboard-color')
const redToggleCase = document.querySelector('.toggle-color-case.red-bg')
const blueToggleCase = document.querySelector('.toggle-color-case.blue-bg')

// button which permit to change the theme color while a party

btnToggleColor.addEventListener('click',() =>{
    if (redToggleCase.classList.contains('active')) {
        redToggleCase.classList.remove('active')
        blueToggleCase.classList.add('active')
        coloring('linear-gradient(110.73deg, #9BBCEB 0%, #6D8AB5 100.08%)')
    } else{
        blueToggleCase.classList.remove('active')
        redToggleCase.classList.add('active')
        coloring('linear-gradient(110.73deg, #EEA7A7 0%, #B02D30 100.08%)')
    }
})


// Initialisation of the sun/moon animation

let animationSunMoon = bodymovin.loadAnimation({
    
    container: document.getElementById('sunAndMoon'),
    
    path: '../img/animation-sun-and-moon.json',
    
    renderer: 'svg',
    
    loop: false,
    
    autoplay: false,
    
    name: "sun and mooon Animation",
}); 


// trigger to activate a certain part if the animation according to the mode of the page

animationSunMoon.goToAndStop(30, true);

document.getElementById('sunAndMoon').addEventListener('click', () => {
    if(mode === 'light') {
        animationSunMoon.playSegments([32, 62], true);
    } else {
        animationSunMoon.playSegments([0, 28], true);
    }
});



switchMode();



const current_mode = document.getElementById("dark_mode");
current_mode.addEventListener("click", setLocalStorage);

function setLocalStorage() {
    if (mode === "dark"){
        localStorage.setItem("mode","light");
        mode = "light";
    } else if(mode === "light"){
        localStorage.setItem("mode","dark");
        mode = "dark";
    } else {
        localStorage.setItem("mode","light");
        mode = "light";
    }
    switchMode();
    switchModeCases();
}

// Function to switch between Light & dark mode

function switchMode() {
    //console.log("SWITCH");
    
    const body = Array.from(document.querySelectorAll('body'));
    const h1= Array.from(document.querySelectorAll("h1"));
    const h2= Array.from(document.querySelectorAll("h2"));
    const text = Array.from(document.querySelectorAll('p'));
    const li = Array.from(document.querySelectorAll('.li'));
    const logoWhite = Array.from(document.querySelectorAll('.logo-dark'))
    const logoBlack = Array.from(document.querySelectorAll('.logo-light'))
    const chessBoard = Array.from(document.querySelectorAll('.chess-board'))
    const shadowChessBoard = Array.from(document.querySelectorAll('.border-bg-chess-board'))
    const sidebar = Array.from(document.querySelectorAll('.sidebar'))
    const shadowSidebar = Array.from(document.querySelectorAll('.sidebar-shadow'))
    const blackIcon = Array.from(document.querySelectorAll('.black-icon'))
    const whiteIcon = Array.from(document.querySelectorAll('.white-icon'))
    const toggleColor = Array.from(document.querySelectorAll('.toggle-color-case'))

    switch (mode){
        case "light":
            
            switchModeCases()
            body ? body.forEach(el => el.style.cssText += "background: #F2F2F2") : null;
            h1 ? h1.forEach(el => el.style.cssText += "color: #1C1C1C") : null;
            h2 ? h2.forEach(el => el.style.cssText += "color: #1C1C1C") : null;
            text ? text.forEach(el => el.style.cssText += "color: #1C1C1C") : null;
            li ? li.forEach(el => el.style.cssText += "color: #1C1C1C") : null;
            chessBoard ? chessBoard.forEach(el => el.style.cssText += "border-color: #1C1C1C; background: #1C1C1C") : null;
            shadowChessBoard ? shadowChessBoard.forEach(el => el.style.cssText += "border-color: #1C1C1C") : null;
            sidebar ? sidebar.forEach(el => el.style.cssText += "border-color: #1C1C1C; background: #F2F2F2") : null;
            shadowSidebar ? shadowSidebar.forEach(el => el.style.cssText += "border-color: #1C1C1C") : null;
            logoWhite ? logoWhite.forEach(el => el.style.cssText = 'display: none') : null;
            logoBlack ? logoBlack.forEach(el => el.style.cssText = 'display: block') : null;
            whiteIcon ? whiteIcon.forEach(el => el.style.cssText = 'display: none') : null;
            blackIcon ? blackIcon.forEach(el => el.style.cssText = 'display: block') : null;
            toggleColor ? toggleColor.forEach(el => el.style.cssText += "border-color: #1C1C1C") : null;
            break;
            
            case "dark":
                switchModeCases()
                body ? body.forEach(el => el.style.cssText += "background: #1C1C1C") : null;
                h1 ? h1.forEach(el => el.style.cssText += "color: #F2F2F2") : null;
                h2 ? h2.forEach(el => el.style.cssText += "color: #F2F2F2") : null;
                text ? text.forEach(el => el.style.cssText += "color: #F2F2F2") : null;
                li ? li.forEach(el => el.style.cssText += "color: #F2F2F2") : null;
                chessBoard ? chessBoard.forEach(el => el.style.cssText += "border-color: #F2F2F2; background: #F2F2F2") : null;
                shadowChessBoard ? shadowChessBoard.forEach(el => el.style.cssText += "border-color: #F2F2F2") : null;
                sidebar ? sidebar.forEach(el => el.style.cssText += "border-color: #F2F2F2; background: #1C1C1C") : null;
                shadowSidebar ? shadowSidebar.forEach(el => el.style.cssText += "border-color: #F2F2F2") : null;
                logoWhite ? logoWhite.forEach(el => el.style.cssText = 'display: block') : null;
                logoBlack ? logoBlack.forEach(el => el.style.cssText = 'display: none') : null;
                whiteIcon ? whiteIcon.forEach(el => el.style.cssText = 'display: block') : null;
                blackIcon ? blackIcon.forEach(el => el.style.cssText = 'display: none') : null;
                toggleColor ? toggleColor.forEach(el => el.style.cssText += "border-color: #F2F2F2") : null;
                
                break;
                
        default:
            break;
    }
}