// Sélection du son
const clickSound = document.getElementById("click-sound");

// Jouer le son lors de n'importe quel clic
document.addEventListener("click", () => {
    clickSound.currentTime = 0; // remet au début pour rejouer instantanément
    clickSound.play();
});

let nom = document.getElementById("name");
let btn = document.getElementById("btn");


btn.addEventListener("click", function() {
        location.reload();
        nom.focus();
        nom.value = "";
});
