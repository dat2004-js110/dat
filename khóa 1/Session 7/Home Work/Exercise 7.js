// Ex 1: InsertAdjacentHTML first parameter is the position where you put the new HTML into the container

// const container = document.getElementById('list');
// for(let i=0; i<3; ++i){
//     container.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
// }
// console.log(container);

// function bai1() {
//     console.log ('1-d, 2-a, 3-c, 4-b');
// };
// bai1();

// Ex 2: Instead of using setTimeOut to create a timer, we can use setInterval for shorter code
// function bai2() {
//     let timer = setInterval(() => {console.log('Heehaw');}, 1000);
//     setTimeout(() => {clearInterval(timer)}, 6000);
// }
// bai2();

/*Ex 3:Read about function scope in this link then answer the following question
Can a variable declared by let, in a function still exists after the function finishes running?
Can var variable declared by var, in a function still exists after the function finishes running?*/
 
// function bai3() {
//     console.log ('3.1: no; 3.2: no')
// }
// bai3();

/* Ex 4: You can get DOM (Read) by tag name using getElementsByTagName function, the result you get is NOT a single HTMLElement but a HTMLCollection, which can be treated as Array (you can use indexing [], for statement and length with it). Refer to this link.
<ul>
  <li>News</li>
  <li>Articles</li>
  <li>Blog</li>
<ul>
Use getElementsByTagName function to get ALL of the <li> tag. Print/log out the first element (which is <li>Articles</li>) and then use for loop to print ALL of the DOM you get from the function</li></ul>*/
// function bai4() {
//     let x = document.getElementsByTagName("li");
//     console.log(x[1]);
//     for (let i=0; i<x.length; i++) {
//         console.log(x[i]);
//     }
// }
// bai4();


/* Ex 5: You can get DOM (Read) by class name using getElementsByClassName function. The result you get, again, is NOT a single HTMLElement by a HTMLCollection. Refer to this link.
Given the following HTML
<div>
  <div class=”singer”>James Bay</div>
  <div class=”singer”>Nate Ruess</div>
  <div class=”singer”>Ed Sheeran</div>
  <div class=”singer”>Steve Garrigan</div>
<div>
Use getElementsByTagName function to get ALL of the <div> tag. Print/log out the second element (which is <div class=”singer”>Nate Ruess</div>) and then use for loop to print ALL of the DOM you get from the function*/
//  function bai5() {
//     const listClass = document.getElementsByClassName("singer");
//     console.log(listClass[1]);
//     for(let x of listClass){
//         console.log(x);
//     }
// }

// Ex 6:Learn how to remove (Delete) an HTMLElement using HTMLElement.remove() function, refer to this
// function bai6() {
//     let x = document.getElementById("remove");
//     x.remove();
// }
// bai6();

// Ex 7.1:Catch ‘click’ event from 2 different buttons, id=”button1” and id=”button2”, in the callback body of the 2 events, print, or log out e.target. What is it?
// function bai71(){
//     let x = document.getElementById("button1");
//         x.addEventListener('click', (e) => {
//         console.log(e.target);
//     });
//     let y = document.getElementById("button2");
//         y  .addEventListener('click', (e) => {
//         console.log(e.target);
//     });
// }


// Ex 7.2: Catch a ‘keydown’ event from an input, in the callback body of the event, print / log out the e.key. What is it?
// function ex72(){
//     document.getElementById("input").addEventListener('keydown', (e) =>{
//         console.log(e.key);
//     })
// }

// Ex 8: Write a function, using alert to show your name and one thing you wish to do this year
// function ex8(){
//     alert("Tôi là Dat \nTôi có ước mơ là một kiến trúc sư.");
// }
// ex8();

// Ex 9:Write a function, using alert to show user’s name and one wish of the user this year, name and wish are function parameters
// function Ex9() {
//     function list(n, w) {
//     alert (`You are ${n} and one thing you wish to do this year is ${w}`);
//     }
//     let name = prompt ('What is your name?');
//     let wish = prompt ('What is your wish?');
//     list(name, wish);
// }   
// Ex9()

// Ex 10: Write a function, using alert to show user’s name and one wish of the user in this year, name and wish are function parameters. Handle the case of missing wish in function parameters
// 

// Ex 11:
// function bai11() {
//     let button11 = document.getElementById("button11");
//     console.log(button11);
//     button11.addEventListener ('click', (e) => {
//         console.log ('Upper it, just clicked');
//         let name = input11.value;
//         console.log ('Name of user: ' + name);
//         let upperName = name.toUpperCase();
//         console.log ('Name of user in uppercase: ' + upperName);
//         result.innerText = upperName;
//         }
//     )
//     let input11 = document.getElementById("input11");
//     console.log(input11);
//     let result = document.getElementById("result");
// }
// bai11();


// Ex 12:
// let items = ['Backpack', 'Miband watch', 'Ring'];
//     console.log(items);
//     let items1 = document.getElementById("items1");
//     console.log(items1);
//     for (let i=0; i<items.length; i++) {
//         items1.insertAdjacentHTML ('beforeend', 
//         `<li>${items[i]}</li>`
//         )
//     }
//     let test = document.getElementsByClassName("test");
//     while(test.length > 0) {
//         test[0].remove();
//     }


