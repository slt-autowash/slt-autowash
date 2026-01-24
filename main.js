document.getElementById("year").textContent = new Date().getFullYear();
function openLightbox(src) {
  let lb = document.querySelector(".lightbox");
  if (!lb) {
    lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = `
      <button class="lightbox-close" aria-label="Fermer">×</button>
      <img class="lightbox-img" alt="">
    `;
    document.body.appendChild(lb);

    lb.addEventListener("click", (e) => {
      if (e.target === lb || e.target.classList.contains("lightbox-close")) {
        lb.classList.remove("open");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") lb.classList.remove("open");
    });
  }

  lb.querySelector(".lightbox-img").src = src;
  lb.classList.add("open");
}

// Active le clic sur les images
document.querySelectorAll(".grid img").forEach((img) => {
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => openLightbox(img.src));
});const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));