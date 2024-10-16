const input = document.querySelector("input");
const button = document.querySelector(".start");
let seconds = +input.value;

button.addEventListener("click", starting);

function starting() {
    
    let seconds = +input.value;
    if (seconds > 0) {
        const ii = setInterval(() => {
            input.value = seconds-- - 1;
        }, 1000);
        

        setTimeout(() => {
            clearInterval(ii);
        }, seconds * 1000);
    }
}
