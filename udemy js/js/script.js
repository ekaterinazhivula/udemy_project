"use strict"

let NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


let personakMovieDB={
    count:NumberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

let a=prompt('Один из последних просмотренных фильмов?', '');
let b=prompt('На сколько оцените его?', '');
let c=prompt('Один из последних просмотренных фильмов?', '');
let d=prompt('На сколько оцените его?', ''); 

personakMovieDB.movies[a] = b;
personakMovieDB.movies[c] = d;