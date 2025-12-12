console.log("Hello from script.js");

let btn = document.querySelector('.btn');
let loader = document.querySelector('.loader');
let percent = document.querySelector('.percent');
let message = document.querySelector('.message');

btn.addEventListener('click', function() {
    console.log("Let's load some data...");
    let a = 0;
    let p = 0;
    let load = setInterval(() =>{
        a++;
        p++;
        percent.innerText = `${p}%`;
        loader.style.width = `${a}%`;
    }, 50);
    setTimeout(() =>{
        clearInterval(load);
        console.log("Data loaded successfully");
        message.innerHTML = "<h3>Data loaded successfully!</h3>";
    }, 5000);
});