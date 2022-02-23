'use strict';

 let numberOfFilms; 

 function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?:', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
       numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?:', '');
    }
 }

 //start();
 let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов:', ''),
            b = prompt('на сколько оцените его?:', '');
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
};

//rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("вы классический зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("вы киноман");
    } else {
        console.log("произошла ошибка");
    }
}

//detectPersonalLevel();

function writeYourGenres(){
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр по номером ${(i+1)}:`, '');
    }
}
writeYourGenres();
console.log(personalMovieDB);


