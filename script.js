let flag = false;
let eventNum = 0;

document.addEventListener('keydown', (event) => {
    console.log(event);
    //keydownIdNum = keyCode + timestamp
    let localStorageNum = (eventNum * 2) -1;
    let keyVal = Math.round(event.keyCode + event.timeStamp);
    window.localStorage.setItem(localStorageNum, keyVal);
    //eventNum still consecutive
    eventNum++;
});

document.addEventListener('click', (event) => {
    console.log(event);
    //pointerVal = screenX + screenY + timestamp
    let pointerVal = Math.round(event.screenX + event.screenY + event.timeStamp);
    //localStorageNum is even for clicks, odd for keypress
    let localStorageNum = eventNum * 2;
    window.localStorage.setItem(localStorageNum, pointerVal);
    updateChanges(localStorageNum, pointerVal);
    eventNum++;
});


function updateChanges(key, val) {
    if (val > 1) {
        console.log("create p")

        const p = document.createElement('p');
        p.textContent = val;
        p.id = key;
        document.body.appendChild(p);

    } else if (val % 2 === 0) { 
        console.log("divisiblwe by 2")
    } else {
        console.log(":(")
    }
}