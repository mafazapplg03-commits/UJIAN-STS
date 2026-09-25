document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".skills .reveal");

  const observerOptions = {
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Jika elemen yang muncul adalah skill-item, tambahkan jeda berurutan
        const skillItems = Array.from(document.querySelectorAll(".skill-item"));
        const itemIndex = skillItems.indexOf(entry.target);

        if (itemIndex !== -1) {
          setTimeout(() => {
            entry.target.classList.add("active");
          }, itemIndex * 150); // Jeda 150ms antar kartu
        } else {
          entry.target.classList.add("active");
        }

        observerInstance.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => observer.observe(el));

  // --- Tambahan Kode Animasi Typewriter Skill ---
  const words = ["iniii skill akuu" ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const element = document.getElementById("typewriter");
    if (!element) return; // Mencegah error jika elemen belum ada

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 1800; // Tahan sebentar setelah kata selesai diketik
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 500;
    }

    setTimeout(typeEffect, speed);
  }

  // Jalankan fungsinya
  typeEffect();

}); // <-- Taruh TEPAT SEBELUM baris penutup fungsi DOMContentLoaded ini