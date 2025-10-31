/* Interactions accessibles pour le site Studio La Merveille */
(function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const name = document.getElementById('name');
            const prename = document.getElementById('prename');
            const email = document.getElementById('email');
            const tel = document.getElementById('tel');
            const sexe = document.getElementById('sexe');
            const msg = document.getElementById('msg');
            const errorsEl = document.getElementById('errors');
            
            const messages = [];
            
            if (!name?.value.trim()) messages.push('Le nom est requis');
            if (!prename?.value.trim()) messages.push('Le prénom est requis');
            if (!email?.value.trim()) messages.push('L\'email est requis');
            if (!msg?.value.trim() || msg.value.trim().length < 10) messages.push('Le message doit contenir au moins 10 caractères');
            
            if (messages.length) {
                e.preventDefault();
                if (errorsEl) {
                    errorsEl.innerHTML = `<ul>${messages.map(m => `<li>${m}</li>`).join('')}</ul>`;
                    errorsEl.hidden = false;
                    errorsEl.focus?.();
                } else {
                    alert(messages.join('\n'));
                }
                const firstInvalid = [name, prename, email, tel, sexe, msg].find(el => !el.checkValidity?.() || (el === msg && msg.value.trim().length < 10));
                firstInvalid?.focus();
            } else {
                alert(`Merci ${prename.value}, votre message a bien été envoyé !`);
            }
        });
    }

        /* Lightbox pour la galerie */
        const lightbox = document.getElementById('lightbox');
        if (lightbox) {
        const imgEl = document.getElementById('lightbox-img');
        const btnClose = document.getElementById('lightbox-close');
        let lastTrigger = null;
        const open = (src) => {
            if (!imgEl) return;
            imgEl.setAttribute('src', src);
            lightbox.hidden = false;
            lightbox.setAttribute('aria-hidden', 'false');
            btnClose?.focus();
        };
        const close = () => {
            lightbox.hidden = true;
            lightbox.setAttribute('aria-hidden', 'true');
            if (lastTrigger) lastTrigger.focus();
        };
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (target instanceof HTMLElement && target.matches('[data-lightbox]')) {
                e.preventDefault();
                lastTrigger = target;
                const src = target.getAttribute('src');
                if (src) open(src);
            }
        });
        btnClose?.addEventListener('click', close);
        lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
        }
})();





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
