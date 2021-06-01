// Ex 1: Init (after 2):Initialize an array named movies containing the titles of some of your favorite movies
// {
//     let movie = ["game of thrones, the walking dead, godfarther"];
// }

// Ex 2:Create (after 4) Add new item named newMovie into the end of the movies array you initialized, newMovie entered by users
/*{
        let newMovie = prompt("Nhập tên phim bạn muốn add vào list film?");
        let movie = ["game of thrones, the walking dead, godfarther"];
            movie.push(newMovie);
        alert(movie);
}*/

// Ex 3:Read (after 5) Read the item at position i in the movies array, i entered by users
/*{
    let i = prompt(" nhập số tên film bạn muốn xem (1-6)?");
    if(i<=6){
    let movie = ["game of thrones", "the walking dead", "godfarther", "bố già", "gái già lắm chiêu","naruto"];
    alert(movie[i-1]);
    }
    else{
        alert("tên cảu film bạn nhập sai haỹ nhập từ 1-6");
    }
}*/

// Ex 4.1:Update the first item of the movies array into movieTitle, movieTitle entered by users
/*{
    let movie = ["game of thrones", "the walking dead", "godfarther", "bố già", "gái già lắm chiêu","naruto"];
    let movieTitle = prompt("Enter name of movie you want to update");
    movie[0] = movieTitle;
    alert (movie);
}*/

//Ex 4.2: Update a item at position i of the movies into movieTitle, i and movieTitle entered by users
/*{
    let movie = ["game of thrones", "the walking dead", "godfarther", "bố già", "gái già lắm chiêu","naruto"];
    let movieTitle = prompt("Nhập tên phim bạn muốn thay đổi?");
    let i = Number(prompt("Nhập vị trí phim bạn muốn thay đổi( từ 1-6)"));
    if(i<=6){
        movie[i-1] = movieTitle;
        alert(movie);
    }
    else {
        alert("vị trí bạn muốn thay đổi sai( nhập từ 1-6)") ;
    }
}*/

//Ex 5.1: Delete 1 item at position i from movies array movies, i entered by users
/*{
    alert(('tên film: \n\
        1. game of thrones \n\
        2. the walking dead \n\
        3. godfarther \n\
        4. bố già \n\
        5. gái già lắm chiêu\n\
        6. "naruto\n\
        '));
    let movie = ["game of thrones", "the walking dead", "godfarther", "bố già", "gái già lắm chiêu","naruto"];
    let i = Number(prompt("Nhập vị trí phim bạn muốn xóa ( từ 1-6)"));
    if(i<=6)    
    {
        movie.splice(i-1,1);
        alert(movie);
    }
    else
    {
            alert=("bạn nhập sai số tên phim muốn xóa, nhập từ 1-6");
    }
}*/

//Ex 6 .1:Read or log all of items in movies array into console
/*{
    let movie = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];
    for (let i = 0; i < movie.length; i++) {
        console.log(movie[i]);
        }
}*/

//Ex 6.2 :Read or log only first half items in movies array into console
/*{
    let movie = ['Batman', 'Up', 'Attack on titans', 'My boss my hero',];
    let halfList = movie.length/2;
    for (let i = 0; i < movie.length; ++i) {
        console.log(movie[i]);
    }
}*/

//Ex 6.3: Read or log all of items in movies array into console with the item position, for example
/*{
    let movie = ["game of thrones", "the walking dead", "godfarther", "bố già", "gái già lắm chiêu","naruto"];
    let = `List movies have ${movie.length}`
        for(let x in movie)
    {
        x = Number(x);
        console.log(`${x+1}. ${movie[x]}`)
    }
}*/

//Ex 7:Change all items of movies array into lowercase
/*{
    let movie = ["game of thrones", "the walking dead", "godfarther", "bố già", "gái già lắm chiêu","naruto"];
    for(let x in movie)
    {
        movie[x] = movie[x].toLowerCase();
    }
}*/

// Ex 8: Write a script asking users their username, if the entered username is too long (>15 characters), tell them that and ask them to re-enter a new username, if the username is short enough (<=15 characters), tell them it is good.
/*{
    let userName = prompt("Register an username");
        if(userName.length>15)
     {
        alert("Your user name is too long");
     }
        else
        {
        alert("Good username");
    
        }
}*/

// Ex 9:Write a script to show user a quiz with 4 choices, for example:
/*{How many legs does a spider have?
1. None
2. 4 legs
3. 8 legs
4. 12 legs
 
Then ask them to answer this quiz, if they enter an invalid choice, 'hahaha' for example, tell them it is invalid and ask them to enter their choice again:
Invalide choice, the answer must be 1, 2, 3 or 4
If the choice is valid, check the result, if the answer is not correct:
Good luck next time
If it is:
Bravo, you are correct}*/
/*{ 
        let choice = Number(prompt(`How many legs does a spider have?\n1. None\n2. 4 legs\n3. 8 legs\n4. 12 legs`));
        switch(choice){
            case 1:
            case 2:
            case 4:
                {
                    alert("Good luck next time");
                    check = true;
                    break;
                }
            case 3:
                {
                    alert("Bravo, you are correct");
                    check = true;
                    break;
                }  
            default:
                {
                    alert("Enter their choice again");
                }
        }
    }*/

