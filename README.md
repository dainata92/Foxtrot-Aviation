Titre: 
Vidéothèque

À propos
Ce projet a été réalisé dans le cadre d’un test technique, avec pour objectif de construire une vidéothèque web en deux jours. Les données des films sont fournies dans un fichier JSON. L’application permet de visualiser, rechercher, trier et filtrer les films, ainsi que d’afficher les détails d’un film sélectionné.

Choix techniques
Au départ, j'avais envisagé de réaliser ce projet avec Vue.js, mais n'étant pas encore formée à React.js, j'ai finalement opté pour une approche basée sur HTML, CSS et JavaScript, afin de rester dans un environnement que je maîtrise mieux.

Le projet se compose de :
3 pages HTML :
index.html (Page d'accueil)
catalogue.html (Catalogue de films avec filtres et tri)
details.html (Détails d’un film)
1 fichier CSS
3 fichiers JS (un pour chaque page, afin de mieux isoler les responsabilités et éviter les erreurs)

Fonctionnalités principales
1. Page d'accueil (index.html)
Un carrousel affichant 10 films aléatoires
Deux boutons permettent de naviguer dans le carrousel
Le carrousel est circulaire (retour au début après le dernier film)
Chargement optimisé des images

2. Catalogue (catalogue.html)
Affichage de tous les films
Barre de recherche (par titre)
Tri des films :
    Par date de sortie
    Par titre
    Filtrage par genre (avec menu <select>)
Utilisation de méthodes JavaScript telles que sort(), some() et toLowerCase() pour la gestion du tri et du filtrage
Gestion sensible à la casse pour les filtres (corrigée après débogage)

3. Détail d’un film (details.html)
Affichage dynamique des informations d’un film sélectionné
Utilisation de URLSearchParams pour récupérer l'ID du film dans l’URL
Méthode find() pour localiser le bon film dans les données


Défis rencontrés
Difficulté à intégrer Vue.js, d’où le retour vers HTML/CSS/JS natif
Extraction des données JSON → solution trouvée en les transformant en un objet JS
Carrousel fonctionnel : calcul d’index circulaire avec %
Compréhension et utilisation de sort(), some(), find() et URLSearchParams
Sensibilité à la casse lors du filtrage par genre
Implémentation partielle du multi-filtrage (fonctionnalité à améliorer)

Design
Le design est volontairement simple et épuré, sans animations excessives, afin de privilégier la lisibilité et la fonctionnalité.

Pour aller plus loin
Finaliser le filtrage multi-genres
Améliorer l’expérience utilisateur et le design (animations, transitions)
Passer à un framework comme Vue.js ou React.js pour une architecture plus modulaire


Aide:
Merci à ma formatrice pour son aide ponctuelle, notamment sur la transformation du JSON et sur certaines balises HTML (<select>). J'étais bloquée dès le début, j'ai eu du mal a récuperer les données du json, donc ma formatrice a eu l'idée de le transformer dans un js et de créer un objet pour que je puisse le parcourir. Ce projet a été un vrai défi mais aussi une très bonne occasion de mettre en pratique ce que j’ai appris jusqu’ici.





