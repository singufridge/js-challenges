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

const listEl = document.getElementById("list");

document.addEventListener('keydown', (event) => {
    if (flag.value == false) {
        flag.value = true;
    }
    console.log(event);
    //keydownIdNum = keyCode + timestamp
    let localStorageNum = (eventNum * 2) -1;
    let keyVal = Math.round(event.keyCode + event.timeStamp);
    window.localStorage.setItem(localStorageNum, keyVal);
    //eventNum still consecutive
    eventNum++;
});

document.addEventListener('click', (event) => {
    if (flag.value == true) {
        flag.value = false;
    }
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
    if (val > 0 && val % 2 ==! 0 && val % 3 ==! 0) {
        const p = document.createElement('p');
        p.textContent = val;
        p.id = key;
        document.body.appendChild(p);

    } else if (val % 2 === 0) { 
        const li = document.createElement('li');
        li.textContent = val;
        li.id = key;
        listEl.appendChild(li);

    } else if (val % 3 === 0) {
        console.log('remove p');

        if (document.querySelector('p')) {
            document.querySelector('p').remove();
        }
    }
}