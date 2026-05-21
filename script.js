let flag = false;

document.addEventListener('keydown', (event) => {
    console.log(event);
});

document.addEventListener('click', (event) => {
    console.log(event);
    window.localStorage.setItem("pointerId", event.pointerId)
    updateChanges();
});


function updateChanges() {
    for (i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(localStorage.key(i)) > 0) {
            console.log("create p")

            const p = document.createElement('p');
            p.textContent = localStorage.getItem(localStorage.key(i));
            document.body.appendChild(p);

        } else if (localStorage.getItem(localStorage.key(i)) % 3 === 0) { 
            console.log("divisiblwe by 3")
        } else {
            console.log(":(")
        }
    }
}