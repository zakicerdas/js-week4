# Materi JavaScript untuk Pemula: Event Handling, Validasi Form, dan Local Storage

Halo teman-teman kecil! Hari ini kita akan belajar tentang beberapa hal seru di dunia JavaScript. Jangan khawatir, kita akan belajar pelan-pelan seperti bermain dengan balok-balok. Siap? Yuk mulai!




## 1. Event Handling: Si Kecil yang Peka

Bayangkan begini, teman-teman. Kalian punya mainan robot yang bisa bergerak kalau kalian sentuh tombolnya, kan? Nah, di dunia komputer, tombol yang kalian sentuh itu namanya 'event' atau 'kejadian'. Dan robot yang tahu kalau dia disentuh itu namanya 'event handling'. Gampang, kan?

Jadi, 'event handling' itu adalah cara kita memberitahu komputer untuk melakukan sesuatu ketika ada 'kejadian' tertentu. Kejadian itu bisa macam-macam, lho! Bisa saat kita klik tombol, saat kita mengetik di keyboard, saat kita menggerakkan mouse, atau bahkan saat halaman web kita selesai dimuat.

### Kenapa Event Handling Penting?

Event handling itu seperti telinga dan mata komputer kita. Tanpa event handling, komputer kita tidak akan tahu apa yang kita mau. Dia akan diam saja, tidak bisa berinteraksi dengan kita. Kalau kita mau membuat website yang seru, yang bisa diajak ngobrol, yang bisa berubah-ubah sesuai keinginan kita, maka kita harus jago di event handling ini.

### Bagaimana Cara Kerjanya?

Ada tiga langkah mudah untuk membuat komputer kita 'peka' terhadap kejadian:

1.  **Pilih siapa yang mau 'dengar'**: Kita harus memilih bagian mana di halaman web kita yang mau kita suruh 'mendengarkan' kejadian. Misalnya, kita mau tombol 'Kirim' yang mendengarkan kalau dia diklik.
2.  **Pilih 'kejadian' apa yang mau didengar**: Kita harus memberitahu komputer, kejadian apa yang harus dia perhatikan. Apakah itu 'klik', 'ketik', 'mouse bergerak', atau yang lain?
3.  **Beritahu apa yang harus dilakukan**: Setelah komputer tahu siapa yang mendengarkan dan kejadian apa yang harus didengar, kita harus memberitahu dia, 


apa yang harus dia lakukan ketika kejadian itu terjadi. Ini seperti kita memberi instruksi: "Kalau tombol ini diklik, maka tampilkan pesan 'Halo!'".

### Contoh Sederhana Event Handling

Mari kita lihat contoh paling sederhana. Bayangkan kita punya sebuah tombol di halaman web kita. Kita ingin ketika tombol itu diklik, ada tulisan "Tombol diklik!" muncul di layar.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Contoh Event Handling Sederhana</title>
</head>
<body>
    <button id="tombolAjaib">Klik Aku!</button>
    <p id="pesan"></p>

    <script>
        // Langkah 1: Pilih siapa yang mau 'dengar' (tombol dengan id 'tombolAjaib')
        const tombol = document.getElementById('tombolAjaib');

        // Langkah 2: Pilih 'kejadian' apa yang mau didengar (kejadian 'click')
        // Langkah 3: Beritahu apa yang harus dilakukan (tampilkan pesan)
        tombol.addEventListener('click', function() {
            const pesanElement = document.getElementById('pesan');
            pesanElement.textContent = 'Tombol diklik!';
        });
    </script>
</body>
</html>
```

Di contoh di atas, `addEventListener` adalah teman baik kita untuk membuat komputer peka. Dia punya dua bagian penting:

*   **`'click'`**: Ini adalah jenis kejadian yang kita mau dengar. Ada banyak jenis kejadian lain seperti `'mouseover'` (saat mouse lewat di atasnya), `'keydown'` (saat tombol keyboard ditekan), dan masih banyak lagi.
*   **`function() { ... }`**: Ini adalah instruksi yang akan dijalankan komputer ketika kejadian `'click'` terjadi pada `tombolAjaib`. Di dalamnya, kita menyuruh komputer untuk mencari elemen `<p>` dengan id `pesan` dan mengubah tulisannya menjadi "Tombol diklik!".

### 5 Studi Kasus Event Handling

Sekarang, mari kita coba beberapa contoh yang lebih seru, seperti bermain dengan mainan yang berbeda-beda!

#### Studi Kasus 1: Mengubah Warna Latar Belakang dengan Klik Tombol

Kita akan membuat tiga tombol. Setiap tombol akan mengubah warna latar belakang halaman web menjadi warna yang berbeda.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 1: Ubah Warna</title>
    <style>
        body {
            transition: background-color 0.5s ease; /* Agar perubahan warna terlihat halus */
        }
    </style>
</head>
<body>
    <button id="btnMerah">Merah</button>
    <button id="btnBiru">Biru</button>
    <button id="btnHijau">Hijau</button>

    <script>
        const btnMerah = document.getElementById('btnMerah');
        const btnBiru = document.getElementById('btnBiru');
        const btnHijau = document.getElementById('btnHijau');

        btnMerah.addEventListener('click', function() {
            document.body.style.backgroundColor = 'red';
        });

        btnBiru.addEventListener('click', function() {
            document.body.style.backgroundColor = 'blue';
        });

        btnHijau.addEventListener('click', function() {
            document.body.style.backgroundColor = 'green';
        });
    </script>
</body>
</html>
```

