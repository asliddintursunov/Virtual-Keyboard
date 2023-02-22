let NumpadAdd = document.getElementById('NumpadAdd');
let NumpadSubtract = document.getElementById('NumpadSubtract');
let NumpadMultiply = document.getElementById('NumpadMultiply');
let Equal = document.getElementById('Equal');
let ControlLeft = document.getElementById('ControlLeft');
let fn = document.getElementById('fn');
let OSLeft = document.getElementById('OSLeft');
let AltLeft = document.getElementById('AltLeft');
let KeyQ = document.getElementById('KeyQ');
let KeyW = document.getElementById('KeyW');
let KeyE = document.getElementById('KeyE');
let KeyR = document.getElementById('KeyR');
let KeyT = document.getElementById('KeyT');
let KeyY = document.getElementById('KeyY');
let KeyU = document.getElementById('KeyU');
let KeyI = document.getElementById('KeyI');
let KeyO = document.getElementById('KeyO');
let KeyP = document.getElementById('KeyP');
let BracketLeft = document.getElementById('BracketLeft');
let BracketRight = document.getElementById('BracketRight');
let KeyA = document.getElementById('KeyA');
let KeyS = document.getElementById('KeyS');
let KeyD = document.getElementById('KeyD');
let KeyF = document.getElementById('KeyF');
let KeyG = document.getElementById('KeyG');
let KeyH = document.getElementById('KeyH');
let KeyJ = document.getElementById('KeyJ');
let KeyK = document.getElementById('KeyK');
let KeyL = document.getElementById('KeyL');
let Semicolon = document.getElementById('Semicolon');
let Quote = document.getElementById('Quote');
let ShiftLeft = document.getElementById('ShiftLeft');
let KeyZ = document.getElementById('KeyZ');
let KeyX = document.getElementById('KeyX');
let KeyC = document.getElementById('KeyC');
let KeyV = document.getElementById('KeyV');
let KeyB = document.getElementById('KeyB');
let KeyN = document.getElementById('N');
let KeyM = document.getElementById('KeyM');
let Comma = document.getElementById('Comma');
let Period = document.getElementById('Period');
let ShiftRight = document.getElementById('ShiftRight');
let Backslash = document.getElementById('Backslash');
let Space = document.getElementById('Space');
let Slash = document.getElementById('Slash');
let Enter = document.getElementById('Enter');

let keyWordArray = [NumpadAdd, NumpadSubtract, NumpadMultiply, Equal, ControlLeft, fn, OSLeft, AltLeft, KeyQ, KeyW, KeyE, KeyR, KeyT, KeyY, KeyU, KeyI, KeyO, 
    KeyP, BracketLeft, BracketRight, KeyA, KeyS, KeyD, KeyF, KeyG, KeyH, KeyJ, KeyK, KeyL, Semicolon, Quote, ShiftLeft, KeyZ, KeyX, KeyC, KeyV, KeyB, KeyN, KeyM, 
    Comma, Period, ShiftRight, Backslash, Space, Slash, Enter].filter(element => element != null);

window.addEventListener('keydown', (e) => {
    const everyKeyword = keyWordArray.filter(element => element.id === e.code);
    if (everyKeyword.length > 0) {
        console.log(everyKeyword[0].id);
        setTimeout(() => {
            everyKeyword[0].classList.toggle('color');
            
        }, 100);
            everyKeyword[0].classList.toggle('color');
    } else {
        console.log('No key here');
    }
});

let settingSVG = document.getElementById('setting-svg');    
let moreSettings = document.querySelector('.more-settings');

settingSVG.onclick = () => {
    moreSettings.classList.toggle('animateShow');
    moreSettings.classList.toggle('animateHide');
}