let pageLoaded = false;

addEventListener('DOMContentLoaded', (e) => {
    pageLoaded = true;
});

//profile picture
addEventListener("mousemove", moveImage);

function moveImage(input) {
    const img = document.querySelector("#profilePic");
    const imageDisplacement = 50;

    img.style.transform = `translate(${-input.clientX / imageDisplacement}px, ${-input.clientY / (imageDisplacement * 2)}px)`;
}