const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector(".gif")
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".no-btn");
const content = document.querySelector(".content");

yesbtn.addEventListener('click', ()=>{
    question.innerHTML = "I LOVE YOU !!!!";
    gif.src = "https://i.pinimg.com/originals/0c/88/fd/0c88fdcbe19871557c5e5368d185752f.gif";    
    content.innerHTML = "I will never do it again";
});

nobtn.addEventListener('mouseover', ()=>{
    const nobtnRec = nobtn.getBoundingClientRect();
    const maxX = window.innerWidth - nobtnRec.width;
    const maxY = window.innerHeight - nobtnRec.height; 

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    nobtn.style.left = randomX + 'px';
    nobtn.style.top = randomY + 'px';
})