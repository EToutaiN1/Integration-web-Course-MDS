let mode = localStorage.getItem("mode");

//Forçage démarrage en mode light
localStorage.setItem("mode","light");
mode = "light"

switchMode();

const current_mode = document.getElementById("dark_mode");
current_mode.addEventListener("click", setLocalStorage);

export function setLocalStorage() {
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
}

export function switchMode() {
    //console.log("SWITCH");

    const body = document.querySelector('body');
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