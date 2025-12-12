let container = document.querySelector('.container');
let i = document.querySelector('.ri-heart-3-fill');

container.addEventListener('dblclick', function() {
    console.log('Liked!!!');
    i.style.opacity = '1';
    i.style.transform = 'translate(0%, 0%) scale(1)';
    setTimeout(function(){
        i.style.opacity = '0';
        i.style.transform = 'translate(0%, -300%) scale(0) rotate(20deg)';
    },700);
    setTimeout(function(){
        i.style.transform = 'translate(0%, 0%) scale(0) rotate(20deg)';
    },1000);
});