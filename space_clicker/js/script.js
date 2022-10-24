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


let global_counter = Number(localStorage.getItem('global_counter'));

let objective_level = [20, 30, 40, 500, 10000, 35000, 100000, 250000, 600000, 1000000];


function reset_width_level(level){
    let sum = 0;
    for (let index = 0; index < level; index++) {
        sum += objective_level[index];
    }
    return sum;
}


function reset_level(){
    imgLevel.forEach((img)=> {
        img.style.opacity = '0';
        img.style.display = 'none';
        img.style.top = '50%';
    })
    progress_value.style.background = 'none';
}
function update_level(){
    if ( (global_counter-reset_width_level(0)) <= objective_level[0]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(0))/objective_level[0]) * 100 + '%';
        imgLevel[0].style.display = 'block';
        progress_value.style.background = '#B6CFD1';
        imgLevel[0].style.opacity = '1';
    }
    else if( (global_counter-reset_width_level(1)) <= objective_level[1]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(1))/objective_level[1]) * 100 + '%';
        imgLevel[1].style.display = 'block';
        imgLevel[1].style.opacity = '1';
        progress_value.style.background = '#B6CFD1';
    } 
    else if( (global_counter-reset_width_level(2)) <= objective_level[2]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(2))/objective_level[2]) * 100 + '%';
        imgLevel[2].style.display = 'block';
        imgLevel[2].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #6A3805 0%, #AD8A56 100%)';
    }
    else if( (global_counter-reset_width_level(3)) <= objective_level[3]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(3))/objective_level[3]) * 100 + '%';
        imgLevel[3].style.display = 'block';
        imgLevel[3].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #6A3805 0%, #AD8A56 100%)';
    } 
    else if( (global_counter-reset_width_level(4)) <= objective_level[4]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(4))/objective_level[4]) * 100 + '%';
        imgLevel[4].style.display = 'block';
        imgLevel[4].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #6A3805 0%, #AD8A56 100%)';
    }
    else if( (global_counter-reset_width_level(5)) <= objective_level[5]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(5))/objective_level[5]) * 100 + '%';
        imgLevel[5].style.display = 'block';
        imgLevel[5].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #D7D7D7 0%, #B4B4B4 100%)';
    } 
    else if( (global_counter-reset_width_level(6)) <= objective_level[6]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(6))/objective_level[6]) * 100 + '%';
        imgLevel[6].style.display = 'block';
        imgLevel[6].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #D7D7D7 0%, #B4B4B4 100%)';
    }
    else if( (global_counter-reset_width_level(7)) <= objective_level[7]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(7))/objective_level[7]) * 100 + '%';
        imgLevel[7].style.display = 'block';
        imgLevel[7].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #D7D7D7 0%, #B4B4B4 100%)';
    } 
    else if( (global_counter-reset_width_level(8)) <= objective_level[8]){
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(8))/objective_level[8]) * 100 + '%';
        imgLevel[8].style.display = 'block';
        imgLevel[8].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #CFB94E 0%, #E6C300 100%)';
    }
    else {
        reset_level()
        progress_value.style.width = ((global_counter-reset_width_level(9))/objective_level[9]) * 100 + '%';
        imgLevel[9].style.display = 'block';
        imgLevel[9].style.opacity = '1';
        progress_value.style.background = 'linear-gradient(103.85deg, #CFB94E 0%, #E6C300 100%)';
    }
}

function update_score(counterUpdate) {
    counterUpdate.style.display= 'block';
    setTimeout(() => {counterUpdate.style.animation = "counterUp 0.6s ease";
}, 600)
setTimeout(()=> {
    counterUpdate.style.display= 'none';
}, 600)
}

