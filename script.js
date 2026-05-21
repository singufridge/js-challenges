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
    updateChanges(eventNum, pointerVal);
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