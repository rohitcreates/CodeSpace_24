const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function(button){
    button.addEventListener('click',(e) => {
        body.style.backgroundColor = e.target.id
    })
})