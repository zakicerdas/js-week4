//16.
f11.onsubmit = a => {
    a.preventDefault();
    if(inputNama.value === "" )
        alert("Nama wajib diisi!");
    
}

//17.
f12.onsubmit = a => {
    a.preventDefault();
    if(inputUmur.value < 18)
        alert("Belum cukup umur!");
    
}

//18.
f13.onsubmit = a => {
    a.preventDefault();
    if(inputPass.value.length < 8)
        alert("Password harus lebih dari 8 karakter!");
    
}

//19.
 const regexEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/
f14.onsubmit = a => {
    a.preventDefault();
    if(!regexEmail.test(inputEmail.value))
        alert("email tidak tertera!");
}

//20.
f15.onsubmit = a => {
    a.preventDefault();
    if(isNaN(inputNoTelp.value))
        alert("harus terdiri dari angka!"); 
}

//21.
f16.onsubmit = a => {
    a.preventDefault();
    if(Pass1.value !== pass2.value) 
        alert("password tidak sesuai!"); 
}

//22.
f17.onsubmit = a => {
    a.preventDefault();
    if(new Date(dateInput.value) > new Date())
        alert("tanggal tidak valid!"); 
}

//23.
const regexUsername = /^[a-zA-Z0-9]{5,}$/
f18.onsubmit = a => {
    a.preventDefault();
    if(!regexUsername.test(inputUsername.value))
        alert("Username tidak sesuai ketentuan!"); 
}

//24.
f19.onsubmit = a => {
    a.preventDefault();
    if(!u.value || !p.value)
        alert("Isi semua field!"); 
}

//25.
f20.onsubmit = a => {
    a.preventDefault();
    if(!box.checked)
        alert("check dahulu!"); 
}

//26.
f21.onsubmit = a => {
    a.preventDefault();
    if(genap.value %2 !== 0)
        alert("bukan angka genap!"); 
}

//27.
f22.onsubmit = a => {
    a.preventDefault();
    if(komentar.value.length > 200)
        alert("komentar melebihi batas!"); 
}

//28.
f22.onsubmit = a => {
    a.preventDefault();
    if(colorSelect.value === "")
        alert("pilih satu warna!"); 
}

//29.
f22.onsubmit = a => {
    a.preventDefault();
    if(colorSelect.value === "")
        alert("pilih satu warna!"); 
}

//30.
f24.onsubmit = a => {
    a.preventDefault();
    if(!inputFile.value.endsWith(".jpg") || !inputFile.value.endsWith(".png"))
        alert("hanya file gambar yang diizinkan!"); 
}

//31.
const RegexEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/
f24.onsubmit = a => {
    a.preventDefault();
    if(user.value === "" || !regexEmail.test(Email.value) || pass.value.length < 8){
         alert("form tidak valid!");  
    }else{
        alert("sukses");
    }
      
   
}
    