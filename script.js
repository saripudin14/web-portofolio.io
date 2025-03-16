document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed("#typing", {
        strings: ["Informatics Engineering Student", "Junior Web Developer", "IT Implementor"],
        typeSpeed: 100,  // Kecepatan mengetik
        backSpeed: 50,   // Kecepatan menghapus
        backDelay: 1500, // Jeda sebelum ganti teks
        loop: true       // Loop biar terus berjalan
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Animasi untuk gambar di dalam Portofolio
    ScrollReveal().reveal('#porto img', {
        origin: 'left',
        distance: '100px',
        duration: 1200,
        delay: 200,
        reset: true
    });

    // About Me muncul dari bawah (tetap seperti sebelumnya)
    ScrollReveal().reveal('#about', {
        origin: 'bottom',
        distance: '100px',
        duration: 1200,
        delay: 300,
        reset: true
    });

    // Animasi hanya untuk card di dalam Proyek Kuliah
    ScrollReveal().reveal('#proyek .project-card', {
        origin: 'right',
        distance: '100px',
        duration: 1200,
        delay: 400,
        reset: true
    });

    // Efek Tangga (Staggered Reveal) untuk Gambar Proyek
    ScrollReveal().reveal('.project-card', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        interval: 300, // Efek tangga: elemen muncul satu per satu
        reset: true
    });
});