#### Studi Kasus 2: Menampilkan Pesan Saat Mouse Lewat (Mouseover)

Kita akan membuat sebuah kotak. Ketika mouse kita lewat di atas kotak itu, akan muncul pesan. Ketika mouse kita keluar dari kotak, pesan itu akan hilang.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 2: Mouseover</title>
    <style>
        #kotakHover {
            width: 200px;
            height: 100px;
            background-color: lightgray;
            border: 2px solid gray;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="kotakHover">Lewatkan Mouse di Sini</div>
    <p id="pesanHover"></p>

    <script>
        const kotak = document.getElementById('kotakHover');
        const pesanHover = document.getElementById('pesanHover');

        kotak.addEventListener('mouseover', function() {
            pesanHover.textContent = 'Mouse ada di atas kotak!';
        });

        kotak.addEventListener('mouseout', function() {
            pesanHover.textContent = ''; // Kosongkan pesan saat mouse keluar
        });
    </script>
</body>
</html>
```

#### Studi Kasus 3: Menghitung Karakter Saat Mengetik (Keyup)

Kita akan membuat sebuah kotak teks. Setiap kali kita mengetik sesuatu di kotak itu, kita akan melihat berapa banyak huruf yang sudah kita ketik.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 3: Hitung Karakter</title>
</head>
<body>
    <textarea id="teksInput" rows="5" cols="50"></textarea>
    <p>Jumlah Karakter: <span id="hitungKarakter">0</span></p>

    <script>
        const teksInput = document.getElementById('teksInput');
        const hitungKarakter = document.getElementById('hitungKarakter');

        teksInput.addEventListener('keyup', function() {
            hitungKarakter.textContent = teksInput.value.length;
        });
    </script>
</body>
</html>
```

#### Studi Kasus 4: Menampilkan/Menyembunyikan Gambar (Toggle)

Kita akan punya sebuah tombol dan sebuah gambar. Ketika tombol diklik, jika gambar terlihat, dia akan sembunyi. Jika gambar tersembunyi, dia akan muncul.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 4: Tampilkan/Sembunyikan Gambar</title>
    <style>
        #gambarTersembunyi {
            display: block; /* Defaultnya terlihat */
            width: 200px;
            height: auto;
            margin-top: 20px;
        }
        .hidden {
            display: none; /* Kelas untuk menyembunyikan */
        }
    </style>
</head>
<body>
    <button id="toggleGambar">Tampilkan/Sembunyikan Gambar</button>
    <img id="gambarTersembunyi" src="https://via.placeholder.com/200" alt="Gambar Contoh">

    <script>
        const toggleBtn = document.getElementById('toggleGambar');
        const gambar = document.getElementById('gambarTersembunyi');

        toggleBtn.addEventListener('click', function() {
            gambar.classList.toggle('hidden'); // Menambah/menghapus kelas 'hidden'
        });
    </script>
</body>
</html>
```

#### Studi Kasus 5: Mengubah Ukuran Teks dengan Dropdown (Change Event)

Kita akan membuat sebuah pilihan dropdown untuk mengubah ukuran teks pada sebuah paragraf.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 5: Ubah Ukuran Teks</title>
</head>
<body>
    <label for="ukuranTeks">Pilih Ukuran Teks:</label>
    <select id="ukuranTeks">
        <option value="small">Kecil</option>
        <option value="medium" selected>Sedang</option>
        <option value="large">Besar</option>
        <option value="xlarge">Sangat Besar</option>
    </select>

    <p id="paragrafContoh" style="font-size: medium;">Ini adalah contoh teks yang akan berubah ukurannya.</p>

    <script>
        const ukuranTeksDropdown = document.getElementById('ukuranTeks');
        const paragraf = document.getElementById('paragrafContoh');

        ukuranTeksDropdown.addEventListener('change', function() {
            const ukuranTerpilih = ukuranTeksDropdown.value;
            switch (ukuranTerpilih) {
                case 'small':
                    paragraf.style.fontSize = '12px';
                    break;
                case 'medium':
                    paragraf.style.fontSize = '16px';
                    break;
                case 'large':
                    paragraf.style.fontSize = '20px';
                    break;
                case 'xlarge':
                    paragraf.style.fontSize = '24px';
                    break;
                default:
                    paragraf.style.fontSize = '16px';
            }
        });
    </script>
</body>
</html>
```

Wah, seru sekali ya bermain dengan event handling ini! Kita bisa membuat halaman web kita jadi lebih interaktif dan menyenangkan. Sekarang, mari kita lanjutkan ke materi berikutnya!




## 2. Form Validation: Penjaga Gerbang yang Baik Hati

Bayangkan kalian sedang mengisi buku tamu di pesta ulang tahun teman. Tiba-tiba, ada kolom yang minta kalian menuliskan nama lengkap, tapi kalian malah menuliskan angka. Pasti penjaga gerbangnya akan bilang, "Eh, ini kan kolom nama, kok diisi angka? Tolong isi yang benar ya!" Nah, di dunia website, penjaga gerbang yang memastikan kita mengisi data dengan benar itu namanya 'Form Validation' atau 'Validasi Formulir'.

