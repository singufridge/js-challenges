let flag = false;
const flag = {
    internalVal = false,
    set value(val) {
        this.internalVal = val;
        this.onChange();
    },
    onChange() {
        //delete stuff when the flag changes
    }
}

let eventNum = 0;

document.addEventListener('keydown', (event) => {
    if (flag.value == false) {
        flag.value = true;
    }
    console.log(event);
    //keydownIdNum = keyCode + timestamp
    let keyVal = Math.round(event.keyCode + event.timeStamp);
    window.localStorage.setItem(eventNum, keyVal);
    eventNum++;
});

document.addEventListener('click', (event) => {
    if (flag.value == true) {
        flag.value = false;
    }
    console.log(event);
    //pointerVal = screenX + screenY + timestamp
    let pointerVal = Math.round(event.screenX + event.screenY + event.timeStamp);
    window.localStorage.setItem(eventNum, pointerVal);
    eventNum++;
    updateChanges();
});


function updateChanges() {
    for (i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(localStorage.key(i)) > 0) {
            console.log("create p")

            const p = document.createElement('p');
            p.textContent = localStorage.getItem(localStorage.key(i));
            document.body.appendChild(p);

        } else if (localStorage.getItem(localStorage.key(i)) % 2 === 0) { 
            console.log("divisiblwe by 3")
        } else {
            console.log(":(")
        }
    }
}