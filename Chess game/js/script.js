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


const Case = document.querySelectorAll('.box');

// Inserting the Images
function insertImage() {
    Case.forEach(image => {
        
        if (image.innerText.length !== 0) {
            if (image.innerText == 'RPawn' || image.innerText == 'BPawn') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="img/${image.innerText}.svg" alt="">`
                image.style.cursor = 'pointer'
            } else {
                image.innerHTML = `${image.innerText} <img class='allimg' src="img/${image.innerText}.svg" alt="">`
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
        for (let i = 0; i < dif; i++) {
            blockTaken.innerHTML = `<img class='piece-taken allpawn' src="img/${piece}.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);">`
        }
    }
    vInventory;
    vInventoryVerif;

}
    
let piecesRed = Object.keys(inventory.red);
let piecesBlue = Object.keys(inventory.blue);
    
function insertPieceTaken() {
    VerificationPieces()
    if(verifInventory != inventory){
        
        for (let key in piecesRed) {
            verif('red', piecesRed[key], takenByBlue)
            console.log(piecesRed[key]);
        }
        
        for (let key in piecesBlue) {
            verif('blue', piecesBlue[key], takenByRed)
            console.log(piecesBlue[key]);
        }

        inventory = verifInventory;
        verifInventory = resetInventory;
    }   
}
function VerificationPieces(){
    Case.forEach(piece => {
            for (let key in piecesRed) {
                if (piece.innerHTML == piecesRed[key]) {
                    verifInventory.red[piecesRed[key]] += 1;
                }
            }
            for (let key in piecesBlue) {
                if (piece.innerHTML == piecesBlue[key]) {
                    verifInventory.blue[piecesBlue[key]] += 1;
                }
            }
        }
    )
    console.log(verifInventory);
}

VerificationPieces()

insertImage()

//Coloring

function coloring() {

    Case.forEach(color => {
        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.background = 'linear-gradient(110.73deg, #9BBCEB 0%, #6D8AB5 100.08%)'
        }
        if (a % 2 !== 0) {
            color.style.background = '#F2F2F2'
        }
    })
}
coloring()

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
                    coloring()
                    insertImage()
                    tog = tog + 1
                }
            })
            insertPieceTaken()
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
                        coloring()
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
            coloring()
        }
    })
})
