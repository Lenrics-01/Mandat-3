# Mandat-3
Répertoire destiné a la création d'un site web dynamique d'un studio de musique, pour le mandat 3

# Distrbition des tâches :
Notre travaille comportera 4 pages :
- Accueil
- Presentation( les membres du personnel et leur mission)
- une galerie ( presentant les oeuvres des artistes)
- contact

Micheal se charge  du contact

Lotfy se chargera de la presentation, Le personnel doit comporter un **prof de musique**, un **directeur**
,un **DJ** et quelque musicien.

Et je  me  chargera aussi de la galerie

Pour le css je propose chrysler, Massyle et Micheal

Et le javascript Massyle et Lotfy



# Bibliographie:

**Je conseille egalement de marquer ici les liens des sites vous permettant de trouver l'inspiration 
de vos pages**
 
 - Accueil.html 
   https://www.amplidequebec.com/services/studio-d-enregistrement
 
 -Musique utilisée
  https://www.youtube.com/watch?v=g4GhGMT2hi0&list=RDg4GhGMT2hi0&start_radio=1
  https://youtu.be/nrC9KmN58sA?list=RDnrC9KmN58sA

  
---

## Structure du projet

- `accueil.html` — Page d’accueil (présentation du studio, horaires, avantages)
- `presentation.html` — Mission et équipe
- `galerie.html` — Portfolio/galerie avec extraits audio et lightbox
- `contact.html` — Formulaire de contact accessible (validation côté client)
- `style.css` — Styles modernes et responsives (variables CSS, focus visibles, grid/flex, prefers-reduced-motion)
- `app.js` — Interactions (menu mobile, validation de formulaire, modale lightbox)
- `ACCESSIBILITE.md` — Résumé WCAG 2.1 AA appliqué (à exporter en PDF pour le livrable)
- `photos/`, `musique/`, `sound/` — Ressources médias

## Lancer et tester

1. Ouvrez le dossier dans un serveur local ou double-cliquez les fichiers `.html` (un serveur local est recommandé pour éviter certaines restrictions navigateur).
2. Naviguez avec le clavier (Tab/Shift+Tab). Vérifiez :
  - Le lien « Passer au contenu » fonctionne.
  - Le menu mobile s’ouvre/ferme avec Entrée/Espace et Échap.
  - La modale (lightbox) se ferme avec Échap et rend le focus à l’élément déclencheur.
3. Formulaire de `contact.html` : soumettez sans remplir pour voir les messages d’erreur annoncés (aria-live). Remplissez et validez pour afficher le message de succès.
4. Tests d’accessibilité :
  - Outils conseillés : WAVE, axe DevTools.
  - Lecteur d’écran : VoiceOver (macOS), NVDA/JAWS (Windows).

## Accessibilité

Voir `ACCESSIBILITE.md` (exportez en PDF pour le livrable). Principaux points :
- Contrastes, focus visibles, navigation clavier, lien d’évitement.
- Libellés explicites, messages d’erreur accessibles (`role="alert"`, `aria-live`).
- HTML sémantique et ARIA minimale.

## Responsiveness et design

- Grilles fluides (CSS Grid/Flex), images adaptatives, audio responsif.
- Variables CSS pour la couleur/typo, transitions douces avec réduction si `prefers-reduced-motion`.

## Idées futures (optionnel)

- Zone de discussion (chat) entre artistes.
- Sections payantes (adhésion) et politique de confidentialité détaillée.
- Export CSV du formulaire ou envoi côté serveur (nécessite backend).


