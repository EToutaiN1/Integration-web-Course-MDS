let LoaderPage;
let hidePage;

function onLoad() {
    LoaderPage = setTimeout(showPage, 5500);
    hidePage = setTimeout(hideLoader, 6500);
}

function showPage() {
    document.querySelector(".loader-animation").style.opacity = "0";
    document.querySelector(".blockBg-loader").style.animation = "opacityToZero 500ms 1 ease 500ms";
}

function hideLoader() {
    document.querySelector(".loader-animation").style.display = "none";
    document.querySelector(".loader-wrapper").style.display = "none";
}

const popUpWrapper = document.querySelector('.popup-wrapper');
const popUpBlock = document.querySelector('.popup-block');
const popUpHeading = document.getElementById('popup-heading');


function shopPopUp(){

}


const Case = document.querySelectorAll('.box');

// Inserting the Images
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


function verif(color, piece, blockTaken) {

    let vInventory = inventory[`${color}`][`${piece}`];
    let vInventoryVerif = verifInventory[`${color}`][`${piece}`];
    
    console.log(vInventory);
    console.log(vInventoryVerif);

    if(vInventory - vInventoryVerif !== 0) {
        let dif = vInventory - vInventoryVerif;
        console.log(dif);
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

function updateInventory() {
        for (let key in piecesRed) {
            inventory.red[piecesRed[key]] = verifInventory.red[piecesRed[key]];
        }
        
        for (let key in piecesBlue) {
            inventory.blue[piecesBlue[key]] = verifInventory.blue[piecesBlue[key]];
        }
}

function fnResetInventory() {
        for (let key in piecesRed) {
            verifInventory.red[piecesRed[key]] = 0;
        }
        
        for (let key in piecesBlue) {
            verifInventory.blue[piecesBlue[key]] = 0;
        }
}

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
        if (a % 2 !== 0) {
            Cases.style.background = '#F2F2F2'
        }
    })
}
coloring('linear-gradient(110.73deg, #9BBCEB 0%, #6D8AB5 100.08%)')

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
        if (case1.style.background == 'pink') {
            Case.forEach(case2 => {
                if (case2.style.background == 'green' && case2.innerText.length !== 0) {
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
                    // if (pinkColor == greenColor) {
                    //     case2.style.background = 'rgb(253, 60, 60)'
                    // }
                }
            })
        }
    })
}

tog = 1