Validasi formulir itu penting sekali, teman-teman. Ini seperti memastikan bahwa semua informasi yang kita masukkan ke dalam formulir (seperti formulir pendaftaran, formulir login, atau formulir pemesanan) itu sudah benar dan lengkap. Kalau ada yang salah atau kurang, website akan memberitahu kita supaya kita bisa memperbaikinya sebelum data itu dikirim.

### Kenapa Form Validation Penting?

Ada beberapa alasan kenapa validasi formulir itu sangat penting:

1.  **Mencegah Kesalahan**: Supaya kita tidak salah mengisi data. Misalnya, kalau kita harus mengisi alamat email, validasi akan memastikan formatnya benar (ada '@' dan '.com' atau sejenisnya).
2.  **Membuat Data Bersih**: Data yang masuk ke sistem website jadi lebih rapi dan benar. Ini penting banget buat website-nya supaya tidak bingung dengan data yang salah.
3.  **Keamanan**: Validasi juga bisa membantu menjaga keamanan. Misalnya, memastikan password yang kita buat cukup kuat atau mencegah orang iseng memasukkan kode berbahaya.
4.  **Pengalaman Pengguna yang Baik**: Pengguna tidak akan frustrasi karena data yang mereka masukkan salah dan tidak bisa diproses. Mereka langsung tahu di mana letak kesalahannya dan bisa segera memperbaikinya.

### Bagaimana Cara Kerjanya?

Validasi formulir bisa dilakukan di dua tempat:

*   **Di Sisi Pengguna (Client-side Validation)**: Ini dilakukan langsung di browser kita, sebelum data dikirim ke server. Ini seperti penjaga gerbang yang langsung menegur kita saat kita salah mengisi. Cepat dan responsif! Kita akan fokus pada yang ini menggunakan JavaScript.
*   **Di Sisi Server (Server-side Validation)**: Ini dilakukan setelah data dikirim ke server. Ini seperti penjaga gerbang yang lebih teliti, memeriksa ulang semua data yang sudah masuk. Ini penting untuk keamanan tambahan, karena validasi di sisi pengguna bisa saja dilewati oleh orang yang iseng.

Untuk validasi di sisi pengguna dengan JavaScript, kita biasanya melakukan hal-hal ini:

1.  **Mendengarkan Kejadian `submit`**: Kita akan mendengarkan kapan formulir mau dikirim. Ini adalah momen yang tepat untuk memeriksa semua data.
2.  **Memeriksa Setiap Kolom**: Kita akan melihat satu per satu kolom di formulir. Apakah kosong? Apakah formatnya benar? Apakah angkanya sesuai?
3.  **Memberi Tahu Pengguna**: Kalau ada yang salah, kita akan menampilkan pesan kesalahan di dekat kolom yang salah dan mencegah formulir dikirim.

### Contoh Sederhana Form Validation

