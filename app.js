// const incBtn = document.querySelector(".btn-increase");
// const decBtn = document.querySelector(".btn-decrease");
// const resetBtn = document.querySelector(".btn-reset");
// const value = document.querySelector(".value");

// let currentNum = 0;

// incBtn.addEventListener("click", () => {
//     currentNum += 1;
//     value.innerHTML = `${currentNum}`;
//     if(currentNum > 0){
//         value.style.color = "#008000";
//     }
// });

// decBtn.addEventListener("click", () => {
//     currentNum -= 1;
//     value.innerHTML = `${currentNum}`;
//     if(currentNum < 0){
//         value.style.color = "#FF0000";
//     }
// });

// resetBtn.addEventListener("click", () => {
//     currentNum = 0;
//     value.innerHTML = `${currentNum}`;
//     value.style.color = "#222222";
// });

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

let currentNum = 0;

function init(){
    for(const btn of btns){
        btn.addEventListener('click', function(event){
            const target = event.currentTarget;
            if(target.classList.contains("increase")){
                currentNum += 1;
            } else if(target.classList.contains("decrease")){
                currentNum -= 1;
            } else {
                currentNum = 0;
            }

            if(currentNum > 0){
                value.style.color = "#008000";
            } else if(currentNum < 0){
                value.style.color = "#FF0000";
            } else{
                value.style.color = "#222222"
            }
            value.innerHTML = `${currentNum}`;
        });
    }
    
}

init();