Case.forEach(item => {
    item.addEventListener('click', function () {

        // To delete the opposite element

        if (item.style.background == 'green' && item.innerText.length == 0) {
            tog = tog + 1
        } else if (item.style.background == 'green' && item.innerText.length !== 0) {
            Case.forEach(i => {
                if (i.style.background == 'pink') {
                    pinkId = i.id
                    pinkText = i.innerText
                    document.getElementById(pinkId).innerText = '';
                    console.log(document.getElementById(pinkId).innerText);
                    item.innerText = pinkText
                    insertPieceTaken()
                    coloring('linear-gradient(110.73deg, #9BBCEB 0%, #6D8AB5 100.08%)')
                    insertImage()
                    tog = tog + 1
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

        console.log(a);

        // Function to display the available paths for all pieces

        function whosTurn(toggle) {

            // PAWN

            if (item.innerText == `${toggle}Pawn`) {
                item.style.background = 'pink'

                if (tog % 2 !== 0 && aup < 800) {

                    if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.background = 'green'
                    }

                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.background = 'green'
                    }

                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.background = 'green'

                    }
                }

                if (tog % 2 == 0 && aup > 100) {

                    if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.background = 'green'
                    }
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.background = 'green'
                    }
                    if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.background = 'green'
                    }
                }
            }

            // KING

            if (item.innerText == `${toggle}King`) {
                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.background = 'green'
                }
                if (aside > 1) {
                    document.getElementById(`b${a - 1}`).style.background = 'green'
                }
                if (aup < 800) {
                    document.getElementById(`b${a + 100}`).style.background = 'green'
                }
                if (aup > 100) {
                    document.getElementById(`b${a - 100}`).style.background = 'green'
                }
                if (aup > 100 && aside < 8) {
                    document.getElementById(`b${a - 100 + 1}`).style.background = 'green'
                }
                if (aup > 100 && aside > 1) {
                    document.getElementById(`b${a - 100 - 1}`).style.background = 'green'
                }
                if (aup < 800 && aside < 8) {
                    document.getElementById(`b${a + 100 + 1}`).style.background = 'green'
                }
                if (aup < 800 && aside > 1) {
                    document.getElementById(`b${a + 100 - 1}`).style.background = 'green'
                }
                item.style.background = 'pink'
            }

            // ROOK

            if (item.innerText == `${toggle}Brook`) {
                for (let i = 1; i < 9; i++) {
                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.background = 'green'
                    }
                    else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.background = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.background = 'green'
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.background = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.background = 'green'
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.background = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.background = 'green'
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.background = 'green'
                        break
                    }
                }
                item.style.background = 'pink'
            }

            // BISHOP

            if (item.innerText == `${toggle}Bishop`) {
                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.background = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.background = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.background = 'green'
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.background = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.background = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.background = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.background = 'green'
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.background = 'green'
                        break
                    }
                }
                item.style.background = 'pink'
            }

            // QUEEN

            if (item.innerText == `${toggle}Queen`) {
                for (let i = 1; i < 9; i++) {
                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.background = 'green'
                    }
                    else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.background = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.background = 'green'
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.background = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.background = 'green'
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.background = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.background = 'green'
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.background = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.background = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.background = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.background = 'green'
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.background = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.background = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.background = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.background = 'green'
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.background = 'green'
                        break
                    }
                }
                item.style.background = 'pink'
            }

            // KNIGHT

            if (item.innerText == `${toggle}Knight`) {
                if (aside < 7 && aup < 800) {
                    document.getElementById(`b${a + 100 + 2}`).style.background = 'green'
                }
                if (aside < 7 && aup > 200) {
                    document.getElementById(`b${a - 100 + 2}`).style.background = 'green'
                }
                if (aside < 8 && aup < 700) {
                    document.getElementById(`b${a + 200 + 1}`).style.background = 'green'
                }
                if (aside > 1 && aup < 700) {
                    document.getElementById(`b${a + 200 - 1}`).style.background = 'green'
                }
                if (aside > 2 && aup < 800) {
                    document.getElementById(`b${a - 2 + 100}`).style.background = 'green'
                }
                if (aside > 2 && aup > 100) {
                    document.getElementById(`b${a - 2 - 100}`).style.background = 'green'
                }
                if (aside < 8 && aup > 200) {
                    document.getElementById(`b${a - 200 + 1}`).style.background = 'green'
                }
                if (aside > 1 && aup > 200) {
                    document.getElementById(`b${a - 200 - 1}`).style.background = 'green'
                }
                item.style.background = 'pink'
            }
        }

        // Toggling the turn

        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "Red's Turn"
            whosTurn('R')
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = "Blue's Turn"
            whosTurn('B')
        }

        reddish()

        // winning()

        numOfKings = 0

        Case.forEach(win => {
            if (win.innerText == 'RKing' || win.innerText == 'BKing') {
                numOfKings += 1
            }
        })

        if (numOfKings == 1) {
            setTimeout(() => {
                // console.log(`${toggle}`) 
                if (tog % 2 == 0) {
                    alert('Red Wins !!')
                    location.reload()
                }
                else if (tog % 2 !== 0) {
                    alert('Blue Wins !!')
                    location.reload()
                }
            }, 100)
        }
    })
})

// Moving the element
Case.forEach(hathiTest => {
    hathiTest.addEventListener('click', function () {
        if (hathiTest.style.background == 'pink') {
            pinkId = hathiTest.id
            pinkText = hathiTest.innerText

            Case.forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.background == 'green' && hathiTest2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = ''
                        hathiTest2.innerText = pinkText
                        coloring('linear-gradient(110.73deg, #9BBCEB 0%, #6D8AB5 100.08%)')
                        insertImage()
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
        if (z % 2 == 0 && ee.style.background !== 'green') {
            coloring('linear-gradient(110.73deg, #9BBCEB 0%, #6D8AB5 100.08%)')
        }
    })
})

const btnToggleColor = document.getElementById('toggle-chessboard-color')
const redToggleCase = document.querySelector('.toggle-color-case.red-bg')
const blueToggleCase = document.querySelector('.toggle-color-case.blue-bg')

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

// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
// var now = new Date().getTime();

//   // Find the distance between now and the count down date
// var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);





let mode = localStorage.getItem("mode");

//Forçage démarrage en mode light
localStorage.setItem("mode","light");
mode = "light"

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
            logoWhite ? logoWhite.forEach(el => el.style.cssText += 'display: none') : null;
            logoBlack ? logoBlack.forEach(el => el.style.cssText += 'display: block') : null;
            whiteIcon ? whiteIcon.forEach(el => el.style.cssText += 'display: none') : null;
            blackIcon ? blackIcon.forEach(el => el.style.cssText += 'display: block') : null;
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
                logoWhite ? logoWhite.forEach(el => el.style.cssText += 'display: block') : null;
                logoBlack ? logoBlack.forEach(el => el.style.cssText += 'display: none') : null;
                whiteIcon ? whiteIcon.forEach(el => el.style.cssText += 'display: block') : null;
                blackIcon ? blackIcon.forEach(el => el.style.cssText += 'display: none') : null;

            break;

        default:
            break;
    }
}


let animation = bodymovin.loadAnimation({

    container: document.getElementById('loader-animation'),
    
    path: '../img/loader-chess-game.json',
    
    renderer: 'svg',
    
    loop: true,
    
    autoplay: true,
    
    name: "Loader Animation",
    
}); 

