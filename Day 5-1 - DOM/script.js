let btn = document.querySelector('.btn');
let container = document.querySelector('.container');

btn.addEventListener('click', function(){
    let box = document.createElement('div');
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    box.classList.add('box');
    // box.style.backgroundColor = 'pink';
    box.style.width = '100px';
    box.style.height = '100px';
    box.style.position = 'absolute';
    box.style.transform = 'translate(-50%, -50%)';
    box.style.zIndex = '-1';
    box.style.top = y + '%';
    box.style.left = x + '%';
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    container.appendChild(box);
})