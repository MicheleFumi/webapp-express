

- table Movies:

    id: PRIMARY KEY NOT NULL AUTO INCR
    title: VARCH(255) NOT NULL
    director: VARCH(255) NOT NULL
    genre: VARCH(255) NOT NULL
    release_year: YEAR NULL
    abstract: TEXT NULL
    image:  VARCH(255) NULL

- table Reviews:
    id: PRIMARY KEY NOT NULL AUTO INCR
    movie_id: FOREIGN KEY NOT NULL
    name: VARCH(255) NOT NULL
    vote: TINYINT NOT NULL
    text: TEXT NULL
    