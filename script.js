const wrapper =document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
     question.innerHTML = "Love you cantikku reta <3";
     gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener('mouseover', () => {
     const noBtnReact = noBtn.getBoundingClientRect();
     const maxX = window.innerWidth - noBtnReact.width;
     const maxY = window.innerHeight - noBtnReact.height;

     const randomX = Math.floor(Math.random() * maxX);
     const randomY = Math.floor(Math.random() * maxY);

     noBtn.style.left = randomX + "px";
     noBtn.style.top = randomY + "px";
});
