let flag = false;
let eventNum = 0;

document.addEventListener('keydown', (event) => {
    console.log(event);
    //keydownIdNum = keyCode + timestamp
    let keyVal = Math.round(event.keyCode + event.timeStamp);
    window.localStorage.setItem(eventNum, keyVal);
    eventNum++;
});

document.addEventListener('click', (event) => {

    console.log(event);
    //pointerVal = screenX + screenY + timestamp
    let pointerVal = Math.round(event.screenX + event.screenY + event.timeStamp);
    window.localStorage.setItem(eventNum, pointerVal);
    eventNum++;
});