const mainMessage = document.getElementById('mainMessage')
const display = document.getElementById('display')
const clickBtn = document.getElementById('click')
const multiplyBtn = document.getElementById('multiply')
const multiplyBtn10 = document.getElementById('10')
const multiplyBtn30 = document.getElementById('30')
const priceText = document.querySelectorAll('.price');

let counter = 0;

let multiplier = 1;

function augmenterMultiplicateur() {
    multiplier++;
};

function augmenterMultiplicateur10() {
    multiplier+= 5;
};

function augmenterMultiplicateur30() {
    multiplier+= 10;
};

function AddActiveClass(btn) {
    btn.classList.add("active");
}; 

multiplyBtn.addEventListener('click', () => {
    let price = 20;
    
    if (counter < price) {
        mainMessage.innerHTML = "Vous n'avez pas assez de cookies !";
    } else {
        AddActiveClass(multiplyBtn);
        augmenterMultiplicateur();
        counter -= price;
        price += price * (60/100);
        display.innerHTML = counter;
        multiplyBtn.innerHTML = price +' Clicks<br>' + multiplier + 'x multiplier';
        mainMessage.innerHTML = "Toujours plus, vous pouvez en amasser 1 de plus à chaque clique !"
    }
})

multiplyBtn10.addEventListener('click', () => {
    if (counter < 200) {
        mainMessage.innerHTML = "Vous n'avez pas assez de cookies !";
    } else {
        
        AddActiveClass(multiplyBtn10);
        augmenterMultiplicateur10();
        counter -= 200;
        display.innerHTML = counter; 
        multiplyBtn.innerHTML = multiplier + 'x multiplier';
        mainMessage.innerHTML = "Toujours plus, vous pouvez en amassé 10 de plus à chaque clique !"
    }
})

multiplyBtn30.addEventListener('click', () => {
    if (counter < 500) {
        mainMessage.innerHTML = "Vous n'avez pas assez de cookies !";
    } else {
        
        AddActiveClass(multiplyBtn30);
        augmenterMultiplicateur30();
        counter -= 500;
        display.innerHTML = counter; 
        multiplyBtn.innerHTML = multiplier + 'x multiplier';
        mainMessage.innerHTML = "Toujours plus, vous pouvez en amassé 30 de plus à chaque clique !"
    }
})

clickBtn.addEventListener('click', () => {
    counter += 1 + multiplier;
    display.innerHTML = counter;    
})

const ToggleBtn = document.getElementById("btn_container");
const one = document.getElementById("one");
const purpleCircle = document.getElementById("purpleCircle");


ToggleBtn.addEventListener("click", () => {
    console.log("hey");
    one.classList.toggle("active");
    purpleCircle.classList.toggle("active");
});