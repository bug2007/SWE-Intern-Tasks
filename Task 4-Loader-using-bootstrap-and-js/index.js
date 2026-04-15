const modal = document.querySelector("#modal1");
const red = document.querySelector(".red");
const text = document.querySelector(".text");
const reset = document.querySelector(".reset");

let increase;
let id;

modal.addEventListener("shown.bs.modal", () => {
    red.style.width = '0%',
    increase = 0;
    id = setInterval(() => {
        increase += 1;
        red.style.width  = increase + '%';
        if (increase === 100) {
            clearInterval(id);
            document.querySelector("#hidden-btn").click();
        }
    }, 20);
})

modal.addEventListener("hidden.bs.modal", () => {
    text.style.backgroundColor = 'black';
    text.style.color = 'white';
})

reset.addEventListener('click', () => {
    text.style.backgroundColor = '';
    text.style.color = 'rgb(168, 10, 10)';
})

