

//6.
function saveUsername(){
    let user = document.getElementById("inputName").value;
    localStorage.setItem("username", user);
}

//7.
function tampilkanUser(){
    let show = localStorage.getItem("username");
    document.getElementById("userName");
    alert(show)
}

8.
function login(e){
    e.preventDefault();
    localStorage.setItem("username", getElementById("loginUser").value);
    localStorage.setItem("password", getElementById("loginPass").value);
        alert("berhasil login");
}
   
//9.
function logout(){
    if(!localStorage.getItem("username") && !localStorage.getItem("password")){
        alert("tidak ada data login")
    }else{
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
}

//10.
let counter = parseInt(localStorage.getItem("counter")) || 0;
document.getElementById("count").innerText = counter;

 function counterPlus() {
      counter++;
      localStorage.setItem("counter", counter); // simpan ke localStorage
      document.getElementById("count").innerText = counter;
    }

//11-12.
function changeTheme(){
    let theme = document.getElementById("themeSelect").value;
    localStorage.setItem("theme", theme);
    applyThem();
}
function applyThem(){
    if(localStorage.getItem("theme") === "dark"){
        document.body.style.background = "black";
        document.body.style.color = "white";
    }else{
        document.body.style.background = "white";
        document.body.style.color = "black";
    }
}

//13-15.
let arr= JSON.parse(localStorage.getItem("list")) || [];
function addWaifu() {
  arr.push(document.getElementById("waifu").value);
  localStorage.setItem("list", JSON.stringify(arr));
  renderWaifu();
}

function renderWaifu(){
  document.getElementById("list").innerHTML = "";
  arr.forEach(i => {
    let li = document.createElement("li");
    li.textContent = i;
    document.getElementById("list").appendChild(li);
  });
}

function hapusSemua() {
  localStorage.removeItem("list");
  arr = [];
  renderWaifu();
}

renderWaifu();

//16-17.
const form = document.getElementById("f6")
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = document.getElementById("nama").value.trim();
      const umur = document.getElementById("umur").value.trim();
      const email = document.getElementById("email").value.trim();

      if (!nama || !umur || !email) {
        alert("Semua field wajib diisi!");
        return;
      }
      localStorage.setItem("nama", nama);
      localStorage.setItem("umur", umur);
      localStorage.setItem("email", email);

      renderBiodata();
    });
    function renderBiodata() {
      document.getElementById("showNama").innerText = localStorage.getItem("nama") || "-";
      document.getElementById("showUmur").innerText = localStorage.getItem("umur") || "-";
      document.getElementById("showEmail").innerText = localStorage.getItem("email") || "-";
    }
    renderBiodata();
