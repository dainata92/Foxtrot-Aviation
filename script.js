//j'avais du mal a recuperer les données du json en local, c'est ma prof qui a transformé en objet le fichier json que vous m'avez envoyé

let toutesFilms = JSON.parse(films); 
let currIndex = 0;    //je declare et initialise l'index

let filmsAleatoires = [];   //je crée un tableau de films aleatoires
for (let i = 0; i < 10; i++) {      //je vais avoir 10 films aleatoires à afficher
  let index = Math.floor(Math.random() * toutesFilms.length);     //la formule pour avoir les films aleatoires
  filmsAleatoires.push(toutesFilms[index]);     //j'ajoute chaque film tiré par Math.random();
}

function afficherImages() {     //ma fonction qui va afficher les films dans mon petit carrousel
  const imagesCar = document.getElementById("carouselImages");
  imagesCar.innerHTML = "";       //je vide le contenu

  for (let i = 0; i < 3; i++) {       //je veux afficher 3 filmes à la fois
    let index = (currIndex + i) % filmsAleatoires.length;     //je veux que mon carrousel tourne toujours avec les meme 10 films, pour rendre un peu joli
    let film = filmsAleatoires[index];

    let filmDiv = document.createElement("div");      //je crée un bloc div pour mettre les films dedans
    filmDiv.classList.add("film");      //je lui donne la class "film"

    // je crée un lien a avec target="_blank" pour que la page puisse s'ouvrir dans un nouveu onglet
    let lien = document.createElement("a");
    lien.href = `detailFilm.html?id=${film.id}`;    //ça s ouvre dans ma page detailFilm.html
    lien.target = "_blank";

    let img = document.createElement("img");      //je crée la balise img
    img.src = film.poster;                        //je lui donne le lien
    img.alt = film.title;                         //je lui donne le titre
    img.loading = "lazy";                         //le chargement d'images était un peu lent, j'ai trouvé cet astuce sur internet (je connaisais pas avant)

    let titre = document.createElement("p");       //paragraphe pour titre
    titre.textContent = film.title;                //je recupere le titre et je le mets en p

    let note = document.createElement("p");         //paragraphe pour rating
    note.textContent = `Note : ${film.rating}`;     //je recupere le rating et je le mets en p

    
    lien.appendChild(img);                          // j'ajoute l'image dans le lien <a>
    filmDiv.appendChild(lien);                // j'ajoute le lien dans le conteneur du film
    filmDiv.appendChild(titre);               // j'ajoute titre et note sous l'image
    filmDiv.appendChild(note);

    imagesCar.appendChild(filmDiv);      //j'ajoute tout dans la div
  }
}


document.getElementById("previous").addEventListener("click", () => {     //je recupere le bouton previous, j'ajoute un écouteur d’événement qui se déclenche quand on clique sur ce bouton.
  currIndex = (currIndex - 1 + filmsAleatoires.length) % filmsAleatoires.length;        //j'utilise -1 pour réculer
  afficherImages();
});

document.getElementById("next").addEventListener("click", () => {
  currIndex = (currIndex + 1) % filmsAleatoires.length;                                 //j'utilise + 1 pour avancer au prochain film 
  afficherImages();
});

afficherImages();     //je fais executer la fonction


