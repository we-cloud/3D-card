const container = document.querySelector('.container');
const box = document.querySelector('.box');
const title = document.querySelector('.title');
const info = document.querySelector('.info');
const colors = document.querySelector('.colors-box');
const btn = document.querySelector('.btn');
const cimg = document.querySelector('.cimg');



container.addEventListener('mousemove', (e) =>{
    let xa = (window.innerWidth / 2 - e.pageX) / 25 ;
    let ya = (window.innerHeight  /2 - e.pageY) / 25 ;
    box.style.transform = `rotateY(${xa}deg) rotateX(${ya}deg)`;
})

container.addEventListener('mouseenter', (e) =>{
    pop();
})

container.addEventListener('mouseleave', (e) => {
    popout();
})


function pop() {
    title.style.transform = 'translateZ(150px)';
    cimg.style.transform = 'translateZ(200px)';
    info.style.transform = 'translateZ(125px)';
    colors.style.transform = 'translateZ(100px)';
    btn.style.transform = 'translateZ(75px)';
}
function popout() {
    box.style.transform = 'all 0.25s east-out'
    title.style.transform = 'translateZ(0px)';
    cimg.style.transform = 'translateZ(0px)';
    info.style.transform = 'translateZ(0px)';
    colors.style.transform = 'translateZ(0px)';
    btn.style.transform = 'translateZ(0px)';
    box.style.transform = `rotateY(0deg) rotateX(0deg)`;
}