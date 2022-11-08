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
const scoreUp = document.querySelectorAll('.scoreUpdate');

const ToggleBtn = document.getElementById("btn_container");
const one = document.getElementById("one");
const purpleCircle = document.getElementById("purpleCircle");

const btn_boost = document.getElementById("btnBoostAutoClick");
const boostPrice = document.getElementById("boostPrice");

const burgerBtn = document.getElementById('check')
const sideBar = document.querySelector('.sideBar');

const resetBtn = document.getElementById('resetBtn');

const musicBg = document.getElementById('music-bg');
const waveStatic= document.getElementById('audio-waved-static');
const waveAnimated = document.getElementById('audio-waved-animated');
const musicBtn = document.querySelector(".music")

// Loader animation

let LoaderPage;
let hidePage;

function onLoad() {
    LoaderPage = setTimeout(showPage, 2800);
    hidePage = setTimeout(hideLoader, 4000);
}

function showPage() {
    document.querySelector(".loader-animation").style.opacity = "0";
    document.querySelector(".blockBg-loader").style.animation = "opacityToZero 1500ms 1 ease 700ms";
}

function hideLoader() {
    document.querySelector(".loader-animation").style.display = "none";
    document.querySelector(".loader-wrapper").style.display = "none";
}

// Mouse Animation

const circle = document.querySelector('.circleCursor');
const link = document.querySelectorAll('button');
window.addEventListener('mousemove', mouseMoveHandler);
window.addEventListener('mousedown', mouseDownHandler);
window.addEventListener('mouseup', mouseUpHandler);

link.forEach((lik) => {
    lik.addEventListener('mouseenter', linkEnterHandler);
})
link.forEach((lik) => {
    lik.addEventListener('mouseleave', linkLeaveHandler);
})

function mouseMoveHandler(e) {
    circle.style.top = e.clientY - circle.offsetHeight / 2 + "px";
    circle.style.left = e.clientX - circle.offsetWidth / 2 + "px";
    circle.style.opacity = 1;
}

function mouseUpHandler(e) {
    circle.style.transform = "scale(1)";

    if (e.target.classList.contains('link')) {
        circle.style.transform = 'scale(1.4))';
    }
}

function mouseDownHandler() {
    circle.style.transform = "scale(1.2)";
}

function linkEnterHandler() {
    circle.style.transform = "scale(1.2)";
}

function linkLeaveHandler() {
    circle.style.transform = "scale(1)";
}

musicBtn.addEventListener('click', ()=> {
        musicBg.classList.toggle('active')
        if(musicBg.classList.contains('active')) {
            waveStatic.style.display = 'none';
            waveAnimated.style.display = 'block';
            console.log('play');
            playAudio(musicBg);
        } else {
            console.log('pause');
            waveStatic.style.display = 'block';
            waveAnimated.style.display = 'none';
            pauseAudio(musicBg);
        }
})

function playAudio(sound) {
    sound.play();
}

function pauseAudio(sound) {
    sound.pause();
}


let btnIsPressed;
let menu;
let interval;

// the value which are added for by default and for each minerals

let addOne = 1;
let addOneBronze = 1;
let addOneSilver = 5;
let addOneGold = 10;

let default_counter = 0;

// All the "local_" variables are to stock the values in the localStorage of the users

// counter which is displayed on screen

let counter = Number(localStorage.getItem('counter'));
let local_counter = localStorage.setItem('counter', counter);

// counter which count all the click since the launch of a game
// it permits to change the levels as the game progressed

let global_counter = Number(localStorage.getItem('global_counter'));
let local_globalCounter = localStorage.setItem('global_counter', global_counter);

// counter which count how many mineral have been added to the click

let counterBronze = Number(localStorage.getItem('counter_bronze'));
let counterSilver = Number(localStorage.getItem('counter_silver'));
let counterGold = Number(localStorage.getItem('counter_gold'));

let local_counterBronze = localStorage.setItem('counter_bronze', counterBronze);
let local_counterSilver = localStorage.setItem('counter_silver', counterSilver);
let local_counterGold = localStorage.setItem('counter_gold', counterGold);

// Default prices of each minerals

let default_bronzePrice = 80;
let default_silverPrice = 500;
let default_goldPrice = 2000;

//price of each minerals

let bronzePrice = Number(localStorage.getItem('bronze_price'));
let silverPrice = Number(localStorage.getItem('silver_price'));
let goldPrice = Number(localStorage.getItem('gold_price'));

let local_bronzePrice = localStorage.setItem('bronze_price', bronzePrice);
let local_silverPrice = localStorage.setItem('silver_price', silverPrice);
let local_goldPrice = localStorage.setItem('gold_price', goldPrice);

// default price of the boost of the auto-clicker

let default_price_boost = 1000;

// price of the boost of the auto-clicker

