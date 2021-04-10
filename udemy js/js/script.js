"use strict"

let NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


let personakMovieDB={
    count:NumberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

let lastOfFilms=prompt('Один из последних просмотренных фильмов?', '');
let rateOfTHeFilm=prompt('На сколько оцените его?', '');

personakMovieDB.movies[lastOfFilms] = rateOfTHeFilm;