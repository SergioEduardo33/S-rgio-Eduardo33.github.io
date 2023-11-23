const photos = document.querySelectorAll(".foto");
const infoContainer = document.querySelector(".info-container");
const infoText = document.getElementById("info-text");

photos.forEach(photo => {
    photo.addEventListener("click", () => {
        const info = photo.getAttribute("data-info");
        infoText.textContent = info;
        infoContainer.style.display = "flex";
    });
});

infoContainer.addEventListener("click", () => {
    infoContainer.style.display = "none";
});
