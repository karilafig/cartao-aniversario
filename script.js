document.getElementById("open-card").addEventListener("click", function() {
    var card = document.getElementById("card");
    var arrowGif = document.querySelector(".arrow-gif");
    var heartsContainer = document.querySelector(".hearts-container");

    card.style.display = "block";
    this.style.display = "none";
    arrowGif.style.display = "none";
    heartsContainer.style.display = "block";

    // Adicionar corações com atraso
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createHeart(heartsContainer);
        }, i * 100); // Atraso de 100ms entre cada coração
    }
});

function createHeart(container) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "%";
    const heartImage = document.createElement("img");
    heartImage.src = "coracao.png"; 
    heart.appendChild(heartImage);
    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}