let btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Button Clicked';
    document.body.appendChild(h2,btn);
})