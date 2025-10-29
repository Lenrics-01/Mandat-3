// Sélection du son
const clickSound = document.getElementById("click-sound");

// Jouer le son lors de n'importe quel clic
document.addEventListener("click", () => {
    clickSound.currentTime = 0; // remet au début pour rejouer instantanément
    clickSound.play();
});

const data = [[nom, prenom, txt]];




let nom = document.getElementById("name");
let btn = document.getElementById("btn");
let txt = document.getElementById("msg");
let prenom = document.getElementById("prename");

function verfication() {
    if (nom.value === "" || prenom.value === "" || txt.value === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
        return false;
    }

    return true;
}

btn.addEventListener("click", function(event) {

        event.preventDefault();
        if (verfication()) {
            alert("Merci " + nom.value + ", votre message a bien été envoyé !");
        }


        nom.value = "";
        prenom.value = "";
        txt.value = "";
        nom.focus();

});
