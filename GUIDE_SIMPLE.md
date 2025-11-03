# Guide simple (à présenter en classe)

Objectif: expliquer le site rapidement, sans termes compliqués.

1) Ce qu'il y a dans le dossier
- accueil.html: page d'accueil (présentation, horaires, avantages)
- presentation.html: équipe et mission
- galerie.html: images + extraits audio, avec grande image (lightbox)
- contact.html: formulaire (nom, courriel, message, etc.)
- style.css: l'apparence (couleurs, tailles, disposition)
- app.js: petits comportements (menu mobile, validation du formulaire, lightbox)
- photos/, musique/, sound/: fichiers médias

2) Comment ça marche (résumé très simple)
- En haut, un menu: sur mobile, le bouton ouvre/ferme le menu.
- Le style (style.css) gère les couleurs claires/sombres automatiquement et l'affichage sur mobile.
- La galerie: cliquer une image l'ouvre en grand (lightbox). Échap ferme.
- Le formulaire: si on oublie un champ important, un message rouge s'affiche. Sinon, un message de succès apparaît.

3) Démo rapide (2 minutes)
- Ouvrir accueil.html: montrer le menu, scroller, la grille de cartes.
- Rétrécir la fenêtre: montrer le bouton du menu (mobile).
- Ouvrir galerie.html: cliquer une image, montrer la fermeture avec Échap.
- Ouvrir contact.html: envoyer vide → voir erreurs; remplir correctement → succès.

4) Où regarder dans le code
- Dans style.css: les sections sont commentées (Base, Navigation, Cartes, Formulaire, etc.).
- Dans app.js: 3 blocs faciles à repérer: menu mobile, validation du formulaire, lightbox.
- Dans chaque .html: structure simple: header (menu), main (contenu), footer.

5) Personnaliser vite
- Couleurs: changer les variables au début de style.css (ex.: --primary).
- Textes et images: modifier les balises <h1>, <p>, <img> dans les pages .html.
- Musiques: remplacer les fichiers dans musique/ et mettre à jour les <audio>.

6) Points accessibilité (dire en une phrase)
- Navigation au clavier possible, focus visible, contraste, messages d'erreur annoncés.

7) Vocabulaire simple à utiliser à l'oral
- HTML: le squelette (titres, paragraphes, images, formulaires)
- CSS: l'apparence (couleurs, tailles, placements)
- JS: les petits comportements (ouvrir un menu, vérifier un formulaire)

Astuce: ouvrez les fichiers dans l'ordre: accueil.html → galerie.html → contact.html. Parlez 30 secondes de chaque, puis montrez 15-20 secondes de code (style.css ou app.js) pour illustrer.