clickBtn.addEventListener('click', () => {
    counter += 0 + multiplier;
    global_counter += 0 + multiplier;

    counterBronze = Number(localStorage.getItem('counter_bronze'));
    counterSilver = Number(localStorage.getItem('counter_silver'));
    counterGold = Number(localStorage.getItem('counter_gold'));
    
    if (counterBronze !== 0){
        update_score(scoreUp[0])
        console.log(counterBronze);
        counter += counterBronze;
        global_counter += counterBronze;
    }
    if (counterSilver != 0){
        update_score(scoreUp[1])
        console.log(counterSilver);
        counter += 0 + counterSilver;
        global_counter += 0 + counterSilver;
    }
    if (counterGold != 0){
        update_score(scoreUp[2])
        console.log(counterGold);
        counter += 0 + counterGold;
        global_counter += 0 + counterGold;
    }

    display.innerHTML = counter;
    local_counter = localStorage.setItem('counter', counter);
    local_globalCounter = localStorage.setItem('global_counter', global_counter);
    update_level()
    console.log("Btn clicked");
})

const scoreUp = document.querySelectorAll('.scoreUpdate');

console.log(scoreUp);

let multiplier = 1;
let counter = Number(localStorage.getItem('counter'));

let local_counter = localStorage.setItem('counter', counter);
let local_globalCounter = localStorage.setItem('global_counter', global_counter);

let default_counter = 0;

let counterBronze = Number(localStorage.getItem('counter_bronze'));
let counterSilver = Number(localStorage.getItem('counter_silver'));
let counterGold = Number(localStorage.getItem('counter_gold'));


let local_counterBronze = localStorage.setItem('counter_bronze', counterBronze);
let local_counterSilver = localStorage.setItem('counter_silver', counterSilver);
let local_counterGold = localStorage.setItem('counter_gold', counterGold);

let multiplierBronze = 1;
let multiplierSilver = 5;
let multiplierGold = 10;

let default_bronzePrice = 10;
let default_silverPrice = 30;
let default_goldPrice = 40;

let bronzePrice = Number(localStorage.getItem('bronze_price'));
let silverPrice = Number(localStorage.getItem('silver_price'));
let goldPrice = Number(localStorage.getItem('gold_price'));


let local_bronzePrice = localStorage.setItem('bronze_price', bronzePrice);
let local_silverPrice = localStorage.setItem('silver_price', silverPrice);
let local_goldPrice = localStorage.setItem('gold_price', goldPrice);

let default_price_boost = 5;
let price_boost = Number(localStorage.getItem('price_boost'));
let local_price_boost = localStorage.setItem('price_boost', price_boost);

let menu;

let interval;
let default_intervalSpeed = 1000;
let intervalSpeed = Number(localStorage.getItem('intervalSpeed'));
let local_intervalSpeed = localStorage.setItem('intervalSpeed', intervalSpeed);

let priceArray = [bronzePrice, silverPrice, goldPrice];

let default_priceArray = [default_bronzePrice, default_silverPrice, default_goldPrice];

for (let i = 0; i < priceArray.length; i++) {
    if (priceArray[i] == 0){
        priceArray[i] = default_priceArray[i];
        console.log(priceArray);
    }
}

window.addEventListener('load', ()=> {
    imgLevel[0].style.opacity = '0';
    update_level()
    priceBronze.innerHTML =  'Bronze +' + counterBronze;
    priceSilver.innerHTML =  'Silver +' + counterSilver;
    priceGold.innerHTML = 'Gold +' + counterGold;
    
    bronzeBtn.innerHTML = priceArray[0] +' units<br>';
    silverBtn.innerHTML = priceArray[1] +' units<br>';
    goldBtn.innerHTML = priceArray[2] +' units<br>';
})
function augmenterMultiplicateur(counter, facteur) {
    counter += facteur;
    return counter;
};

function AddActiveClass(btn) {
    btn.classList.add("active");
};

function BtnMultiply(BtnReference, price, priceText, textMulti, localCounter, counterKey, counterUnits, upMultiplicateur, scoreUpdate) {
    BtnReference.addEventListener('click', () => {
        if (counter < price) {
            mainMessage.innerHTML = "You don't have enough minerals !";
        } else {
            first_time_pressed(BtnReference, scoreUpdate);
            counterUnits = augmenterMultiplicateur(counterUnits, upMultiplicateur);
            scoreUpdate.innerHTML = "+" + counterUnits;
            counter -= price;
            price += parseInt(price * (60/100));
            localCounter = localStorage.setItem(counterKey, counterUnits);
            console.log(counterUnits);
            // update_value(localCounter, counterKey, counterUnits);
            display.innerHTML = counter;
            priceText.innerHTML = textMulti +' +' + counterUnits;
            BtnReference.innerHTML = price +' units<br>';
            mainMessage.innerHTML = "Always more, you can collect "+ upMultiplicateur + " more with each click!"
        }
    })
}

