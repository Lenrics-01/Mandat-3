// Sélection du son
/**const clickSound = document.getElementById("click-sound");

// Jouer le son lors de n'importe quel clic
document.addEventListener("click", () => {
    clickSound.currentTime = 0; 
    clickSound.play();
});*/

console.log("✅ script.js bien chargé !");




let nom = document.getElementById("name");
let btn = document.getElementById("btn");
let txt = document.getElementById("msg");
let prenom = document.getElementById("prename");
let genre = document.getElementById("sexe")

const data = [[nom, prenom, txt, genre]];

function verfication() {
    if (nom.value === "" || prenom.value === "" || txt.value === "" || genre.value == "" || genre.value !== "Homme" && genre.value !== "Femme" ) {
        alert("Veuillez remplir tous les champs du formulaire et verifier si vous avez bien fait.");
        console.log(nom.value)
        console.log(prenom.value)
        console.log(genre.value)
        console.log(txt.value)
        return false;
    }

    return true;
}
if (btn){
btn.addEventListener("click", function(event) {

        event.preventDefault();
        if (verfication()) {
            alert("Merci " + nom.value + ", votre message a bien été envoyé !");
        }


        nom.value = "";
        prenom.value = "";
        txt.value = "";
        genre.value = "";
        nom.focus();

});
}


const audios = document.querySelectorAll('audio')

audios.forEach(audio =>{
    audio.addEventListener('play', ()=>{
        audios.forEach(otherAudio =>{
            if(otherAudio !== audio){
                otherAudio.pause()
            }
        })
    })
})

