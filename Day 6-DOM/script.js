const arr = [
    {
        place : "Tokyo",
        country : "Japan",
        image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg"
    },
    {
        place : "Paris",
        country : "France",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=1400&h=1400&s=1"
    },
    {
        place : "London",
        country : "United Kingdom",
        image: "https://www.visitlondon.com/-/media/images/london/visit/things-to-do/nightlife/tower-bridge-at-night1920x1080.png?mw=640&rev=743f319d95bf47638fe287a5322c115c&hash=023E58432D989F191B9A9E52DC097D39"
    },
    {
        place : "New York",
        country : "United States",
        image: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg"
    }
];

let main = document.querySelector("main");
main.innerHTML = arr.map((item) => {
    return `
        <div class="card">
            <img src="${item.image}" alt="${item.place}">
            <h2>${item.place}</h2>
            <h3>${item.country}</h3>
        </div>
    `;
})