Mari kita buat formulir sederhana dengan satu kolom nama. Kita ingin memastikan kolom nama ini tidak boleh kosong.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Contoh Form Validation Sederhana</title>
    <style>
        .error-message {
            color: red;
            font-size: 0.9em;
        }
        input.invalid {
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <form id="myForm">
        <label for="nama">Nama:</label><br>
        <input type="text" id="nama" name="nama"><br>
        <span id="namaError" class="error-message"></span><br><br>

        <button type="submit">Kirim</button>
    </form>

    <script>
        const myForm = document.getElementById("myForm");
        const namaInput = document.getElementById("nama");
        const namaError = document.getElementById("namaError");

        myForm.addEventListener("submit", function(event) {
            // Mencegah formulir dikirim secara default
            event.preventDefault(); 

            let isValid = true; // Anggap formulir valid di awal

            // Validasi Nama
            if (namaInput.value.trim() === "") {
                namaError.textContent = "Nama tidak boleh kosong!";
                namaInput.classList.add("invalid");
                isValid = false;
            } else {
                namaError.textContent = "";
                namaInput.classList.remove("invalid");
            }

            // Jika semua valid, baru kirim formulir (simulasi)
            if (isValid) {
                alert("Formulir berhasil dikirim!");
                // Di sini biasanya data akan dikirim ke server
                // myForm.submit(); // Jika ingin benar-benar mengirim formulir
            }
        });
    </script>
</body>
</html>
```

Di contoh ini, kita menggunakan `event.preventDefault()` untuk menghentikan pengiriman formulir sementara. Ini memberi kita kesempatan untuk memeriksa semua data. Jika `isValid` tetap `true` setelah semua pemeriksaan, barulah kita bisa melanjutkan pengiriman formulir atau melakukan hal lain.

### 5 Studi Kasus Form Validation

Mari kita coba berbagai jenis validasi seperti penjaga gerbang yang punya banyak aturan!

#### Studi Kasus 1: Validasi Kolom Kosong untuk Beberapa Input

Kita akan membuat formulir pendaftaran sederhana dengan nama, email, dan password. Semua kolom tidak boleh kosong.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 1: Validasi Kolom Kosong</title>
    <style>
        .error-message {
            color: red;
            font-size: 0.9em;
        }
        input.invalid {
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <form id="registrationForm">
        <div>
            <label for="regName">Nama:</label><br>
            <input type="text" id="regName" name="regName">
            <span id="regNameError" class="error-message"></span>
        </div>
        <div>
            <label for="regEmail">Email:</label><br>
            <input type="email" id="regEmail" name="regEmail">
            <span id="regEmailError" class="error-message"></span>
        </div>
        <div>
            <label for="regPassword">Password:</label><br>
            <input type="password" id="regPassword" name="regPassword">
            <span id="regPasswordError" class="error-message"></span>
        </div>
        <br>
        <button type="submit">Daftar</button>
    </form>

    <script>
        const regForm = document.getElementById("registrationForm");
        const regNameInput = document.getElementById("regName");
        const regEmailInput = document.getElementById("regEmail");
        const regPasswordInput = document.getElementById("regPassword");

        const regNameError = document.getElementById("regNameError");
        const regEmailError = document.getElementById("regEmailError");
        const regPasswordError = document.getElementById("regPasswordError");

        regForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let isValid = true;

            // Validasi Nama
            if (regNameInput.value.trim() === "") {
                regNameError.textContent = "Nama tidak boleh kosong!";
                regNameInput.classList.add("invalid");
                isValid = false;
            } else {
                regNameError.textContent = "";
                regNameInput.classList.remove("invalid");
            }

            // Validasi Email
            if (regEmailInput.value.trim() === "") {
                regEmailError.textContent = "Email tidak boleh kosong!";
                regEmailInput.classList.add("invalid");
                isValid = false;
            } else {
                regEmailError.textContent = "";
                regEmailInput.classList.remove("invalid");
            }

            // Validasi Password
            if (regPasswordInput.value.trim() === "") {
                regPasswordError.textContent = "Password tidak boleh kosong!";
                regPasswordInput.classList.add("invalid");
                isValid = false;
            } else {
                regPasswordError.textContent = "";
                regPasswordInput.classList.remove("invalid");
            }

            if (isValid) {
                alert("Pendaftaran berhasil!");
            }
        });
    </script>
</body>
</html>
```

#### Studi Kasus 2: Validasi Format Email

Kita akan memastikan kolom email diisi dengan format email yang benar (misalnya, `nama@contoh.com`).

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 2: Validasi Email</title>
    <style>
        .error-message {
            color: red;
            font-size: 0.9em;
        }
        input.invalid {
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <form id="emailForm">
        <label for="userEmail">Email:</label><br>
        <input type="text" id="userEmail" name="userEmail">
        <span id="userEmailError" class="error-message"></span><br><br>
        <button type="submit">Kirim</button>
    </form>

    <script>
        const emailForm = document.getElementById("emailForm");
        const userEmailInput = document.getElementById("userEmail");
        const userEmailError = document.getElementById("userEmailError");

        emailForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let isValid = true;

            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

            if (userEmailInput.value.trim() === "") {
                userEmailError.textContent = "Email tidak boleh kosong!";
                userEmailInput.classList.add("invalid");
                isValid = false;
            } else if (!emailPattern.test(userEmailInput.value)) {
                userEmailError.textContent = "Format email tidak valid!";
                userEmailInput.classList.add("invalid");
                isValid = false;
            } else {
                userEmailError.textContent = "";
                userEmailInput.classList.remove("invalid");
            }

            if (isValid) {
                alert("Email berhasil divalidasi!");
            }
        });
    </script>
</body>
</html>
```

#### Studi Kasus 3: Validasi Panjang Password Minimum

Kita akan memastikan password yang dimasukkan memiliki panjang minimal 6 karakter.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 3: Validasi Password</title>
    <style>
        .error-message {
            color: red;
            font-size: 0.9em;
        }
        input.invalid {
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <form id="passwordForm">
        <label for="userPassword">Password:</label><br>
        <input type="password" id="userPassword" name="userPassword">
        <span id="userPasswordError" class="error-message"></span><br><br>
        <button type="submit">Kirim</button>
    </form>

    <script>
        const passwordForm = document.getElementById("passwordForm");
        const userPasswordInput = document.getElementById("userPassword");
        const userPasswordError = document.getElementById("userPasswordError");

        passwordForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let isValid = true;

            if (userPasswordInput.value.trim() === "") {
                userPasswordError.textContent = "Password tidak boleh kosong!";
                userPasswordInput.classList.add("invalid");
                isValid = false;
            } else if (userPasswordInput.value.length < 6) {
                userPasswordError.textContent = "Password minimal 6 karakter!";
                userPasswordInput.classList.add("invalid");
                isValid = false;
            } else {
                userPasswordError.textContent = "";
                userPasswordInput.classList.remove("invalid");
            }

            if (isValid) {
                alert("Password valid!");
            }
        });
    </script>
</body>
</html>
```

#### Studi Kasus 4: Validasi Angka Saja (misal: Umur)

