let getBtn = document.querySelector(".buttonForm");
let statusBtn = false;

getBtn.addEventListener("click", () => {
    if(statusBtn === false) {
        getBtn.classList.add("active");
        statusBtn = !statusBtn;
    } else {
        getBtn.classList.remove("active");
        statusBtn = !statusBtn;
    }
})