let btnIsPressed;

function first_time_pressed(btnPressed, scoreUpdate) {
    btnIsPressed = (btnPressed.classList.contains('active'))
    console.log(btnIsPressed);
    if(!btnIsPressed) {
        AddActiveClass(btnPressed)
        scoreUpdate.style.display = 'block';
        btnIsPressed = true;
    }
}

BtnMultiply(bronzeBtn, priceArray[0], priceBronze,'Bronze',local_counterBronze, 'counter_bronze', counterBronze, multiplierBronze, scoreUp[0]);
BtnMultiply(silverBtn, priceArray[1], priceSilver, 'Silver',local_counterSilver, 'counter_silver', counterSilver, multiplierSilver, scoreUp[1]);
BtnMultiply(goldBtn, priceArray[2], priceGold,'Gold', local_counterGold, 'counter_gold', counterGold, multiplierGold, scoreUp[2]);


const ToggleBtn = document.getElementById("btn_container");
const one = document.getElementById("one");
const purpleCircle = document.getElementById("purpleCircle");
const btn_boost = document.getElementById("btnBoostAutoClick");
const boostPrice = document.getElementById("boostPrice");

if (price_boost == 0) {
    price_boost = default_price_boost;
    boostPrice.innerHTML = price_boost + " units";
    local_price_boost = localStorage.setItem('price_boost', price_boost);
} else {
    boostPrice.innerHTML = price_boost + " units";
}

btn_boost.addEventListener('click', () => {
    if (price_boost > counter){
        mainMessage.innerHTML = "You don't have enough minerals to activate self-mining!";
    }else {
        if (intervalSpeed == 0) {
            intervalSpeed = default_intervalSpeed;
            intervalSpeed = parseInt(intervalSpeed * (90/100));
            local_intervalSpeed = localStorage.setItem('intervalSpeed', intervalSpeed)
        } else {
            intervalSpeed = parseInt(intervalSpeed * (90/100));
            local_intervalSpeed = localStorage.setItem('intervalSpeed', intervalSpeed)
        }
        counter -= price_boost;
        display.innerHTML = counter;
        price_boost = parseInt(price_boost * (160/100));
        local_price_boost = localStorage.setItem('price_boost', price_boost);
        boostPrice.innerHTML = price_boost + " units";
        let interval_activated = (interval != undefined);
        if(interval_activated) {
            clearInterval(interval)
            interval = setInterval(clickButton, intervalSpeed);
        }
    }
});

function clickButton(){
    clickBtn.click()
}

ToggleBtn.addEventListener("click", () => {
    let interval_activated = (interval != undefined);
    if (counter < 10) {
        mainMessage.innerHTML = "You don't have enough minerals !";
    } else {
        one.classList.toggle("active");
        purpleCircle.classList.toggle("active");
        if (intervalSpeed == 0) {
            intervalSpeed = default_intervalSpeed;
        }
        if( !interval_activated) {
            interval = setInterval(clickButton, intervalSpeed);
            console.log('activate');
        } else {
            clearInterval(interval)
            console.log('desactivate');
            interval = undefined;
        }
        first_time_pressed(ToggleBtn, btn_boost)
    }
});

const burgerBtn = document.getElementById('check')
const sideBar = document.querySelector('.sideBar');

burgerBtn.addEventListener("click", () => {
    let menuActivated = (menu != undefined)
    switch(!menuActivated){ 
    case true:
        menu = AddActiveClass(sideBar);
        menu = 1;
        break;
    default: 
        sideBar.classList.remove("active");
        menu = undefined;
    }
});

display.innerHTML = counter;


const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
})