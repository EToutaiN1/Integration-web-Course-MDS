const mainMessage = document.getElementById('mainMessage')
const display = document.getElementById('display')
const clickBtn = document.getElementById('click')
const bronzeBtn = document.getElementById('bronzeBtn')
const silverBtn = document.getElementById('silverBtn')
const goldBtn = document.getElementById('goldBtn')
const priceBronze = document.getElementsByClassName('price')[0];
const priceSilver = document.getElementsByClassName('price')[1];
const priceGold = document.getElementsByClassName('price')[2];
const imgLevel = document.querySelectorAll('.imgLevel');
const progress_value = document.querySelector('.progress-value');

let global_counter = 1;

let objective_level = [20, 60, 200, 500, 10000, 35000, 100000, 250000, 600000, 1000000];

function reset_width_level(level){
    let sum = 0;
    for (let index = 0; index < level; index++) {
        sum += objective_level[index];
    }
    return sum;
}

function reset_level(){
    imgLevel.forEach((img)=> {
        img.style.transform = 'translateY(50%)';
        img.style.opacity = '0';
        img.style.display = 'none';
    })
    progress_value.style.background = 'none';
}
function update_level(){
    if ( (global_counter-reset_width_level(0)) <= objective_level[0]){
        progress_value.style.width = ((global_counter-reset_width_level(0))/objective_level[0]) * 100 + '%';
        imgLevel[0].style.display = 'block';
        progress_value.style.background = '#B6CFD1';
    }
    else if( (global_counter-reset_width_level(1)) <= objective_level[1]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(1))/objective_level[1]) * 100 + '%';
        imgLevel[1].style.display = 'block';
        imgLevel[1].style.transform = 'translateY(0)';
        imgLevel[1].style.opacity = '1';
        progress_value.style.background = '#B6CFD1';
    } 
    else if( (global_counter-reset_width_level(2)) <= objective_level[2]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(2))/objective_level[2]) * 100 + '%';
        imgLevel[2].style.display = 'block';
        imgLevel[2].style.transform = 'translateY(0)';
        imgLevel[2].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #6A3805 0%, #AD8A56 100%)';
    }
    else if( (global_counter-reset_width_level(3)) <= objective_level[3]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(3))/objective_level[3]) * 100 + '%';
        imgLevel[3].style.display = 'block';
        imgLevel[3].style.transform = 'translateY(0)';
        imgLevel[3].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #6A3805 0%, #AD8A56 100%)';
    } 
    else if( (global_counter-reset_width_level(4)) <= objective_level[4]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(4))/objective_level[4]) * 100 + '%';
        imgLevel[4].style.display = 'block';
        imgLevel[4].style.transform = 'translateY(0)';
        imgLevel[4].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #6A3805 0%, #AD8A56 100%)';
    }
    else if( (global_counter-reset_width_level(5)) <= objective_level[5]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(5))/objective_level[5]) * 100 + '%';
        imgLevel[5].style.display = 'block';
        imgLevel[5].style.transform = 'translateY(0)';
        imgLevel[5].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #D7D7D7 0%, #B4B4B4 100%)';
    } 
    else if( (global_counter-reset_width_level(6)) <= objective_level[6]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(6))/objective_level[6]) * 100 + '%';
        imgLevel[6].style.display = 'block';
        imgLevel[6].style.transform = 'translateY(0)';
        imgLevel[6].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #D7D7D7 0%, #B4B4B4 100%)';
    }
    else if( (global_counter-reset_width_level(7)) <= objective_level[7]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(7))/objective_level[7]) * 100 + '%';
        imgLevel[7].style.display = 'block';
        imgLevel[7].style.transform = 'translateY(0)';
        imgLevel[7].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #D7D7D7 0%, #B4B4B4 100%)';
    } 
    else if( (global_counter-reset_width_level(8)) <= objective_level[8]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(8))/objective_level[8]) * 100 + '%';
        imgLevel[8].style.display = 'block';
        imgLevel[8].style.transform = 'translateY(0)';
        imgLevel[8].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #CFB94E 0%, #E6C300 100%)';
    }
    else {
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(9))/objective_level[9]) * 100 + '%';
        imgLevel[9].style.display = 'block';
        imgLevel[9].style.transform = 'translateY(0)';
        imgLevel[9].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #CFB94E 0%, #E6C300 100%)';
    }
}

clickBtn.addEventListener('click', () => {
    counter += 0 + multiplier;
    global_counter += 0 + multiplier;
    display.innerHTML = counter;
    update_level()
    console.log("Btn clicked");
})
    

let counter = 0;
let multiplier = 1;

let bronzePrice = 20;
let silverPrice = 30;
let goldPrice = 40;

let price_boost = 5;

let menu;
let interval;
let intervalSpeed = 1000;

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


BtnMultiply(bronzeBtn, bronzePrice, priceBronze,'Bronze', 1);
BtnMultiply(silverBtn, silverPrice, priceSilver, 'Argent', 5);
BtnMultiply(goldBtn, goldPrice, priceGold,'Or', 10);


const ToggleBtn = document.getElementById("btn_container");
const one = document.getElementById("one");
const purpleCircle = document.getElementById("purpleCircle");
const btn_boost = document.getElementById("btnBoostAutoClick");

btn_boost.addEventListener('click', () => {
    if (price_boost > counter){
        mainMessage.innerHTML = "Vous n'avez pas assez de minerais pour activer l'auto-minage !";
    }else {
        intervalSpeed =parseInt(intervalSpeed * (90/100));
        price_boost *= (160/100);
        console.log(intervalSpeed);
        let interval_activated = (interval != undefined);
        if(interval_activated) {
            clearInterval(interval)
            interval = setInterval(clickButton, intervalSpeed);
            console.log('activate');
        }
    }
});

function clickButton(){
    clickBtn.click()
}

ToggleBtn.addEventListener("click", () => {
    let interval_activated = (interval != undefined);
    if (counter < 10) {
        mainMessage.innerHTML = "Vous n'avez pas assez de cookies !";
    }else{
        one.classList.toggle("active");
        purpleCircle.classList.toggle("active");
        if( !interval_activated) {
            interval = setInterval(clickButton, intervalSpeed);
            console.log('activate');
        } else {
            clearInterval(interval)
            console.log('desactivate');
            interval = undefined;
        }
    }
});

const burgerBtn = document.getElementById('burgerMenu')
const menuWrapper = document.querySelectorAll('.menuWrapper')[0];

burgerBtn.addEventListener("click", () => {
    let menuActivated = (menu != undefined)
    switch(!menuActivated){ 
    case true:
        menu = AddActiveClass(menuWrapper);
        menu = 1;
        console.log('active');
        console.log(menu);
    break;
    default: 
        menuWrapper.classList.remove("active");
        menu = undefined;
        console.log('not active');
    }
});



