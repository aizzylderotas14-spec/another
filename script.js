
const photos = document.querySelectorAll(".photo-card img");

const lightbox = document.getElementById("lightbox");
const largeImage = document.getElementById("largeImage");
const closeButton = document.getElementById("closeButton");

// OPEN PHOTO WHEN CLICKED

photos.forEach(function(photo) {

    photo.addEventListener("click", function() {

        lightbox.style.display = "flex";

        largeImage.src = photo.src;

    });

});

// CLOSE PHOTO

closeButton.addEventListener("click", function() {

    lightbox.style.display = "none";

});

// CLOSE WHEN CLICKING OUTSIDE PHOTO

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});

// CLOSE USING ESCAPE KEY

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }

});

// BACKGROUND MUSIC

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", function() {

    if (music.paused) {

        music.play()
            .then(function() {
                musicButton.textContent = "⏸ Pause Music";
            })
            .catch(function() {
                alert("Please check your music.mp3 file.");
            });

    } else {

        music.pause();
        musicButton.textContent = "🎵 Play Music";

    }

});

// FLOATING HEARTS

function createHeart() {

    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = "💙";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 15 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 6000);

}

setInterval(createHeart, 800);

// OPEN THE GIFT

const giftScreen = document.getElementById("giftScreen");
const openGift = document.getElementById("openGift");

openGift.addEventListener("click", function() {

    giftScreen.classList.add("hide");

    setTimeout(function() {
        giftScreen.style.display = "none";
    }, 800);

});