let price_boost = Number(localStorage.getItem('price_boost'));
let local_price_boost = localStorage.setItem('price_boost', price_boost);

// default value of the interval speed of the auto-clicker  

let default_intervalSpeed = 1000;

// value of the interval speed of the auto-clicker

let intervalSpeed = Number(localStorage.getItem('intervalSpeed'));
let local_intervalSpeed = localStorage.setItem('intervalSpeed', intervalSpeed);

// array of the default_price and price of the minerals

let default_priceArray = [default_bronzePrice, default_silverPrice, default_goldPrice];
let priceArray = [bronzePrice, silverPrice, goldPrice];

// The value of the differents levels

let objective_level = [200, 800, 2500, 6000, 15000, 35000, 100000, 250000, 600000, 1000000];

// Display the counter

display.innerHTML = counter;

//  for Loop to reset the price on the first load

for (let i = 0; i < priceArray.length; i++) {
    if (priceArray[i] == 0){
        priceArray[i] = default_priceArray[i];
    }
}

// if condition to reset the price of the boost of the auto-clicker 

if (price_boost == 0) {
    price_boost = default_price_boost;
    boostPrice.innerHTML = price_boost + " units";
    local_price_boost = localStorage.setItem('price_boost', price_boost);
} else {
    boostPrice.innerHTML = price_boost + " units";
}


// Trigger on click for the main Button

clickBtn.addEventListener('click', () => {
    counter += 0 + addOne;
    global_counter += 0 + addOne;
    
    counterBronze = Number(localStorage.getItem('counter_bronze'));
    counterSilver = Number(localStorage.getItem('counter_silver'));
    counterGold = Number(localStorage.getItem('counter_gold'));
    
    if (counterBronze !== 0){
        update_score(scoreUp[0])
        counter += counterBronze;
        global_counter += counterBronze;
    }
    if (counterSilver != 0){
        update_score(scoreUp[1])
        counter += 0 + counterSilver;
        global_counter += 0 + counterSilver;
    }
    if (counterGold != 0){
        update_score(scoreUp[2])
        counter += 0 + counterGold;
        global_counter += 0 + counterGold;
    }

    display.innerHTML = counter;
    local_counter = localStorage.setItem('counter', counter);
    local_globalCounter = localStorage.setItem('global_counter', global_counter);
    update_level()
    console.log("Btn clicked");
    setTimeout(() => {circle.style.animation = "rotatePickaxe 0.3s 1 ease 0";
    }, 600)
});

// Trigger to update all the information on the load of the page

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

// Trigger Boost auto-click

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
            interval = setInterval(click_button, intervalSpeed);
        }
    }
});

// Trigger Auto-click

ToggleBtn.addEventListener("click", () => {
    let interval_activated = (interval != undefined);
    if (counter < 100) {
        mainMessage.innerHTML = "You don't have enough minerals !";
    } else {
        one.classList.toggle("active");
        purpleCircle.classList.toggle("active");

        // reset the interval speed to its default value on the first click
        if (intervalSpeed == 0) {
            intervalSpeed = default_intervalSpeed;
            counter -= 100;
        }

        // Verify if an interval is already setup to avoid duplication
        if( !interval_activated) {
            interval = setInterval(click_button, intervalSpeed);
            console.log('activate');
        } else {
            clearInterval(interval)
            console.log('desactivate');
            interval = undefined;
        }
        first_time_pressed(ToggleBtn, btn_boost)
    }
});

// Trigger Side Bar Animation 

burgerBtn.addEventListener("click", () => {
    let menuActivated = (menu != undefined)
    switch(!menuActivated){ 
        case true:
            menu = add_active_class(sideBar);
            menu = 1;
            break;
            default: 
            sideBar.classList.remove("active");
            menu = undefined;
        }
});

    
// Reset Btn

resetBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
})

// function to reset the width of the progress bar & the global progression to only see the progression of the current level

function reset_width_level(level){
    let sum = 0;
    for (let index = 0; index < level; index++) {
        sum += objective_level[index];
    }
    return sum;
}

// function to reset the style for each level

function reset_level(){
    imgLevel.forEach((img)=> {
        img.style.opacity = '0';
        img.style.display = 'none';
        img.style.top = '50%';
    })
    progress_value.style.background = 'none';
}

// function to update the style of each level at each stage

function style_current_level(valueLevel, bgProgressBar, sourceImg) {
    reset_level()

    // Faire augmenter la progress bar au fur et à mesure de chaque niveau tout en enlevant la somme des clicks des niveaux précédents
    progress_value.style.width = ((global_counter-reset_width_level(valueLevel))/objective_level[valueLevel]) * 100 + '%';

    imgLevel[valueLevel].style.display = 'block';
    imgLevel[valueLevel].style.opacity = '1';
    progress_value.style.background = bgProgressBar;
    circle.src = sourceImg;

}


// function to change the style at each step of the game

