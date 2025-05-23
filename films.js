let films = `[
  {
    "id": 1,
    "title": "Film 1",
    "year": 2010,
    "genres": [
      "Thriller",
      "Animation"
    ],
    "rating": 9.2,
    "poster": "https://picsum.photos/id/1/200/300",
    "director": "Réalisateur 1",
    "cast": [
      "Acteur 1A",
      "Acteur 1B"
    ],
    "synopsis": "Synopsis du film 1..."
  },
  {
    "id": 2,
    "title": "Film 2",
    "year": 1998,
    "genres": [
      "Comédie"
    ],
    "rating": 9.5,
    "poster": "https://picsum.photos/id/2/200/300",
    "director": "Réalisateur 2",
    "cast": [
      "Acteur 2A",
      "Acteur 2B"
    ],
    "synopsis": "Synopsis du film 2..."
  },
  {
    "id": 3,
    "title": "Film 3",
    "year": 2024,
    "genres": [
      "Science-fiction",
      "Documentaire"
    ],
    "rating": 9.1,
    "poster": "https://picsum.photos/id/3/200/300",
    "director": "Réalisateur 3",
    "cast": [
      "Acteur 3A",
      "Acteur 3B"
    ],
    "synopsis": "Synopsis du film 3..."
  },
  {
    "id": 4,
    "title": "Film 4",
    "year": 2003,
    "genres": [
      "Science-fiction"
    ],
    "rating": 6.3,
    "poster": "https://picsum.photos/id/4/200/300",
    "director": "Réalisateur 4",
    "cast": [
      "Acteur 4A",
      "Acteur 4B"
    ],
    "synopsis": "Synopsis du film 4..."
  },
  {
    "id": 5,
    "title": "Film 5",
    "year": 2024,
    "genres": [
      "Action",
      "Documentaire"
    ],
    "rating": 8.0,
    "poster": "https://picsum.photos/id/5/200/300",
    "director": "Réalisateur 5",
    "cast": [
      "Acteur 5A",
      "Acteur 5B"
    ],
    "synopsis": "Synopsis du film 5..."
  },
  {
    "id": 6,
    "title": "Film 6",
    "year": 2010,
    "genres": [
      "Science-fiction"
    ],
    "rating": 5.9,
    "poster": "https://picsum.photos/id/6/200/300",
    "director": "Réalisateur 6",
    "cast": [
      "Acteur 6A",
      "Acteur 6B"
    ],
    "synopsis": "Synopsis du film 6..."
  },
  {
    "id": 7,
    "title": "Film 7",
    "year": 1983,
    "genres": [
      "Documentaire"
    ],
    "rating": 9.1,
    "poster": "https://picsum.photos/id/7/200/300",
    "director": "Réalisateur 7",
    "cast": [
      "Acteur 7A",
      "Acteur 7B"
    ],
    "synopsis": "Synopsis du film 7..."
  },
  {
    "id": 8,
    "title": "Film 8",
    "year": 2025,
    "genres": [
      "Romance",
      "Action"
    ],
    "rating": 6.2,
    "poster": "https://picsum.photos/id/8/200/300",
    "director": "Réalisateur 8",
    "cast": [
      "Acteur 8A",
      "Acteur 8B"
    ],
    "synopsis": "Synopsis du film 8..."
  },
  {
    "id": 9,
    "title": "Film 9",
    "year": 2002,
    "genres": [
      "Romance"
    ],
    "rating": 7.0,
    "poster": "https://picsum.photos/id/9/200/300",
    "director": "Réalisateur 9",
    "cast": [
      "Acteur 9A",
      "Acteur 9B"
    ],
    "synopsis": "Synopsis du film 9..."
  },
  {
    "id": 10,
    "title": "Film 10",
    "year": 2014,
    "genres": [
      "Drame",
      "Action"
    ],
    "rating": 8.6,
    "poster": "https://picsum.photos/id/10/200/300",
    "director": "Réalisateur 10",
    "cast": [
      "Acteur 10A",
      "Acteur 10B"
    ],
    "synopsis": "Synopsis du film 10..."
  },
  {
    "id": 11,
    "title": "Film 11",
    "year": 1996,
    "genres": [
      "Action",
      "Thriller"
    ],
    "rating": 6.7,
    "poster": "https://picsum.photos/id/11/200/300",
    "director": "Réalisateur 11",
    "cast": [
      "Acteur 11A",
      "Acteur 11B"
    ],
    "synopsis": "Synopsis du film 11..."
  },
  {
    "id": 12,
    "title": "Film 12",
    "year": 2018,
    "genres": [
      "Romance",
      "Drame"
    ],
    "rating": 6.7,
    "poster": "https://picsum.photos/id/12/200/300",
    "director": "Réalisateur 12",
    "cast": [
      "Acteur 12A",
      "Acteur 12B"
    ],
    "synopsis": "Synopsis du film 12..."
  },
  {
    "id": 13,
    "title": "Film 13",
    "year": 2006,
    "genres": [
      "Science-fiction",
      "Drame"
    ],
    "rating": 6.3,
    "poster": "https://picsum.photos/id/13/200/300",
    "director": "Réalisateur 13",
    "cast": [
      "Acteur 13A",
      "Acteur 13B"
    ],
    "synopsis": "Synopsis du film 13..."
  },
  {
    "id": 14,
    "title": "Film 14",
    "year": 2001,
    "genres": [
      "Comédie"
    ],
    "rating": 9.4,
    "poster": "https://picsum.photos/id/14/200/300",
    "director": "Réalisateur 14",
    "cast": [
      "Acteur 14A",
      "Acteur 14B"
    ],
    "synopsis": "Synopsis du film 14..."
  },
  {
    "id": 15,
    "title": "Film 15",
    "year": 1982,
    "genres": [
      "Comédie",
      "Animation"
    ],
    "rating": 6.9,
    "poster": "https://picsum.photos/id/15/200/300",
    "director": "Réalisateur 15",
    "cast": [
      "Acteur 15A",
      "Acteur 15B"
    ],
    "synopsis": "Synopsis du film 15..."
  },
  {
    "id": 16,
    "title": "Film 16",
    "year": 2011,
    "genres": [
      "Animation",
      "Romance"
    ],
    "rating": 7.3,
    "poster": "https://picsum.photos/id/16/200/300",
    "director": "Réalisateur 16",
    "cast": [
      "Acteur 16A",
      "Acteur 16B"
    ],
    "synopsis": "Synopsis du film 16..."
  },
  {
    "id": 17,
    "title": "Film 17",
    "year": 2018,
    "genres": [
      "Thriller",
      "Documentaire"
    ],
    "rating": 8.3,
    "poster": "https://picsum.photos/id/17/200/300",
    "director": "Réalisateur 17",
    "cast": [
      "Acteur 17A",
      "Acteur 17B"
    ],
    "synopsis": "Synopsis du film 17..."
  },
  {
    "id": 18,
    "title": "Film 18",
    "year": 1995,
    "genres": [
      "Action"
    ],
    "rating": 9.1,
    "poster": "https://picsum.photos/id/18/200/300",
    "director": "Réalisateur 18",
    "cast": [
      "Acteur 18A",
      "Acteur 18B"
    ],
    "synopsis": "Synopsis du film 18..."
  },
  {
    "id": 19,
    "title": "Film 19",
    "year": 1982,
    "genres": [
      "Action"
    ],
    "rating": 9.2,
    "poster": "https://picsum.photos/id/19/200/300",
    "director": "Réalisateur 19",
    "cast": [
      "Acteur 19A",
      "Acteur 19B"
    ],
    "synopsis": "Synopsis du film 19..."
  },
  {
    "id": 20,
    "title": "Film 20",
    "year": 1985,
    "genres": [
      "Action"
    ],
    "rating": 5.2,
    "poster": "https://picsum.photos/id/20/200/300",
    "director": "Réalisateur 20",
    "cast": [
      "Acteur 20A",
      "Acteur 20B"
    ],
    "synopsis": "Synopsis du film 20..."
  },
  {
    "id": 21,
    "title": "Film 21",
    "year": 2009,
    "genres": [
      "Action"
    ],
    "rating": 8.2,
    "poster": "https://picsum.photos/id/21/200/300",
    "director": "Réalisateur 21",
    "cast": [
      "Acteur 21A",
      "Acteur 21B"
    ],
    "synopsis": "Synopsis du film 21..."
  },
  {
    "id": 22,
    "title": "Film 22",
    "year": 1997,
    "genres": [
      "Animation"
    ],
    "rating": 8.9,
    "poster": "https://picsum.photos/id/22/200/300",
    "director": "Réalisateur 22",
    "cast": [
      "Acteur 22A",
      "Acteur 22B"
    ],
    "synopsis": "Synopsis du film 22..."
  },
  {
    "id": 23,
    "title": "Film 23",
    "year": 2000,
    "genres": [
      "Action",
      "Drame"
    ],
    "rating": 6.5,
    "poster": "https://picsum.photos/id/23/200/300",
    "director": "Réalisateur 23",
    "cast": [
      "Acteur 23A",
      "Acteur 23B"
    ],
    "synopsis": "Synopsis du film 23..."
  },
  {
    "id": 24,
    "title": "Film 24",
    "year": 1980,
    "genres": [
      "Comédie"
    ],
    "rating": 8.9,
    "poster": "https://picsum.photos/id/24/200/300",
    "director": "Réalisateur 24",
    "cast": [
      "Acteur 24A",
      "Acteur 24B"
    ],
    "synopsis": "Synopsis du film 24..."
  },
  {
    "id": 25,
    "title": "Film 25",
    "year": 1980,
    "genres": [
      "Science-fiction",
      "Thriller"
    ],
    "rating": 6.1,
    "poster": "https://picsum.photos/id/25/200/300",
    "director": "Réalisateur 25",
    "cast": [
      "Acteur 25A",
      "Acteur 25B"
    ],
    "synopsis": "Synopsis du film 25..."
  },
  {
    "id": 26,
    "title": "Film 26",
    "year": 2009,
    "genres": [
      "Science-fiction"
    ],
    "rating": 8.6,
    "poster": "https://picsum.photos/id/26/200/300",
    "director": "Réalisateur 26",
    "cast": [
      "Acteur 26A",
      "Acteur 26B"
    ],
    "synopsis": "Synopsis du film 26..."
  },
  {
    "id": 27,
    "title": "Film 27",
    "year": 2010,
    "genres": [
      "Documentaire",
      "Comédie"
    ],
    "rating": 9.4,
    "poster": "https://picsum.photos/id/27/200/300",
    "director": "Réalisateur 27",
    "cast": [
      "Acteur 27A",
      "Acteur 27B"
    ],
    "synopsis": "Synopsis du film 27..."
  },
  {
    "id": 28,
    "title": "Film 28",
    "year": 2002,
    "genres": [
      "Thriller"
    ],
    "rating": 9.1,
    "poster": "https://picsum.photos/id/28/200/300",
    "director": "Réalisateur 28",
    "cast": [
      "Acteur 28A",
      "Acteur 28B"
    ],
    "synopsis": "Synopsis du film 28..."
  },
  {
    "id": 29,
    "title": "Film 29",
    "year": 1993,
    "genres": [
      "Drame"
    ],
    "rating": 5.9,
    "poster": "https://picsum.photos/id/29/200/300",
    "director": "Réalisateur 29",
    "cast": [
      "Acteur 29A",
      "Acteur 29B"
    ],
    "synopsis": "Synopsis du film 29..."
  },
  {
    "id": 30,
    "title": "Film 30",
    "year": 2025,
    "genres": [
      "Romance",
      "Comédie"
    ],
    "rating": 6.1,
    "poster": "https://picsum.photos/id/30/200/300",
    "director": "Réalisateur 30",
    "cast": [
      "Acteur 30A",
      "Acteur 30B"
    ],
    "synopsis": "Synopsis du film 30..."
  },
  {
    "id": 31,
    "title": "Film 31",
    "year": 1994,
    "genres": [
      "Thriller",
      "Romance"
    ],
    "rating": 8.3,
    "poster": "https://picsum.photos/id/31/200/300",
    "director": "Réalisateur 31",
    "cast": [
      "Acteur 31A",
      "Acteur 31B"
    ],
    "synopsis": "Synopsis du film 31..."
  },
  {
    "id": 32,
    "title": "Film 32",
    "year": 2002,
    "genres": [
      "Drame"
    ],
    "rating": 6.7,
    "poster": "https://picsum.photos/id/32/200/300",
    "director": "Réalisateur 32",
    "cast": [
      "Acteur 32A",
      "Acteur 32B"
    ],
    "synopsis": "Synopsis du film 32..."
  },
  {
    "id": 33,
    "title": "Film 33",
    "year": 1986,
    "genres": [
      "Action",
      "Documentaire"
    ],
    "rating": 5.9,
    "poster": "https://picsum.photos/id/33/200/300",
    "director": "Réalisateur 33",
    "cast": [
      "Acteur 33A",
      "Acteur 33B"
    ],
    "synopsis": "Synopsis du film 33..."
  },
  {
    "id": 34,
    "title": "Film 34",
    "year": 2017,
    "genres": [
      "Romance"
    ],
    "rating": 6.3,
    "poster": "https://picsum.photos/id/34/200/300",
    "director": "Réalisateur 34",
    "cast": [
      "Acteur 34A",
      "Acteur 34B"
    ],
    "synopsis": "Synopsis du film 34..."
  },
  {
    "id": 35,
    "title": "Film 35",
    "year": 2025,
    "genres": [
      "Science-fiction"
    ],
    "rating": 7.1,
    "poster": "https://picsum.photos/id/35/200/300",
    "director": "Réalisateur 35",
    "cast": [
      "Acteur 35A",
      "Acteur 35B"
    ],
    "synopsis": "Synopsis du film 35..."
  },
  {
    "id": 36,
    "title": "Film 36",
    "year": 1998,
    "genres": [
      "Science-fiction"
    ],
    "rating": 8.5,
    "poster": "https://picsum.photos/id/36/200/300",
    "director": "Réalisateur 36",
    "cast": [
      "Acteur 36A",
      "Acteur 36B"
    ],
    "synopsis": "Synopsis du film 36..."
  },
  {
    "id": 37,
    "title": "Film 37",
    "year": 2005,
    "genres": [
      "Comédie"
    ],
    "rating": 9.3,
    "poster": "https://picsum.photos/id/37/200/300",
    "director": "Réalisateur 37",
    "cast": [
      "Acteur 37A",
      "Acteur 37B"
    ],
    "synopsis": "Synopsis du film 37..."
  },
  {
    "id": 38,
    "title": "Film 38",
    "year": 2003,
    "genres": [
      "Thriller",
      "Science-fiction"
    ],
    "rating": 6.0,
    "poster": "https://picsum.photos/id/38/200/300",
    "director": "Réalisateur 38",
    "cast": [
      "Acteur 38A",
      "Acteur 38B"
    ],
    "synopsis": "Synopsis du film 38..."
  },
  {
    "id": 39,
    "title": "Film 39",
    "year": 2015,
    "genres": [
      "Science-fiction"
    ],
    "rating": 7.3,
    "poster": "https://picsum.photos/id/39/200/300",
    "director": "Réalisateur 39",
    "cast": [
      "Acteur 39A",
      "Acteur 39B"
    ],
    "synopsis": "Synopsis du film 39..."
  },
  {
    "id": 40,
    "title": "Film 40",
    "year": 1994,
    "genres": [
      "Romance",
      "Animation"
    ],
    "rating": 6.1,
    "poster": "https://picsum.photos/id/40/200/300",
    "director": "Réalisateur 40",
    "cast": [
      "Acteur 40A",
      "Acteur 40B"
    ],
    "synopsis": "Synopsis du film 40..."
  },
  {
    "id": 41,
    "title": "Film 41",
    "year": 1984,
    "genres": [
      "Romance"
    ],
    "rating": 8.0,
    "poster": "https://picsum.photos/id/41/200/300",
    "director": "Réalisateur 41",
    "cast": [
      "Acteur 41A",
      "Acteur 41B"
    ],
    "synopsis": "Synopsis du film 41..."
  },
  {
    "id": 42,
    "title": "Film 42",
    "year": 2017,
    "genres": [
      "Animation",
      "Romance"
    ],
    "rating": 7.2,
    "poster": "https://picsum.photos/id/42/200/300",
    "director": "Réalisateur 42",
    "cast": [
      "Acteur 42A",
      "Acteur 42B"
    ],
    "synopsis": "Synopsis du film 42..."
  },
  {
    "id": 43,
    "title": "Film 43",
    "year": 2012,
    "genres": [
      "Animation"
    ],
    "rating": 5.7,
    "poster": "https://picsum.photos/id/43/200/300",
    "director": "Réalisateur 43",
    "cast": [
      "Acteur 43A",
      "Acteur 43B"
    ],
    "synopsis": "Synopsis du film 43..."
  },
  {
    "id": 44,
    "title": "Film 44",
    "year": 1990,
    "genres": [
      "Comédie",
      "Action"
    ],
    "rating": 6.1,
    "poster": "https://picsum.photos/id/44/200/300",
    "director": "Réalisateur 44",
    "cast": [
      "Acteur 44A",
      "Acteur 44B"
    ],
    "synopsis": "Synopsis du film 44..."
  },
  {
    "id": 45,
    "title": "Film 45",
    "year": 1985,
    "genres": [
      "Comédie",
      "Action"
    ],
    "rating": 5.7,
    "poster": "https://picsum.photos/id/45/200/300",
    "director": "Réalisateur 45",
    "cast": [
      "Acteur 45A",
      "Acteur 45B"
    ],
    "synopsis": "Synopsis du film 45..."
  },
  {
    "id": 46,
    "title": "Film 46",
    "year": 1991,
    "genres": [
      "Action"
    ],
    "rating": 8.0,
    "poster": "https://picsum.photos/id/46/200/300",
    "director": "Réalisateur 46",
    "cast": [
      "Acteur 46A",
      "Acteur 46B"
    ],
    "synopsis": "Synopsis du film 46..."
  },
  {
    "id": 47,
    "title": "Film 47",
    "year": 1993,
    "genres": [
      "Thriller"
    ],
    "rating": 5.0,
    "poster": "https://picsum.photos/id/47/200/300",
    "director": "Réalisateur 47",
    "cast": [
      "Acteur 47A",
      "Acteur 47B"
    ],
    "synopsis": "Synopsis du film 47..."
  },
  {
    "id": 48,
    "title": "Film 48",
    "year": 1985,
    "genres": [
      "Action"
    ],
    "rating": 6.7,
    "poster": "https://picsum.photos/id/48/200/300",
    "director": "Réalisateur 48",
    "cast": [
      "Acteur 48A",
      "Acteur 48B"
    ],
    "synopsis": "Synopsis du film 48..."
  },
  {
    "id": 49,
    "title": "Film 49",
    "year": 2013,
    "genres": [
      "Documentaire",
      "Drame"
    ],
    "rating": 8.3,
    "poster": "https://picsum.photos/id/49/200/300",
    "director": "Réalisateur 49",
    "cast": [
      "Acteur 49A",
      "Acteur 49B"
    ],
    "synopsis": "Synopsis du film 49..."
  },
  {
    "id": 50,
    "title": "Film 50",
    "year": 1985,
    "genres": [
      "Romance",
      "Science-fiction"
    ],
    "rating": 9.0,
    "poster": "https://picsum.photos/id/50/200/300",
    "director": "Réalisateur 50",
    "cast": [
      "Acteur 50A",
      "Acteur 50B"
    ],
    "synopsis": "Synopsis du film 50..."
  }
]`;