Kita akan membuat kolom umur yang hanya boleh diisi dengan angka.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 4: Validasi Angka</title>
    <style>
        .error-message {
            color: red;
            font-size: 0.9em;
        }
        input.invalid {
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <form id="ageForm">
        <label for="userAge">Umur:</label><br>
        <input type="text" id="userAge" name="userAge">
        <span id="userAgeError" class="error-message"></span><br><br>
        <button type="submit">Kirim</button>
    </form>

    <script>
        const ageForm = document.getElementById("ageForm");
        const userAgeInput = document.getElementById("userAge");
        const userAgeError = document.getElementById("userAgeError");

        ageForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let isValid = true;

            const ageValue = userAgeInput.value.trim();

            if (ageValue === "") {
                userAgeError.textContent = "Umur tidak boleh kosong!";
                userAgeInput.classList.add("invalid");
                isValid = false;
            } else if (isNaN(ageValue) || parseInt(ageValue) <= 0) {
                userAgeError.textContent = "Umur harus angka positif!";
                userAgeInput.classList.add("invalid");
                isValid = false;
            } else {
                userAgeError.textContent = "";
                userAgeInput.classList.remove("invalid");
            }

            if (isValid) {
                alert("Umur valid!");
            }
        });
    </script>
</body>
</html>
```

#### Studi Kasus 5: Konfirmasi Password (Password Match)

Kita akan membuat dua kolom password: satu untuk password baru, satu lagi untuk konfirmasi password. Keduanya harus sama.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 5: Konfirmasi Password</title>
    <style>
        .error-message {
            color: red;
            font-size: 0.9em;
        }
        input.invalid {
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <form id="confirmPasswordForm">
        <div>
            <label for="newPassword">Password Baru:</label><br>
            <input type="password" id="newPassword" name="newPassword">
            <span id="newPasswordError" class="error-message"></span>
        </div>
        <div>
            <label for="confirmPassword">Konfirmasi Password:</label><br>
            <input type="password" id="confirmPassword" name="confirmPassword">
            <span id="confirmPasswordError" class="error-message"></span>
        </div>
        <br>
        <button type="submit">Ubah Password</button>
    </form>

    <script>
        const confirmPasswordForm = document.getElementById("confirmPasswordForm");
        const newPasswordInput = document.getElementById("newPassword");
        const confirmPasswordInput = document.getElementById("confirmPassword");

        const newPasswordError = document.getElementById("newPasswordError");
        const confirmPasswordError = document.getElementById("confirmPasswordError");

        confirmPasswordForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let isValid = true;

            // Validasi Password Baru (tidak boleh kosong dan minimal 6 karakter)
            if (newPasswordInput.value.trim() === "") {
                newPasswordError.textContent = "Password baru tidak boleh kosong!";
                newPasswordInput.classList.add("invalid");
                isValid = false;
            } else if (newPasswordInput.value.length < 6) {
                newPasswordError.textContent = "Password minimal 6 karakter!";
                newPasswordInput.classList.add("invalid");
                isValid = false;
            } else {
                newPasswordError.textContent = "";
                newPasswordInput.classList.remove("invalid");
            }

            // Validasi Konfirmasi Password (tidak boleh kosong)
            if (confirmPasswordInput.value.trim() === "") {
                confirmPasswordError.textContent = "Konfirmasi password tidak boleh kosong!";
                confirmPasswordInput.classList.add("invalid");
                isValid = false;
            } else if (newPasswordInput.value !== confirmPasswordInput.value) {
                confirmPasswordError.textContent = "Password tidak cocok!";
                confirmPasswordInput.classList.add("invalid");
                isValid = false;
            } else {
                confirmPasswordError.textContent = "";
                confirmPasswordInput.classList.remove("invalid");
            }

            if (isValid) {
                alert("Password berhasil diubah!");
            }
        });
    </script>
</body>
</html>
```

Hebat! Sekarang kita sudah tahu bagaimana cara membuat penjaga gerbang yang baik hati untuk formulir-formulir kita. Ini akan membuat website kita lebih rapi dan aman. Selanjutnya, kita akan belajar tentang tempat penyimpanan rahasia di browser!




## 3. Local Storage dan Session Storage: Kotak Penyimpanan Rahasia di Browser

Bayangkan kalian punya kotak harta karun rahasia. Kalian bisa menyimpan mainan kesayangan kalian di sana, dan kapanpun kalian mau, kalian bisa mengambilnya lagi. Bahkan kalau kalian pergi bermain ke tempat lain dan kembali lagi, mainan itu masih ada di dalam kotak. Nah, di dunia web, kita punya dua kotak harta karun rahasia yang mirip, namanya `Local Storage` dan `Session Storage`.

Kedua kotak ini adalah tempat di browser kita (aplikasi untuk membuka website seperti Chrome, Firefox, atau Safari) di mana website bisa menyimpan sedikit informasi. Informasi ini bisa berupa nama pengguna, pengaturan yang kalian suka, atau barang-barang yang kalian masukkan ke keranjang belanja online.

### Kenapa Local Storage dan Session Storage Penting?

Kedua penyimpanan ini sangat berguna untuk:

1.  **Mengingat Preferensi Pengguna**: Misalnya, kalau kalian suka tema gelap di sebuah website, website itu bisa menyimpan pilihan kalian di `Local Storage`. Jadi, setiap kali kalian kembali ke website itu, tema gelapnya sudah langsung aktif tanpa perlu diatur lagi.
2.  **Menyimpan Data Sementara**: Kalau kalian sedang mengisi formulir panjang dan tiba-tiba koneksi internet terputus, data yang sudah kalian ketik bisa disimpan di `Session Storage` atau `Local Storage` agar tidak hilang. Jadi, saat kalian kembali, kalian bisa melanjutkan dari tempat terakhir.
3.  **Meningkatkan Pengalaman Pengguna**: Website jadi terasa lebih personal dan cepat karena bisa mengingat hal-hal kecil tentang kalian.

