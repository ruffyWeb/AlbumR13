// Efek gerakan latar belakang
document.body.style.transition = "background-color 1s ease";

// Efek pergerakan foto saat scroll
const photos = document.querySelectorAll('.photo');
window.addEventListener('scroll', () => {
    photos.forEach(photo => {
        const rect = photo.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            photo.style.transform = "scale(1.05)";
        } else {
            photo.style.transform = "scale(1)";
        }
    });
});

// Efek klip suara saat klik gambar
const audio = new Audio('click-sound.mp3'); // Ganti dengan file audio yang Anda pilih

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        audio.play();
    });
});

// Animasi teks judul saat halaman dimuat
const title = document.querySelector('h1');
title.style.opacity = 0;
title.style.transform = "translateY(-50px)";

// Fungsi untuk mengatur animasi judul
const animateTitle = () => {
    title.style.transition = "opacity 1s, transform 1s";
    title.style.opacity = 1;
    title.style.transform = "translateY(0)";
};

// Menampilkan animasi judul setelah halaman selesai dimuat
window.addEventListener('load', animateTitle);

// Efek partikel animasi di latar belakang
const particles = [];
const numParticles = 50;
const particleContainer = document.createElement('div');
particleContainer.classList.add('particle-container');
document.body.appendChild(particleContainer);

for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particleContainer.appendChild(particle);
    particles.push(particle);
}

// Fungsi untuk membuat partikel bergerak
const createParticles = () => {
    particles.forEach(particle => {
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        const size = Math.random() * 5 + 5; // Ukuran partikel

        particle.style.left = `${xPos}px`;
        particle.style.top = `${yPos}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animation = `particle-animation 2s infinite ease-in-out`;
    });
};

// Membuat partikel bergerak setiap 1 detik
setInterval(createParticles, 1000);

// Membuat animasi partikel
document.styleSheets[0].insertRule(`
@keyframes particle-animation {
    0% { transform: scale(1) rotate(0); opacity: 0.8; }
    50% { transform: scale(0.6) rotate(180deg); opacity: 1; }
    100% { transform: scale(1) rotate(360deg); opacity: 0.8; }
}`, 0);