// Loader animation

let LoaderPage;
let hidePage;

function myFunction() {
    LoaderPage = setTimeout(showPage, 2800);
    hidePage = setTimeout(hideLoader, 4000);
}

function showPage() {
    document.querySelector(".loader-animation").style.opacity = "0";
    document.querySelector(".blockBg-loader").style.animation = "scaleYToZero 500ms 1 ease 700ms";
    document.querySelector(".blockBg-loader.green").style.animation = "scaleYToZero 500ms 1 ease 800ms";
}

function hideLoader() {
    document.querySelector(".loader-animation").style.display = "none";
    document.querySelector(".loader-wrapper").style.display = "none";
}

// Mouse Animation

const circle = document.querySelector('.circleCursor');
const link = document.querySelectorAll('a');
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
  circle.style.left = e.clientX - circle.offsetWidth / 2 + "px";
  circle.style.top = e.clientY - circle.offsetHeight / 2 + "px";
  circle.style.opacity = 1;
}

function mouseUpHandler(e) {
  circle.style.transform = "scale(1)";

  if (e.target.classList.contains('link')) {
    circle.style.transform = 'scale(5)';
  }
}

function mouseDownHandler() {
  circle.style.transform = "scale(1.5)";
}

function linkEnterHandler() {
  console.log('hi');
  circle.style.transform = "scale(1.5)";
}

function linkLeaveHandler() {
  console.log('hey');
  circle.style.transform = "scale(1)";
}


// Hover Animation for the mainBtn

link.forEach((lik) => {
  lik.addEventListener('mouseenter', linkEnterHandler);
})

function mainBtnHover() {
  const mainBtn = document.querySelectorAll(".main-btn");
  const mainBtnImg = document.querySelectorAll(".img-btn");

  mainBtn.forEach((btn) => {
    btn.addEventListener('mouseover', () => { 
      mainBtnImg.forEach((img) => {
        img.classList.add('active');
      })
    });
  
    btn.addEventListener('mouseleave', () => {
      mainBtnImg.forEach((img) => {
        img.classList.remove('active');
      })
    });
  })
}

// Hover Animation for the secondBtn

function secondBtnHover() {
  const secondBtn = document.querySelectorAll(".secondary-btn");
  const secondBtnImg = document.querySelectorAll(".secondBtn-img");

  secondBtn.forEach((btn) => {
    btn.addEventListener('mouseover', () => { 
      secondBtnImg.forEach((img) => {
        img.classList.add('active');
      })
    });
  
    btn.addEventListener('mouseleave', () => {
      secondBtnImg.forEach((img) => {
        img.classList.remove('active');
      })
    });
  })
}