### Perbedaan Local Storage dan Session Storage

Ini dia perbedaan utama antara dua kotak harta karun kita:

| Fitur               | Local Storage                                     | Session Storage                                  |
| :------------------ | :------------------------------------------------ | :----------------------------------------------- |
| **Daya Tahan**      | Data tersimpan selamanya (sampai dihapus manual) | Data tersimpan selama tab/jendela browser terbuka |
| **Akses**           | Bisa diakses oleh semua tab/jendela dari domain yang sama | Hanya bisa diakses oleh tab/jendela yang membuatnya |
| **Kapasitas**       | Lebih besar (sekitar 5-10 MB)                     | Lebih kecil (sekitar 5 MB)                       |
| **Contoh Penggunaan** | Tema website, preferensi pengguna, data login (ingat saya) | Keranjang belanja, data formulir sementara       |

Anggap saja `Local Storage` itu seperti buku harian yang isinya tidak akan hilang sampai kalian sendiri yang merobek halamannya. Sedangkan `Session Storage` itu seperti catatan di papan tulis yang akan terhapus begitu kalian menutup kelasnya (tab browser).

### Cara Menggunakan Local Storage dan Session Storage

Keduanya punya cara pakai yang mirip, seperti punya kunci yang sama untuk membuka kotak. Ada tiga hal utama yang bisa kita lakukan:

1.  **`setItem(key, value)`**: Untuk menyimpan sesuatu. `key` itu seperti nama barangnya, dan `value` itu barangnya. Ingat, `value` harus berupa teks (string).
2.  **`getItem(key)`**: Untuk mengambil sesuatu. Kita sebutkan nama barangnya (`key`), nanti dia akan mengembalikan barangnya.
3.  **`removeItem(key)`**: Untuk menghapus satu barang. Kita sebutkan nama barangnya (`key`), nanti barang itu akan hilang dari kotak.
4.  **`clear()`**: Untuk menghapus semua barang di dalam kotak. Hati-hati pakai ini ya, nanti semua barang hilang!

Karena `value` harus berupa teks, kalau kita mau menyimpan data yang lebih kompleks seperti daftar belanja (array) atau informasi pengguna (object), kita harus mengubahnya dulu menjadi teks menggunakan `JSON.stringify()`. Dan saat mengambilnya kembali, kita ubah lagi menjadi bentuk aslinya menggunakan `JSON.parse()`.

### Contoh Sederhana Local Storage

Mari kita coba menyimpan nama pengguna di `Local Storage`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Contoh Local Storage Sederhana</title>
</head>
<body>
    <input type="text" id="namaPengguna" placeholder="Masukkan nama Anda">
    <button id="simpanNama">Simpan Nama</button>
    <button id="ambilNama">Ambil Nama</button>
    <button id="hapusNama">Hapus Nama</button>
    <p>Nama yang tersimpan: <span id="tampilNama"></span></p>

    <script>
        const namaInput = document.getElementById("namaPengguna");
        const simpanBtn = document.getElementById("simpanNama");
        const ambilBtn = document.getElementById("ambilNama");
        const hapusBtn = document.getElementById("hapusNama");
        const tampilNamaSpan = document.getElementById("tampilNama");

        // Saat halaman dimuat, coba ambil nama yang mungkin sudah tersimpan
        document.addEventListener("DOMContentLoaded", function() {
            const namaTersimpan = localStorage.getItem("user_name");
            if (namaTersimpan) {
                tampilNamaSpan.textContent = namaTersimpan;
                namaInput.value = namaTersimpan; // Isi input dengan nama yang tersimpan
            }
        });

        simpanBtn.addEventListener("click", function() {
            const nama = namaInput.value;
            if (nama) {
                localStorage.setItem("user_name", nama); // Simpan nama dengan kunci "user_name"
                tampilNamaSpan.textContent = nama;
                alert("Nama berhasil disimpan!");
            } else {
                alert("Silakan masukkan nama dulu!");
            }
        });

        ambilBtn.addEventListener("click", function() {
            const namaTersimpan = localStorage.getItem("user_name");
            if (namaTersimpan) {
                tampilNamaSpan.textContent = namaTersimpan;
                alert("Nama yang diambil: " + namaTersimpan);
            } else {
                tampilNamaSpan.textContent = "Tidak ada nama tersimpan.";
                alert("Tidak ada nama tersimpan.");
            }
        });

        hapusBtn.addEventListener("click", function() {
            localStorage.removeItem("user_name"); // Hapus nama dengan kunci "user_name"
            tampilNamaSpan.textContent = "";
            namaInput.value = "";
            alert("Nama berhasil dihapus!");
        });
    </script>
