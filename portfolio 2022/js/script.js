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

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 3;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}


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