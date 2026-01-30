document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".figure img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "lightbox";

      const fullImg = document.createElement("img");
      fullImg.src = img.src;

      overlay.appendChild(fullImg);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });
  });
});
