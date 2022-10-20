const mainMessage = document.getElementById('mainMessage')
const display = document.getElementById('display')
const clickBtn = document.getElementById('click')
const multiplyBtn = document.getElementById('multiply')
const multiplyBtn10 = document.getElementById('10')
const multiplyBtn30 = document.getElementById('30')
const priceBronze = document.getElementsByClassName('price')[0];
const priceSilver = document.getElementsByClassName('price')[1];
const priceGold = document.getElementsByClassName('price')[2];

let counter = 0;
let multiplier = 1;

let bronzePrice = 20;
let silverPrice = 30;
let goldPrice = 40;

clickBtn.addEventListener('click', () => {
    counter += 0 + multiplier;
    display.innerHTML = counter;
    console.log("Btn clicked");
})

function augmenterMultiplicateur(facteur) {
    multiplier+= facteur;
};

function AddActiveClass(btn) {
    btn.classList.add("active");
};


function BtnMultiply(BtnReference, price, priceText, textMulti, upMultiplicateur) {
    BtnReference.addEventListener('click', () => {
        
        if (counter < price) {
            mainMessage.innerHTML = "Vous n'avez pas assez de cookies !";
        } else {
            AddActiveClass(BtnReference);
            augmenterMultiplicateur(upMultiplicateur);
            counter -= price;
            price += parseInt(price * (60/100));
            display.innerHTML = counter;
            priceText.innerHTML = textMulti +' +' + multiplier;
            BtnReference.innerHTML = price +' units<br>';
            mainMessage.innerHTML = "Toujours plus, vous pouvez en amasser "+ upMultiplicateur + " de plus à chaque clique !"
        }
    })
}

BtnMultiply(multiplyBtn, bronzePrice, priceBronze,'Bronze', 1);
BtnMultiply(multiplyBtn10, silverPrice, priceSilver, 'Argent', 5);
BtnMultiply(multiplyBtn30, goldPrice, priceGold,'Or', 10);


const ToggleBtn = document.getElementById("btn_container");
const one = document.getElementById("one");
const purpleCircle = document.getElementById("purpleCircle");

ToggleBtn.addEventListener("click", () => {

    let interval = setInterval(() => {
        clickBtn.click();
    }, 1000)
    if (counter < 10) {
        mainMessage.innerHTML = "Vous n'avez pas assez de cookies !";
    }else{
        one.classList.toggle("active");
        purpleCircle.classList.toggle("active");
        if (interval = false) {
            setInterval(() => {
                clickBtn.click();
            }, 1000)
        } else {
            clearInterval(interval)
        }
    }
});


const burgerBtn = document.getElementById('burgerMenu')
const menuWrapper = document.getElementById('menuWrapper');

burgerBtn.addEventListener("click", () => {
    menuWrapper.classList.toggle("active");
});

