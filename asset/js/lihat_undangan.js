// Fungsi untuk menghitung mundur hingga tanggal tertentu 
function countdown() {
    var eventDate = new Date("January 25, 2025 16:00:00").getTime(); // Tanggal acara

    var currentDate = new Date().getTime(); // Waktu saat ini
    var timeLeft = eventDate - currentDate; // Selisih waktu antara acara dan waktu sekarang

    // Menghitung jumlah hari, jam, menit, detik
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Memperbarui tampilan dengan angka yang dihitung
    document.getElementById("days-text").innerText = days;
    document.getElementById("hours-text").innerText = hours;
    document.getElementById("minutes-text").innerText = minutes;
    document.getElementById("seconds-text").innerText = seconds;

    // Jika waktu mundur selesai
    if (timeLeft < 0) {
        clearInterval(timer); // Hentikan timer
        document.getElementById("days-text").innerText = "0";
        document.getElementById("hours-text").innerText = "0";
        document.getElementById("minutes-text").innerText = "0";
        document.getElementById("seconds-text").innerText = "0";
        alert("Acara sudah dimulai!");
    }
}

// Memanggil fungsi countdown setiap 1 detik
var timer = setInterval(countdown, 1000);

// Array gambar profil
const profileImages = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg"
];

// Fungsi untuk menangani pengiriman form konfirmasi kehadiran
document.getElementById("kehadiranForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default
    // Mengambil nilai dari form
    var nama = document.getElementById("nama").value;
    var kehadiran = document.querySelector('input[name="kehadiran"]:checked').value; // Mengambil nilai dari radio button
    var pesan = document.getElementById("pesan").value;

    // Menampilkan pesan konfirmasi
    document.getElementById("responseMessage").style.display = "block";

    // Memilih gambar profil secara acak
    var randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];

    // Menampilkan konfirmasi kehadiran di daftar tamu
    var guestList = document.getElementById("guestList");
    var guestItem = document.createElement("li");
    
    // Menambahkan foto profil
    var profileImage = `<img src="${randomImage}" alt="${nama}'s profile" style="width:50px; height:50px; border-radius:50%; margin-right:10px;">`;
    
    guestItem.innerHTML = `${profileImage}<strong>${nama}</strong> - ${kehadiran} <br> <em>${pesan}</em>`;
    guestList.appendChild(guestItem);

    // Kosongkan form setelah pengiriman
    document.getElementById("kehadiranForm").reset();
});