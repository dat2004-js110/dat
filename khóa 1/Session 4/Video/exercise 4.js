// Ex 1:Declare a variable named movie with an object value, containing the following properties:
    // let movie = {
    //     title : "The Godfather",
    //     year  : 1972,
    //     rate  : 9.2,
    // };


// Ex 2.1 Log all of 3 the properties of the movie object to the console using 2 different ways
    // console.log(movie);
    // console.log("title:" + movie.title);
    // console.log("year:" + movie.year);
    // console.log("rate:" + movie.rate);

// Ex 2.2:  Log an non-existent property of the movie, director, what is the result?
    // console.log("diretor:" + movie.diretor);

// Ex 2.3: You can check whether a value is undefined (has no value) or not by using if - else pair for example: Now apply it to upgrade Read object, after users enter the property, check whether the property exists, if yes, show them the value, if no, tell them that
    // let ques = prompt('What you want to know?');
    // if ( movie[ques] == null){
    //     alert (`'${ques}' does nơ exists in your data`)
    // }
    // else{
    //     alert( movie[ques]);
    // };

// Ex 3.1: Change the rate of the movie to 8.7
//     movie.rate = 8.7;
//     console.log(movie);

//          Increase the rate of the movie by 0.5
//     movie.rate = movie.rate + 0.5;
//     console.log(movie);

// Ex 3.2: Write a script, asking users what they want to update and what is the update, perform the update and then log out the result
    // let ques = prompt("What you want to update?");
    // if ( movie[ques] == null){
    //         alert (`'${ques}' does nơ exists in your data`)
    //     }
    //     else{
    //         movie[ques]= prompt("What is the update?");
    //         console.log ('Done, new data:');
    //         console.log(movie);
    //     };

// Ex 4: Upgrade Update script to check whether the property entered by users exist, if yes, perform as usual, if no, tell them that we will add new and perform create
    // let ques = prompt("What you want to update?");
    // if ( movie[ques] == null){
    //     alert (`'${ques}' does now exists in your data, we will add new`)
    //     movie[ques] = prompt("Enter the new data");
    //     }
    //     else{
    //          movie[ques]= prompt("What is the update?");
    //         };
    // console.log ('Done, new data:');
    // console.log(movie);

// // Ex 5.1 :Create an array called movies, containing at least 3 movie data with the same structure all have title, year and rate (you can add more property if you like)
//       5.2 : Print or log out the first movie from movie list
//       5.3 :Print or log out the title of the last movie from movie list
//  let movie1 = 
//     {
//         title:'The Godfather',
//         year: 1972,
//         rate: 9.2,
//     }
//  let movie2 = 
//     {
//         title:'The Shawshank Redemption',
//         year: 1994,
//         rate: 9.3,
//     }
//  let movie3 = 
//     {
//         title:'The Green Miler',
//         year: 1999,
//         rate: 8.6,
//     }
//      let listMovie = [movie1,movie2,movie3];
//     // console.log(listMovie[0]);
//     // console.log(listMovie[listMovie.length-1].title);

// // Ex 5.4: Use a loop to print or log out all of the movie in the movie list
//     for (let x in listMovie) {
//         console.log(listMovie[x]);
//         }

// Ex 5.5: Use a loop to print or log out all of the movie in the movie list, the data is prettified as follow
    // for(let x of listMovie){
    //     console.log("------------------------------");
    //     console.log(x.title);
    //     console.log("Year: " + x.year);
    //     console.log("Rate: " + x.rate);
    // }

// Ex 5.6: Increase the rate of the last movie in the movies list by 0.7
    // console.log(listMovie[listMovie.length-1].rate +=0.7)

// Ex 6.1:Create an object named movie, with title, year and rate and characters. The characters contain at least 3 characters of the movie
    // let movie = {
    //     title: "The Green Mile",
    //     year: 1999,
    //     rate: 8.6,
    //     characters: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"]
    //  };

// Ex 6.2: Print or log out the movie data in the following format (Note, remember the spread operator … for fast logging an array 
     //console.log("Casts: " + movie.characters.toString().replace(/,/g, " "));

// Ex 6.3: Add new cast to the movie and then log it back
    // let newcast = prompt("Name of charaters you want to add?");
    // movie.characters.push(newcast);
// Ex 7: Create an array named movies, containing at least three movies, all have title, year, rate and characters properties Log or print all the movies in the movies array, for example
//     let movie1 = 
//     {
//         title:'The Godfather',
//         year: 1972,
//         rate: 9.2,
//         Cast: ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse',]
//     }
//  let movie2 = 
//     {
//         title:'The Shawshank Redemption',
//         year: 1994,
//         rate: 9.3,
//         Cast: ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse',]
//     }
//  let movie3 = 
//     {
//         title:'The Green Miler',
//         year: 1999,
//         rate: 8.6,
//         Cast: ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse',]
//     }
//     let listMovie = [movie1,movie2,movie3];
//     for(let x of listMovie){
//         console.log("------------------------------");
//         console.log(x.title);
//         console.log("Year: " + x.year);
//         console.log("Rate: " + x.rate);
//         console.log("Casts: " + x.Cast.toString().replace(/,/g, " "));}

    
