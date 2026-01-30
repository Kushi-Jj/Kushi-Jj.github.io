document.querySelectorAll(".zoomable").forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    const image = document.createElement("img");
    image.src = img.src;

    lightbox.appendChild(image);
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", () => {
      lightbox.remove();
    });
  });
});
