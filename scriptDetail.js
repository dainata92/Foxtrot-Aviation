    const toutesFilms = JSON.parse(films);
    document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);         //je connaissait pas ça avant, j'ai du faire des recherches pour reussir
    const filmId = params.get("id");
    console.log("filmId :", filmId);

    let film = toutesFilms.find(f => f.id == filmId);           //je cherche le film avec find

    if (film) {                                                 
        document.getElementById('titre-film').textContent = film.title;
        document.getElementById('image').src = film.poster;
        document.getElementById('image').alt = film.title;
        document.getElementById('synopsis').textContent = film.synopsis;
        document.getElementById('realisateur').textContent = film.director;
        document.getElementById('casting').textContent = film.cast;
        document.getElementById('annee').textContent = film.year;
        document.getElementById('genres').textContent = film.genres;
        document.getElementById('note').textContent = film.rating;
    } else {
        document.querySelector('main').innerHTML = "<p>Film non trouvé.</p>";
    }
});
