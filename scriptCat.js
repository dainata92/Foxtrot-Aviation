//j'avais du mal a recuperer les données du json en local, c'est ma prof de la formation qui a transformé en objet le fichier json que vous m'avez envoyé

let toutesFilms = JSON.parse(films);
const sectionTous = document.getElementById("tous");    //j'accède a la section
function afficherFilms(liste) {
    sectionTous.innerHTML = "";       //je vide le contenu

    liste.forEach(film => {                               //je parcours tout le tableau de films
        let filmDiv = document.createElement("div");            
        filmDiv.classList.add("filmCat");

        let lienFilm = document.createElement("a");
        lienFilm.href = `detailFilm.html?id=${film.id}`;        //une bonne partie de code c'est pareil comme pour la page d'accueil
        lienFilm.target = "_blank";                             //je recupere et affiche en revanche toutes les informations de chaque film

        let img = document.createElement("img");
        img.src = film.poster;
        img.alt = film.title;

        let titre = document.createElement("h3");
        titre.textContent = film.title;

        lienFilm.appendChild(img);
        lienFilm.appendChild(titre);

        filmDiv.appendChild(lienFilm);

        let annee = document.createElement("p");
        annee.textContent = film.year;

        let genres = document.createElement("p");
        genres.textContent = film.genres;     

        let note = document.createElement("p");
        note.textContent =film.rating;

        let realisateur = document.createElement("p");
        realisateur.textContent =film.director;

        let synopsis = document.createElement("p");
        synopsis.textContent = film.synopsis;

        filmDiv.appendChild(annee);
        filmDiv.appendChild(genres);
        filmDiv.appendChild(note);
        filmDiv.appendChild(realisateur);
        filmDiv.appendChild(synopsis);

        sectionTous.appendChild(filmDiv);
    });
}

afficherFilms(toutesFilms);

//je trie la liste des films affichés sur la page en fonction d’un critère choisi par l’utilisateur dans un menu déroulant select.
document.getElementById("tri").addEventListener("change", function () {
    const critere = this.value;
    trierFilms(critere);
});
function trierFilms(critere) {
    let filmsTries = [...toutesFilms]; // je fais une copie du tableau

    if (critere === "titre") {
        filmsTries.sort((a, b) => a.title.localeCompare(b.title));
    } else if (critere === "année") {
        filmsTries.sort((a, b) => a.year - b.year);     //// je trie par année, du plus ancien au plus récent
    } else if (critere === "note") {
        filmsTries.sort((a, b) => b.rating - a.rating); // je trie décroissant pour les notes
    }

    afficherFilms(filmsTries);
}

//bcp de recherche pour ça, au début ça affichait à part l'affichage de tous les films
document.getElementById("triGenre").addEventListener("change", function () {
    const genreChoisi = this.value.toLowerCase();           // je mets tout en minuscule
    if (genreChoisi === "") {
        afficherFilms(toutesFilms);                         // j'affiche tous les films si rien sélectionné
    } else {
        const filmsFiltres = toutesFilms.filter(film => {                                                                
            return film.genres.some(g => g.toLowerCase() === genreChoisi);        // je mets chaque genre du film en minuscule aussi     
        });
        afficherFilms(filmsFiltres);
    }
});

//le code pour la barre de recherche
const chercheInput = document.getElementById("searchInput");       

chercheInput.addEventListener("input", () => {
    const recherche = chercheInput.value.toLowerCase();

    if (recherche === "") {                     //si rien tappez, il va afficher tous les films
        afficherFilms(toutesFilms);
    } else {
        const filmsFiltres = toutesFilms.filter(film =>
            film.title.toLowerCase().includes(recherche)        //sinon il va afficher ce qu'on tape
        );
        afficherFilms(filmsFiltres);
    }
});
