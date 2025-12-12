// Variable untuk mengontrol slide galeri
let currentSlide = 0;

document.addEventListener('DOMContentLoaded', function() {
    // --- 1. Fungsionalitas Navigasi Mobile ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Menutup menu ketika link diklik (di mobile)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Cek jika lebar layar kecil (seperti mobile)
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    // --- 2. Fungsionalitas Galeri Slider ---
    
    // Panggil fungsi untuk menampilkan slide pertama kali
    showSlide(currentSlide);
});


/**
 * Fungsi untuk menampilkan slide tertentu di galeri.
 * Fungsi ini dipanggil secara inline di HTML (onclick="moveSlide(1)")
 * * @param {number} n - Jumlah pergeseran (1 untuk next, -1 untuk prev)
 */
function moveSlide(n) {
    const slides = document.querySelectorAll('#cultureGallery .gallery-item');
    
    currentSlide += n;
    
    // Cek batas: Jika melebihi slide terakhir, kembali ke awal
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    // Cek batas: Jika kurang dari slide pertama, pergi ke slide terakhir
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    showSlide(currentSlide);
}


/**
 * Fungsi utama untuk mengatur posisi slider.
 * @param {number} index - Indeks slide yang akan ditampilkan.
 */
function showSlide(index) {
    const slider = document.getElementById('cultureGallery');
    const slides = document.querySelectorAll('#cultureGallery .gallery-item');
    
    if (slides.length === 0) return; // Lindungi dari error jika belum ada gambar

    // Hitung persentase pergeseran
    const offset = -index * 100;
    slider.style.transform = `translateX(${offset}%)`;
    
    // Perbarui variabel global
    currentSlide = index;
}