</body>
</html>
```

### 5 Studi Kasus Local Storage dan Session Storage

Mari kita bermain dengan kotak penyimpanan rahasia ini dengan berbagai cara!

#### Studi Kasus 1: Menyimpan Preferensi Tema (Local Storage)

Kita akan membuat tombol untuk mengubah tema website (terang/gelap) dan menyimpannya agar tetap sama saat halaman dibuka kembali.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 1: Tema Website</title>
    <style>
        body {
            font-family: sans-serif;
            transition: background-color 0.3s, color 0.3s;
        }
        .light-theme {
            background-color: #ffffff;
            color: #333333;
        }
        .dark-theme {
            background-color: #333333;
            color: #ffffff;
        }
    </style>
</head>
<body>
    <h1>Selamat Datang!</h1>
    <p>Ini adalah contoh website dengan tema yang bisa diubah.</p>
    <button id="toggleTheme">Ganti Tema</button>

    <script>
        const toggleThemeBtn = document.getElementById("toggleTheme");
        const body = document.body;

        // Fungsi untuk menerapkan tema
        function applyTheme(theme) {
            if (theme === "dark") {
                body.classList.remove("light-theme");
                body.classList.add("dark-theme");
            } else {
                body.classList.remove("dark-theme");
                body.classList.add("light-theme");
            }
        }

        // Saat halaman dimuat, cek tema yang tersimpan di Local Storage
        document.addEventListener("DOMContentLoaded", function() {
            const savedTheme = localStorage.getItem("website_theme");
            if (savedTheme) {
                applyTheme(savedTheme);
            } else {
                applyTheme("light"); // Tema default jika belum ada yang tersimpan
            }
        });

        // Saat tombol diganti tema diklik
        toggleThemeBtn.addEventListener("click", function() {
            if (body.classList.contains("dark-theme")) {
                applyTheme("light");
                localStorage.setItem("website_theme", "light");
            } else {
                applyTheme("dark");
                localStorage.setItem("website_theme", "dark");
            }
        });
    </script>
</body>
</html>
```

#### Studi Kasus 2: Menyimpan Item Keranjang Belanja (Session Storage)

Kita akan membuat simulasi keranjang belanja. Item yang ditambahkan akan tersimpan di `Session Storage` dan akan hilang jika tab browser ditutup.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 2: Keranjang Belanja</title>
</head>
<body>
    <h1>Keranjang Belanja</h1>
    <input type="text" id="itemInput" placeholder="Nama Barang">
    <button id="addItem">Tambah ke Keranjang</button>
    <ul id="cartList"></ul>
    <button id="clearCart">Kosongkan Keranjang</button>

    <script>
        const itemInput = document.getElementById("itemInput");
        const addItemBtn = document.getElementById("addItem");
        const cartList = document.getElementById("cartList");
        const clearCartBtn = document.getElementById("clearCart");

        let cartItems = [];

        // Fungsi untuk menampilkan item di keranjang
        function renderCart() {
            cartList.innerHTML = ""; // Kosongkan daftar dulu
            if (cartItems.length === 0) {
                const li = document.createElement("li");
                li.textContent = "Keranjang kosong.";
                cartList.appendChild(li);
            } else {
                cartItems.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item;
                    cartList.appendChild(li);
                });
            }
        }

        // Saat halaman dimuat, coba ambil item dari Session Storage
        document.addEventListener("DOMContentLoaded", function() {
            const savedCart = sessionStorage.getItem("shopping_cart");
            if (savedCart) {
                cartItems = JSON.parse(savedCart); // Ubah dari teks ke array
            }
            renderCart();
        });

        // Tambah item ke keranjang
        addItemBtn.addEventListener("click", function() {
            const newItem = itemInput.value.trim();
            if (newItem) {
                cartItems.push(newItem);
                sessionStorage.setItem("shopping_cart", JSON.stringify(cartItems)); // Simpan sebagai teks
                itemInput.value = "";
                renderCart();
            } else {
                alert("Silakan masukkan nama barang!");
            }
        });

        // Kosongkan keranjang
        clearCartBtn.addEventListener("click", function() {
            cartItems = [];
            sessionStorage.removeItem("shopping_cart"); // Hapus dari Session Storage
            renderCart();
            alert("Keranjang belanja dikosongkan!");
        });
    </script>
</body>
</html>
```

#### Studi Kasus 3: Menyimpan Data Formulir Sementara (Session Storage)

Kita akan membuat formulir dengan beberapa input. Jika pengguna menutup tab tanpa submit, data yang sudah diisi akan tetap ada saat tab dibuka kembali (selama sesi browser belum berakhir).

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 3: Data Formulir Sementara</title>
</head>
<body>
    <h1>Isi Formulir Ini</h1>
    <form id="tempForm">
        <label for="firstName">Nama Depan:</label><br>
        <input type="text" id="firstName" name="firstName"><br><br>

        <label for="lastName">Nama Belakang:</label><br>
        <input type="text" id="lastName" name="lastName"><br><br>

        <label for="emailAddress">Email:</label><br>
        <input type="email" id="emailAddress" name="emailAddress"><br><br>

        <button type="submit">Kirim Formulir</button>
    </form>

    <script>
        const tempForm = document.getElementById("tempForm");
        const firstNameInput = document.getElementById("firstName");
        const lastNameInput = document.getElementById("lastName");
        const emailAddressInput = document.getElementById("emailAddress");

        // Saat halaman dimuat, coba isi formulir dari Session Storage
        document.addEventListener("DOMContentLoaded", function() {
            const savedFormData = sessionStorage.getItem("temp_form_data");
            if (savedFormData) {
                const data = JSON.parse(savedFormData);
                firstNameInput.value = data.firstName || "";
                lastNameInput.value = data.lastName || "";
                emailAddressInput.value = data.emailAddress || "";
            }
        });

        // Setiap kali ada perubahan di input, simpan ke Session Storage
        tempForm.addEventListener("input", function() {
            const formData = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                emailAddress: emailAddressInput.value
            };
            sessionStorage.setItem("temp_form_data", JSON.stringify(formData));
        });

        // Saat formulir dikirim, hapus data sementara
        tempForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Formulir berhasil dikirim! Data sementara dihapus.");
            sessionStorage.removeItem("temp_form_data");
            tempForm.reset(); // Mengosongkan formulir
        });
    </script>
</body>
</html>
```

