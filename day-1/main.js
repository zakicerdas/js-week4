const btn = document.getElementById("btn");

const images =[
    "assets/alice.jpg",
    "assets/alice2.jpg",
    "assets/alice3.jpg"
];
const img = document.getElementById("image");
const teks = document.getElementById("teks");
let index = 0;

function slideGambar(){

    setTimeout(() => {
        img.src = images[index]
        btn.classList.add
    },200 )      
    index = (index + 1) % images.length 
}
btn.addEventListener("click", () => {
       if (intervalId) return ;
    img.style.display = "block";
    slideGambar();
    setInterval(showNext, 2000) ;
    teks.innerText = "Bukankah ini my...❤︎❤︎";
});