//1.
//di HTML page

//2. 
//di HTML page

//3.
//di HTML page

//4.
//di HTML page

//5.
//di HTML page

//## B. Menggunakan JavaScript langsung (assigning event properties) — 5 soal

//6.
    document.getElementById("btn").onclick = function(){
        document.getElementById("msg").innerText ="okaeri";
    }

//7.
const area = document.getElementById("area");
area.onmouseover = function(){
    area.style.background = "blue";
}
area.onmouseout = function(){
    area.style.background = "red";
}

//8.
const input = document.getElementById("input");
const show = document.getElementById("show");
input.oninput = function(){
    show.textContent= this.value;
}

//9.
const btn2 = document.getElementById("btn2");
btn2.onclick = function(){
    this.disabled = true;
    this.textContent ="tombol mati";
}

//10.
const btn3 = document.getElementById("btn3");
btn3.onclick = function satu(){
    alert("kena timpa");
}
btn3.onclick = function dua(){
    alert("hasil timpa");
}

//## C. Menggunakan addEventListener()— 5 soal

//11.
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
    btn4.style.background = "purple"
});
btn4.addEventListener("click", () => {
    console.log("tombol sudah diklik")
});

//12.
const btn5 = document.getElementById("btn5");
const removeBtn= document.getElementById("removeBtn");

 function changeColor() {
      btn.style.backgroundColor = "lightgreen"
    }
 function Log() {
    console.log("alaktir tir")
    }

btn5.addEventListener("click", changeColor);
btn5.addEventListener("click", Log);

removeBtn.addEventListener("click", () => {
    btn5.removeEventListener("click", Log);
    console.log("handler berhasil dihapus")
})

//13.
const form = document.getElementById("myForm")
    const input2 = document.getElementById("input2")
    form.addEventListener("submit", function(e) {
      e.preventDefault() 
      console.log("nama:", input2.value) 
});

//14.
const list = document.getElementById("myList");
list.addEventListener("click", (e) => {
if (e.target.tagName === "LI"){
        e.target.textContent = "clicked!";

}
});

//15.
const once = document.getElementById("once");
const img = document.getElementById("Jumpscare");

function lastWish(){
    img.style.display = "block";
}

once.addEventListener("click", lastWish, { once: true})

