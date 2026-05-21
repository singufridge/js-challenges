let flag = false;

document.addEventListener('keydown', (event) => {
    console.log(event);
});

document.addEventListener('click', (event) => {
    console.log(event);
    window.localStorage.setItem("pointerId", event.pointerId)
});