let arr = [
    {
        team : "CSK",
        primaryColor : "Yellow",
        secondaryColor : "Blue",
        fullName : "Chennai Super Kings",
        trophies: 4,
        captain : "MS Dhoni"
    },
    {
        team : "MI",
        primaryColor : "Blue",
        secondaryColor : "Yellow",
        fullName : "Mumbai Indians",
        trophies: 5,
        captain : "Rohit Sharma"
    },
    {
        team : "RCB",
        primaryColor : "Blue",
        secondaryColor : "Red",
        fullName : "Royal Challengers Bangalore",
        trophies: 0,
        captain : "Virat Kohli"
    },
    {
        team : "KKR",
        primaryColor : "Purple",
        secondaryColor : "Gold",
        fullName : "Kolkata Knight Riders",
        trophies: 2,
        captain : "Shreyas Iyer"
    },
    {
        team : "PBKS",
        primaryColor : "Blue",
        secondaryColor : "Yellow",
        fullName : "Punjab Kings",
        trophies: 0,
    },
    {
        team : "SRH",
        primaryColor : "Orange",
        secondaryColor : "Black",
        fullName : "Sunrisers Hyderabad",
        trophies: 1,
        captain : "David Warner"
    },
    {
        team : "DC",
        primaryColor : "Blue",
        secondaryColor : "Red",
        fullName : "Delhi Capitals",
        trophies: 0,
        captain : "Rishabh Pant"
    },
    {
        team : "RR",
        primaryColor : "Pink",
        secondaryColor : "Blue",
        fullName : "Rajasthan Royals",
        trophies: 1,
        captain : "Sanju Samson"
    },
    {
        team : "LSG",
        primaryColor : "Yellow",
        secondaryColor : "Green",
        fullName : "Lucknow Super Giants",
        trophies: 0,
        captain : "KL Rahul"
    }
];

let container = document.querySelector(".container");
let team = document.querySelector(".team");
let box = document.querySelector(".box");
let fullName = document.querySelector(".fullName");
let trophies = document.querySelector(".trophies");
let captain = document.querySelector(".captain");

let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let num = Math.floor(Math.random()*arr.length);
    let teams = arr[num];
    team.innerHTML = teams.team;
    fullName.innerHTML = teams.fullName;
    trophies.innerHTML = teams.trophies;
    captain.innerHTML = teams.captain;

    container.style.backgroundColor = teams.primaryColor;
    box.style.backgroundColor = teams.secondaryColor;
    if(box.style.backgroundColor === "Yellow"){
        box.style.color = "black";
    }
});