#### Studi Kasus 4: Menghitung Kunjungan Pengguna (Local Storage)

Kita akan menghitung berapa kali pengguna mengunjungi halaman ini dan menampilkannya. Hitungan ini akan terus bertambah setiap kali halaman dibuka.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 4: Hitung Kunjungan</title>
</head>
<body>
    <h1>Selamat Datang Kembali!</h1>
    <p>Anda telah mengunjungi halaman ini sebanyak <span id="visitCount">0</span> kali.</p>

    <script>
        const visitCountSpan = document.getElementById("visitCount");

        document.addEventListener("DOMContentLoaded", function() {
            let count = localStorage.getItem("page_visits");
            if (count) {
                count = parseInt(count) + 1; // Ubah ke angka, tambahkan 1
            } else {
                count = 1; // Jika belum ada, mulai dari 1
            }
            localStorage.setItem("page_visits", count.toString()); // Simpan kembali sebagai teks
            visitCountSpan.textContent = count;
        });
    </script>
</body>
</html>
```

#### Studi Kasus 5: Menyimpan Daftar Tugas (To-Do List) (Local Storage)

Kita akan membuat aplikasi daftar tugas sederhana. Tugas yang ditambahkan akan tersimpan di `Local Storage` dan tidak akan hilang meskipun browser ditutup.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Studi Kasus 5: To-Do List</title>
</head>
<body>
    <h1>Daftar Tugasku</h1>
    <input type="text" id="todoInput" placeholder="Tambahkan tugas baru">
    <button id="addTodo">Tambah Tugas</button>
    <ul id="todoList"></ul>
    <button id="clearAllTodos">Hapus Semua Tugas</button>

    <script>
        const todoInput = document.getElementById("todoInput");
        const addTodoBtn = document.getElementById("addTodo");
        const todoList = document.getElementById("todoList");
        const clearAllTodosBtn = document.getElementById("clearAllTodos");

        let todos = [];

        // Fungsi untuk menampilkan daftar tugas
        function renderTodos() {
            todoList.innerHTML = "";
            if (todos.length === 0) {
                const li = document.createElement("li");
                li.textContent = "Tidak ada tugas. Tambahkan satu!";
                todoList.appendChild(li);
            } else {
                todos.forEach((todo, index) => {
                    const li = document.createElement("li");
                    li.textContent = todo;

                    // Tambahkan tombol hapus untuk setiap tugas
                    const deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "Hapus";
                    deleteBtn.style.marginLeft = "10px";
                    deleteBtn.addEventListener("click", function() {
                        deleteTodo(index);
                    });
                    li.appendChild(deleteBtn);

                    todoList.appendChild(li);
                });
            }
        }

        // Fungsi untuk menyimpan tugas ke Local Storage
        function saveTodos() {
            localStorage.setItem("my_todos", JSON.stringify(todos));
        }

        // Fungsi untuk menghapus tugas
        function deleteTodo(index) {
            todos.splice(index, 1); // Hapus 1 item dari array pada posisi index
            saveTodos();
            renderTodos();
        }

        // Saat halaman dimuat, ambil tugas dari Local Storage
        document.addEventListener("DOMContentLoaded", function() {
            const savedTodos = localStorage.getItem("my_todos");
            if (savedTodos) {
                todos = JSON.parse(savedTodos);
            }
            renderTodos();
        });

        // Tambah tugas baru
        addTodoBtn.addEventListener("click", function() {
            const newTodo = todoInput.value.trim();
            if (newTodo) {
                todos.push(newTodo);
                saveTodos();
                todoInput.value = "";
                renderTodos();
            } else {
                alert("Silakan masukkan tugas!");
            }
        });

        // Hapus semua tugas
        clearAllTodosBtn.addEventListener("click", function() {
            if (confirm("Anda yakin ingin menghapus semua tugas?")) {
                todos = [];
                localStorage.removeItem("my_todos");
                renderTodos();
                alert("Semua tugas dihapus!");
            }
        });
    </script>
</body>
</html>
```

Luar biasa! Sekarang kalian sudah punya kekuatan untuk membuat website yang bisa mengingat hal-hal penting tentang penggunanya. Ini adalah langkah besar dalam membuat website yang lebih pintar dan ramah pengguna. Selamat belajar dan terus berkreasi!

