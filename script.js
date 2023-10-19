// Fungsi untuk menampilkan latitude dan longitude
function showLocation(position) {
    const latitude = document.getElementById('latitude');
    const longitude = document.getElementById('longitude');

    latitude.textContent = position.coords.latitude;
    longitude.textContent = position.coords.longitude;

    // Sembunyikan splash screen dan tampilkan konten
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

// Fungsi untuk menangani kesalahan geolokasi
function showError(error) {
    alert(`Error: ${error.message}`);
}

// Cek geolokasi pengguna
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(showLocation, showError);
} else {
    alert("Geolokasi tidak didukung oleh perangkat Anda.");
}