function update_level(){
    if ( (global_counter-reset_width_level(0)) <= objective_level[0]){
        style_current_level(0, '#B6CFD1', "img/original_pickaxe.svg");
    }
    else if( (global_counter-reset_width_level(1)) <= objective_level[1]){
        style_current_level(1, '#B6CFD1', "img/original_pickaxe.svg");
    } 
    else if( (global_counter-reset_width_level(2)) <= objective_level[2]){
        style_current_level(2, 'linear-gradient(103.85deg, #6A3805 0%, #AD8A56 100%)', "img/bronze_pickaxe.svg");
    }
    else if( (global_counter-reset_width_level(3)) <= objective_level[3]){
        style_current_level(3, 'linear-gradient(103.85deg, #6A3805 0%, #AD8A56 100%)', "img/bronze_pickaxe.svg");
    } 
    else if( (global_counter-reset_width_level(4)) <= objective_level[4]){
        style_current_level(4, 'linear-gradient(103.85deg, #6A3805 0%, #AD8A56 100%)', "img/bronze_pickaxe.svg");
    }
    else if( (global_counter-reset_width_level(5)) <= objective_level[5]){
        style_current_level(5, 'linear-gradient(103.85deg, #D7D7D7 0%, #B4B4B4 100%)', "img/silver_pickaxe.svg");
    } 
    else if( (global_counter-reset_width_level(6)) <= objective_level[6]){
        style_current_level(6, 'linear-gradient(103.85deg, #D7D7D7 0%, #B4B4B4 100%)', "img/silver_pickaxe.svg");
    }
    else if( (global_counter-reset_width_level(7)) <= objective_level[7]){
        style_current_level(7, 'linear-gradient(103.85deg, #D7D7D7 0%, #B4B4B4 100%)', "img/silver_pickaxe.svg");
    } 
    else if( (global_counter-reset_width_level(8)) <= objective_level[8]){
        style_current_level(8, 'linear-gradient(103.85deg, #CFB94E 0%, #E6C300 100%)', "img/gold_pickaxe.svg");
    }
    else {
        style_current_level(9, 'linear-gradient(103.85deg, #CFB94E 0%, #E6C300 100%)', "img/gold_pickaxe.svg");
    }
}

// function to animate the score of each minerals near the main counter

function update_score(counterUpdate) {
    counterUpdate.style.display= 'block';

    setTimeout(() => {counterUpdate.style.animation = "counterUp 0.6s ease";
    }, 600)

    setTimeout(()=> {
        counterUpdate.style.display= 'none';
    }, 600)
}

// function to increase the number which is added for each minerals

function increase_added_minerals(counter, facteur) {
    counter += facteur;
    return counter;
};

function add_active_class(btn) {
    btn.classList.add("active");
};

// function to manage all the event linked to increase the number which is added for each minerals

function btn_add_minerals(BtnReference, price, priceText, textMulti, localCounter, counterKey, counterUnits, upMultiplicateur, scoreUpdate) {
    BtnReference.addEventListener('click', () => {
        if (counter < price) {
            mainMessage.innerHTML = "You don't have enough minerals !";
        } else {
            first_time_pressed(BtnReference, scoreUpdate);

            // Increase the minerals which is added and store it in local Storage
            counterUnits = increase_added_minerals(counterUnits, upMultiplicateur);
            localCounter = localStorage.setItem(counterKey, counterUnits);

            // remove the price of the increase from the meter and increase the price for the next click
            counter -= price;
            price += parseInt(price * (60/100));

            // Display all information changes directly in the HTML page
            scoreUpdate.innerHTML = "+" + counterUnits;
            display.innerHTML = counter;
            priceText.innerHTML = textMulti +' +' + counterUnits;
            BtnReference.innerHTML = price +' units<br>';
            mainMessage.innerHTML = "Always more, you can collect "+ upMultiplicateur + " more with each click!"
        }
    })
}

//function to verify if it is the first time a button is pressed

function first_time_pressed(btnPressed, scoreUpdate) {
    btnIsPressed = (btnPressed.classList.contains('active'))
    console.log(btnIsPressed);
    if(!btnIsPressed) {
        add_active_class(btnPressed)
        scoreUpdate.style.display = 'block';
        btnIsPressed = true;
    }
}

function click_button(){
    clickBtn.click()
}

// Called function

btn_add_minerals(bronzeBtn, priceArray[0], priceBronze,'Bronze',local_counterBronze, 'counter_bronze', counterBronze, addOneBronze, scoreUp[0]);
btn_add_minerals(silverBtn, priceArray[1], priceSilver, 'Silver',local_counterSilver, 'counter_silver', counterSilver, addOneSilver, scoreUp[1]);
btn_add_minerals(goldBtn, priceArray[2], priceGold,'Gold', local_counterGold, 'counter_gold', counterGold, addOneGold, scoreUp[2]);
