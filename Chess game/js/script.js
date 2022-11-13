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

const Pieces = document.querySelectorAll('.allimg');
const takenByRed = document.getElementById('red-taken');
const takenByBlue = document.getElementById('blue-taken');

function verif(color, piece) {
    if(inventory.color.piece - verifInventory.color.piece !== 0) {
        let dif = inventory.color.piece - verifInventory.color.piece;
        for (let i = 0; i < dif; i++) {
            takenByBlue.innerHTML = `<img class='piece-taken allpawn' src="img/RPawn.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);">`
            console.log("a Red pawn taken");
        }
    }
}

function insertPieceTaken() {
    VerificationPieces()
    console.log(verifInventory != inventory);
    if(verifInventory != inventory){
        if(inventory.red.RPawn - verifInventory.red.RPawn !== 0) {
            let dif = inventory.red.RPawn - verifInventory.red.RPawn;
            for (let i = 0; i < dif; i++) {
                takenByBlue.innerHTML = `<img class='piece-taken allpawn' src="img/RPawn.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);">`
                console.log("a Red pawn taken");
            }
        } else if (inventory.blue.BPawn - verifInventory.blue.BPawn !== 0) {
            let dif = inventory.blue.BPawn - verifInventory.blue.BPawn;
            for (let i = 0; i < dif; i++) {
                takenByRed.innerHTML = `<img class='piece-taken allpawn' src="img/BPawn.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);>`
                console.log("a Blue pawn taken");
            }
        }else if (inventory.red.RBrook - verifInventory.red.RBrook !== 0) {
            let dif = inventory.red.RBrook - verifInventory.red.RBrook;
            for (let i = 0; i < dif; i++) {
                takenByRed.innerHTML = `<img class='piece-taken allpawn' src="img/RBrook.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);>`
                console.log("a Red pawn taken");
            }
        }else if (inventory.blue.BBrook - verifInventory.blue.BBrook !== 0) {
            let dif = inventory.blue.BBrook - verifInventory.blue.BBrook;
            for (let i = 0; i < dif; i++) {
                takenByRed.innerHTML = `<img class='piece-taken allpawn' src="img/BBrook.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);>`
                console.log("a Blue pawn taken");
            }
        }else if (inventory.red.RKnight - verifInventory.red.RKnight !== 0) {
            let dif = inventory.red.RKnight - verifInventory.red.RKnight;
            for (let i = 0; i < dif; i++) {
                takenByRed.innerHTML = `<img class='piece-taken allpawn' src="img/RKnight.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);>`
                console.log("a Red pawn taken");
            }
        }else if (inventory.blue.BKnight - verifInventory.blue.BKnight !== 0) {
            let dif = inventory.blue.BKnight - verifInventory.blue.BKnight;
            for (let i = 0; i < dif; i++) {
                takenByRed.innerHTML = `<img class='piece-taken allpawn' src="img/BKnight.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);>`
                console.log("a Blue pawn taken");
            }
        }else if (inventory.red.RBishop - verifInventory.red.RBishop !== 0) {
            let dif = inventory.red.RBishop - verifInventory.red.RBishop;
            for (let i = 0; i < dif; i++) {
                takenByRed.innerHTML = `<img class='piece-taken allpawn' src="img/RBishop.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);>`
                console.log("a Red pawn taken");
            }
        }else if (inventory.blue.BBishop - verifInventory.blue.BBishop !== 0) {
            let dif = inventory.blue.BBishop - verifInventory.blue.BBishop;
            for (let i = 0; i < dif; i++) {
                takenByRed.innerHTML = `<img class='piece-taken allpawn' src="img/BBishop.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);>`
                console.log("a Blue pawn taken");
            }
        }else if (inventory.red.RQueen - verifInventory.red.RQueen !== 0) {
            let dif = inventory.red.RQueen - verifInventory.red.RQueen;
            for (let i = 0; i < dif; i++) {
                takenByRed.innerHTML = `<img class='piece-taken allpawn' src="img/RQueen.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);>`
                console.log("a Red pawn taken");
            }
        }else if (inventory.blue.BQueen - verifInventory.blue.BQueen !== 0) {
            let dif = inventory.blue.BQueen - verifInventory.blue.BQueen;
            for (let i = 0; i < dif; i++) {
                takenByRed.innerHTML = `<img class='piece-taken allpawn' src="img/BQueen.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);>`
                console.log("a Blue pawn taken");
            }
        }else if (inventory.red.RKing - verifInventory.red.RKing !== 0) {
            let dif = inventory.red.RKing - verifInventory.red.RKing;
            for (let i = 0; i < dif; i++) {
                takenByRed.innerHTML = `<img class='piece-taken allpawn' src="img/RKing.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);>`
                console.log("a Red pawn taken");
            }
        }else if (inventory.blue.BKing - verifInventory.blue.BKing !== 0) {
            let dif = inventory.blue.BKing - verifInventory.blue.BKing;
            for (let i = 0; i < dif; i++) {
                takenByRed.innerHTML = `<img class='piece-taken allpawn' src="img/BKing.svg" alt="" style="transform: scale(0.5) translateX(${i-1}rem);>`
                console.log("a Blue pawn taken");
            }
        }
        console.log(verifInventory);
    }

    inventory = verifInventory;
    verifInventory = resetInventory;
    Pieces.forEach(piece => {
        if (piece.innerText.length !== 0) {
            if (piece.innerText == 'RPawn') {
                // pieceImg = piece.innerText
                // arr = Array.from(pieceImg)
                // console.log(arr);
            }else if(piece.innerText == 'BPawn') {
                takenByBlue.innerHTML = `<img class='piece-taken allpawn' src="img/${piece.innerText}.svg" alt="">`
            } else {
                takenByRed.innerHTML = `<img class='piece-taken' src="img/${piece.innerText}.svg" alt="">`
                takenByBlue.innerHTML = `<img class='piece-taken' src="img/${piece.innerText}.svg" alt="">`
            }
        }
    })
}

let inventory = {
    blue:{
        BPawn: 10,
        BBrook: 2,
        BKnight: 2,
        BBishop: 2,
        BQueen: 1,
        BKing: 1
    },
    red:{
        RPawn: 10,
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

function VerificationPieces(){
    Case.forEach(piece => {
        
            if (piece.innerHTML == 'BPawn'){
                verifInventory.blue.BPawn += 1;
            } 
            
            else if (piece.innerHTML == 'BBrook') {
                verifInventory.blue.BBrook += 1;
            }

            else if (piece.innerHTML == 'BKnight') {
                verifInventory.blue.BKnight += 1;
            }

            else if (piece.innerHTML == 'BBishop') {
                verifInventory.blue.BBishop += 1;
            }

            else if (piece.innerHTML == 'BQueen') {
                verifInventory.blue.BQueen += 1;
            }

            else if (piece.innerHTML == 'BKing') {
                verifInventory.blue.BKing += 1;
            }

            else if (piece.innerHTML == 'RPawn') {
                verifInventory.red.RPawn += 1;
            }

            else if (piece.innerHTML == 'RBrook') {
                verifInventory.red.RBrook += 1;
            }

            else if (piece.innerHTML == 'RKnight') {
                verifInventory.red.RKnight += 1;
            }

            else if (piece.innerHTML == 'RBishop') {
                verifInventory.red.RBishop += 1;
            }

            else if (piece.innerHTML == 'RQueen') {
                verifInventory.red.RQueen += 1;
            }

            else if (piece.innerHTML == 'RKing') {
                verifInventory.red.RKing += 1;
            }
    
            else{
                console.log('not in inventory !');
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
                    insertPieceTaken()
                    coloring()
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
