# Mandat-3
Répertoire destiné a la création d'un site web dynamique d'un studio de musique, pour le mandat 3

# Distribution des tâches :
Notre travail comportera 4 pages :
- Accueil
- Presentation( les membres du personnel et leur mission)
- une galerie ( presentant les oeuvres des artistes)
- contact

# Bibliographie:

 - Accueil.html 
  https://www.amplidequebec.com/services/studio-d-enregistrement
 
 -Musique utilisée
  https://www.youtube.com/watch?v=g4GhGMT2hi0&list=RDg4GhGMT2hi0&start_radio=1
  https://youtu.be/nrC9KmN58sA?list=RDnrC9KmN58sA

## Structure du projet

- `accueil.html` — Page d’accueil (présentation du studio, horaires, avantages)
- `presentation.html` — Mission et équipe
- `galerie.html` — Portfolio/galerie avec extraits audio et lightbox
- `contact.html` — Formulaire de contact accessible (validation côté client)
- `style.css` — Styles modernes et responsives (variables CSS, focus visibles, grid/flex, prefers-reduced-motion)
- `script.js` — Interactions (menu mobile, validation de formulaire, modale lightbox)
- `README.md` — Résumé WCAG 2.1 AA appliqué (à exporter en PDF pour le livrable)
- `photos/`, `musique/`, `sound/` — Ressources médias

## Lancer et tester

1. Ouvrez le dossier dans un serveur local ou double-cliquez les fichiers `.html` (un serveur local est recommandé pour éviter certaines restrictions navigateur).
2. Naviguez avec le clavier (Tab/Shift+Tab). Vérifiez :
  - Le lien « Passer au contenu » fonctionne.
  - Le menu mobile s’ouvre/ferme avec Entrée/Espace et Échap.
  - La modale (lightbox) se ferme avec Échap et rend le focus à l’élément déclencheur.
3. Formulaire de `contact.html` : soumettez sans remplir pour voir les messages d’erreur annoncés (aria-live). Remplissez et validez pour afficher le message de succès.
  4. Audio: seule une piste joue à la fois. Le bouton rond en bas à droite permet de mettre en pause/reprendre la musique d’arrière-plan.
4. Tests d’accessibilité :
  - Outils conseillés : WAVE, axe DevTools.
  - Lecteur d’écran : VoiceOver (macOS), NVDA/JAWS (Windows).

## Accessibilité

Voir `README.md` (exportez en PDF pour le livrable). Principaux points :
- Contrastes, focus visibles, navigation clavier, lien d’évitement.
- Libellés explicites, messages d’erreur accessibles (`role="alert"`, `aria-live`).
- HTML sémantique et ARIA minimale.

## Responsiveness et design

- Grilles fluides (CSS Grid/Flex), images adaptatives, audio responsif.
- Variables CSS pour la couleur/typo, transitions douces avec réduction si `prefers-reduced-motion`.
 - Types MIME audio: `.mp3` en `audio/mpeg`, `.m4a` en `audio/mp4`.

## Idées futures (optionnel)

- Zone de discussion (chat) entre artistes.
- Sections payantes (adhésion) et politique de confidentialité détaillée.
- Export CSV du formulaire ou envoi côté serveur (nécessite backend).